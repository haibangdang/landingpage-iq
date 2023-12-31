import { makeStyles } from 'tss-react/mui';

const subscribeStyles = makeStyles({ uniqId: 'subscirbe' })(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    marginTop: 300,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: 130
    }
  },
  form: {
    position: 'relative',
    marginTop: theme.spacing(5)
  },
  field: {
    '& input': {
      width: '100%',
      boxShadow: theme.shade.light,
      background: 'rgba(255, 255, 255, 0.2)',
      padding: theme.spacing(2.5, 20, 2.5, 2.5),
      borderRadius: 10,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 6, 2, 2),
      },
    },
    '& > div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  button: {
    position: 'absolute',
    right: theme.spacing(),
    top: 10,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.5, 3),
      minWidth: 0,
      width: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5, 1),
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
