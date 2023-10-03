import '../App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from './Home';
import  Newthread  from './NewThread'; 
import  Header  from './Header';

const App = () => {
  return(
      <div className='app'>  
       <Header />
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/newthread" element={ <Newthread /> } />
        </Routes>     
      </div>
  )
}

export default App;
