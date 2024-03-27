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

document.addEventListener('DOMContentLoaded', function() {
    const toggleBadDealsBtn = document.getElementById('toggleBadDeals');
    let filterInterval;
    toggleBadDealsBtn.addEventListener('click', function() {
        const filterDivs = document.querySelectorAll('[id^="filter"]');
        let isHidingBadDeals = toggleBadDealsBtn.textContent.includes('Show good deals');
        const applyFilter = () => {
            filterDivs.forEach(div => {
                const arbitrageElement = div.querySelector('p[id$="Arbitrage"]');
                const arbitrageText = arbitrageElement ? arbitrageElement.textContent : "";
                const percentageMatch = arbitrageText.match(/([\d.]+)%/);
                const percentage = percentageMatch ? parseFloat(percentageMatch[1]) : 0;

                if (isHidingBadDeals && percentage <= 0.49) {
                    div.style.display = 'none';
                } else {
                    div.style.display = ''; 
                }
            });
        };
        applyFilter(); 
        if (isHidingBadDeals) {
            toggleBadDealsBtn.textContent = 'Show all deals';
            filterInterval = setInterval(applyFilter, 2500); // Apply filter each 2.5 seconds while button is clicked
        } else {
            toggleBadDealsBtn.textContent = 'Show good deals';
            clearInterval(filterInterval);
        }
    });
});