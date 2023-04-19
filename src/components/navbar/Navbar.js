import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css';
import Avatar from '../Avatar/Avatar';


function Navbar(){
    const topic = {
        label: 'Project Name',
        key: 'home',
        url: '/',
    }
    const info = {
        label: 'Info',
        key: 'info',
        url: '/info',
    }
    const items = [
        {
          label: 'Home',
          key: 'home',
          url: '/',
        },
        {
            label: 'Personal',
            key: 'personal',
            url: '/personal',
        },
        {
            label: 'Message',
            key: 'message',
            url : '/message'
        }
      ];
    const [current, setCurrent] = useState(localStorage.getItem('page') !== null ? localStorage.getItem('page') : 'home');
    const {user} = useSelector(state => state.userInfo);
    const navigate = useNavigate();
    const onClick = (e) => {
        setCurrent(e.key);
        localStorage.setItem('page',e.key);
        navigate(e.url);
    };
    const getSonMsg = (sonMsg) =>{
        if(sonMsg === true){
            setCurrent('info');
        }else{
            setCurrent(localStorage.getItem('page') !== null ? localStorage.getItem('page') : 'home');
        }
    }
    return (
        <div style={{height : '20%'}}>
            <div className='navbar-box'>
                <div className='navbar-left'>
                    <div className='navbar-item navbar-topic' onClick={()=>onClick(topic)}>
                        {topic.label}
                    </div>
                    {items.map(item => <div key={item.key} className={item.key === current ? 'navbar-item active' : 'navbar-item'} onClick={() =>onClick(item)}>
                        {item.label}
                    </div>)}
                </div>
                <div className='navbar-right'>
                    <Avatar user={user} getSonMsg={getSonMsg} status={1}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Navbar;