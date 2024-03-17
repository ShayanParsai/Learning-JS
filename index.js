
// Function for fetching prices //------------------------------------------------------------
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
        } else if (exchange === 'cex') {
            return parseFloat(data.lprice);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
} //------------------------------------------------------------------------------------------

// All the diffrent pairs, contains the URLs for API//----------------------------------------
async function updatePricesofbtc() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/BTC/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('btcBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('btcBinancePrice', binancePrice, 'binance', 'BTC');
    document.getElementById('btcKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('btcKrakenPrice', krakenPrice, 'kraken', 'BTC');
    document.getElementById('btcBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('btcBitstampPrice', bitstampPrice, 'bitstamp', 'BTC');
    document.getElementById('btcCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('btcCoinbasePrice', coinbasePrice, 'coinbase', 'BTC');
    document.getElementById('btcCexPrice').textContent = `CEX: $${cexPrice.toFixed(2)}`;
    flashBackground('btcCexPrice', cexPrice, 'cex', 'BTC');

    updateArbitrage('btcBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('btcBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('btcBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('btcBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
}
async function updatePricesofeth() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=ETHUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/ethusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/ETH/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('ethBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('ethBinancePrice', binancePrice, 'binance', 'ETH');
    document.getElementById('ethKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('ethKrakenPrice', krakenPrice, 'kraken', 'ETH');
    document.getElementById('ethBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('ethBitstampPrice', bitstampPrice, 'bitstamp', 'ETH');
    document.getElementById('ethCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('ethCoinbasePrice', coinbasePrice, 'coinbase', 'ETH');
    document.getElementById('ethCexPrice').textContent = `CEX: $${cexPrice.toFixed(2)}`;
    flashBackground('ethCexPrice', cexPrice, 'cex', 'ETH');

    updateArbitrage('ethBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('ethBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('ethBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('ethBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
}
async function updatePricesofSol() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=SOLUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/solusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/SOL-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/SOL/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('solBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('solBinancePrice', binancePrice, 'binance', 'SOL');
    document.getElementById('solKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('solKrakenPrice', krakenPrice, 'kraken', 'SOL');
    document.getElementById('solBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('solBitstampPrice', bitstampPrice, 'bitstamp', 'SOL');
    document.getElementById('solCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('solCoinbasePrice', coinbasePrice, 'coinbase', 'SOL');
    document.getElementById('solCexPrice').textContent = `CEX: $${cexPrice.toFixed(2)}`;
    flashBackground('solCexPrice', cexPrice, 'cex', 'SOL');

    updateArbitrage('solBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('solBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('solBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('solBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
}
async function updatePricesofAxs() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=AXSUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/axsusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/AXS-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/AXS/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('axsBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('axsBinancePrice', binancePrice, 'binance', 'AXS');
    document.getElementById('axsKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('axsKrakenPrice', krakenPrice, 'kraken', 'AXS');
    document.getElementById('axsBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('axsBitstampPrice', bitstampPrice, 'bitstamp', 'AXS');
    document.getElementById('axsCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('axsCoinbasePrice', coinbasePrice, 'coinbase', 'AXS');
    document.getElementById('axsCexPrice').textContent = `CEX: $${cexPrice.toFixed(2)}`;
    flashBackground('axsCexPrice', cexPrice, 'cex', 'AXS');

    updateArbitrage('axsBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('axsBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('axsBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('axsBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
}
async function updatePricesofdoge() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=DOGEUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/dogeusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/DOGE-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/DOGE/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('dogeBinancePrice').textContent = `Binance: $${binancePrice.toFixed(4)}`;
    flashBackground('dogeBinancePrice', binancePrice, 'binance', 'DOGE');
    document.getElementById('dogeKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(4)}`;
    flashBackground('dogeKrakenPrice', krakenPrice, 'kraken', 'DOGE');
    document.getElementById('dogeBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(4)}`;
    flashBackground('dogeBitstampPrice', bitstampPrice, 'bitstamp', 'DOGE');
    document.getElementById('dogeCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(4)}`;
    flashBackground('dogeCoinbasePrice', coinbasePrice, 'coinbase', 'DOGE');
    document.getElementById('dogeCexPrice').textContent = `CEX: $${cexPrice.toFixed(4)}`;
    flashBackground('dogeCexPrice', cexPrice, 'cex', 'DOGE');

    updateArbitrage('dogeBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('dogeBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('dogeBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('dogeBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
}
async function updatePricesofXrp() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XRPUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/xrpusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/XRP-USD/spot';
    const cexUrl = 'https://cex.io/api/last_price/XRP/USD';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const cexPrice = await fetchPrice(cexUrl, 'cex');

    document.getElementById('xrpBinancePrice').textContent = `Binance: $${binancePrice.toFixed(4)}`;
    flashBackground('xrpBinancePrice', binancePrice, 'binance', 'XRP');
    document.getElementById('xrpKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(4)}`;
    flashBackground('xrpKrakenPrice', krakenPrice, 'kraken', 'XRP');
    document.getElementById('xrpBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(4)}`;
    flashBackground('xrpBitstampPrice', bitstampPrice, 'bitstamp', 'XRP');
    document.getElementById('xrpCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(4)}`;
    flashBackground('xrpCoinbasePrice', coinbasePrice, 'coinbase', 'XRP');
    document.getElementById('xrpCexPrice').textContent = `CEX: $${cexPrice.toFixed(4)}`;
    flashBackground('xrpCexPrice', cexPrice, 'cex', 'XRP');

    updateArbitrage('xrpBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('xrpBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('xrpBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('xrpBinanceCexArbitrage', binancePrice, cexPrice, 'Binance', 'CEX');
} //------------------------------------------------------------------------------------------

// Calculating the Arbitrage //---------------------------------------------------------------
function updateArbitrage(elementId, price1, price2, exchange1, exchange2) {
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1} vs ${exchange2}: ${percentDifference.toFixed(2)}%`;
    arbitrageElement.style.color = 'black'; // Ensure text color is always black

    if (Math.abs(percentDifference) > 1) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.5 && Math.abs(percentDifference) <= 1) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
} //------------------------------------------------------------------------------------------

// Updating the Arbitrage calculator //-------------------------------------------------------
function startPriceUpdates() {
    updatePricesofbtc();
    updatePricesofeth();
    updatePricesofSol();
    updatePricesofAxs(); 
    updatePricesofdoge(); 
    updatePricesofXrp(); 

    setInterval(updatePricesofbtc, 11000);
    setInterval(updatePricesofeth, 13000);
    setInterval(updatePricesofSol, 10500);
    setInterval(updatePricesofAxs, 10400); 
    setInterval(updatePricesofdoge, 10200); 
    setInterval(updatePricesofXrp, 9000); 
} //------------------------------------------------------------------------------------------

// When price updates, flash colour //--------------------------------------------------------
function flashBackground(elementId, newPrice, exchange, symbol) {
    const lastPrice = lastPrices[exchange][symbol];
    if (lastPrice !== undefined && lastPrice !== newPrice) {
        const element = document.getElementById(elementId);
        const originalColor = element.style.backgroundColor;
        element.style.backgroundColor = '#fffd83';
        setTimeout(() => element.style.backgroundColor = originalColor, 1000);
    }

    lastPrices[exchange][symbol] = newPrice;
} //------------------------------------------------------------------------------------------

// Saves the last updated price //------------------------------------------------------------
const lastPrices = {
    binance: {},
    kraken: {},
    bitstamp: {},
    coinbase: {},
    cex: {}
} //------------------------------------------------------------------------------------------ 

startPriceUpdates();