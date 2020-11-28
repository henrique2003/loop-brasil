import { Grid, makeStyles, Typography } from '@material-ui/core'
import { colors, fontFamily } from '../../../../../settings.json'

function DayItem ({ numberDay, weekDay, numberDayFoucus, setDayFoucus, selectHours, setWeekDay }) {

  const classes = useStyles()

  function handleWeekDay (weekDay) {
    let world = ''

    for (let i = 0; i < 3; i++) {
      world += weekDay[i]            
    }

    return world
  }

  return (
    <Grid item xs={2}>
      <div
        className={numberDayFoucus === numberDay ? classes.circleFocus : classes.circle}
        onClick={() => {
          setDayFoucus(numberDay)
          selectHours(numberDay)
          setWeekDay(weekDay)
        }}
      >
        <Typography
          className={numberDayFoucus === numberDay ? classes.weekDayFocus : classes.weekDay}
        >{handleWeekDay(weekDay)}</Typography>
        <Typography
          className={numberDayFoucus === numberDay ? classes.numberDayFocus : classes.numberDay}
        >{numberDay}</Typography>
      </div>
    </Grid>
  )
}

const useStyles = makeStyles({
  circle: {
    borderRadius: '50%',
    background: colors.extraLightGrey,
    padding: 13,
    transition: 'all .2s ease',
    cursor: 'pointer'
  },
  circleFocus: {
    borderRadius: '50%',
    background: colors.green,
    padding: 13,
    transition: 'all .2s ease',
    cursor: 'pointer'
  },
  weekDay: {
    fontFamily: fontFamily,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 13,
    color: colors.grey
  },
  weekDayFocus: {
    fontFamily: fontFamily,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 13,
    color: colors.white
  },
  numberDay: {
    fontFamily: fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    transition: 'all .2s ease',
    color: colors.grey
  },
  numberDayFocus: {
    fontFamily: fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    transition: 'all .2s ease',
    color: colors.white
  }
})

export default DayItem
