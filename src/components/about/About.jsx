import React from "react";
import "./About.css";
import ME from "../../assests/shashwatprofilephotoside.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className=" about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about_content">
          {/* Paragraph 1: Introduction and Core Expertise */}
          <p>
            Hi, I'm <strong>Shashwat Dwivedi</strong>, a Computer Science & Engineering student at <strong>IIIT Kalyani</strong> (B.Tech '26) with a passion for building robust, end-to-end applications. My primary focus is on <strong>Full-Stack Development</strong> (MERN/Next.js) and designing scalable systems using <strong>AWS Cloud Architecture</strong>.
          </p>

          {/* Paragraph 2: Impactful Experience & Technical Depth */}
          <p>
            I excel at transforming ideas into high-performance products. During my internship at <strong>Wisit Digital Innovation Labs</strong>, I engineered an <strong>AI-driven travel platform</strong>, achieving <strong>95%+ accuracy</strong> in real-time cost estimation. Technically, I specialize in complex projects, including a serverless <strong>LMS on AWS Lambda/DynamoDB</strong> and a <strong>RabbitMQ-based microservice</strong> for a cab platform. I'm also a committed problem solver, having conquered **500+ LeetCode problems**.
          </p>

          {/* Paragraph 3: Leadership and Forward Vision */}
          <p>
            Beyond coding, I'm a leader and community builder, having served as <strong>External Core at GDSC IIIT Kalyani</strong> and as an organizer for <strong>StatusCode 1</strong>, Eastern India's largest student hackathon. I am driven to innovate and am currently seeking opportunities to leverage my architecture and development skills to build the next generation of user-centric software.
          </p>
          
          <a href='#contact' className="btn btn-primary"> Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;