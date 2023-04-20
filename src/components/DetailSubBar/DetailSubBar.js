import Avatar from "components/Avatar/Avatar";
import React from "react";
import {UserOutlined,FieldTimeOutlined} from '@ant-design/icons';
import { Tag } from 'antd';
import './DetailSubBar.css';
import { useNavigate } from 'react-router-dom';



function DetailSubBar(props){
    const {eventInfo, user} = props;
    const colorList = ['blue','red','volcano','green','gold'];
    const navigate = useNavigate();
    // update api
    const updateEvent = () => {
        const updateEvent = {
            eventInfo : eventInfo,
            status : 'update'
        }
        navigate('/post', { state: updateEvent });
    }
    // delete api
    const deleteEvent = () => {
        if(localStorage.getItem('page') === 'home') navigate('/');
        else navigate('/personal');
    }
    return (
        <div>
            <div className="first-line">
                <div style={{width : '100%'}}>
                    <Avatar user={eventInfo.user} status={4} title={eventInfo.title}/>    
                </div> 
                <div className={eventInfo.user.user_id === user.user_id ? 'operation-box' : 'hidden'}>
                    <a className="update-box" onClick={updateEvent}>Update</a>
                    <a className="delete-box" onClick={deleteEvent}>Delete</a>
                </div>
            </div>
            <div className="second-line">
                <div className="user-box">
                    <UserOutlined/>
                    <div className="username">{eventInfo.user.username}</div>
                </div>
                <div className="time-box">
                    <FieldTimeOutlined />                    
                    <div className="username">{eventInfo.createAt}</div>
                </div>
                <div className="taglist">
                    {eventInfo.tagList.map((tag,index)=><Tag key={tag} color={colorList[index]}>{tag}</Tag>)}
                </div>
            </div>
        </div>
    )
}

export default DetailSubBar;