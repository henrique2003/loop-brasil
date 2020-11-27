import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import Card from './Card'

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
          <Typography component="p">
            <Box
              fontFamily="Open Sans"
              fontSize={17}
            >Voltar</Box>
          </Typography>
        </Grid>
      </Link>
      <Grid
        container
        direction="row"
        className={classes.information}
      >
        <Card />
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
    color: '#2e323c'
  },
  back: {
    marginTop: 3,
    marginRight: 5,
    color: '#2e323c',
    textDecoration: 'none'
  },
  information: {
    marginTop: 40
  },
  media: {
    height: 200,
  },
})


export default Schedule
