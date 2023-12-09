// cart.js

function removeFromCart(productId) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reload the page to update the cart display
    location.reload();
}

function clearCart() {
    localStorage.removeItem('cart');
    location.reload();
}

function calculateTotal() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return total;
}

function updateTotalAmount() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    document.getElementById('total-amount').innerText = 'Total: $' + totalAmount.toFixed(2);
}

function initCart() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = document.getElementById('cart-items');
    var totalAmountContainer = document.getElementById('total-amount');

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    cart.forEach(function (product) {
        var cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td><button onclick="removeFromCart(${product.id})">Remove</button></td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Display total amount
    var totalAmount = calculateTotal();
    totalAmountContainer.innerHTML = `<strong>Total Amount:</strong> $${totalAmount.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', initCart);

function processPayment() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before processing payment.');
        return;
    }

    // Your payment processing logic here

    // If payment is successful, clear the cart
    clearCart();
    alert('Payment successful! Thank you for your purchase.');
}

// Call updateTotalAmount when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateTotalAmount);