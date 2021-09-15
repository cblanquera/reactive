import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const dark = createTheme({ 
  palette: { 
    type: 'dark',
    primary: { main: '#1474FC' },
    secondary: { main: '#F43A80' },
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

const light = createTheme({ 
  palette: { 
    type: 'light',
    background: { 
      default: '#FFFFFF',
      paper: '#FCFCFC',
      inset: '#EFEFEF',
      accent: '#F0F0F0'
    },
  } 
})

export { dark, light, ThemeProvider } 