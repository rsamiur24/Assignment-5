document.addEventListener("DOMContentLoaded", function() {
    const donationTab = document.getElementById("donation-tab");
    const historyTab = document.getElementById("history-tab");
    const donationSections = document.getElementById("donation-sections");
    const historySection = document.getElementById("history-section");

    // Initial state
    historySection.style.display = "none"; // Hide history page initially

    // Come back to History 

    historyTab.addEventListener("click", function() {
        // Hide donation sections and show history
        donationSections.style.display = "none";
        historySection.style.display = "block";

        // Transfer button classes
        historyTab.classList.remove("bg-gray-200", "text-gray-600");
        historyTab.classList.add("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");

        donationTab.classList.remove("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");
        donationTab.classList.add("bg-gray-200", "text-gray-600");
    });

    // Switching back to Donation Tab
    donationTab.addEventListener("click", function() {
        // Hide history and show donation sections
        historySection.style.display = "none";
        donationSections.style.display = "block";

        // Transfer button classes
        donationTab.classList.remove("bg-gray-200", "text-gray-600");
        donationTab.classList.add("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");

        historyTab.classList.remove("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");
        historyTab.classList.add("bg-gray-200", "text-gray-600");
    });

    // Donation button functionality

    const donateBtn = document.querySelectorAll(".donate-btn");
    donateBtn.forEach((btn) => {
        btn.addEventListener("click", function() {
            const donationAmount = this.previousElementSibling.value; // Get donation amount input value
            const location = this.closest("section").querySelector("h1").innerText; // Get location from the section
            const donationDate = new Date(); // Get current date

            if (donationAmount) {
                const formattedDate = donationDate.toLocaleDateString();
                const formattedTime = donationDate.toLocaleTimeString();

                // Update the history content safely
                const historyEntry = `
                    <p>Last Donation:</p>
                    <ul>
                        <li><strong>Amount:</strong> ${donationAmount} BDT</li>
                        <li><strong>Location:</strong> ${location}</li>
                        <li><strong>Date:</strong> ${formattedDate}</li>
                        <li><strong>Time:</strong> ${formattedTime}</li>
                    </ul>
                `;

                // Overwrite or append the content
                document.getElementById("history-content").innerHTML = historyEntry;

                alert("Thank you for your donation!");
            } 
        });
    });
});