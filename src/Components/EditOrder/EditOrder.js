


import { React, useState, useEffect } from 'react';
import { Button, ListItem, TextField } from '@material-ui/core';
import { useSelector, useDispatch, connect } from 'react-redux';
import { actions } from '../../store/actions';

export default function Order() {
  const orders = useSelector((state) => state.OrderReducer.order);
  const fN = useSelector((state) => state.OrderReducer.fN);
  const lN = useSelector((state) => state.OrderReducer.lN);
  const date = useSelector((state) => state.OrderReducer.date);
  const id = useSelector((state) => state.OrderReducer.id);
  const [newFn, setFN] = useState("");
  const [newLn, setLN] = useState("");
  const [newDate, setDate] = useState("");
  const dispatch = useDispatch();
  let countOfRequired = 0;


  function EditOrder() {
    if (document.getElementById("lN").value == "") {
      alert("last Name is required")
    }
    else countOfRequired++;
    if (document.getElementById("fN").value == "") {
      alert("first Name is required")
    }
    else countOfRequired++;
    if (document.getElementById("date").value == "") {
      alert("date is required")
    }
    else countOfRequired++;
   
    if (countOfRequired == 3) {
      dispatch(actions.delete([id, orders, false]))

      let order = {
        id: id,
        firstName: newFn,
        lastName: newLn,
        date: newDate
      }
    
      dispatch(actions.addToOrders([order,true]));
      dispatch(actions.setStatus(1));
      dispatch(actions.setFN(""));
      dispatch(actions.setLN(""));
      dispatch(actions.setDate(""));
      dispatch(actions.setId());
    }

  }
  return (
    <div class="container">
      <div class="row">
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div class="col-6" style={{ textAlign: 'right', fontSize: '25px' }}>
              <b>הזמנה{id+1}  </b>
            </div>
          </div>
          <br></br>
          <div className="row">
          <div className="col-4">
                            
                        </div>
            <div className="col-4">
              <h6 style={{ fontSize: '12px' }}>שם משפחה</h6>

              <TextField
                rows={1}
                size="small"
                style={{ width: '13rem', height: '1px', direction: 'rtl' }}
                multiline="false"
                id="lN"
                variant="outlined"
                onChange={e => setLN(e.target.value)}
                placeholder={lN}

              />
            </div>

            <div className="col-4">
              <h6 style={{ fontSize: '12px' }}>שם פרטי</h6>
              <TextField
                rows={1}
                size="small"
                style={{ width: '13rem', height: '1px', direction: 'rtl' }}
                multiline="false"
                id="fN"
                variant="outlined"
                onChange={e => setFN(e.target.value)}
                placeholder={fN} />

            </div>
          </div>

          <br></br>
          <div className="row">
            <div className="col-6">
              <div></div>

            </div>
            <div className="col-6">
              <h6 style={{ fontSize: '12px' }}>תאריך </h6>
              <TextField
                variant="outlined"
                size="small"
                style={{ width: '13rem', height: '1px', direction: 'rtl' }}
                type="date"
                id="date"
                onChange={e => setDate(e.target.value)}
                placeholder={date}

              />


            </div>
          </div>

          <br></br>
          <br></br>
          <div className="row">
            <div className="col-6">
              <div></div>

            </div>

            <div className="col-6">
              <Button style={{ color: 'white', width: '13rem', height: '2rem', backgroundColor: 'gray' }} variant="contained" onClick={EditOrder}> <b>עדכון</b> </Button>

            </div>
          </div>


        </div>



        <div class="col-sm-4" style={{ textAlign: 'right' }}>
        </div>

      </div>
    </div>


  );
}
