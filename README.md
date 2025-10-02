# Trading Bot: Uptrend Altcoin

A JavaScript trading bot strategy for uptrend altcoins, built for the BuddyTrading marketplace.

## Features
* EMA-based strategy:
  * Enters long when short EMA crosses above long EMA
  * Closes long/short when signals reverse
* Configurable trade amount (default: `0.2`)
* Minimal drawdown with built-in risk control

## Repository Structure

src/
├── indicators.js     # Defines EMA indicators
├── onEnter.js        # Entry conditions (open long position)
├── onUpdateLong.js   # Logic to close long positions
├── onUpdateShort.js  # Logic to close short positions
└── bot.js            # Main bot runner

## Setup

1) Clone the repository
```bash
git clone https://github.com/BuddyTradingOfficial/trading-bot-uptrend-altcoin.git
cd trading-bot-uptrend-altcoin

	2.	Install Node.js
Ensure Node.js v18+ is installed: https://nodejs.org/
	3.	Run or connect to BuddyTrading
Add your own runner logic or connect this strategy to the BuddyTrading engine.

Optional: Initialize package.json

If you want to make this a full Node.js project:

npm init -y

# Commit and push
git add package.json
git commit -m "Add package.json"
git push

Performance (example)
	•	Net Profit: +13.47 USDT
	•	ROI: +13.9% (from 100 USDT in 1 month)
	•	Max Drawdown: 1.96%
	•	Win/Loss: 8 wins vs 14 losses, but largest win (+8.9%) is greater than largest loss (-0.56%)

Disclaimer

This strategy is provided for educational purposes only.
Trading involves risk. Use at your own discretion. This is not financial advice.

