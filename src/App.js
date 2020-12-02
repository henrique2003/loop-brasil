import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import {
  Schedule,
  Header
} from './components'
import { fontFamily } from './settings.json'
import store from './store'

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `${fontFamily}`,
    },
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Schedule />
      </ThemeProvider>
    </Provider>
  )
}

export default App
