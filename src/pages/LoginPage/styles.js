export const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  paper: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
    maxWidth: 450,
  },
  logo: {
    marginRight: theme.spacing.unit * 2
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 3
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  form: {

  },
  error: {
    fontSize: 15,
  },
  button: {
    marginTop: theme.spacing.unit * 2
  }
})
