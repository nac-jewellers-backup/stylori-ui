const styles = (theme) => ({
  alignGrid:{
      display:"flex",
      margin:'auto',
      justifyContent:'center'
      
  },
  label:{
    margin:'8px 0px',
  },
  qty:{
    margin:'8px 0px',
    border: '1px solid rgba(218, 185, 122, 1)',
    borderRadius: 'unset',
    "& input":{
        color:theme.palette.secondary.main,
        fontWeight:'bold',
        textAlign:'center',
        background: 'transparent',
    border: 'none',
    }
  },
  border:{
    borderLeft: `1px solid ${theme.palette.primary.main} `,
    borderRight: `1px solid ${theme.palette.primary.main} `
  },
icon:{
    fill: `${theme.palette.primary.main} !important`,
    color: theme.palette.overallButoon.contrastText,
    cursor:'pointer',
    borderRadius:'unset !important'
},
iconDisabled:{
  fill: `${theme.palette.secondary.main} !important`,
    color: theme.palette.overallButoon.contrastText,
    cursor:'not-allowed !important',
    borderRadius:'unset !important'
}
});
export default styles;
