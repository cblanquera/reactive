import { createTheme, ThemeProvider } from '@material-ui/core/styles'

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