import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
              
                <h4>Tailwind CSS</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
               
                <h4>Javascript</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
           
                <h4>React</h4>
                <samll className="text-light">Begineer</samll>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
              
                <h4>NodeJs</h4>
                <samll className="text-light">Beginner</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
           
                <h4>ExpressJs</h4>
                <samll className="text-light">Beginner</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
        
                <h4>MongoDB</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
    
                <h4>MySQL</h4>
                <samll className="text-light">Intermediate</samll>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Firebase/Flutter</h4>
                <samll className="text-light">Beginner</samll>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
