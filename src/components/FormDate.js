import { useEffect, useState } from 'react'
import { Box, Grid, makeStyles, Typography, Card } from '@material-ui/core'
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { DayItem, HoutItem } from './index'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { colors, fontFamily } from '../settings.json'
import schedule from '../date.json'

import 'pure-react-carousel/dist/react-carousel.es.css'

function FormDate() {
  const [Schedule, setSchedule] = useState({
    month: '',
    year: '',
    dates: []
  })
  const { month, year, dates } = Schedule

  const [Day, setDay] = useState("")
  const [Hour, setHour] = useState("")
  const [Looping, setLooping] = useState(2)
  const [Hours, setHours] = useState([])

  useEffect(() => {
    setSchedule(schedule)
    setHours(schedule.dates[0].hours)
  }, [])

  function countLoop (arrayLength) {
    let count = 0

    if (arrayLength % 6 !== 0) {
      count = parseInt(arrayLength / 6) + 1
    } else {
      count = arrayLength / 6
    }

    setLooping(count)
  }

  function selectHours (day) {
    let newHours = []
    Schedule.dates.map((date) => {
      if (date.numberDay === day) {
        newHours = date.hours
        countLoop(date.hours.length)
      }
    })

    setHours(newHours)
  }

  const classes = useStyles()

  return (
    <Grid item xs={8}>
      <Card className={classes.root}>
        <Typography component="div" className={classes.header}>
          <Box className={classes.title}>Agende o dia e horário da sua visita</Box>
        </Typography>
        <Grid item xs={11} className={classes.schedule}>
          <Typography component="h5">
            <Box className={classes.titleMonth}>{month} {year}</Box>
          </Typography>
          <Grid container direction="row" spacing={3}>
            {dates.map(({ numberDay, weekDay }, i) => {
              return <DayItem
                key={i}
                numberDay={numberDay}
                weekDay={weekDay}
                dayFoucus={Day}
                setDayFoucus={setDay}
                selectHours={selectHours}
              />
            })}
          </Grid>
        </Grid>
        <div className={classes.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={Looping}
            className={classes.carousel}
          >
            <ButtonBack className={classes.button}>
              <ArrowBackIos className={classes.arrowBack} />
            </ButtonBack>
            <Slider className={classes.slider}>
              <div className={classes.rowHour}>
                {Hours.map((hour, i) => <HoutItem key={i} hour={hour} focusHour={Hour} setHour={setHour} />)}
              </div>
            </Slider>
            <ButtonNext className={classes.button}>
              <ArrowForwardIos className={classes.arrowForward} />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </Card>
    </Grid>
  )
}

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
    minHeight: 390,
  },
  header: {
    background: colors.grey,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: fontFamily
  },
  carousel: {
    width: '100%'
  },
  schedule: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titleMonth: {
    fontSize: 20,
    fontFamily: fontFamily,
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: 30
  },
  carouselContainer: {
    margin: '0 20px'
  },
  carousel: {
    display: 'flex'
  },
  slider: {
    margin: '0 3px'
  },
  rowHour: {
    marginTop: 5,
    display: 'flex',
    marginRight: 'auto'
  },
  button: {
    background: 'transparent',
    border: 'none',
    padding: '0',
    margin: 0,
    height: 17,
    marginTop: 15
  },
  arrowBack: {
    fontSize: 15,
    color: colors.grey
  },
  arrowForward: {
    fontSize: 15,
    color: colors.grey
  }
})

export default FormDate