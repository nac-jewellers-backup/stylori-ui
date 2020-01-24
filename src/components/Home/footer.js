import React from 'react';
import Grid from '@material-ui/core/Grid';

import './home.css'


class Footer extends React.Component {
  state = {

  };

  render() {


    return (
      <div>
        <div style={{ width: "100%", marginBottom: "-10%" }}>
          <img src="https://assets.stylori.com/images/static/cartoon.png" alt="" />
        </div>
        <div className='homefooter'>

          <Grid container xs={12}>
            <Grid item xs={4}>
              dsd
           </Grid>
            <Grid item xs={4}>
              dsd
           </Grid>
            <Grid item xs={4}>
              dsd
           </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Footer;