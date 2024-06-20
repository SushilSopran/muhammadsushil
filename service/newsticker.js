window.onload = function() {
    const ticker = document.querySelector('.ticker-wrap .ticker');

    // Clone ticker items to ensure seamless looping
    const cloneItems = ticker.innerHTML;
    ticker.innerHTML += cloneItems;

    // Calculate total width of ticker content
    const tickerWidth = ticker.offsetWidth;

    function moveTicker() {
        let posX = tickerWidth;
        function tick() {
            posX--;
            ticker.style.transform = `translateX(-${posX}px)`;
            if (posX <= 0) {
                posX = tickerWidth;
            }
            requestAnimationFrame(tick);
        }
        tick();
    }

    moveTicker();
};
