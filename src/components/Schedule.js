import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import { Card, FormDate } from './index'
import { colors, fontFamily } from '../settings.json'

function Schedule() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link
        to="/"
        className={classes.back}
      >
        <Grid container direction="row">
          <ArrowBackIos className={classes.icon} />
          <Typography className={classes.backText}>Voltar</Typography>
        </Grid>
      </Link>
      <Grid
        container
        direction="row"
        className={classes.information}
        spacing={3}
      >
        <Card />
        <FormDate />
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 100
  },
  icon: {
    fontSize: 18,
    marginTop: 4,
    marginRight: 5,
    color: colors.grey
  },
  back: {
    marginTop: 3,
    marginRight: 5,
    color: colors.grey,
    textDecoration: 'none'
  },
  information: {
    marginTop: 20
  },
  media: {
    height: 200,
  },
  backText: {
    fontSize: 17,
    fontFamily: fontFamily
  }
})


export default Schedule
