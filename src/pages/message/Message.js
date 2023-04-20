import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './Message.css';
import MessageEvent from "./MessageEvent/MessageEvent";
import MessageTeam from "./MessageTeam/MessageTeam";

function Message(){
    const [subPage , setSubPage] = useState('event');
    const navigate = useNavigate();
    const columns = [
        {
            label : 'Event',
            key : 'event'
        },
        {
            label : 'Team',
            key : 'team'
        }
    ]
    const onClick = (e) =>{
        setSubPage(e.key);
    }
    
    return (
        <div style={{marginLeft : '8%',marginRight : '8%'}}>
            <div className="total-home">
                <div className="subtopic-box">
                    {columns.map(item => <div key={item.key} className={subPage === item.key ? 'item selected' : 'item'} onClick={()=>onClick(item)}>{item.label}</div>)}
                </div>
                
            </div>
            <hr/>
            <div>
                {subPage === 'event' ? <MessageEvent/> : <MessageTeam/>}
            </div>
        </div>
    )
}

export default Message;