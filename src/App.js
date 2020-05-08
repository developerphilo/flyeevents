import React, {useState} from 'react';

import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Events from './Components/Events';
import './App.css';

  
const App = ()=> {

  const APP_KEY = "A7CTg8gGTdJGP0nPPOYfCgcHoVG2Kz0f";
  const[state,setState] =useState({
    s:"",
    allevents:[]
    
  })

  //handles the input and updates the search state
  const handleInput = (e) =>{
    let typed = e.target.value;
    setState(prevState =>{
      return {...prevState,s:typed}
    })
    console.log(state.s);
  };
  //confirmes key enter is pressed and a fetch query is entered and then sets state of events
  const Search = (e) =>{
    if (e.key === "Enter") {
            fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${APP_KEY}&keyword=${state.s}`)
            .then(responce => responce.json())
            .then(data =>{
              let events = data._embedded.events;
              console.log(events);
              setState(prevState =>{
                return {...prevState,allevents:events}
              }) 
           })

      
    }

  }
  
  return (
        <div className="App">
                <div className="viewer" >
                    <Header />  
                    <Form handleInput={handleInput} Search={Search} />
                </div>
                <div>
                    <Events allevents={state.allevents} />
                    <Footer  />
                </div>
                
        </div>
  );
};

export default App;
