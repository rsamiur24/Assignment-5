const donationSections = document.querySelectorAll('.donation-section');
const finalTotalButton = document.getElementById('final-total-btn');
const calculateFinalTotalButton = document.getElementById('donation-tab');

donationSections.forEach(section => {
    const inputField = section.querySelector('.input-btn');
    const totalButton = section.querySelector('.total-btn');
    const donateButton = section.querySelector('.donate-btn');

    donateButton.addEventListener('click', function() {
        const inputValue = parseFloat(inputField.value); 
        const currentTotal = parseFloat(totalButton.textContent.replace(/[^0-9]/g, ''));

        if (!isNaN(inputValue) && inputValue > 0) {
            const newTotal = inputValue + currentTotal;
            totalButton.innerHTML = `<i class="fa-solid fa-circle-dollar-to-slot bg-yellow-500 rounded-full"></i> ${newTotal} BDT`; 
            inputField.value = ''; 
        } 
        else {
            alert('Sorry, not a valid number');
        }
    });
});

// Calculate final total when "Calculate Final Total" button is clicked
calculateFinalTotalButton.addEventListener('click', function() {
    let finalTotal = 0;
    
    donationSections.forEach(section => {
        const totalButton = section.querySelector('.total-btn');
        const sectionTotal = parseFloat(totalButton.textContent.replace(/[^0-9]/g, ''));
        
        if (!isNaN(sectionTotal)) {
            finalTotal += sectionTotal;
        }
    });

    // Display the final total in the final total button
    finalTotalButton.innerHTML = `<i class="fa-solid fa-circle-dollar-to-slot bg-yellow-500 rounded-full"></i> ${finalTotal} BDT`;
});




