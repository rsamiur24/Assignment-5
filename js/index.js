const donationSections = document.querySelectorAll('.donation-section');


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
            alert('Sorry not a valid number');
        }
    });
});




