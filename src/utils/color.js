const toFixed = (n, d = 3) => parseFloat(n.toFixed(d))
const maxCap = (v, m = 0, M = 1) => Math.max(m, Math.min(M, v))
const parseValue = (t, m, M, round) => {
  let v = (/%$/.test(t) ? (parseFloat(t.replace(/%$/, '')) / 100) * M : parseFloat(t))
  v = maxCap(v, m, M)
  return round ? Math.round(v) : toFixed(v)
}

// Color regex

const parseRGBValue = n => parseValue(n, 0, 255, true)
const parseRGBAlpha = n => parseValue(n, 0, 255) 

const parseHexValue = n => parseRGBValue(parseInt(n, 16))
const parseHexAlpha = n => parseRGBAlpha(parseInt(n, 16) / 255)

const parseHSL = (H, S, L) => {
  H = parseValue(H, 0, 360)
  S = parseValue(S)
  L = parseValue(L)
  
  let R = 0
  let G = 0
  let B = 0
  if (S === 0) {
    R = G = B = L
  } else {
    const C = (1 - Math.abs((2 * L) - 1)) * S
    const [ r, g, b ] = parseHue(H, C)
    const m = L - (C * 0.5)
    R = r + m
    G = g + m
    B = b + m
  }
  
  return [ parseRGBValue(R * 255), parseRGBValue(G * 255), parseRGBValue(B * 255) ]
}
const parseHue = (H, C) => {
  const h = H / 60
  const X = C * (1 - Math.abs((h % 2) - 1))
  if (h >= 0 && h <= 1) return [ C, X, 0 ]
  if (h >= 1 && h <= 2) return [ X, C, 0 ]
  if (h >= 2 && h <= 3) return [ 0, C, X ]
  if (h >= 3 && h <= 4) return [ 0, X, C ]
  if (h >= 4 && h <= 5) return [ X, 0, C ]
  if (h >= 5 && h <= 6) return [ C, 0, C ]
  return [ 0, 0, 0 ]
}

const RGB_REGEX = /^rgba?\((\d+%?),\s*(\d+%?),\s*(\d+%?)(?:,\s*(\d+(\.\d+)?%?))?\)$/i
const HEX_REGEX = /^#?([a-f\d]{6})([a-f\d]{2})?$/i
const SIMPLE_HEX_REGEX = /^#?([a-f\d]{3})([a-f\d])?$/i
const HSL_REGEX = /^hsla?\((\d+%?),\s*(\d+(?:\.\d+)?%?),\s*(\d+(?:\.\d+)?%?)(?:,\s*(\d+(\.\d+)?%?))?\)$/i

export function parseColor (text) {
  if (typeof text === 'string') {
    const color = parseHex(text) || parseSimpleHex(text) || parseRGB(text) || parseHSLString(text)
    if (color) return color.map(v => isNaN(v) ? 0 : v)
  }
  throw new Error('Color must be an string');
}

export function parseRGB (text) {
  if (RGB_REGEX.test(text)) {
    let [ , R, G, B, A ] = RGB_REGEX.exec(text)
    A = A || 1
    return [ parseRGBValue(R), parseRGBValue(G), parseRGBValue(B), parseRGBAlpha(A) ]
  }
}

export function parseHex (text) {
  if (HEX_REGEX.test(text)) {
    const [ , HEX, A ] = HEX_REGEX.exec(text)
    const rgba = HEX.match(/[a-f\d]{2}/gi).map(parseHexValue) // Base hex
    rgba.push(parseHexAlpha(A || 'ff')) // Alpha
    return rgba
  }
}

export function parseSimpleHex (text) {
  if (SIMPLE_HEX_REGEX.test(text)) {
    const [ , HEX, A ] = SIMPLE_HEX_REGEX.exec(text)
    const rgba = HEX.split('').map(v => parseHexValue(v + v)) // Base hex
    rgba.push(parseHexAlpha(A ? A + A : 'ff')) // Alpha
    return rgba
  }
}

export function parseHSLString (text) {
  if (HSL_REGEX.test(text)) {
    const [ , H, S, L, A ] = HSL_REGEX.exec(text)
    const rgba = parseHSL(H, S, L)
    rgba.push(A || 1)
    return rgba
  }
}