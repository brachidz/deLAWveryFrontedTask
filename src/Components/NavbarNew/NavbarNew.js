
import { React, useState, useEffect } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import p4 from '../../images/p4.png';
export default function NavbarNew() {
  return (
    <AppBar position='static' style={{ background: '#4166f5', height: '3rem' }} >

      <div class="container">
        <div class="row">
          <div class="col-sm" >
            <u style={{ height: '2rem', width: '8rem', fontSize: '12px', padding: '15px', position: 'absolute' }}>Home Quiz</u>
          </div>
          <div class="col-sm">
            <img src={p4} style={{float:'right' , height: '1.5rem', width: '11rem',top:'10px',  position:'absolute'}}></img>
          </div>
          <div class="col-sm">

          </div>
          <div class="col-sm">

          </div>
        </div>
      </div>
    </AppBar>

  );
}
