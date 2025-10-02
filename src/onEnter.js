if (GetNumCandles(state) < 2) { // 2 price points needed
    return state
  }

  const { price, mts } = update
  const i = Indicators(state)
  const iv = IndicatorValues(state)
  const { emaS } = i
  const l = iv.emaL
  const s = iv.emaS
  const amount = 0.2

  if (emaS.crossed(l) && s > l) {
    return OpenLongPositionMarket(state, {
      mtsCreate: mts,
      amount,
      price,
      label: 'enter long',
    })
  }

  return state
