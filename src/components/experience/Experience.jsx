import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Past Work</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        <div className="skill_frontend">
          <h3>Wisit Digital Innovation Labs Pvt Ltd</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Works as Software Developer Intern</h4>
                
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Conceptualizing and implementing the architectural framework of the website, using MongoDB, NodeJs,
                ExpressJs, ReactJs ensuring scalability and efficiency</h4>
               
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
              
                <h4> Integrating GenAI features like Itinerary planner, Journey Planner, ChatBot using OpenAI API.</h4>
               
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
               
                <h4>Implementing sophisticated filtering mechanisms, empowering users to discover optimal destinations based on
factors like temperature, location, sun timing, air quality, and various experiential scores including spiritual
and nightlife preferences.</h4>
               
              </div>
            </article>
            
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Experience;
