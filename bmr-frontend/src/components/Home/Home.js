import React from "react";
//import backgroundImage from "./quote.jpeg"
import kick from './kick.mp4';

function Home() {
    return <div> Home
        <video className='videoTag' autoPlay loop muted>
    <source src={kick} type='video/mp4' />
</video>
        
        </div>
}

export default Home;