import React from 'react';
import './WhatIDo.css'; // We'll create this CSS file next
// You'll need to install react-icons if you haven't already: npm install react-icons
import { FaLaptopCode, FaServer, FaCloud, FaBrain } from 'react-icons/fa'; 

const WhatIDo = () => {
  return (
    <section id='what-i-do'>
      <h5>My Core Capabilities</h5>
      <h2>What I Do</h2>

      <div className="container whatido_container">
        {/* Card 1: Full-Stack Application Development */}
        <article className="whatido_card">
          <div className="whatido_icon_wrapper">
            <FaLaptopCode className="whatido_icon" />
          </div>
          <h3>Full-Stack Application Development</h3>
          <p>
            Architecting and delivering end-to-end applications using <strong>MERN</strong>, <strong>Next.js</strong>, and clean code principles for scalability and maintainability. I focus on creating intuitive user experiences coupled with robust backend logic.
          </p>
        </article>

        {/* Card 2: Backend & Microservices Architecture */}
        <article className="whatido_card">
          <div className="whatido_icon_wrapper">
            <FaServer className="whatido_icon" />
          </div>
          <h3>Backend & Microservices Architecture</h3>
          <p>
            Designing robust backend systems, <strong>RESTful APIs</strong>, and implementing highly performant microservices with <strong>Node.js</strong>, <strong>Express.js</strong>, and message brokers like <strong>RabbitMQ/Kafka</strong>.
          </p>
        </article>

        {/* Card 3: Cloud & DevOps Engineering */}
        <article className="whatido_card">
          <div className="whatido_icon_wrapper">
            <FaCloud className="whatido_icon" />
          </div>
          <h3>Cloud & DevOps Engineering</h3>
          <p>
            Implementing CI/CD, containerization (<strong>Docker/Kubernetes</strong>), and managing infrastructure on <strong>AWS (Lambda, DynamoDB, S3)</strong> for high availability and performance. I ensure efficient deployment and operational excellence.
          </p>
        </article>

        {/* Card 4: AI Integration & Algorithmic Optimization */}
        <article className="whatido_card">
          <div className="whatido_icon_wrapper">
            <FaBrain className="whatido_icon" />
          </div>
          <h3>AI Integration & Algorithmic Optimization</h3>
          <p>
            Integrating intelligent features using <strong>Google Gemini/Vapi AI</strong> and applying advanced <strong>DSA</strong> knowledge to optimize core application logic, ensuring efficiency and innovative functionality.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WhatIDo;