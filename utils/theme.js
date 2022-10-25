import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#77ACA2'
    }
  },
  typography: {
    allVariants: {
      color: '#77ACA2',
      fontFamily: [
        'Nunito',
      ].join(','),
      fontSize: 20
    },
    h1: {
      fontFamily: [
        'Allura',
      ].join(','),
      fontSize: 75
    },
    h3: {
      fontFamily: [
        'Abril Fatface',
      ].join(','),
      fontSize: 48
    }
  }
})