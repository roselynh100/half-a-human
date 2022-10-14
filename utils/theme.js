import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#77ACA2'
    }
  },
  typography: {
    allVariants: {
      color: '#77ACA2'
    },
    h2: {
      fontFamily: [
        'Allura',
      ].join(',')
    }
  }
})