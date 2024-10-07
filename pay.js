// DOM Elements
const paymentMethod = document.getElementById('paymentMethod');
const cardDetails = document.getElementById('cardDetails');
const transferDetails = document.getElementById('transferDetails');

// Event Listener for Payment Method Change
paymentMethod.addEventListener('change', function () {
    if (this.value === 'card') {
        cardDetails.classList.remove('hidden');
        transferDetails.classList.add('hidden');
    } else if (this.value === 'transfer') {
        cardDetails.classList.add('hidden');
        transferDetails.classList.remove('hidden');
    }
});

// Paystack Integration (Pseudo-code)
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Check payment method and proceed accordingly
    if (paymentMethod.value === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // Perform card payment process (Integrate with your card processor)

        alert('Card payment initiated');
    } else if (paymentMethod.value === 'transfer') {
        // Paystack Transfer Integration (Note: You'll need to include Paystack's script)
        // Example of initializing Paystack:
        const handler = PaystackPop.setup({
            key: 'your-paystack-public-key', // Replace with your Paystack public key
            email: email,
            amount: amount * 100, // Paystack accepts amount in kobo
            currency: 'NGN',
            callback: function(response) {
                alert('Transaction successful. Reference: ' + response.reference);
            },
            onClose: function() {
                alert('Payment closed');
            }
        });
        handler.openIframe();
    }
});
