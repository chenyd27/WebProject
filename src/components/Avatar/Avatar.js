import React,{useState} from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import './Avatar.css';

function Avatar(props) {
    const logout = () =>{
        navigate('/login');
        localStorage.setItem('page','login');
    }
    const items = [
        {
            label: <a onClick={logout}>Log out</a>,
            key: '0',
        }
        ];
  const [user,setUser] = useState(props.user); 
  const [infoActive,setInfoActive] = useState(false);
  let avatarClass = "avatar-navbar-img";
  if(props.status === 1){
    avatarClass = "avatar-navbar-img";
  }else if(props.status === 2){
    avatarClass = "avatar-comment-img";
  }else if(props.status === 3){
    avatarClass = "avatar-detail-img";
  }else{
    avatarClass = "avatar-event-info-img";
  }
  const navigate = useNavigate();
  const onClick = () =>{
        setInfoActive(true);
        navigate('/info');
        localStorage.setItem('page','info');
        getSonMsg(true);
  }
  const {getSonMsg} = props;
  return (
    <div className='avatar-box'>
        <img src={user.avatar} alt="Avatar" className={avatarClass} onClick={props.status === 1 ? onClick : null}/>
        {props.status === 3 || props.status === 2 ? <div>{props.title}</div> : <div style={{display : 'none'}}></div>}
        {props.status === 2 ? <div style={{marginLeft : 30,fontSize : 10,color : '#7B8FA1'}}>{props.create_time}</div>  : <div style={{display : 'none'}}></div>}
        {props.status === 4 ? <div style={{fontSize : 30,fontWeight : 'bolder'}}>{props.title}</div> : <div style={{display : 'none'}}></div>}
        <div className={props.status === 1 ? 'drop-box' : 'hidden-box'}>
            <Dropdown
                menu={{
                items,
                }}
                trigger={['click']}
                >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {user.username}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>
  );
}

export default Avatar;
