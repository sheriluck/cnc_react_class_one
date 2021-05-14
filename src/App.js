import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Prog1 from './components/Prog1';
import './App.css'
class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand >Hire the top level developer</NavbarBrand>
          </div>
        </Navbar>
        <Prog1 />
      </div>
    )
  }
}

export default App;
