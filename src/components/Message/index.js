import { makeStyles, Typography } from '@material-ui/core'
import { Check, CalendarToday, PinDrop } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { colors, fontFamily } from '../../settings.json'

function Message () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.lightCircle}>
        <div className={classes.circle}>
          <Check className={classes.checkIcon}/>
        </div>
      </div>
      <Typography className={classes.message}>Agendamento concluído</Typography>
      <Typography className={classes.phraseData}>
        <CalendarToday className={classes.calendarIcon} />
          Segunda-feira, 22 março 2020 às 11:00
          <span className={classes.trace}>|</span> 
        <PinDrop className={classes.pinDropIcon} />
          Avenida Bandeirantes, 1100 - Morgi das Cruzes
      </Typography>
      <div className={classes.center}>
        <Link to="/" className={classes.link}>Outros veículos</Link>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    marginTop: 120,
    maxWidth: 1200,
    background: colors.extraLightGrey,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5
  },
  lightCircle: {
    width: 100,
    height: 100,
    margin: '0 auto',
    marginTop: 30,
    borderRadius: '50%',
    background: colors.extraLightRed,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: colors.lightRed
  },
  checkIcon: {
    fontSize: 40,
    color: colors.white,
    textAlign: 'center'
  },
  message: {
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: fontFamily,
    color: colors.grey,
    fontWeight: 'bold '
  },
  calendarIcon: {
    color: colors.grey,
    fontSize: 17,
    marginBottom: -2,
    marginRight: 10
  },
  pinDropIcon: {
    color: colors.grey,
    fontSize: 17,
    marginBottom: -2,
    marginRight: 8
  },
  trace: {
    margin: '0 15px'
  },
  phraseData: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: fontFamily,
    color: colors.grey
  },
  link: {
    background: colors.red,
    border: 'none',
    color: colors.white,
    textTransform: 'none',
    fontFamily: fontFamily,
    fontSize: 17,
    borderRadius: 8,
    textAlign: 'center',
    padding: '17px 30px',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none'
  },
  center: {
    marginTop: 70,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center'
  }
})

export default Message
