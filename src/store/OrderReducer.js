import produce from 'immer';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { actions } from '../store/actions';
import createReducer from './reducers/ReducerUtils';
const initialState = {

    order: [


    ],
    status: 1,
    countId: 0,
    id: "",
    fN: "",
    lN: "",
    date: "",
}
const orders = {
    addToOrders(state = initialState, action) {
       
        if (action.payload[1] == false) {
            const NewOrder = [...state.order, action.payload[0]];
            state.order = NewOrder;
        }
        if (action.payload[1] == true) {

            const NewOrder = [];
            let i = 0;
            for (i = 0; i < state.id; i++) {
                NewOrder.push(state.order[i])
            }

            NewOrder.push(action.payload[0]);

            while (i < state.order.length) {
                NewOrder.push(state.order[i]);
                i++;
            }

            state.order = NewOrder;
        }

    },
    setCountId(state = initialState, action) {
        const newCount = state.countId + 1
        state.countId = newCount;
    },
    setStatus(state = initialState, action) {
        if (action.payload == 1) {
            state.status = 1;
        }
        else {
            state.status = 0;
        }

    },
    setId(state = initialState, action) {

        let newId = action.payload;
        state.id = newId
    },

    setFN(state = initialState, action) {
        state.fN = action.payload;

    },
    setLN(state = initialState, action) {
        state.lN = action.payload;

    },
    setDate(state = initialState, action) {

        state.date = action.payload;
    },


    delete(state = initialState.order, action) {

        let arr = action.payload[1]
       
        arr = arr.filter((item) => item.id !== action.payload[1][action.payload[0]].id).map(({ id, firstName, lastName, date }) => ({ id, firstName, lastName, date }));
        state.order = arr;
        if (action.payload[2]) {
            if (state.countId > 0) {
                const newCount = state.countId - 1
                state.countId = newCount;
            }
        };
        // console.log(" "); ]‏
    },
};
export default produce((state, action) => createReducer(state, action, orders), initialState);
