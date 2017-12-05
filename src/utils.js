
export const log = {
  debug (message) {
    const style = 'color: rgb(160, 86, 200)'

    if (typeof message !== 'string') log.style('DEBUG', 'Object', style)

    log.style('DEBUG', message, style)
  },
  info (contextIdenitfier, message) {
    log.style(contextIdenitfier, message, 'color: rgb(87, 199, 167);')
  },
  dir (obj) {
    console.dir(obj)
  },
  success (contextIdenitfier, message) {
    log.style(contextIdenitfier, message, 'color: #21B610;')
  },
  error (contextIdenitfier, message) {
    console.error(log._formatString(contextIdenitfier, message))
  },
  style (contextIdenitfier, message, ...style) {
    style = style.join(';')
    if (typeof message === 'string') {
      console.log('%c' + log._formatString(contextIdenitfier, message), style)
      return
    }
    log.dir(message)
  },
  _formatString (contextIdenitfier, message, style) {
    return `[${contextIdenitfier}] ${message}`
  }
}

