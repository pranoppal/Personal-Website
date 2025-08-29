import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0ea5e9' },
    secondary: { main: '#f59e0b' },
    background: { default: '#fafafa', paper: '#ffffff' }
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 }
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: { defaultProps: { variant: 'contained' } }
  }
})

export default theme
