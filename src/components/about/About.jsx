import React from "react";
import "./About.css";
import ME from "../../assests/shashwatprofilephotoside.jpg";

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
          <p>
          Hi, I'm Shashwat Dwivedi, a Software Developer and a Computer Science & Engineering student at IIIT Kalyani (Batch of 2026). I have experience in full-stack development, cloud computing, and system design, working with technologies like MERN stack, Flutter, Supabase, and AWS.

I have worked as a Software Developer Intern at Wisit Digital Innovation Labs, where I gained hands-on experience in backend development, API design, and cloud services. I've built and contributed to projects like SyncTube, Word Document, and NoteX, focusing on performance, scalability, and user experience.

I'm also one of the organizers of StatusCode 1,  Eastern India largest student run hackathon that brings together developers to solve real-world challenges. I love exploring new technologies, solving complex problems, and building efficient software solutions.
          </p>
          <a href='#contact' className="btn btn-primary"> Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
