const   shoppingCart = [
    { 
        name: 'T-shirt', 
        price: 3500, 
        quantity: 2 },
    { 
        name: 'Sneakers', 
        price: 15000, 
        quantity: 1 },
    { 
        name: 'Wristwatch', 
        price: 8000, 
        quantity: 1 },
    { 
        name: 'Headphones', 
        price: 12000, 
        quantity: 1 },
    { 
        name: 'Smartphone', 
        price: 85000, 
        quantity: 1 },
    { 
        name: 'Laptop', 
        price: 250000, 
        quantity: 1 },
    { 
        name: 'Football', 
        price: 3500, 
        quantity: 2 },
    { 
        name: 'Jersey', 
        price: 7000, 
        quantity: 1 },
    { 
        name: 'Bluetooth Speaker', 
        price: 6500, 
        quantity: 1 },
    { 
        name: 'Backpack', 
        price: 5000, 
        quantity: 1 }
]

let subTotal = 0
let discountedPrice = 0

function calculateSubtotal(cart) {
    for (let i = 0; i < cart.length; i++) {
        subTotal += cart[i].price * cart[i].quantity
    }
}

function applyDiscount(subTotal, discount) {
    discountedPrice = subTotal * (discount/100)
}


function calculateTax(discountedPrice, taxRate) {
    let taxAmount = discountedPrice * (taxRate/100)
    let totalWithTax = discountedPrice + taxAmount
    return totalWithTax
}

function finalTotal(discount, tax) {
    calculateSubtotal(shoppingCart)
    applyDiscount(subTotal, discount)
    const total = calculateTax(discountedPrice, tax)
    console.log(total);
}

finalTotal(10, 30)