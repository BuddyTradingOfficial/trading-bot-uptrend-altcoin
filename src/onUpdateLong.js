function onUpdateLong(state, update) {
  const { price, mts } = update
  const i = Indicators(state)
  const iv = IndicatorValues(state)
  const { emaS } = i
  const l = iv.emaL
  const s = iv.emaS

  if (emaS.crossed(l) && s < l) {
    return ClosePositionMarket(state, {
      price,
      mtsCreate: mts,
      label: 'close long',
    })
  }

  return state
}

module.exports = onUpdateLong
