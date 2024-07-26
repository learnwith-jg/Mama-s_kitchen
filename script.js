// script.js
let cart = [];
const deliveryCharges = 150;

function addToCart(itemName, itemPrice) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const finalTotalElement = document.getElementById('final-total');

    let totalPrice = 0;
    cartItemsList.innerHTML = ''; // Clear the cart items list

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - Rs. ${item.price * item.quantity}`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    const finalTotal = totalPrice + deliveryCharges;
    totalPriceElement.textContent = `Rs. ${totalPrice}`;
    finalTotalElement.textContent = `Rs. ${finalTotal}`;
}

function confirmOrder() {
    window.location.href = 'confirmation.html';
}
