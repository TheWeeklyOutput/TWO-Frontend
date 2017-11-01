
export const log = {
  debug (message) {
    const style = 'color: rgb(160, 86, 200)'
    if (typeof message !== 'string') this.style('DEBUG', 'Object', style)
    this.style('DEBUG', message, style)
  },
  info (contextIdenitfier, message) {
    this.style(contextIdenitfier, message, 'color: rgb(87, 199, 167);')
  },
  dir (obj) {
    console.dir(obj)
  },
  success (contextIdenitfier, message) {
    this.style(contextIdenitfier, message, 'color: #21B610;')
  },
  error (contextIdenitfier, message) {
    console.error(this._formatString(contextIdenitfier, message))
  },
  style (contextIdenitfier, message, ...style) {
    style = style.join(';')
    if (typeof message === 'string') {
      console.log('%c' + this._formatString(contextIdenitfier, message), style)
      return
    }
    this.dir(message)
  },
  _formatString (contextIdenitfier, message, style) {
    return `[${contextIdenitfier}] ${message}`
  }
}

