import React from "react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-me">
          <img
            src="/assets/light-photo.jpg"
            alt="Juan Camilo Restrepo"
            className="profile-photo"
          />
          <h2>Hi! 👋 </h2>
          <p>
            I'm Juan Camilo Restrepo, a Data Professional with a theoretical
            physics background. I thrive in the dynamic interplay of data
            engineering, science, and analytics. Whether it's through coding,
            dissecting datasets, or modeling intricate patterns, I transform
            data into powerful insights and actionable strategies.
          </p>
          <p>
            Armed with a Post Baccalaureate Diploma from Douglas College in
            Canada, I navigate SQL databases, cleanse data, and leverage
            statistical methods with precision. My approach melds rigorous
            scientific training with cutting-edge analytical techniques, always
            with an eye toward innovation and efficiency. Let's explore how my
            passion for data and robust analytical toolkit can propel your
            projects forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
