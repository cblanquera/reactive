import { createTheme, ThemeProvider } from '@material-ui/core/styles'

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

const theme = createTheme({ 
  palette: { 
    type: 'dark',
    primary: { main: '#F43A80' },
    secondary: { main: '#1474FC' },
    error: { main: '#DC3545' },
    warning: { main: '#FFC107' },
    success: { main: '#28A745' },
    background: { 
      default: '#2F343F',
      paper: '#373D49',
      inset: '#272C36',
      accent: '#303641'
    },
    text: { primary: '#929AAD' },
    action: { active: '#929AAD' }
  } 
})

export { theme, ThemeProvider } 