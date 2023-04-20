import React,{useState} from "react";
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Event.css';
import { Input,Button,Tag,Col,Row } from 'antd';
import EventCard from "../Card/EventCard";


function PersonalEvent(){
    const [searchContent, setSearchContent] = useState('');
    const [tagSelectedList,setTagSelectedList] = useState([]);
    
    const addTag = (e)=>{
        setTagSelectedList([...tagSelectedList,e]);
    }
    
    const tags = [
        {
            label: <div onClick={()=>addTag('test1')}>test1</div>,
            key: '0',
        },
        {
            label: <div onClick={()=>addTag('test2')}>test2</div>,
            key: '1',
        }
        ];
    
    const searchChange = (e) =>{
        setSearchContent(e.target.value);
    }
    // test eventList
    const eventList = [
        {
            event_id : 0,
            title : 'test1',
            content : 'The sun was setting over the horizon, casting a warm golden glow over the fields. The birds were settling in for the night, their chirps slowly fading away. The air was still, with only the occasional rustle of leaves in the wind. It was a peaceful scene, one that made you forget about the worries of the day. As the last rays of sunlight disappeared, the stars began to twinkle in the sky. It was a reminder that although the day may have ended, there was still beauty to be found in the world.',
            tagList : ['game','sport','scene','food'],
            user : {
                user_id : 1,
                username : 'cyd',
                avatar : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/touxiang.png?v=1681870561544',
            },
            event_contain_picture : true,
            coverUrl : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872',
            createAt : '2023-4-19 09:30:00',
            commentCount : 10,
            likeCount : 10
        },
        {
            event_id : 1,
            title : 'test1',
            content : 'The sun was setting over the horizon, casting a warm golden glow over the fields. The birds were settling in for the night, their chirps slowly fading away. The air was still, with only the occasional rustle of leaves in the wind. It was a peaceful scene, one that made you forget about the worries of the day. As the last rays of sunlight disappeared, the stars began to twinkle in the sky. It was a reminder that although the day may have ended, there was still beauty to be found in the world.',
            tagList : ['game','sport','scene','food'],
            user : {
                user_id : 1,
                username : 'cyd',
                avatar : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/touxiang.png?v=1681870561544',
            },            
            event_contain_picture : false,
            createAt : '2023-4-19 09:20:00',
            commentCount : 10,
            likeCount : 10
        }
    ];

    // useEffect to get all Events

    // submit search API
    const searchSubmit = () => {
        console.log(tagSelectedList);
    }
    const closeTag = (e) => {
            let newTagSelectedList = tagSelectedList.filter(item => item !== e);
            setTagSelectedList(newTagSelectedList);
      };
    return (
        <div>
            <div className="sortBar">
                <div className="search-box">
                    <div className="tag-box">
                        <Dropdown
                            menu={{
                                items : tags
                            }}
                            trigger={['click']}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    tag select
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                  
                    <div className="search-input">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="Search Content" value={searchContent} onChange={(e)=>searchChange(e)} style={{width : 300}}/>
                            <Button type="primary" onClick={searchSubmit}>Search</Button>
                        </Space.Compact>
                    </div>
                  
                    <div className="tag-show">
                        {tagSelectedList.map(tag => <Tag closable onClose={()=>closeTag(tag)} key={tag}>
                                {tag}
                        </Tag>)}
                    </div>
                </div>
                
            </div>
            <div className="cardList">
              <Row>
                    {eventList.map(event => <Col key={event.event_id} span={24}><EventCard event={event} status={'personal'}/></Col>)}
              </Row>
            </div>
        </div>
    )
}

export default PersonalEvent;