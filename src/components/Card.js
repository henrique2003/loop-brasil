import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { FiatArgo } from '../assets'

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={FiatArgo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            <Box fontWeight="fontWeightMedium" color="#2e323c">Fiat Argo</Box>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rex full 8v elétrico 4p automático
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    maxWidth: 270
  },
  media: {
    height: 200,
  },
})
