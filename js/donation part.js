document.addEventListener('DOMContentLoaded', () => {
    const totalBtn = document.getElementById('final-total-btn');
    const donationSections = document.getElementById('donation-sections');
    const donateButtons = document.querySelectorAll('.donate-btn');
    const donationTab = document.getElementById('donation-tab'); 
    let totalDonation = 0;
    let returnBtn = null;

    // Confirmation card elements
    const confirmationCard = document.createElement('div');
    confirmationCard.style.display = 'none'; // Hide the card initially
    confirmationCard.style.position = 'fixed';
    confirmationCard.style.top = '50%';
    confirmationCard.style.left = '50%';
    confirmationCard.style.transform = 'translate(-50%, -50%)';
    confirmationCard.style.padding = '20px';
    confirmationCard.style.backgroundColor = 'white';
    confirmationCard.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    confirmationCard.style.textAlign = 'center';
    confirmationCard.style.borderRadius = '10px';
    confirmationCard.innerHTML = `
        <h2>Congratulations!</h2>
        <p id="confirmation-message"></p>
        <button id="close-confirmation" style="margin-top: 10px; padding: 10px 20px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(confirmationCard);

    const confirmationMessage = document.getElementById('confirmation-message');
    const closeConfirmationBtn = document.getElementById('close-confirmation');

    // Function to show confirmation card
    const showConfirmationCard = (donationAmount) => {
        confirmationMessage.innerText = `You have successfully donated a total of ${donationAmount.toFixed(2)} BDT.`;
        confirmationCard.style.display = 'block';
    };

    // Close confirmation card when close button is clicked
    closeConfirmationBtn.addEventListener('click', () => {
        confirmationCard.style.display = 'none';
    });

    donateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const inputField = button.previousElementSibling;
            const donationAmount = parseFloat(inputField.value) || 0;

            if (donationAmount > 0) {
                totalDonation += donationAmount;

                // Update total donation button
                totalBtn.innerHTML = `<i class="fa-solid fa-circle-dollar-to-slot"></i> ${totalDonation.toFixed(2)} BDT`;

                // Show confirmation card after donation
                showConfirmationCard(totalDonation);
            
            
            }
        });
    });

    // return button logic

    donationTab.addEventListener('click', () => {
        donationSections.style.display = 'none';

        if (!returnBtn) {
            returnBtn = document.createElement('button');
            returnBtn.innerText = 'Go Back';
            returnBtn.id = 'return-btn';
            returnBtn.style.padding = '10px 20px';
            returnBtn.style.marginTop = '10px';
            returnBtn.style.backgroundColor = '#4F46E5';
            returnBtn.style.color = 'white';
            returnBtn.style.border = 'none';
            returnBtn.style.borderRadius = '5px';
            returnBtn.style.cursor = 'pointer';
            document.body.appendChild(returnBtn);

            returnBtn.addEventListener('click', () => {
                donationSections.style.display = 'block';
                document.body.removeChild(returnBtn);
                returnBtn = null;
            });
        }
    });
});