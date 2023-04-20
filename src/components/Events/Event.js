import React,{useState} from "react";
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Event.css';
import { Input,Button,Tag,Col,Row } from 'antd';
import EventCard from "components/Card/EventCard";
import EventLeft from "./EventLeft/EventLeft";
import EventRight from "./EventRight/EventRight";

function Event(){
    const [searchContent, setSearchContent] = useState('');
    const [tagSelectedList,setTagSelectedList] = useState([]);
    const [sortMethod,setSortMethod] = useState('Recent Post');
    const addTag = (e)=>{
        setTagSelectedList([...tagSelectedList,e]);
    }
    // change sort api
    const changeSort = (e) => {
        setSortMethod(e);
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
    const sorts = [
        {
            label: <div onClick={()=>changeSort('Recent Post')}>Recent Post</div>,
            key: '0',
        },
        {
            label: <div onClick={()=>changeSort('Most Comments')}>Most Comments</div>,
            key: '1',
        },
        {
            label: <div onClick={()=>changeSort('Most Like')}>Most Like</div>,
            key: '2',
        }
    ]
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
                avatar : 'http://localhost:3000/assets/touxiang.png',
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
            content : 'The sun was setting over the horizon, casting a warm golden glow over the fields.',
            tagList : ['game','sport','scene','food'],
            user : {
                user_id : 1,
                username : 'cyd',
                avatar : 'http://localhost:3000/assets/touxiang.png',
            },            
            event_contain_picture : false,
            coverUrl : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872',
            createAt : '2023-4-19 09:20:00',
            commentCount : 10,
            likeCount : 10
        },
        {
            event_id : 2,
            title : 'test1',
            content : 'The sun was setting over the horizon, casting a warm golden glow over the fields. The birds were settling in for the night, their chirps slowly fading away. The air was still, with only the occasional rustle of leaves in the wind. It was a peaceful scene, one that made you forget about the worries of the day. As the last rays of sunlight disappeared, the stars began to twinkle in the sky. It was a reminder that although the day may have ended, there was still beauty to be found in the world.',
            tagList : ['game','sport','scene','food'],
            user : {
                user_id : 1,
                username : 'cyd',
                avatar : 'http://localhost:3000/assets/touxiang.png',
            },            
            event_contain_picture : false,
            coverUrl : 'https://cdn.glitch.global/0949e35b-594a-4e7d-8753-34bc4017c725/charutupian.png?v=1681916662872',
            createAt : '2023-4-19 09:10:00',
            commentCount : 10,
            likeCount : 10
        },
        {
            event_id : 3,
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
            createAt : '2023-4-19 09:00:00',
            commentCount : 10,
            likeCount : 10
        }
    ];
    const eventLeft = eventList.filter(item => item.event_id % 2 === 0);
    const eventRight = eventList.filter(item => item.event_id % 2 === 1);
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
                            <Button type="primary" onClick={searchSubmit}>Submit</Button>
                        </Space.Compact>
                    </div>
                    <div className="tag-show">
                        {tagSelectedList.map(tag => <Tag closable onClose={()=>closeTag(tag)} key={tag}>
                                {tag}
                        </Tag>)}
                    </div>
                </div>
                <div className="sort-box">
                    <div style={{marginRight : 5, fontWeight : "bold"}}>
                        Sort by: 
                    </div>
                    <div>
                    <Dropdown
                            menu={{
                                items : sorts
                            }}
                            trigger={['click']}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {sortMethod}
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="cardList">
                <Row>
                    <Col span={12}><EventLeft eventLeft={eventLeft}/></Col>
                    <Col span={12}><EventRight eventRight={eventRight}/></Col>
                </Row>
            </div>
        </div>
    )
}

export default Event;