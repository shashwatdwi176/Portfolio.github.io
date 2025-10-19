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
          <h3>Wisit Digital Innovation Labs</h3>
          <p className="experience-date-location">
            Software Developer Intern | March 2024 – Present | Remote
          </p>
          <div className="skill_content">
            
            {/* Bullet 1: Full-stack MERN & API Integration */}
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Developed a full-stack travel planning platform using MERN stack (MongoDB, Express.js, React.js, Node.js, Supabase).
                </h4>
                <small className="text-light">
                  Integrated Google Maps Distance Matrix API to calculate real-time travel time, distance, and cost estimation.
                </small>
              </div>
            </article>

            {/* Bullet 2: Accuracy & Validation */}
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Achieved over 95% accuracy in test environments for travel cost and time estimation.</h4>
                <small className="text-light">
                  Validated platform functionality with 100+ mock itineraries.
                </small>
              </div>
            </article>

            {/* Bullet 3: AI-Driven Recommendation System */}
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Implemented an AI-driven recommendation system for personalized destination suggestions.
                </h4>
                <small className="text-light">
                  Based suggestions on user preferences, budget, itinerary constraints, and historical data analysis.
                </small>
              </div>
            </article>

            {/* Bullet 4: UI/Performance Optimization */}
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Created a responsive UI supporting advanced filters and interactive maps.
                </h4>
                <small className="text-light">
                  Achieved 40% faster load times through lazy loading and API call optimization.
                </small>
              </div>
            </article>
            
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Experience;