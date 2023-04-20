import EventCard from "components/Card/EventCard";
import React from "react";

function EventLeft(props){
    const {eventLeft} = props
    return (<div>
        {eventLeft.map(event =><div key={event.event_id}><EventCard event={event} status={'home'}/></div>)}
    </div>)
}

export default EventLeft;