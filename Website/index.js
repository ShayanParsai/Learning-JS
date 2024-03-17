async function fetchPrice(url, exchange) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (exchange === 'binance') {
            return parseFloat(data.price);
        } else if (exchange === 'kraken') {
            const pair = Object.keys(data.result)[0];
            return parseFloat(data.result[pair].c[0]);
        } else if (exchange === 'bitstamp') {
            return parseFloat(data.last);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
}

async function updatePricesofeth() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=ETHUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/ethusd/';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');

    document.getElementById('ethBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    document.getElementById('ethKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    document.getElementById('ethBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;

    updateArbitrage('ethBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('ethBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
}

async function updatePricesofbtc() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');

    document.getElementById('btcBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    document.getElementById('btcKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    document.getElementById('btcBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;

    updateArbitrage('btcBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('btcBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
}

function updateArbitrage(elementId, price1, price2, exchange1, exchange2) {
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1} vs ${exchange2}: ${percentDifference.toFixed(2)}%`;

    if (Math.abs(percentDifference) > 0.15) {
        arbitrageElement.style.color = 'green';
    } else {
        arbitrageElement.style.color = 'orange';
    }
}

function startPriceUpdates() {
    updatePricesofbtc();
    updatePricesofeth(); 

    setInterval(updatePricesofbtc, 30000); 
    setInterval(updatePricesofeth, 30000); 
}

startPriceUpdates();
