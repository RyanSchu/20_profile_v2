import React from 'react'
const gitIcon = require('../../../src/assets/GH_icon.png')

export default function Project({data}) {
    const {id,title,src,deployedLink,github} = data
    return(
        <div key={id} class='card'>
            
            {title}
            <a href={deployedLink}>
                <img src={src} alt=''/>
            </a>
            <a href={github}>
                <img src={gitIcon} alt='github icon'/>
            </a>
        </div>
    )
}



