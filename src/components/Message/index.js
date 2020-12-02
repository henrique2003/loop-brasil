import { makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { Check, CalendarToday, PinDrop } from '@material-ui/icons'
import { connect } from 'react-redux'
import { colors, fontFamily } from '../../settings.json'

function Message({ show, schedule }) {
  const { month, weekDay, numberDay, year, hour } = schedule

  const responsive = useMediaQuery('(max-width: 1250px)')

  const classes = useStyles()

  return (
    <div className={responsive && classes.margin}>
      <div className={show ? classes.root : classes.none}>
        <div className={responsive && classes.margin}>
          <div className={classes.lightCircle}>
            <div className={classes.circle}>
              <Check className={classes.checkIcon} />
            </div>
          </div>
          <Typography className={classes.message}>Agendamento concluído</Typography>
          <Typography className={classes.phraseData}>
            <CalendarToday className={classes.calendarIcon} />
            {weekDay}, {numberDay} {month} {year} às {hour}
            <span className={classes.trace}>|</span>
            <PinDrop className={classes.pinDropIcon} />
            Avenida Bandeirantes, 1100 - Morgi das Cruzes
        </Typography>
          <div className={classes.center}>
            <a href="#" className={classes.link}>Outros veículos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  none: {
    display: 'none'
  },
  root: {
    margin: '0 auto',
    marginTop: 120,
    maxWidth: 1200,
    width: '100%',
    background: colors.extraLightGrey,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5
  },
  margin: {
    marginLeft: 40,
    marginRight: 40
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

const mapStateToProps = state => ({
  schedule: state.schedule
})

export default connect(mapStateToProps)(Message)
