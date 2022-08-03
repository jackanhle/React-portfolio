import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';
import { data } from '../assets/seedData';
import '../assets/styles/Footer.css';
function Footer() {
    let iconStyles = { fontSize: "18px" };
   return (
    <footer>
        <div className='container'>
            <ul>
                <li>
                    <a href={data.linkedinURL} target="_blank">
                    <i>
                    <FaLinkedinIn style={iconStyles} />
                     </i>
                     </a>
                </li>

                <li>
                    <a href={data.githubURL} target="_blank">
                    <i>
                    <FaGithub style={iconStyles} />
                     </i>
                     </a>
                </li>
                <li>
                    <a href={data.stackoverflowURL} target="_blank">
                    <i>
                    <FaStackOverflow style={iconStyles} />
                     </i>
                     </a>
                </li>
            </ul>
        </div>
    </footer>
    );
}

export default Footer;