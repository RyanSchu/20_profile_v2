import React from 'react'
import avatar from '../../assets/Avatar.jpg'
export default function About() {
   
    return (
        <div class='content'>
            <h1>About Me</h1>
            <img src={avatar} alt='Avatar' />
            <p>
                I am a data scientist, web developer, and all around enthusiast for science and tech. I enjoy long walks on the beach and romantic candle lit dinners. Lookout gents, I'm single. 
            </p>
        </div>
        
        
    )
}