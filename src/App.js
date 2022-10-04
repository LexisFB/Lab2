import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Cnav } from './components/nav';
import { Header } from './components/header';
import { Content } from './components/content';



class App extends React.Component {

  render(){

    return (
      <div className="App">
      <Cnav></Cnav>
    
     

      </div>
    );
  }
  
}

export default App;
