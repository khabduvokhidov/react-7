import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { InfoProvider } from "./context/Context.jsx";
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx"
import Order from './pages/Order.jsx';

import './steyls/App.css';

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <div className='App'>
          <Switch>
           
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Order" component={Order} />
            <Route path="/Profile" component={Profile} />
            {/* <Profile /> */}
          </Switch>
  
        </div>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
