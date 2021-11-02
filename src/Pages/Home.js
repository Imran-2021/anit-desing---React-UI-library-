import React, { useEffect, useState } from 'react';
import HomeData from './HomeData';
import 'antd/dist/antd.css';
const Home = () => {
    

    const [data,setData]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data=>{
            setData(data);
        })
    },[])
    console.log(data);
    return (
        <div className="dd-flex">
            {
                data.map((data,idx)=><HomeData  key={idx} data={data}/>)
            }
        </div>
    );
};

export default Home;