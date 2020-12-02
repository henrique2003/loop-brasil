import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'
import { PinDrop } from '@material-ui/icons'
import { FiatArgo } from '../../../../assets'
import { colors, fontFamily } from '../../../../settings.json'

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={FiatArgo}
          title="Fiat Argo"
        />
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>Fiat Argo</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="p"
            className={classes.info}
          >Rex full 8v elétrico 4p automático</Typography>
          <Typography variant="body1" component="p" className={classes.cost}>R$ 13.700</Typography>
          <Grid container direction="row" className={classes.location}>
            <PinDrop className={classes.icon} />
            <Typography
              component="p"
              variant="body2"
              className={classes.infoLocation}
            >Mogi das Cruzes - SP</Typography>
          </Grid>
        </CardContent>
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
    minHeight: 420
  },
  media: {
    height: 220,
  },
  title: {
    fontWeight: 500,
    color: colors.grey,
    fontSize: 25,
    fontFamily: fontFamily
  },
  info: {
    textTransform: 'uppercase',
    fontSize: 14,
    marginTop: 5,
    fontFamily: fontFamily
  },
  cost: {
    marginTop: 15,
    fontWeight: 600,
    color: colors.grey,
    fontSize: 18,
    fontFamily: fontFamily
  },
  location: {
    marginTop: 18,
    borderTopColor: colors.lightGrey,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    paddingTop: 18
  },
  icon: {
    fontSize: 20,
    color: colors.grey
  },
  infoLocation: {
    fontSize: 14,
    fontFamily: fontFamily,
    marginLeft: 5
  }
})
