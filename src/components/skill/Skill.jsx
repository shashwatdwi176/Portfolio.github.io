import React from "react";
import "./Skill.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        {/* ======================= CATEGORY 1: Languages ======================= */}
        <div className="skill_frontend">
          <h3>Languages</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>C</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            {/* <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Solidity</h4>
              </div>
            </article> */}
          </div>
        </div>

        {/* ======================= CATEGORY 2: Technologies and Database ======================= */}
        <div className="skill_backend">
          <h3>Technologies</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Express.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Supabase</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Redis</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>TailwindCSS</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML5 / CSS3</h4>
              </div>
            </article>
          </div>
        </div>
        
        {/* ======================= CATEGORY 3: Devops and Cloud Technologies ======================= */}
        <div className="skill_frontend">
          <h3>DevOps and Cloud</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>AWS (Lambda, DynamoDB)</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Kubernetes</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>RabbitMQ</h4>
              </div>
            </article>
          
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Jenkins</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Terraform</h4>
              </div>
            </article>
          </div>
        </div>
        
        {/* ======================= CATEGORY 4: Developer Tools ======================= */}
        <div className="skill_backend">
          <h3>Developer Tools</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Git / GitHub</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Postman</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB Atlas</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
          
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Cloudinary</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill />
              <div>
                <h4>Jupyter Notebook</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;