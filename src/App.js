import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import {
  Schedule
} from './components'

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Open Sans"',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Schedule} />
          <Route path="/agenda" component={Schedule} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
