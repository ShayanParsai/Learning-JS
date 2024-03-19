async function fetchPrice(url, exchange) { // Fetch the prices from the API URLS
    try {
        const response = await fetch(url);
        const data = await response.json();

        switch (exchange) {
            case 'binance':
                return parseFloat(data.price);
            case 'kraken':
                const pair = Object.keys(data.result)[0];
                return parseFloat(data.result[pair].c[0]);
            case 'bitstamp':
                return parseFloat(data.last);
            case 'coinbase':
                return parseFloat(data.data.amount);
            case 'bybit':
                return parseFloat(data.result[0].last_price);
            default:
                console.log(`Exchange ${exchange} not supported.`);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
}

async function updatePricesofbtc() { // BTC/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', 'binance');
    document.getElementById('btcBinancePrice').textContent = `Binance: $${binancePrice.toFixed(0)}`;
    flashBackground('btcBinancePrice', binancePrice, 'binance', 'BTC');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT', 'kraken');
    document.getElementById('btcKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(0)}`;
    flashBackground('btcKrakenPrice', krakenPrice, 'kraken', 'BTC');
    updateArbitrage('btcBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/btcusdt/', 'bitstamp');
    document.getElementById('btcBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(0)}`;
    flashBackground('btcBitstampPrice', bitstampPrice, 'bitstamp', 'BTC');
    updateArbitrage('btcBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/BTC-USDT/spot', 'coinbase');
    document.getElementById('btcCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(0)}`;
    flashBackground('btcCoinbasePrice', coinbasePrice, 'coinbase', 'BTC');
    updateArbitrage('btcBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT', 'bybit');
    document.getElementById('btcBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(0)}`;
    flashBackground('btcBybitPrice', bybitPrice, 'bybit', 'BTC');
    updateArbitrage('btcBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofeth() { // ETH/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT', 'binance');
    document.getElementById('ethBinancePrice').textContent = `Binance: $${binancePrice.toFixed(0)}`;
    flashBackground('ethBinancePrice', binancePrice, 'binance', 'ETH');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ETHUSDT', 'kraken');
    document.getElementById('ethKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(0)}`;
    flashBackground('ethKrakenPrice', krakenPrice, 'kraken', 'ETH');
    updateArbitrage('ethBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/ethusdt/', 'bitstamp');
    document.getElementById('ethBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(0)}`;
    flashBackground('ethBitstampPrice', bitstampPrice, 'bitstamp', 'ETH');
    updateArbitrage('ethBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/ETH-USDT/spot', 'coinbase');
    document.getElementById('ethCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(0)}`;
    flashBackground('ethCoinbasePrice', coinbasePrice, 'coinbase', 'ETH');
    updateArbitrage('ethBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ETHUSDT', 'bybit');
    document.getElementById('ethBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(0)}`;
    flashBackground('ethBybitPrice', bybitPrice, 'bybit', 'ETH');
    updateArbitrage('ethBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofSol() { // SOL/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT', 'binance');
    document.getElementById('solBinancePrice').textContent = `Binance: $${binancePrice.toFixed(1)}`;
    flashBackground('solBinancePrice', binancePrice, 'binance', 'SOL');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SOLUSDT', 'kraken');
    document.getElementById('solKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(1)}`;
    flashBackground('solKrakenPrice', krakenPrice, 'kraken', 'SOL');
    updateArbitrage('solBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/solusd/', 'bitstamp');
    document.getElementById('solBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(1)}`;
    flashBackground('solBitstampPrice', bitstampPrice, 'bitstamp', 'SOL');
    updateArbitrage('solBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/SOL-USDT/spot', 'coinbase');
    document.getElementById('solCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(1)}`;
    flashBackground('solCoinbasePrice', coinbasePrice, 'coinbase', 'SOL');
    updateArbitrage('solBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SOLUSDT', 'bybit');
    document.getElementById('solBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(1)}`;
    flashBackground('solBybitPrice', bybitPrice, 'bybit', 'SOL');
    updateArbitrage('solBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofAxs() { // AXS/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT', 'binance');
    document.getElementById('axsBinancePrice').textContent = `Binance: $${binancePrice.toFixed(2)}`;
    flashBackground('axsBinancePrice', binancePrice, 'binance', 'AXS');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AXSUSD', 'kraken');
    document.getElementById('axsKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(2)}`;
    flashBackground('axsKrakenPrice', krakenPrice, 'kraken', 'AXS');
    updateArbitrage('axsBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/axsusd/', 'bitstamp');
    document.getElementById('axsBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(2)}`;
    flashBackground('axsBitstampPrice', bitstampPrice, 'bitstamp', 'AXS');
    updateArbitrage('axsBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/AXS-USDT/spot', 'coinbase');
    document.getElementById('axsCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(2)}`;
    flashBackground('axsCoinbasePrice', coinbasePrice, 'coinbase', 'AXS');
    updateArbitrage('axsBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AXSUSDT', 'bybit');
    document.getElementById('axsBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(2)}`;
    flashBackground('axsBybitPrice', bybitPrice, 'bybit', 'AXS');
    updateArbitrage('axsBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofdoge() { // DOGE/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT', 'binance');
    document.getElementById('dogeBinancePrice').textContent = `Binance: $${binancePrice.toFixed(4)}`;
    flashBackground('dogeBinancePrice', binancePrice, 'binance', 'DOGE');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOGEUSDT', 'kraken');
    document.getElementById('dogeKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(4)}`;
    flashBackground('dogeKrakenPrice', krakenPrice, 'kraken', 'DOGE');
    updateArbitrage('dogeBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/dogeusd/', 'bitstamp');
    document.getElementById('dogeBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(4)}`;
    flashBackground('dogeBitstampPrice', bitstampPrice, 'bitstamp', 'DOGE');
    updateArbitrage('dogeBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/DOGE-USDT/spot', 'coinbase');
    document.getElementById('dogeCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(4)}`;
    flashBackground('dogeCoinbasePrice', coinbasePrice, 'coinbase', 'DOGE');
    updateArbitrage('dogeBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOGEUSDT', 'bybit');
    document.getElementById('dogeBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(4)}`;
    flashBackground('dogeBybitPrice', bybitPrice, 'bybit', 'DOGE');
    updateArbitrage('dogeBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofXrp() { // XRP/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT', 'binance');
    document.getElementById('xrpBinancePrice').textContent = `Binance: $${binancePrice.toFixed(3)}`;
    flashBackground('xrpBinancePrice', binancePrice, 'binance', 'XRP');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XRPUSDT', 'kraken');
    document.getElementById('xrpKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(3)}`;
    flashBackground('xrpKrakenPrice', krakenPrice, 'kraken', 'XRP');
    updateArbitrage('xrpBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/xrpusdt/', 'bitstamp');
    document.getElementById('xrpBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(3)}`;
    flashBackground('xrpBitstampPrice', bitstampPrice, 'bitstamp', 'XRP');
    updateArbitrage('xrpBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/XRP-USDT/spot', 'coinbase');
    document.getElementById('xrpCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(3)}`;
    flashBackground('xrpCoinbasePrice', coinbasePrice, 'coinbase', 'XRP');
    updateArbitrage('xrpBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XRPUSDT', 'bybit');
    document.getElementById('xrpBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(3)}`;
    flashBackground('xrpBybitPrice', bybitPrice, 'bybit', 'XRP');
    updateArbitrage('xrpBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofSand() { // SAND/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SANDUSDT', 'binance');
    document.getElementById('sandBinancePrice').textContent = `Binance: $${binancePrice.toFixed(3)}`;
    flashBackground('sandBinancePrice', binancePrice, 'binance', 'SAND');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SANDUSD', 'kraken');
    document.getElementById('sandKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(3)}`;
    flashBackground('sandKrakenPrice', krakenPrice, 'kraken', 'SAND');
    updateArbitrage('sandBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/sandusd/', 'bitstamp');
    document.getElementById('sandBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(3)}`;
    flashBackground('sandBitstampPrice', bitstampPrice, 'bitstamp', 'SAND');
    updateArbitrage('sandBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/SAND-USDT/spot', 'coinbase');
    document.getElementById('sandCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(3)}`;
    flashBackground('sandCoinbasePrice', coinbasePrice, 'coinbase', 'SAND');
    updateArbitrage('sandBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SANDUSDT', 'bybit');
    document.getElementById('sandBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(3)}`;
    flashBackground('sandBybitPrice', bybitPrice, 'bybit', 'SAND');
    updateArbitrage('sandBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

async function updatePricesofMana() { // MANA/USDT Pair
    // Binance
    const binancePrice = await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT', 'binance');
    document.getElementById('manaBinancePrice').textContent = `Binance: $${binancePrice.toFixed(3)}`;
    flashBackground('manaBinancePrice', binancePrice, 'binance', 'MANA');

    // Kraken
    const krakenPrice = await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MANAUSD', 'kraken');
    document.getElementById('manaKrakenPrice').textContent = `Kraken: $${krakenPrice.toFixed(3)}`;
    flashBackground('manaKrakenPrice', krakenPrice, 'kraken', 'MANA');
    updateArbitrage('manaBinanceKrakenArbitrage', binancePrice, krakenPrice, 'Binance', 'Kraken');

    // Bitstamp
    const bitstampPrice = await fetchPrice('https://www.bitstamp.net/api/v2/ticker/manausd/', 'bitstamp');
    document.getElementById('manaBitstampPrice').textContent = `Bitstamp: $${bitstampPrice.toFixed(3)}`;
    flashBackground('manaBitstampPrice', bitstampPrice, 'bitstamp', 'MANA');
    updateArbitrage('manaBinanceBitstampArbitrage', binancePrice, bitstampPrice, 'Binance', 'Bitstamp');

    // Coinbase
    const coinbasePrice = await fetchPrice('https://api.coinbase.com/v2/prices/MANA-USDT/spot', 'coinbase');
    document.getElementById('manaCoinbasePrice').textContent = `Coinbase: $${coinbasePrice.toFixed(3)}`;
    flashBackground('manaCoinbasePrice', coinbasePrice, 'coinbase', 'MANA');
    updateArbitrage('manaBinanceCoinbaseArbitrage', binancePrice, coinbasePrice, 'Binance', 'Coinbase');

    // Bybit
    const bybitPrice = await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MANAUSDT', 'bybit');
    document.getElementById('manaBybitPrice').textContent = `Bybit: $${bybitPrice.toFixed(3)}`;
    flashBackground('manaBybitPrice', bybitPrice, 'bybit', 'MANA');
    updateArbitrage('manaBinanceBybitArbitrage', binancePrice, bybitPrice, 'Binance', 'Bybit');
}

function updateArbitrage(elementId, price1, price2, exchange1, exchange2) { // Calculating the Arbitrage
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1} vs ${exchange2}: ${percentDifference.toFixed(1)}%`;

    if (Math.abs(percentDifference) > 1) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.5 && Math.abs(percentDifference) <= 1) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
} 

function startPriceUpdates() { // Update the prices
    const updateFunctions = [
        updatePricesofbtc,updatePricesofeth,updatePricesofSol,
        updatePricesofAxs,updatePricesofdoge,updatePricesofXrp,
        updatePricesofSand,updatePricesofMana
    ];
    updateFunctions.forEach(func => {
        func();
        setInterval(func, 25000); 
    })
}

function flashBackground(elementId, newPrice, exchange, symbol) { // When price updates, flash colour and save the last prices
    const lastPrice = lastPrices[exchange][symbol];
    if (lastPrice !== undefined && lastPrice !== newPrice) {
        const element = document.getElementById(elementId);
        const originalColor = element.style.backgroundColor;
        element.style.backgroundColor = '#fffd83';
        setTimeout(() => element.style.backgroundColor = originalColor, 1000);
    }

    lastPrices[exchange][symbol] = newPrice;
}

const lastPrices = { // Here is the saved last prices for the flashbackground
    binance: {},
    kraken: {},
    bitstamp: {},
    coinbase: {},
    bybit: {}
}

document.addEventListener("DOMContentLoaded", function() { // Start Tracking button function
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

startPriceUpdates();