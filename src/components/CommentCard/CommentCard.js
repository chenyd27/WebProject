import Avatar from "components/Avatar/Avatar";
import React from "react";
import './CommentCard.css';
import { useSelector } from 'react-redux';
import {  Dropdown } from 'antd';
import { EllipsisOutlined   } from "@ant-design/icons"


function CommentCard(props){
    const {comment,needDeleted} = props;
    const commentUser = {
        user_id : comment.user_id,
        username : comment.username,
        avatar : comment.user_avatar
    }
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
    return (
        <div>
            <div className="create-user">
                <div className="user-info">
                    <div className="avatar">
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
            <div className="comment-content">
                <p className="comment-box">{comment.comment}</p>
            </div>
            <hr/>
        </div>
    )
}

export default CommentCard;