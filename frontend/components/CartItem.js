import { Card, Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { React } from 'react';
import { useDispatch } from 'react-redux';
import {removeFromCart, increaseQuantity, decreaseQuantity} from '../features/cart/cartSlice'
import { calculatePrice } from '../utils/util';

const css = {
    board: {
        minWidth: `300px`,
        backgroundColor: `#EEFFF4`,
        height: `auto`,
        width: `100%`,
        padding: `20px`
    },
    text: {
        fontWeight: `300`,
        color: `black`,
        whiteSpace: 'nowrap',
    },
    textName: {
        fontWeight: `600`,
        fontSize: `32px`,
    },
    textRemove: {
        cursor: `pointer`,
        color: `gray`,
        textAlign: `right`,
    },
    textPrice: {
        fontWeight: `400`,
        fontSize: `32px`,
        textAlign: `right`,
    },
}

function CartItem({ data }) {

    const cartData = data[0]
    const quantity = data[1];
    const dispatch = useDispatch();
    

    return (
        <Grid.Container css={css.board} wrap="nowrap">
            <Grid>
                <div style={{display:"flex", alignItems: 'center', height: `100%`}}>
                    <Card bordered cover float="left">
                      <Card.Image 
                          src={cartData.img}
                          alt="cat"
                          width="auto"
                          height="auto"
                          css={{
                              maxHeight:"180px",
                              maxWidth:"180px"
                          }}
                      />
                  </Card>
                </div>
            </Grid>
             
            <Grid xs direction="column" justify='center' alignItems='center'>
                    <Grid.Container justify="space-between" alignItems='center' wrap="nowrap">
                        <Grid>
                            <Text css={{...css.text, ...css.textName, marginLeft:"40px", marginRight:"40px"}}>{cartData.title}</Text>
                        </Grid>
                        <Grid>
                            <Text css={{...css.text, ...css.textPrice}}>{calculatePrice(quantity, cartData.price)}</Text>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container justify="space-between" alignItems='center' wrap="nowrap">
                        <Grid>
                            <Button.Group css={{marginLeft:"40px"}} size="xs">
                                <Button shadow auto color="gradient" onClick={() => dispatch(decreaseQuantity(cartData))}>-</Button>
                                <Button shadow auto ghost clickable="false" color="gradient">{quantity}</Button>
                                <Button shadow auto color="gradient" onClick={() => dispatch(increaseQuantity(cartData))}>+</Button>
                            </Button.Group>
                        </Grid>
                        <Grid>
                            <Button size="xs" auto ghost color="error" onClick={() => dispatch(removeFromCart(cartData))}>Remove</Button>
                        </Grid>
                    </Grid.Container>

            </Grid> 
        </Grid.Container>
    );
}


export default CartItem;