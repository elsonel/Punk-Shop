import HeaderBar from "../components/HeaderBar";
import CartItem from "../components/CartItem";
import CartStats from "../components/CartStats";
import HeaderBarSpace from "../components/HeaderBarSpace";
import useMediaQuery from "../hooks/useMediaQuery";
import { Text } from "@nextui-org/react";
import { useSelector } from 'react-redux';

const css = {
    wrapperLeft: {
        width: `70%`,
        float: `left`,
        padding: `20px`,
    },
    wrapperRight: {
        position: `fixed`,
        right: `0px`,
        width: `30%`,
        float: `left`,
        padding: `20px`,
    },
    textHeading: {
        paddingTop: `20px`,
        paddingBottom: `20px`,
    },
    seperator: {
        marginTop: `20px`,
        marginBottom: `20px`,
        height: `1px`,
        backgroundColor: `lightgrey`,
    },
}

const cssMediaBelow600 = {
    wrapperLeft: {
        ...css.wrapperLeft,
        ...{
            width: `100%`,
        },
    },
    wrapperRight: {
        ...css.wrapperRight,
        ...{
            position: `fixed`,
            bottom: `0px`,
            width: `100%`,
            padding: `0px`,
        },
    },
}

function Cart() {
    const isMediaAbove600px = useMediaQuery('(min-width: 1000px)');

    const a = isMediaAbove600px ? css.wrapperLeft : cssMediaBelow600.wrapperLeft;
    const b = isMediaAbove600px ? css.wrapperRight : cssMediaBelow600.wrapperRight;


    const cartItems = useSelector((state) => state.cart.value)

    return (
        <div>
            <HeaderBarSpace/>

            <div style={a}>
                <Text weight="bold" h1 css={css.textHeading}>Shopping Cart</Text>
                {cartItems.map((cartItem) => <>
                    <CartItem data={cartItem}></CartItem>
                    <div style={css.seperator}></div>
                </>)}
            </div>
            <div style={b}>
                <CartStats/>
            </div>

            <HeaderBar active={1}/>
        </div>
    );
}
export default Cart;