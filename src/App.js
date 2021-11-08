import logo from './logo.svg';
import './App.css';
import Order from './Components/Order/Order';
import NavbarNew from './Components/NavbarNew/NavbarNew';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import p1 from './images/p1.png'
import NewOrder from './Components/NewOrder/NewOrder'
function App() {
  return (
    <div className="App">
 
     <NavbarNew></NavbarNew>
     <div className="vertical "></div>
     <br></br>
     <br></br>
     <Order></Order>
     {/* <div class="vertical-line" style="height: 45px;"></div> */}
    
   
    </div>
  );
}

export default App;
