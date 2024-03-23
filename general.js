document.addEventListener("DOMContentLoaded", function() { // 'Start Tracking' button 
    const startTrackingButton = document.getElementById('startTrackingButton');
    if (startTrackingButton) {
        startTrackingButton.addEventListener('click', function() {
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                const mainSection = document.getElementById('mainSection');
                if (mainSection) {
                    mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() { // 'Hide prices' button
    const togglePricesBtn = document.getElementById('togglePricesBtn'); 

    togglePricesBtn.addEventListener('click', function() {
        const priceElements = document.querySelectorAll('.prices-container p[id$="Price"]');
        
        priceElements.forEach(function(element) {
            if (element.style.display === 'none') {
                element.style.display = '';
                togglePricesBtn.textContent = 'Hide prices';
            } else {
                element.style.display = 'none';
                togglePricesBtn.textContent = 'Show prices';
            }
        });
    });
});