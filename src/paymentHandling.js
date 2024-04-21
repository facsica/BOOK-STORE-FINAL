// Mock function to simulate form submission for payment
function submitPayment(event) {
    event.preventDefault();  // Prevent the form from submitting in the default way

    // Simulate retrieving data from a form
    var cardDetails = document.querySelector("#card-element").value; // Assuming there is an input with ID 'card-element'
    console.log("Processing payment for card details:", cardDetails);

    // Mock API call to payment service
    fetch('https://api.paymentgateway.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardDetails: cardDetails
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Payment processed:", data);
        if (data.success) {
            alert("Payment successful!");
            window.location.href = "success.html"; // Redirect to a success page
        } else {
            alert("Payment failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error processing payment:", error);
        alert("An error occurred. Please try again.");
    });
}

// Attach the event listener to the form submit button
document.addEventListener('DOMContentLoaded', function() {
    var paymentForm = document.querySelector("#payment-form"); // Assuming the form has ID 'payment-form'
    if (paymentForm) {
        paymentForm.addEventListener('submit', submitPayment);
    }
});
