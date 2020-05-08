import React from 'react';
import Event from './Event';


const Events = ({allevents}) =>{

    return(
              <div>
                {allevents.map(event =>(
                  <Event 
                  key={event.id}
                  title={event.name}
                  img={event.images[0].url}
                  venue={event.dates.timezone}
                  start={event.sales.public.startDateTime}
                  end={event.sales.public.endDateTime}
                  info={event.url}
                  />
                ))}
              </div>


    )
}

export default Events;