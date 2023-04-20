import React,{useState} from "react";
import './ContainerRight.css';
import { HeartOutlined,ShareAltOutlined,HeartFilled   } from "@ant-design/icons"
import { Input ,Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import CommentCard from "components/CommentCard/CommentCard";

const { TextArea } = Input;

function ContainerRight(props){
    const {eventInfo,user} = props;
    const [likeCount,setLikeCount] = useState(eventInfo.likeCount);
    const [commentCount,setCommentCount] = useState(eventInfo.commentCount);
    const [commentList,setCommentList] = useState(eventInfo.commentList);
    const [hasLiked,setHasLiked] = useState(false);
    const [newComment,setNewComment] = useState('');
    const commentChange = (e) =>{
        setNewComment(e.target.value);
    }
    // add like api
    const addLike = () =>{
        if(hasLiked)setLikeCount(likeCount - 1);
        else setLikeCount(likeCount + 1);
        setHasLiked(!hasLiked);
    }
    // post comment api
    const postComment = () =>{
        if(newComment !== ''){
            const newCommentObject = {
                comment_id : uuidv4(),
                username : user.username,
                user_id : user.user_id,
                user_avatar : user.avatar,
                comment : newComment,
                comment_create_time : new Date().toString()
            }
            setCommentList([...commentList,newCommentObject]);
            setCommentCount(commentCount + 1);
            setNewComment('');
        }else{
            window.alert('empty comment');
        }
    }
    const cancelComment = () =>{
        setNewComment('');
    }
    const shareLink = () =>{

    }
    // delete comment api
    const needDeleted = (comment_id) =>{
        const newCommentList = commentList.filter(comment => comment.comment_id !== comment_id);
        setCommentList(newCommentList);
    }
    return(
        <div style={{margin : 10,fontSize : 18}}>
            <p className="content-box">{eventInfo.content}</p>
            <div className="like-share" >
                <div className="like" onClick={addLike} >
                    {hasLiked ? <HeartFilled style={{color:'red'}}/> : <HeartOutlined/>}
                    <span style={{marginLeft : 5}}>{likeCount}</span>
                </div>
                <div className="like" onClick={shareLink}>
                <ShareAltOutlined />
                <span style={{marginLeft : 5}}>Share</span>
                </div>
            </div>
            <hr/>
            <div className="comment-count">
                Comments ({commentCount})
            </div>
            <div className="comment-input">
            <TextArea
                placeholder="Write down your comment..."
                size="large"
                autoSize={{ minRows: 2}}
                value={newComment}
                onChange={(e)=>commentChange(e)}
            />
            </div>
            <div className="submit-cancel">
                <div style={{float : 'right'}}>
                    <Button type="link" danger style={{marginRight:20}} onClick={cancelComment}>Cancel</Button>
                    <Button type="primary" size='large' onClick={postComment}>Post</Button>
                </div>
            </div>
            <div className="comment-card">
                {commentList.map(comment=><div key={comment.comment_id}><CommentCard comment={comment} needDeleted={needDeleted}/></div>)}
            </div>
        </div>
    )
}
export default ContainerRight;