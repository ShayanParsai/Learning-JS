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