const indicators = {
  emaL: new EMA([100, 'high']),
  emaS: new EMA([10, 'low']),
}

indicators.emaL.color = '#00ff00'
indicators.emaS.color = '#ff0000'

module.exports = indicators
