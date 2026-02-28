
const buttons = document.querySelectorAll('.spots button')
const openingTimes = {
    "Vattakotai Fort": "8:00 AM - 5:00 PM",
    "Madaikadu Temple": "6:00 AM - 12:00 PM, 5:00 PM - 8:00 PM",
    "Padmanabhapuram Palace": "9:00 AM - 1:00 PM, 2:00 PM - 4:30 PM (Closed Mondays)",
    "Mathoor Hanging Bridge": "7:00 AM - 6:30 PM",
    "Kovalam Beach": "Open 24 Hours",
    "Kanyakumari Glass Bridge": "10:00 AM - 5:00 PM",
    "Marunthuvazh Malai": "6:00 AM - 6:00 PM",
    "Ulakkai Aruvi": "8:00 AM - 4:00 PM",
    "Pechiparai Dam": "8:00 AM - 6:00 PM"
};


buttons.forEach(button => {
    button.addEventListener('click', function() {
       
        const placeName = this.parentElement.querySelector('h2').innerText.trim();

        const time = openingTimes[placeName] || "Information not available";
        alert(`Location: ${placeName}\nOpening Hours: ${time}`);
    });
});