import React from 'react';
import gh from '../assets/GH_icon.png'
import gm from '../assets/GM_icon.png'
import li from '../assets/LI_icon.png'

export default function Footer({ currentPage, handlePageChange }) {
    return(
        <div id='footer'>
            <nav>
                <a href='https://github.com/RyanSchu'>
                    <img src={gh}  alt='github icon'/>
                </a>
                <a href='mailto: ry.a.schubert@gmail.com'>
                    <img src={gm}  alt='gmail icon'/>
                </a>
                <a href='https://www.linkedin.com/in/ryan-schubert-299a76126/'>
                    <img src={li}  alt='linkedin icon'/>
                </a>
            </nav>
        </div>
    )
}