// cart-functions.js
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on page load
    if (localStorage.getItem('cartCount')) {
        document.querySelector('.total-item').textContent = localStorage.getItem('cartCount');
    }

    // Redirect to Checkout page when cart box is clicked
    var cartBox = document.querySelector('.cart-box.border');
    if (cartBox) {
        cartBox.addEventListener('click', function() {
            window.location.href = 'Checkout.html'; // Adjust the path as needed
        });
    }
});
