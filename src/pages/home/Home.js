import React,{useState} from "react";
import Event from "components/Events/Event";
import Team from "components/Teams/Team";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './Home.css';

function Home(){
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
    const gotoPost = () =>{
        navigate('/post');
    }
    return (
        <div style={{marginLeft : "8%",marginRight : "8%"}}>
            <div className="total-home">
                <div className="subtopic-box">
                    {columns.map(item => <div key={item.key} className={subPage === item.key ? 'item selected' : 'item'} onClick={()=>onClick(item)}>{item.label}</div>)}
                </div>
                <div className="post-box">
                    <Button type="primary" size="large" className="post" onClick={gotoPost}>
                    Post<PlusCircleOutlined/></Button>
                </div>
            </div>
            <hr/>
            <div>
                {subPage === 'event' ? <Event/> : <Team/>}
            </div>
        </div>
    )
}

export default Home;