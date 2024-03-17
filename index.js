
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
        } else if (exchange === 'bybit') {
            return parseFloat(data.result[0].last_price);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
} //------------------------------------------------------------------------------------------

// All the diffrent pairs, contains the URLs for API//----------------------------------------
async function updatePricesofbtc() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSDT';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/btcusdt/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/BTC-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');

    document.getElementById('btcBinancePrice').textContent = `Binance: $${binancePrice.toFixed(0)}`;
    document.getElementById('btcKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(0)}`;
    document.getElementById('btcBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(0)}`;
    document.getElementById('btcCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(0)}`;
    document.getElementById('btcBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(0)}`;

    updateArbitrage('btcBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('btcBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('btcBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('btcBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}
async function updatePricesofeth() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=ETHUSDT';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/ethusdt/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/ETH-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=ETHUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');

    document.getElementById('ethBinancePrice').textContent = `Binance: $${binancePrice.toFixed(0)}`;
    document.getElementById('ethKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(0)}`;
    document.getElementById('ethBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(0)}`;
    document.getElementById('ethCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(0)}`;
    document.getElementById('ethBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(0)}`;

    updateArbitrage('ethBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('ethBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('ethBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('ethBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}
async function updatePricesofSol() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=SOLUSDT';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/solusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/SOL-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=SOLUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');

    document.getElementById('solBinancePrice').textContent = `Binance: $${binancePrice.toFixed(1)}`;
    document.getElementById('solKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(1)}`;
    document.getElementById('solBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(1)}`;
    document.getElementById('solCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(1)}`;
    document.getElementById('solBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(1)}`;

    updateArbitrage('solBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('solBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('solBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('solBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}
async function updatePricesofAxs() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=AXSUSD';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/axsusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/AXS-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=AXSUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');


    document.getElementById('axsBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('axsBinancePrice', binancePrice, 'binance', 'AXS');
    document.getElementById('axsKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('axsKrakenPrice', krakenPrice, 'kraken', 'AXS');
    document.getElementById('axsBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('axsBitstampPrice', bitstampPrice, 'bitstamp', 'AXS');
    document.getElementById('axsCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('axsCoinbasePrice', coinbasePrice, 'coinbase', 'AXS');
    document.getElementById('axsBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(2)}`;
    flashBackground('axsBybitPrice', bybitPrice, 'bybit', 'AXS');

    updateArbitrage('axsBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('axsBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('axsBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('axsBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');

}
async function updatePricesofdoge() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=DOGEUSDT';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/dogeusd/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/DOGE-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=DOGEUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');

    document.getElementById('dogeBinancePrice').textContent = `Binance: $${binancePrice.toFixed(4)}`;
    flashBackground('dogeBinancePrice', binancePrice, 'binance', 'DOGE');
    document.getElementById('dogeKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(4)}`;
    flashBackground('dogeKrakenPrice', krakenPrice, 'kraken', 'DOGE');
    document.getElementById('dogeBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(4)}`;
    flashBackground('dogeBitstampPrice', bitstampPrice, 'bitstamp', 'DOGE');
    document.getElementById('dogeCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(4)}`;
    flashBackground('dogeCoinbasePrice', coinbasePrice, 'coinbase', 'DOGE');
    document.getElementById('dogeBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(4)}`;
    flashBackground('dogeBybitPrice', bybitPrice, 'bybit', 'DOGE');

    updateArbitrage('dogeBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('dogeBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('dogeBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('dogeBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}
async function updatePricesofXrp() {
    const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT';
    const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XRPUSDT';
    const bitstampUrl = 'https://www.bitstamp.net/api/v2/ticker/xrpusdt/';
    const coinbaseUrl = 'https://api.coinbase.com/v2/prices/XRP-USDT/spot';
    const bybitUrl = 'https://api.bybit.com/v2/public/tickers?symbol=XRPUSDT';

    const binancePrice = await fetchPrice(binanceUrl, 'binance');
    const krakenPrice = await fetchPrice(krakenUrl, 'kraken');
    const bitstampPrice = await fetchPrice(bitstampUrl, 'bitstamp');
    const coinbasePrice = await fetchPrice(coinbaseUrl, 'coinbase');
    const bybitPrice = await fetchPrice(bybitUrl, 'bybit');

    document.getElementById('xrpBinancePrice').textContent = `Binance: $${binancePrice.toFixed(3)}`;
    flashBackground('xrpBinancePrice', binancePrice, 'binance', 'XRP');
    document.getElementById('xrpKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(3)}`;
    flashBackground('xrpKrakenPrice', krakenPrice, 'kraken', 'XRP');
    document.getElementById('xrpBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(3)}`;
    flashBackground('xrpBitstampPrice', bitstampPrice, 'bitstamp', 'XRP');
    document.getElementById('xrpCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(3)}`;
    flashBackground('xrpCoinbasePrice', coinbasePrice, 'coinbase', 'XRP');
    document.getElementById('xrpBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(3)}`;
    flashBackground('xrpBybitPrice', bybitPrice, 'bybit', 'XRP');

    updateArbitrage('xrpBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');
    updateArbitrage('xrpBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');
    updateArbitrage('xrpBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');
    updateArbitrage('xrpBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
} //------------------------------------------------------------------------------------------

// Calculating the Arbitrage //---------------------------------------------------------------
function updateArbitrage(elementId, price1, price2, exchange1, exchange2) {
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1} vs ${exchange2}: ${percentDifference.toFixed(2)}%`;
    arbitrageElement.style.color = 'black'; // Ensure text color is always black

    if (Math.abs(percentDifference) > 1.5) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.75 && Math.abs(percentDifference) <= 1.5) {
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

    setInterval(updatePricesofbtc, 25000);
    setInterval(updatePricesofeth, 25000);
    setInterval(updatePricesofSol, 25000);
    setInterval(updatePricesofAxs, 25000); 
    setInterval(updatePricesofdoge, 25000); 
    setInterval(updatePricesofXrp, 25000); 
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
    bybit: {}
} //------------------------------------------------------------------------------------------ 

startPriceUpdates();