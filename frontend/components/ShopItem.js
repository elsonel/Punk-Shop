import { Card, Row, Text, Modal, Button, Grid} from '@nextui-org/react';
import React from 'react';
import {useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const css = {
    divider : {
        borderTop: "3px",
    },
    textTitle: {
        height: `100%`,
    },
}

function ShopItem ({ data }) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    const dispatch = useDispatch();
    function compAddToCart (itemData){
        dispatch(addToCart(itemData));
        closeHandler();
    }

    return (
        <div style={{width: "100%"}}>
        <Card hoverable clickable cover onClick={handler}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={data.img}
                width="100%"
                height="auto"
                alt={data.title}
            />
            </Card.Body>
            <Card.Footer justify="flex-start">
            <Row justify="space-between" align="center">
                <Text b>
                    {data.title}
                </Text>
                <Text css={{ color: "$accents4", fontWeight: "$bold" }}>
                    {data.price}
                </Text>
            </Row>        
            </Card.Footer>
        </Card>
        <Modal
            closeButton
            blur
            open={visible}
            onClose={closeHandler}
            width="max(40%, 300px)"
        >  
        <Grid.Container> 
            <Grid css={{paddingTop:"20px", margin:"auto"}}>
                <Card cover>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        objectFit="scale-down"
                        src={data.img}
                        width="auto"
                        height="auto"
                        alt={data.title}
                    />
                    </Card.Body>
                    <Card.Footer justify="flex-start">
                    <Row justify="space-between" align="center">
                        <Text b>
                            {data.title}
                        </Text>
                        <Text css={{ color: "$accents4", fontWeight: "$bold" }}>
                            {data.price}
                        </Text>
                    </Row>        
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid css={{width:"100%"}}>
                <Card color="#CBECFE" bordered shadow={false}>
                    <Text size={20}>
                        {data.title}
                    </Text>
                    <ul>
                        <li style={{listStyle: "disc"}}>ID: {data.metadata.id}</li>
                        <li style={{listStyle: "disc"}}>Type: {data.metadata.type}</li>
                        <li style={{listStyle: "disc"}}>Count: {data.metadata.count}</li>
                        <li style={{listStyle: "disc"}}>Accessories: {data.metadata.accessories}</li>
                    </ul>  
                </Card>
            </Grid>
        </Grid.Container>
            <Modal.Footer>
                <Button shadow auto color="gradient" onClick={() => compAddToCart(data)}>
                    Add to Cart
                </Button>   
            </Modal.Footer>
        </Modal>
        </div>
    )
}




export default ShopItem;