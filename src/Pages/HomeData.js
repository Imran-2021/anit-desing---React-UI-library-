import { Card } from 'antd';
import React, { useState } from 'react';
import { GlobalOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import { FaTrash } from "react-icons/fa";
import Modall from './Modal';
const HomeData = ({ data }) => {
    const [color,setColor]=useState(true)
    function asdf(e){
        
        // console.log(color);
       if(color==true){
        //    console.log(color);
        e.target.style.color="red"
       }else{
        e.target.style.color="#694545"
       }
    }
    function asdff(e){
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none"
    }
    // console.log(color);
    const { name, username, phone, website, email } = data;
    // console.log(name, username, phone, website, email);
    const url = `https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`
    return (
        <div >
            <Card
                style={{ width: 340,backgroundColor:"#f5f5f5",  }}
                cover={<img height="200px" alt="example" src={url} />}
            >
               <div style={{ backgroundColor:"#fff",padding:"10px"}}>
               <h2>{name}</h2>
                <p><MailOutlined style={{ fontSize: '16px', color: 'black' }} />  {email}</p>
                <p><PhoneOutlined /> {phone}</p>
                 <p> <GlobalOutlined /> {website} </p>
               </div>
               <div className="others">
                   <p onClick={(e)=>asdf(e,setColor(!color))} className="heart"></p>
                   <Modall name={name} email={email} phone={phone} website={website}/>
                   <p onClick={(e)=>asdff(e)} style={{ fontSize: '26px', color: '#694545',cursor:"pointer" }}><FaTrash/></p>
               </div>
            </Card>
            
        </div>
    );
};

export default HomeData;