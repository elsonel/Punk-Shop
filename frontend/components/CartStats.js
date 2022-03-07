import { Grid, Tooltip } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Button, Card, Divider} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {MoreCircle} from 'react-iconly';
import Link from 'next/link';
import { calculateCheckoutPrice, calculateDiscount, calculateTax, calculateTotal } from '../utils/util';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { clearCart } from '../features/cart/cartSlice'

const css = {
    wrapper: {
        minWidth: "300px",
        width: `100%`,
        padding: `20px`,
        backgroundColor: `white`,
        borderRadius: `10px`,
        boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
    },
    seperator: {
        marginTop: `20px`,
        marginBottom: `20px`,
        height: `1px`,
        backgroundColor: `lightgrey`,
    },
    input: {
        cursor: "pointer",
    },
    textTotal: {

    },
}

function CartStats() {
    const cartItems = useSelector((state) => state.cart.value)
    const checkoutPrice = calculateCheckoutPrice(cartItems);
    const [discount, setDiscount] = useState(0);
    const [userInputDiscountCode, setUserInputDiscountCode] = useState("");

    const dispatch = useDispatch();
    function applyDiscount () {
        switch (userInputDiscountCode) {
            case "0xv439c3d":
                setDiscount(0.2)
                break;
            case "0xl23k4jf34":
                setDiscount(0.3)
                break;
            default:
                setDiscount(0)
                break;
        }
    }

    function getInputValue (event) {
        setUserInputDiscountCode(event.target.value)
    }

    const discountAmount = calculateDiscount(checkoutPrice, discount);
    const taxAmount = calculateTax(discountAmount, checkoutPrice, 0.01);
    const totalPrice = calculateTotal(taxAmount, discountAmount, checkoutPrice);
    
    return (
        <div style={css.wrapper}>

            <Grid.Container justify="space-between">
                <Grid>
                    <Text>
                        Subtotal
                    </Text>
                </Grid>
                <Grid>
                    <Text>
                        {checkoutPrice}  
                    </Text>
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    <Grid.Container align="center">
                        <Grid>
                            <Text>
                                Discount 
                            </Text>
                        </Grid>
                        <Grid>
                            <div style={{marginLeft: '6px', display:"flex"}}>
                                <Tooltip placement="bottom" content={
                                    <Card css={{ w: "200px" }}>
                                            <Card.Header>
                                                <Text b h5>Available Discounts</Text>
                                            </Card.Header>
                                            <Divider/>
                                            <Card.Body css={{ py: '$10' }}>
                                                <Grid.Container justify="space-between">
                                                    <Grid>
                                                        <Text>
                                                        0xv439c3d:
                                                        </Text>
                                                    </Grid>
                                                    <Grid>
                                                        <Text>
                                                        - 20%  
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                <Grid.Container justify="space-between">
                                                    <Grid>
                                                        <Text>
                                                        0xl23k4jf34:
                                                        </Text>
                                                    </Grid>
                                                    <Grid>
                                                        <Text>
                                                        - 30%  
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                            </Card.Body>
                                    </Card>
                                }>
                                    <MoreCircle display="block" fill="currentColor" filled/>
                                </Tooltip>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid>
                    <Text>
                        {discountAmount}                      
                    </Text> 
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    <Text>
                        Tax
                    </Text>
                </Grid>
                <Grid>
                    <Text>
                        {taxAmount}                       
                    </Text> 
                </Grid>
            </Grid.Container>
            <div style={css.seperator}></div>
            <Grid.Container justify="space-between">
                <Grid>
                    <Text size={20}>
                        Total
                    </Text>
                </Grid>
                <Grid>
                    <Text size={20}>
                        {totalPrice}            
                    </Text>
                </Grid>
            </Grid.Container>

            <div style={css.seperator}></div>

            <Grid.Container wrap="nowrap">
                <Grid xs={12}>
                    <Input bordered fullWidth="true" placeholder="Promo" onChange={getInputValue}/>
                </Grid>
                <Grid xs>
                    <Button auto color="gradient" onClick={applyDiscount}>Apply</Button>
                </Grid>
            </Grid.Container>
            <Link href="/ordercomplete">
                <a>
                    <Button auto color="gradient" style={{width: '100%'}} onClick={() => dispatch(clearCart())}>Submit Order</Button>
                </a> 
            </Link>
        </div>
    );
}

export default CartStats;