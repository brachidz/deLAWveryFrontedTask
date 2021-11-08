import { createStore, combineReducers } from 'redux';
import OrderReducer from '../store/OrderReducer';

const reducer = combineReducers({
    OrderReducer
});
const store = createStore(reducer);
window.store = store;
export default store;