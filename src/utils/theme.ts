import Color from 'tinycolor2'

export function randomColor() {
  return Color.random().toHexString()
}

export function isDark(colorHex: string) {
  return Color(colorHex).isDark()
}

export function transparentize(color: string, opacity: number) {
  return Color(color).setAlpha(opacity).toRgbString()
}
