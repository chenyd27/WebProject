import React from "react";
import EventCard from "components/Card/EventCard";


function EventRight(props){
    const {eventRight} = props
    return (<div>
        {eventRight.map(event =><div key={event.event_id}><EventCard event={event} status={'home'}/></div>)}
    </div>)
}

export default EventRight;