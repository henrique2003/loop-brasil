import { makeStyles, Typography } from "@material-ui/core"
import { colors, fontFamily } from '../../../../../settings.json'

function HourItem({ hour, focusHour, setHour }) {
  const classes = useStyles()

  return (
    <div className={focusHour === hour ? classes.rootFocus : classes.root} onClick={() => setHour(hour)}>
      <Typography className={focusHour === hour ? classes.hourFocus : classes.hour}>{hour}</Typography>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    background: colors.extraLightGrey,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
    paddingRight: 18,
    paddingLeft: 18,
    paddingTop: 6,
    paddingBottom: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  rootFocus: {
    background: colors.green,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
    paddingRight: 18,
    paddingLeft: 18,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  hour: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: fontFamily,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hourFocus: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default HourItem
