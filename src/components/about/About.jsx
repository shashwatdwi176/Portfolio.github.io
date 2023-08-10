import React from "react";
import "./About.css";
import ME from "../../assests/about-image.jpg";

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
            I am <b>Shashwat Dwivedi</b>, an enthusiastic student at the esteemed
            <b>Indian Institute of Information Technology, Kalyani.</b> Currently, I am
            dedicatedly pursuing my <b>Bachelor of Technology in Computer Science</b>
            and Engineering, with an anticipated graduation date in 2026.
            <br />
            Originating from the culturally rich city of Prayagraj in Uttar
            Pradesh, my journey through technology and learning has been both
            intriguing and exhilarating. My fervor for cutting-edge technologies
            is what truly sets me apart. At present, I am ardently immersed in
            mastering the <b>MERN stack</b> for web development and <b>Flutter</b> for
            crafting captivating applications.
            <br />
            However, my interests extend beyond the realm of technology. Delving
            into the world of literature, I find solace in the pages of books,
            each one an opportunity to explore new horizons of knowledge. My
            inclination towards meaningful human connections has led me to
            relish meeting diverse individuals, from whom I continuously glean
            insights and wisdom.
            <br />
            These multifaceted experiences collectively enrich my holistic
            growth and perspective. I am diligently shaping my portfolio to
            reflect this captivating journey of mine, a journey that seamlessly
            weaves together technology, literature, and the power of human
            connections.
          </p>
          <a href='#contact' className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
