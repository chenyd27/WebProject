import React,{useRef,useState} from "react";
import { Carousel,Row,Col,Button,Affix } from 'antd';
import './ContainerLeft.css';
import { LeftOutlined , RightOutlined  } from "@ant-design/icons"

const contentStyle = {
    height: '80%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: '#fff',
  };
function ContainerLeft(props){
    const imgRef = useRef(null);
    const {eventInfo} = props;
    const [top, setTop] = useState(10);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const prev = () =>{
        imgRef.current.prev();
    }
    const next = () =>{
        imgRef.current.next();
    }
    return(
        <div style={{margin : 0}}>
            <Affix offsetTop={top}>
                <div className="picture-box">
                <Row>
                    <Col span={2} className="arow"><Button onClick={prev} shape="circle" icon={<LeftOutlined/>}/></Col>
                    <Col span={20}>
                        <Carousel ref={imgRef}>
                        {eventInfo.pictureList.map(picture=>
                            <div key={picture} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
                                        <img src={picture} className="img-box" style={contentStyle}/>
                                    </div>
                            </div>
                            )}
                        </Carousel>
                    </Col>
                    <Col span={2} className="arow"><Button onClick={next} shape="circle" icon={<RightOutlined/>}/></Col>
                </Row>
                </div>
            </Affix>
        </div>
    )
}
export default ContainerLeft;