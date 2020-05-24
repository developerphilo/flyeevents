import React from 'react';
import Event from './Event';


const Events = ({events}) =>{

    return(
              <div className="events">
                      {events.map(event =>(
                        <Event 
                        event={event}
                        /> 
                      ))}
              </div>


    )
}

export default Events;