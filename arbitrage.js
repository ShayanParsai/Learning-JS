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

async function updatePricesofBtc() { // BTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/BTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`btc${name}Price`).textContent = `${name}: $${price.toFixed(0)}`;
        flashBackground(`btc${name}Price`, price, name.toLowerCase(), 'BTC');
    });
    processArbitrage(prices, 'btc');
}
async function updatePricesofEth() { // ETH/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ETHUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ETH-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ETHUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`eth${name}Price`).textContent = `${name}: $${price.toFixed(0)}`;
        flashBackground(`eth${name}Price`, price, name.toLowerCase(), 'ETH');
    });
    processArbitrage(prices, 'eth');
}
async function updatePricesofSol() { // SOL/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SOLUSDT', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SOL-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SOLUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`sol${name}Price`).textContent = `${name}: $${price.toFixed(1)}`;
        flashBackground(`sol${name}Price`, price, name.toLowerCase(), 'SOL');
    });
    processArbitrage(prices, 'sol');
}
async function updatePricesofAxs() { // AXS/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AXSUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AXS-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AXSUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`axs${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`axs${name}Price`, price, name.toLowerCase(), 'AXS');
    });
    processArbitrage(prices, 'axs');
}
async function updatePricesofdoge() { // DOGE/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOGEUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/DOGE-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOGEUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`doge${name}Price`).textContent = `${name}: $${price.toFixed(4)}`;
        flashBackground(`doge${name}Price`, price, name.toLowerCase(), 'DOGE');
    });
    processArbitrage(prices, 'doge');
}
async function updatePricesofXrp() { // XRP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XRPUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/XRP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XRPUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`xrp${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`xrp${name}Price`, price, name.toLowerCase(), 'XRP');
    });
    processArbitrage(prices, 'xrp');
}
async function updatePricesofSand() { // SAND/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SANDUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SANDUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SAND-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SANDUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`sand${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`sand${name}Price`, price, name.toLowerCase(), 'SAND');
    });
    processArbitrage(prices, 'sand');
}
async function updatePricesofMana() { // MANA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MANAUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MANA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MANAUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`mana${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`mana${name}Price`, price, name.toLowerCase(), 'MANA');
    });
    processArbitrage(prices, 'mana');
}
async function updatePricesofAvax() { // AVAX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AVAXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AVAXUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AVAX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AVAXUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`avax${name}Price`).textContent = `${name}: $${price.toFixed(1)}`;
        flashBackground(`avax${name}Price`, price, name.toLowerCase(), 'AVAX');
    });
    processArbitrage(prices, 'avax');
}
async function updatePricesofLtc() { // LTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LTCUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LTCUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`ltc${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`ltc${name}Price`, price, name.toLowerCase(), 'LTC');
    });
    processArbitrage(prices, 'ltc');
}
async function updatePricesofLink() { // LINK/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LINKUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LINK-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LINKUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`link${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`link${name}Price`, price, name.toLowerCase(), 'LINK');
    });
    processArbitrage(prices, 'link');
}
async function updatePricesofAda() { // ADA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ADAUSDT', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ADA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ADAUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`ada${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`ada${name}Price`, price, name.toLowerCase(), 'ADA');
    });
    processArbitrage(prices, 'ada');
}
async function updatePricesOfIcp() { // ICP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ICPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ICPUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ICP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ICPUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`icp${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`icp${name}Price`, price, name.toLowerCase(), 'ICP');
    });
    processArbitrage(prices, 'icp');
}
async function updatePricesOfDot() { // DOT/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOTUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/DOT-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOTUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`dot${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`dot${name}Price`, price, name.toLowerCase(), 'DOT');
    });
    processArbitrage(prices, 'dot');
}
async function updatePricesOfXlm() { // XLM/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XLMUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XLMUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/XLM-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XLMUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`xlm${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`xlm${name}Price`, price, name.toLowerCase(), 'XLM');
    });
    processArbitrage(prices, 'xlm');
}
async function updatePricesOfUni() { // UNI/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=UNIUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=UNIUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/UNI-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=UNIUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`uni${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`uni${name}Price`, price, name.toLowerCase(), 'UNI');
    });
    processArbitrage(prices, 'uni');
}
async function updatePricesOfNear() { // NEAR/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=NEARUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=NEARUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/NEAR-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=NEARUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`near${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`near${name}Price`, price, name.toLowerCase(), 'NEAR');
    });
    processArbitrage(prices, 'near');
}
async function updatePricesOfTrx() { // TRX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=TRXUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/TRX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=TRXUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`trx${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`trx${name}Price`, price, name.toLowerCase(), 'TRX');
    });
    processArbitrage(prices, 'trx');
}
async function updatePricesOfMatic() { // MATIC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MATICUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MATIC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MATICUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`matic${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`matic${name}Price`, price, name.toLowerCase(), 'MATIC');
    });
    processArbitrage(prices, 'matic');
}
async function updatePricesOfBch() { // BCH/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=BCHUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/BCH-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BCHUSDT', 'bybit') }
    ];
    prices.forEach(({ name, price }) => {
        document.getElementById(`bch${name}Price`).textContent = `${name}: $${price.toFixed(0)}`;
        flashBackground(`bch${name}Price`, price, name.toLowerCase(), 'BCH');
    });
    processArbitrage(prices, 'bch');
}

function processArbitrage(prices, crypto) { // prepares the info that is sent into updateArbitrage
    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);

    updateArbitrage(`${crypto}Arbitrage`, lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage(`${crypto}SecondArbitrage`, lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

function updateArbitrage(elementId, price1, price2, exchange1, exchange2) { // Calculating the Arbitrage
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1}>${exchange2}: ${percentDifference.toFixed(2)}%`;

    if (Math.abs(percentDifference) > 1) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.40 && Math.abs(percentDifference) <= 1) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
} 

function startPriceUpdates() { // Update the prices
    const updateFunctions = [
        updatePricesofBtc, updatePricesofEth, updatePricesofSol,
        updatePricesofAxs, updatePricesofdoge, updatePricesofXrp,
        updatePricesofSand, updatePricesofMana, updatePricesofAvax,
        updatePricesofLtc, updatePricesofLink, updatePricesofAda,
        updatePricesOfIcp, updatePricesOfDot, updatePricesOfXlm, 
        updatePricesOfUni, updatePricesOfNear, updatePricesOfTrx,
        updatePricesOfMatic, updatePricesOfBch
    ];

    updateFunctions.forEach(func => {
        func();
        setInterval(func, 33000);
    });
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
    coinbase: {},
    bybit: {}
}

startPriceUpdates();