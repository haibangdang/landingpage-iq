import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'blog_card' })((theme, _params, classes) => ({
  text: {},
  blogCard: {
    display: 'flex',
    marginBottom: theme.spacing(6),
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
    '&:before': {
      borderRadius: 15,
      content: '""',
      width: 100,
      height: 100,
      transform: 'rotate(45deg)',
      background: theme.palette.secondary.main,
      opacity: 0.1,
      position: 'absolute',
      top: -10,
      left: -25
    },
    [`& .${classes.text}`]: {
      '& a': {
        padding: 0,
        position: 'relative',
        textTransform: 'none',
        zIndex: 1,
        whiteSpace: 'inherit',
        color: theme.palette.text.primary,
        lineHeight: '36px',
        '&:hover': {
          background: 'none'
        }
      },
      '& > a': {
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.secondary,
      },
      '& h4': {
        lineHeight: 'normal',
        '&:before': {
          borderRadius: 10,
          content: '""',
          width: 50,
          height: 50,
          transform: 'rotate(45deg)',
          background: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
          position: 'absolute',
          top: -6,
          left: -25
        },
        '& a': {
          display: 'block',
          fontSize: 24,
          fontWeight: theme.typography.fontWeightMedium,
          transition: 'all 0.3s ease',
          height: 80,
          [theme.breakpoints.down('sm')]: {
            fontSize: 16,
            lineHeight: '22px'
          },
          '&:hover': {
            color: theme.palette.primary.main
          }
        }
      }
    }
  },
  date: {
    textAlign: 'center',
    marginLeft: theme.spacing(3),
    color: theme.palette.text.hint,
    '& > *': {
      display: 'block',
      fontWeight: theme.typography.fontWeightRegular
    },
    '& h3': {
      fontSize: 28,
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20
      }
    },
    '& h2': {
      fontSize: 46,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32
      }
    },
    '& h4': {
      fontSize: 22,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
