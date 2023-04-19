import React,{useState} from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import './Avatar.css';

function Avatar(props) {
    const logout = () =>{
        navigate('/logout');
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
  }else{
    avatarClass = "avatar-detail-img";
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
        <img src={user.avatar} alt="Avatar" className={avatarClass} onClick={onClick}/>
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
