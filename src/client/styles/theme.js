const font = 'Arial'

const color = {
  default: '#929AAD',
  primary: '#F43A80',
  secondary: '#1474FC',
  error: '#DC3545',
  warning: '#FFC107',
  success: '#28A745'
}

const background = [
  '#2F343F',
  '#272C36',
  '#373D49',
  '#303641'
]

const text = {
  default: { color: color.default },
  primary: { color: color.primary },
  secondary: { color: color.secondary }
}

const link = { 
  color: color.secondary 
}

export default {
  background,
  color,
  font,
  link,
  text
}

export {
  background,
  color,
  font,
  link,
  text
}