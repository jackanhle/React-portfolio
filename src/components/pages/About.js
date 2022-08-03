import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
export default function About() {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className= 'col-md-6'>
       <h1>About Me</h1>
       <img src={avatar} alt=''></img>
       </div>
     </div>
     <div className='row align-items-center'>
        <div className= 'col-md-4'>
            <h2>Anh Le</h2>
            <p>Hi my name is Anh Le. Currently I am looking for Web Developer job. I have finished Coding boot camp at Monash Universiy.

            </p>

        </div>
     </div>
     <div className='row align-items-center'>
        <div className= 'col-md-4'>
            <h2>Hobbies</h2>
            <p>
            In the free time i like to code, play tennis, swim, etc...

            </p>

        </div>
     </div>
      </div>
    );
}