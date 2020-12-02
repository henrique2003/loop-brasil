import { useState } from 'react'
import { makeStyles, Grid, Card, Typography, Box } from "@material-ui/core"
import { colors, fontFamily } from '../../../../settings.json'
import { Input } from './components'

function FormInfo({ show, sumitFormInfo, data }) {
  const { month, weekDay, numberDay, hour } = data

  const [ButtonEneble, setButtonEneble] = useState(false)
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const { name, email, phone } = FormData

  function onChange(e) {
    if (name.length !== 0 && email.length !== 0 && phone.length !== 0) {
      console.log(123)
      setButtonEneble(true)
    } else {
      setButtonEneble(false)
    }

    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    sumitFormInfo(FormData)
  }

  const classes = useStyles()

  return (
    <Grid item xs={8} className={!show && classes.none}>
      <form onSubmit={e => onSubmit(e)}>
        <Card className={classes.root}>
          <Typography component="div" className={classes.header}>
            <Box className={classes.title}>Concluir agendamento</Box>
          </Typography>
          <Grid item xs={11} className={classes.container}>
            <Typography component="h5">
              <Box className={classes.titleData}>{weekDay}, {numberDay} de {month}, {hour} horas</Box>
            </Typography>
            <div className={classes.formGroup}>
              <Input
                onChange={onChange}
                name="name"
                label="Nome"
                type="text"
                xs={12}
              />
              <Grid container direction="row" spacing={2} className={classes.formControl}>
                <Grid item xs={6}>
                  <Input
                    onChange={onChange}
                    name="email"
                    label="Email"
                    type="email"
                    xs={6}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    onChange={onChange}
                    name="phone"
                    label="Telefone"
                    type="text"
                    xs={6}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <div className={classes.center}>
            <button
              type="submit"
              className={ButtonEneble ? classes.submitEnable : classes.submit}
              disabled={ButtonEneble ? false : true}
            >Agendar Visita</button>
          </div>
        </Card>
      </form>
    </Grid>
  )
}

const useStyles = makeStyles({
  none: {
    display: 'none'
  },
  root: {
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
    minHeight: 423,
  },
  header: {
    background: colors.grey,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontFamily: fontFamily
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titleData: {
    fontSize: 20,
    fontFamily: fontFamily,
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: 30
  },
  formGroup: {
    margin: '0 auto',
    marginTop: 25
  },
  formControl: {
    marginTop: 10
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  submit: {
    background: colors.red,
    border: 'none',
    color: colors.white,
    textTransform: 'none',
    fontFamily: fontFamily,
    fontSize: 17,
    borderRadius: 8,
    textAlign: 'center',
    padding: '17px 30px',
    marginTop: 15,
    marginBottom: 25,
    transition: 'all .3s ease',
    opacity: 0.2
  },
  submitEnable: {
    background: colors.red,
    border: 'none',
    color: colors.white,
    textTransform: 'none',
    fontFamily: fontFamily,
    fontSize: 17,
    borderRadius: 8,
    textAlign: 'center',
    padding: '17px 30px',
    marginTop: 15,
    marginBottom: 25,
    cursor: 'pointer',
    transition: 'all .3s ease',
    opacity: 1,
    outline: 'none'
  }
})

export default FormInfo
