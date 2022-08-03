import React from "react";
import { projects } from '../../assets/seedData';
import Project from '../Project';
import '../../assets/styles/Portfolio.css';
export default function Portfolio() {
    return (
        <div className='container'>
        <div className='row align-items-center'>
            <div className= 'col-md-6'>
   <h1>Portfolio</h1>
   </div>
 </div>
 <div className="row">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
  
    );
}
