import React from "react";
import Pdf from '../../assets/images/resume.pdf';
export default function Resume() {
    return (
        <div className='container'>
        <div className='row align-items-center'>
            <div className= 'col-md-6'>
         <h1>Resume</h1>
         <h2>Frontend Skills:</h2>
         <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>React</li>
         </ul>
     </div>
     </div>
     <div className='row align-items-center'>
            <div className= 'col-md-6'>
            <h2>Backend Skills:</h2>
            <ul>
            <li>SQL</li>
            <li>Mongo</li>
            <li>Node</li>
            <li>Express</li>
         </ul>
         </div>
         </div>
         <p className="text-center">
                            Download my <a href={Pdf} className="text-faded white-link" download>resume</a>
                        </p>
     </div>

    );
}