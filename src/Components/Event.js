import React from 'react';

function Event([key,title,img,venue,start,end,info]) {
    return (
        <div className="event">

            {/* <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <img className="card-img-top" style={{width: '20rem',height : '250px'}} src={img} alt="" /> <br />
                    <span>Venue</span> 
                    <p className="card-title">{venue}</p>
                    <span className="font-weight-bold">Start Time</span>
                    <p className="card-subtitle text-muted" >{start}</p>
                    <span className="font-weight-bold">End Time</span>
                    <p className="card-subtitle text-muted">{end}</p>
                    <p>{key}</p>
                    <a href={info} className="card-link">Book Here</a>
        
                </div>
            </div> */}

            
        </div>
    );
}

export default Event;