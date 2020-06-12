const styles = theme => ({
  colorDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  colorDarkBackground: {
    backgroundColor: theme.palette.secondary.dark,
  },


  colorMain: {
    color: theme.palette.primary.main,
  },
  colorMainBackground: {
    color: theme.palette.primary.main,
  },

  iconfill: {
    color: `${theme.palette.primary.main} !important`,
  },
  iconfillStylori: {
    color: `${theme.palette.secondary.main} !important`,
  },
  colorLight: {
    color: theme.palette.primary.main,
  },
  colorLightBackground: {
    color: theme.palette.primary.main,
  },



  colorLightBackground: {
    color: theme.palette.text.secondary,
  },


  menuListCursor: {
    cursor: 'pointer'
  },
  cursor_notallowed:{
    cursor:'not-allowed'
  }
});

export default styles;