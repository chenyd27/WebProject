import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Segmented } from 'antd';
import CommentCard from "components/CommentCard/CommentCard";

function MessageEvent(){
    const [selectValue, setSelectValue] = useState('all');
    const {user} = useSelector(state => state.userInfo);
    const [commentList,setCommentList] = useState([]);
    // need api to gei all comments belong to user
    // all
    const allcommentList = [
        {
            comment_id : 0,
            username : 'robot',
            user_id : 1,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        },
        {
            comment_id : 1,
            username : 'robot',
            user_id : 2,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        },
        {
            comment_id : 2,
            username : 'robot',
            user_id : 1,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        },
        {
            comment_id : 3,
            username : 'robot',
            user_id : 1,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        },
        {
            comment_id : 4,
            username : 'robot',
            user_id : 1,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        },
        {
            comment_id : 5,
            username : 'robot',
            user_id : 1,
            user_avatar : 'http://localhost:3000/assets/touxiang.png',
            comment : 'Test comment',
            comment_create_time : '2023-09-19 20:00:00',
            event_id : 0
        }
    ];
    // other
    const otherUserComments = allcommentList.filter(comment=>comment.user_id !== user.user_id);
    // user's
    const userComments = allcommentList.filter(comment=>comment.user_id === user.user_id);
    // delete comments api
    const needDeleted = (comment_id) =>{
        const newCommentList = commentList.filter(comment => comment.comment_id !== comment_id);
        setCommentList(newCommentList);
    }
    const selectedChange = (e) =>{
        setSelectValue(e);
        if(e === 'all') setCommentList(allcommentList);
        else if(e === 'other') setCommentList(otherUserComments);
        else setCommentList(userComments);
    }
    useEffect(() => {
        if(selectValue === 'all') setCommentList(allcommentList);
        else if(selectValue === 'other') setCommentList(otherUserComments);
        else setCommentList(userComments);    
    }, []);
    return (
        <div>
            <div style={{marginBottom : 20,marginTop : 20}}>
                <Segmented options={['all', 'other', 'yours']} value={selectValue} onChange={(e)=>selectedChange(e)} />
            </div>
            <div className="comments-box">
                {commentList.map(comment=><div key={comment.comment_id}><CommentCard comment={comment} needDeleted={needDeleted} status={'message'}/></div>)}   
             </div>
        </div>
    )
}

export default MessageEvent;