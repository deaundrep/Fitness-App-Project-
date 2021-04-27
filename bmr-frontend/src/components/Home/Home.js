import React from "react";
//import backgroundImage from "./quote.jpeg"
import kick from './kick.mp4';
import register from './register.png'



function Home() {
    return <div style={{background: 'black'}}> 
        <video className='videoTag' autoPlay loop muted>
    <source 
    src={kick}
    type='video/mp4' 
    />
</video>
    <img src={register} alt="register"/>


</div>
}

export default Home;