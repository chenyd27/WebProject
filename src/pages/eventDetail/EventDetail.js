import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import DetailSubBar from "components/DetailSubBar/DetailSubBar";
import { Col,Row } from 'antd';
import ContainerLeft from "./containerLeft/ContainerLeft";
import ContainerRight from "./containerRight/ContainerRight";


function EventDetail(){
    const {id} = useParams();
    // get the event info here
    const eventInfo =  {
        event_id : 0,
        title : 'test1',
        content : 'The sun was setting over the horizon, casting a warm golden glow over the fields. The birds were settling in for the night, their chirps slowly fading away. The air was still, with only the occasional rustle of leaves in the wind. It was a peaceful scene, one that made you forget about the worries of the day. As the last rays of sunlight disappeared, the stars began to twinkle in the sky. It was a reminder that although the day may have ended, there was still beauty to be found in the world.',
        tagList : ['game','sport','scene','food'],
        user : {
            user_id : 1,
            username : 'cyd',
            avatar : 'http://localhost:3000/assets/touxiang.png',
        },
        event_contain_picture : true,
        coverUrl : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872',
        pictureList : ['https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872','https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872'],
        createAt : '2023-4-19 09:30:00',
        commentCount : 3,
        commentList : [
            {
                comment_id : 0,
                username : 'robot',
                user_id : 1,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            },
            {
                comment_id : 1,
                username : 'robot',
                user_id : 2,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            },
            {
                comment_id : 2,
                username : 'robot',
                user_id : 1,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            },
            {
                comment_id : 3,
                username : 'robot',
                user_id : 1,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            },
            {
                comment_id : 4,
                username : 'robot',
                user_id : 1,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            },
            {
                comment_id : 5,
                username : 'robot',
                user_id : 1,
                user_avatar : 'http://localhost:3000/assets/touxiang.png',
                comment : 'Test comment',
                comment_create_time : '2023-09-19 20:00:00'
            }
        ],
        likeCount : 10
    };
    // get the user info
    const {user} = useSelector(state => state.userInfo);

    return (
        <div style={{margin : '3% 5%'}}>
            <div className="subbar">
                <DetailSubBar user={user} eventInfo={eventInfo}/>
            </div>
            <hr/>
            <div className="container">
                {eventInfo.event_contain_picture ? 
                <Row>
                <Col span={11}><ContainerLeft eventInfo={eventInfo}/></Col>
                <Col span={13}><ContainerRight eventInfo={eventInfo} user={user}/></Col>
                </Row>
                :
                <Row>
                <Col span={24}><ContainerRight eventInfo={eventInfo} user={user}/></Col>
                </Row>
            }
            </div>
        </div>
    )
}

export default EventDetail;