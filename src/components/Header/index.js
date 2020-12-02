import {
  makeStyles,
  AppBar,
  Toolbar
} from '@material-ui/core'
import { Logo } from '../../assets'
import { colors, fontFamily } from '../../settings.json'

function Header () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img src={Logo} alt="Loop Brasil" className={classes.logo} />
          </div>
          <a to="/" className={classes.navLink}>Vender</a>
          <a to="/" className={classes.navLink}>Comprar</a>
          <a to="/" className={classes.navLink}>Lojas</a>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: 'transparent',
    boxShadow: 'none',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    borderBottomStyle: 'solid',
    padding: '15px 80px'
  },
  logoContainer: {
    flexGrow: 1
  },
  logo: {
    width: 100,
    height: 55
  },
  navLink: {
    margin: '0 30px',
    color: colors.grey,
    fontFamily: fontFamily,
    textDecoration: 'none',
    fontWeight: 400,
    fontSize: 17
  }
})

export default Header
