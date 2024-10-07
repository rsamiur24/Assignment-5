


document.addEventListener('DOMContentLoaded', () => {
    const totalBtn = document.getElementById('final-total-btn');
    const donationSections = document.getElementById('donation-sections');
    const donateButtons = document.querySelectorAll('.donate-btn');
    const donationTab = document.getElementById('donation-tab'); 
    let totalDonation = 0;
    let returnBtn = null; 

    donateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const inputField = button.previousElementSibling;
            const donationAmount = parseFloat(inputField.value) || 0;

            totalDonation += donationAmount;

            
            totalBtn.innerHTML = `<i class="fa-solid fa-circle-dollar-to-slot"></i> ${totalDonation.toFixed(2)} BDT`;
        });
    });

    
    donationTab.addEventListener('click', () => {
   
        donationSections.style.display = 'none';

        if (!returnBtn) {
            returnBtn = document.createElement('button');
            returnBtn.innerText = 'Go Back';
            returnBtn.id = 'return-btn';
            document.body.appendChild(returnBtn);

            
            returnBtn.addEventListener('click', () => {
                
                donationSections.style.display = 'block';

               
                document.body.removeChild(returnBtn);
                returnBtn = null; 
            });
        }
    });
});









