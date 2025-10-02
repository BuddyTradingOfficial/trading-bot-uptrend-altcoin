# Trading Bot – Uptrend Altcoin

This is a JavaScript trading bot strategy for uptrend altcoins, built for the BuddyTrading marketplace.

## Features
- EMA-based strategy:
  - Long entry when short EMA crosses above long EMA
  - Long/short exits when cross signals reverse
- Configurable trade amount (default: 0.2)
- Minimal drawdown with risk control

## Repository Structure
src/
├── indicators.js      # Defines EMA indicators
├── onEnter.js         # Entry conditions (long position)
├── onUpdateLong.js    # Logic to close long positions
├── onUpdateShort.js   # Logic to close short positions
└── bot.js             # Main bot runner
## Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/BuddyTradingOfficial/trading-bot-uptrend-altcoin.git
   cd trading-bot-uptrend-altcoin
2.	Install Node.js (v18+ recommended).
3.	Add your own runner logic or connect to BuddyTrading engine.
Disclaimer
This strategy is for educational purposes only.
Use at your own risk. Not financial advice.
---

### 3. (Optional) Add `package.json`
If you want it to look like a real Node.js project:
```bash
npm init -y
That creates package.json.
Then push it:
git add package.json
git commit -m "Add package.json"
git push
