
import {Navbar,NavbarBrand} from 'reactstrap';
import Prog1 from './components/Prog1';
import React, {useState} from 'react'

import './App.css'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
function App(){
  const[count,setCount]=useState(0)
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand >Hire the top level developer</NavbarBrand>
          </div>
        </Navbar>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
      </div>
    )
  }


export default App;
