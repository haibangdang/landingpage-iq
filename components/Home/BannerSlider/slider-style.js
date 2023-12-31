import { makeStyles } from 'tss-react/mui';

const sliderStyle = makeStyles({ uniqId: 'banner_slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-5),
      left: theme.spacing(),
    }
  },
  cur: {},
  bgDeco: {
    position: 'absolute',
    width: '110%',
    height: 1260,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    opacity: 0.27,
    transform: 'rotate(-10deg)',
    top: -560,
    left: -40,
    borderRadius: 80,
  },
  smallDeco: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& > div': {
      position: 'absolute',
      width: 475,
      height: 300,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      transform: 'rotate(-10deg)',
      top: -200,
      right: -40,
      borderRadius: 40
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -250 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -250,
    bottom: 80,
    '& img': {
      maxHeight: '300px !important'
    },
    [theme.breakpoints.down('lg')]: {
      bottom: 40
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  centerContent: {
    [`& .${classes.text}`]: {
      textAlign: 'center'
    }
  },
  slider: {
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      maxHeight: 350,
    },
    [theme.breakpoints.up('md')]: {
      height: 500,
      '& img': {
        maxWidth: '100%'
      }
    },
    [theme.breakpoints.up('lg')]: {
      height: 600,
      [`&.${classes.centerContent}`]: {
        paddingTop: theme.spacing(15)
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(15)
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      height: 'auto',
      '& img': {
        marginTop: theme.spacing(2)
      }
    },
  },
  imgSlide1: {
    [theme.breakpoints.down('xl')]: {
      float: 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.between('md', 'xl')]: {
      float: 'right'
    },
    [theme.breakpoints.down('sm')]: {
      left: -150,
      position: 'relative'
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        left: 0
      }
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  titleWrap: {
    display: 'inline-block'
  },
  title: {
    position: 'relative',
    '& h4': {
      position: 'relative',
    },
    [`&.${classes.titleLeft}`]: {
      '&:before': {
        content: '""',
        height: 20,
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
        opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
        width: '40%',
        position: 'absolute',
        bottom: 10,
        left: 0,
        zIndex: 0,
        [theme.breakpoints.down('md')]: {
          height: 10,
          left: '30%'
        }
      }
    },
    [`&.${classes.titleRight}`]: {
      '&:before': {
        content: '""',
        height: 20,
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
        opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
        width: '40%',
        position: 'absolute',
        bottom: 10,
        right: 0,
        zIndex: 0,
        [theme.breakpoints.down('md')]: {
          height: 10,
          left: '30%'
        }
      }
    },
    [`&.${classes.titleCenter}`]: {
      '&:before': {
        content: '""',
        height: 20,
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
        opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
        width: '40%',
        position: 'absolute',
        bottom: 10,
        left: '30%',
        zIndex: 0
      }
    }
  },
  btnText: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
  btnArea: {
    '& > .MuiButton-root': {
      fontSize: 18,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
      }
    },
    [`& .${classes.button}`]: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      position: 'relative',
      zIndex: 1,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      height: 14,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: '0%',
      position: 'absolute',
      top: 24,
      left: 5,
      zIndex: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: 'none',
      '&:after': {
        width: '50%',
      }
    },
    [`&.${classes.active}`]: {
      '& strong': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:after': {
        width: '50%',
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
