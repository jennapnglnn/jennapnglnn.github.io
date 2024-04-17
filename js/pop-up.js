document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeButton = document.querySelector('.close-btn');

    try {
        // Check if popup has been displayed before
        const popupDisplayed = localStorage.getItem('popupDisplayed');

        if (!popupDisplayed) {
            // Show the popup if it hasn't been displayed before
            popupOverlay.style.display = 'flex';
            localStorage.setItem('popupDisplayed', true);
        }

        function closePopup() {
            popupOverlay.classList.add('fade-out');
            setTimeout(function() {
                popupOverlay.style.display = 'none';
                popupOverlay.classList.remove('fade-out');
            }, 500); // Adjust the time according to your fade animation duration
        }

        closeButton.addEventListener('click', function() {
            closePopup();
        });
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
});
