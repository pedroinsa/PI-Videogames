import './App.css';
import React from 'react';
import {Route,Switch} from "react-router-dom"
import Landing from './components/Landing';
import Default from './components/Default';
import Home from './components/Home'
import Create from './components/Create';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
    
      <Switch>
            <Route exact path="/" render={()=><Landing/>}/>
            <Route exact path="/home" render={()=><Home/>}/>
            <Route path="/videogame/:id" render={()=><Detail/>}/>
            <Route path="/videogame/create" render={()=><Create/>}/>
            <Route exact path="/home" render={()=><Home/>}/>
            <Route path="/" render={()=><Default/>}/>

      /</Switch>     
         
    </div>
  );
}

export default App;
