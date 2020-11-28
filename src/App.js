import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import {
  Schedule,
  Message,
  Header
} from './components'
import { fontFamily } from './settings.json'

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `${fontFamily}`,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={Schedule} />
          <Route path="/mensagem" component={Message} />
          <Route component={Schedule} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
