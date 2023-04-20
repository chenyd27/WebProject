import Avatar from "components/Avatar/Avatar";
import React from "react";
import './CommentCard.css';
import { useSelector } from 'react-redux';
import {  Dropdown } from 'antd';
import { EllipsisOutlined,RightOutlined   } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";



function CommentCard(props){
    const {comment,needDeleted} = props;
    const commentUser = {
        user_id : comment.user_id,
        username : comment.username,
        avatar : comment.user_avatar
    }
    const navigate = useNavigate();
    // delete comment api
    const deleteComment = () => {
        needDeleted(comment.comment_id);
    }
    const items = [
        {
          key: '1',
          label: <div style={{color : 'red'}}>delete</div>,
        }
      ];
    const {user} = useSelector(state => state.userInfo);
    // jump to event detail api
    const jumptoEvent = () =>{
        if(props.status === 'message') navigate(`/eventdetail/${comment.event_id}`);
    }
    return (
        <div>
            <div className="create-user">
                <div className="user-info">
                    <div className="avatar" onClick={jumptoEvent}>
                        <Avatar user={commentUser} status={2} title={commentUser.username} create_time={comment.comment_create_time}/>
                    </div>
                    {user.user_id === commentUser.user_id ? 
                    <div>
                        <Dropdown menu={{ items,  onClick: deleteComment }} placement="bottomLeft">
                            <EllipsisOutlined />
                         </Dropdown>
                    </div> : 
                    <div></div>}
                </div>
            </div>
            <div className="comment-content"  onClick={jumptoEvent}>
                <div className="comment-box">
                    <div style={{marginRight:10}}><RightOutlined /></div>
                    {comment.comment}</div>
            </div>
            <hr/>
        </div>
    )
}

export default CommentCard;