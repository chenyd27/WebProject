import React from "react";
import { Card, Space, Tag } from 'antd';
import {LikeOutlined,CommentOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import './EventCard.css';
import Avatar from "components/Avatar/Avatar";

function EventCard(props){
    const event = props.event;
    const colorList = ['blue','red','volcano','green','gold'];
    const status = props.status;
    const navigate = useNavigate();
    // event detail info
    const jumptoDetail = ()=>{
        navigate(`/eventdetail/${event.event_id}`);
    }
    // delete API
    const deleteEvent = ()=>{
        console.log(event.event_id);
    }
    return (
        <div style={{margin : 10}} onClick={jumptoDetail}>
            <Card
            size="small"
            title={status === 'home' ? <Avatar user={event.user} status={3} title={event.title}/> : event.title}
            extra={event.createAt}
            style={{
                width: '100%',
            }}
            >
                <div className="card-body">
                    {event.event_contain_picture ? <img src={event.coverUrl} alt="person"></img> : <div></div>}
                    <p>{event.content}</p>
                </div>
                <div className="bottomTag">
                    <div className="tag-list">
                        {event.tagList.map((tag,index)=><Tag key={tag} color={colorList[index]}>{tag}</Tag>)}
                    </div>
                    <div className='left-bottom-box'>
                        <div className="like-comment-box">
                            <div className="like-box">
                                <LikeOutlined/>
                                {event.likeCount}
                            </div>
                            <div className="like-box">
                                <CommentOutlined />
                                {event.commentCount}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EventCard;