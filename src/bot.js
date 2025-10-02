const indicators = require('./indicators')
const onEnter = require('./onEnter')
const onUpdateLong = require('./onUpdateLong')
const onUpdateShort = require('./onUpdateShort')

/**
 * Example bot structure
 * This will be called by BuddyTrading or your own runner
 */
function runBot(state, update) {
  state.indicators = indicators

  // decide entry
  state = onEnter(state, update)

  // manage long positions
  state = onUpdateLong(state, update)

  // manage short positions
  state = onUpdateShort(state, update)

  return state
}

module.exports = runBot
