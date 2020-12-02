import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import { Card, FormDate, FormInfo } from './components'
import { Message } from '../index'
import { colors, fontFamily } from '../../settings.json'
import { register } from '../../store/actions/Schedule'
import { connect } from 'react-redux'

function Schedule({ register }) {
  const [ShowFormDate, setShowFormDate] = useState(true)
  const [ShowFormInfo, setShowFormInfo] = useState(false)
  const [ShowMessage, setShowMessage] = useState(false)
  const [Data, setData] = useState({
    month: '',
    year: '',
    weekDay: '',
    numberDay: '',
    hour: ''
  })

  function sumitFormDate(dateData) {
    setData(dateData)
    showFormInfo()
  }

  function sumitFormInfo(infoData) {
    const data = {
      month: Data.month,
      year: Data.year,
      weekDay: Data.weekDay,
      numberDay: Data.numberDay,
      hour: Data.hour,
      email: infoData.email,
      name: infoData.name,
      phone: infoData.phone
    }

    register(data)

    showMessage()
  }

  function showFormInfo() {
    setShowFormDate(false)
    setShowFormInfo(true)
  }

  function showMessage() {
    setShowFormInfo(false)
    setShowMessage(true)
  }

  const classes = useStyles()

  return (
    <>
      <div className={!ShowMessage ? classes.root : classes.none}>
        <a href="#" className={classes.back}>
          <Grid container direction="row">
            <ArrowBackIos className={classes.icon} />
            <Typography className={classes.backText}>Voltar</Typography>
          </Grid>
        </a>
        <Grid
          container
          direction="row"
          className={classes.information}
          spacing={3}
        >
          <Card />
          <FormDate show={ShowFormDate} sumitFormDate={sumitFormDate} />
          <FormInfo show={ShowFormInfo} sumitFormInfo={sumitFormInfo} data={Data} />
        </Grid>
      </div>
      <Message show={ShowMessage}/>
    </>
  )
}

const useStyles = makeStyles({
  none: {
    display: 'none'
  },
  root: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 40
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

const mapDispatchToProps = dispatch => ({
	register: (data) => dispatch(register(data))
})

export default connect(null, mapDispatchToProps)(Schedule)
