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
        } else if (exchange === 'coinbase') {
            return parseFloat(data.data.amount);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
}

function flashBackground(elementId) {
    const element = document.getElementById(elementId);
    const originalColor = element.style.backgroundColor;
    element.style.backgroundColor = '#FFB6C1';
    setTimeout(() => element.style.backgroundColor = originalColor, 250); // Flash for 500ms
}

async function updatePricesofbtc() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');

    document.getElementById('btcBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('btcBinancePrice');
    document.getElementById('btcKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('btcKrakenPrice');
    document.getElementById('btcBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('btcBitstampPrice');
    document.getElementById('btcCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('btcCoinbasePrice');

    updateArbitrage('btcBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('btcBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('btcBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
}

async function updatePricesofeth() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=ETHUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/ethusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');

    document.getElementById('ethBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('ethBinancePrice');
    document.getElementById('ethKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('ethKrakenPrice');
    document.getElementById('ethBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('ethBitstampPrice');
    document.getElementById('ethCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('ethCoinbasePrice');

    updateArbitrage('ethBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('ethBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('ethBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
}

async function updatePricesofSol() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=SOLUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/solusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/SOL-USD/spot';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');

    document.getElementById('solBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('solBinancePrice');
    document.getElementById('solKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('solKrakenPrice');
    document.getElementById('solBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('solBitstampPrice');
    document.getElementById('solCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('solCoinbasePrice');

    updateArbitrage('solBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('solBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('solBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
}

async function updatePricesofAxs() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=AXSUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/axsusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/AXS-USD/spot';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');

    document.getElementById('axsBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('axsBinancePrice');
    document.getElementById('axsKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('axsKrakenPrice');
    document.getElementById('axsBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('axsBitstampPrice');
    document.getElementById('axsCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('axsCoinbasePrice');

    updateArbitrage('axsBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('axsBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('axsBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
}

function updateArbitrage(elementId, price1, price2, exchange1, exchange2) {
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1} vs ${exchange2}: ${percentDifference.toFixed(2)}%`;
    arbitrageElement.style.color = 'black'; // Ensure text color is always black

    if (Math.abs(percentDifference) > 1) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.3 && Math.abs(percentDifference) <= 1) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
}


function startPriceUpdates() {
    updatePricesofbtc();
    updatePricesofeth();
    updatePricesofSol();
    updatePricesofAxs(); 

    setInterval(updatePricesofbtc, 15000);
    setInterval(updatePricesofeth, 15000);
    setInterval(updatePricesofSol, 12000);
    setInterval(updatePricesofAxs, 8000); 
}

startPriceUpdates();
