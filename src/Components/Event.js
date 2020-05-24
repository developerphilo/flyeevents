import React from 'react';

const Event = ({event}) =>{

    return(
                <div className="event">           
                    <h2 >{event.name}</h2>
                    <img  style={{width: '20rem',height : '270px'}} src={event.images[0].url} alt="" />
                    {/* <span>Venue</span> 
                    <p >{event.dates.timezone}</p>
                    <span>Start Time</span>
                    <p>{event.sales.public.startDateTime}</p>
                    <span >End Time</span>
                    <p >{event.sales.public.endDateTime}</p>
                    <a href={event.url}>Book Here</a> */}
                    <a href={event.url}>Book Here</a> 
                </div>
    )
}

export default Event;