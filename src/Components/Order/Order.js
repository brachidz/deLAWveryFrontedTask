


import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { actions } from '../../store/actions';
import NewOrder from '../NewOrder/NewOrder'
import EditOrder from '../EditOrder/EditOrder'

import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import './Order.css';

export default function Order() {
  const orders = useSelector((state) => state.OrderReducer.order);
let cou=0;
  const status = useSelector((state) => state.OrderReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
   
  },[]);




  return (

    <div class="container">
      <div class="row">
        <div class="col-sm-10" style={{ textAlign: 'right' }}>

          {status ? (
            <NewOrder></NewOrder>
          ) : (
            <EditOrder></EditOrder>
          )}

        </div>
        
        <div class="col-sm-2 toLeft" style={{ textAlign: 'center' }}>

          <div   style={{  fontSize: '15px' }}> <b> רשימת הזמנות </b></div>
          <div style={{  fontSize: '10px' }}><b> מספר הזמנות:{orders.length} </b></div>
          <br></br>
          <div style={{ textAlign: 'center' }}>
            {orders.map((item, index) => (
              <div>
                <Card className=" container  " style={{ fontSize: '10px', width: '11rem', height: '5rem', alignItems: 'center' }}>
                  <div className="row">

                    <div className="col-1">  <img src={p2} style={{ height: '10px', width: '10px' }} onClick={(e) => dispatch(actions.delete([index, orders,true]))}></img></div>
                    <div className="col-1">    <img src={p3} style={{ height: '10px', width: '10px' }} onClick={(e) => dispatch(actions.setStatus(0), dispatch(actions.setFN(item.firstName)), dispatch(actions.setLN(item.lastName)), dispatch(actions.setDate(item.date)), dispatch(actions.setId(index)))} ></img></div>
                    <div className="col-8">  <div className="toLeft"><b> הזמנה {index + 1}</b></div></div>


                  </div>
                  <br></br>
                  <div className="row">

                    <div className="col-1">  </div>
                    <div className="col-1"></div>
                    <div className="col-8 toLeft"><b>פרטים</b>  </div>


                  </div>
                  <div className="row">

                    <div className="col-1">  </div>
                    <div className="col-1"></div>
                    <div className="col-8 toLeft">   {item.firstName} {item.lastName} </div>


                  </div>
                  <div className="row">

                    <div className="col-1">  </div>
                    <div className="col-1"></div>
                    <div className="col-8 toLeft">   {item.date} </div>


                  </div>


                </Card>
                <br></br>
              </div>

            ))}
          </div>
        </div>

      </div>
    </div>

  );
}
