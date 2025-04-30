document.addEventListener('DOMContentLoaded', function () {
    let cartTotalElement = document.getElementById('cart-total');
    let paymentStatus = document.getElementById('payment-status');

    // Handle payment form submission
    document.getElementById('payment-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let cardNumber = document.getElementById('card-number').value;
        let expiry = document.getElementById('expiry').value;
        let cvv = document.getElementById('cvv').value;

        if (name && cardNumber.length === 16 && expiry && cvv.length === 3) {
            paymentStatus.innerHTML = "✅ Payment Successful! Thank you for your purchase.";
            paymentStatus.style.color = "green";
        } else {
            paymentStatus.innerHTML = "❌ Error: Please enter valid payment details.";
            paymentStatus.style.color = "red";
        }
    });
});