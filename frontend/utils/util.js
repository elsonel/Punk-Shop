
function calculatePrice(quantity, price) {
    price = parseFloat(price.split(' ')[1]);
    const total = quantity * price;
    return "Ξ " + total.toFixed(2).toString();
}

function calculateCheckoutPrice(cartItems) {
    let total = 0
    for (const cartItem of cartItems) {
        const price = parseFloat(cartItem[0].price.split(' ')[1]);
        total += price * cartItem[1];
    }
    return "Ξ " + total.toFixed(2).toString();
}

function calculateDiscount(checkoutPrice, discount) {
    checkoutPrice = parseFloat(checkoutPrice.split(' ')[1]);
    const total = checkoutPrice * discount;
    return "- Ξ " + total.toFixed(2).toString();
}

function calculateTax (discountAmount, checkoutPrice, taxPercentage) {
    checkoutPrice = parseFloat(checkoutPrice.split(' ')[1]);
    discountAmount = parseFloat(discountAmount.split(' ')[2]);
    return "Ξ " + ((checkoutPrice - discountAmount) * taxPercentage).toFixed(2).toString();
}

function calculateTotal(taxAmount, discountAmount, checkoutPrice) {
    checkoutPrice = parseFloat(checkoutPrice.split(' ')[1]);
    discountAmount = parseFloat(discountAmount.split(' ')[2]);
    taxAmount = parseFloat(taxAmount.split(' ')[1]);
    return "Ξ " + (checkoutPrice - discountAmount + taxAmount).toFixed(2).toString();
}

export { calculatePrice, calculateCheckoutPrice, calculateDiscount, calculateTax, calculateTotal };