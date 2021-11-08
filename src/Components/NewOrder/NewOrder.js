


import { Button, TextField } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { actions } from '../../store/actions';


export default function NemOrder() {
    const orders = useSelector((state) => state.OrderReducer.order);
    const countId = useSelector((state) => state.OrderReducer.countId);
    const [fN, setFN] = useState();
    const [lN, setLN] = useState();
    const [date, setDate] = useState();
    const dispatch = useDispatch();
    let countOfRequired = 0;
    function addToOrders() {
        
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
            let order = {
                id: countId,
                firstName: fN,
                lastName: lN,
                date: date
            }
           
            dispatch(actions.addToOrders([order,false]));
            dispatch(actions.setCountId(countId + 1))
            document.getElementById("lN").value="";
            document.getElementById("fN").value="";
            document.getElementById("date").value="";
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
                        <div class="col-6" style={{ textAlign: 'right', fontSize: '22px' }}>
                            <b> הזמנה חדשה</b>
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
                             style={{ width: '13rem', height: '1px', direction: 'rtl',float:'right' }} 
                             multiline="false" 
                             id="lN" 
                             variant="outlined" 
                             onChange={e => setLN(e.target.value)} />
                        </div>

                        <div className="col-4">
                            <h6 style={{ fontSize: '12px' }}>שם פרטי</h6>
                            <TextField 
                            rows={1} 
                            size="small" 
                            style={{ width: '13rem', height: '1px', direction: 'rtl' }} 
                            multiline="false" id="fN" variant="outlined" onChange={e => setFN(e.target.value)} />

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
                            <Button style={{ color: 'white', width: '13rem', height: '2rem', backgroundColor: 'gray' }} variant="contained" onClick={addToOrders}> <b>הוספה</b> </Button>

                        </div>
                    </div>


                </div>



                <div class="col-sm-4" style={{ textAlign: 'right' }}>
                </div>

            </div>
        </div>

    );
}
