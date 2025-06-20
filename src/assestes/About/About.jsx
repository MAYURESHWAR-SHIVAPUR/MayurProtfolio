import React, { useEffect, useState } from 'react'
import AboutCss from './About.module.css'
import mayur from '../Home/mayur.png';
import Loading from '../Loading/Loadingpage'
const About = () => {


  const imgsorce = mayur;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = imgsorce;
    img.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
    img.onerror = (e) => {
      console.log("error", e.message);
    }
  }, []);
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className={AboutCss.outer}>
      <div className={AboutCss.child1}>
        <h2>Hi, I'm <b className={AboutCss.fonts}>MAYURESHWAR</b> </h2>
        <p> I have a strong foundation in front-end and back-end web development, with hands-on experience using HTML, CSS, and JavaScript to build interactive and responsive user interfaces. I am proficient in React.js and Tailwind CSS, which I use to create modern and dynamic web applications with clean and efficient code. On the server-side, I work with Node.js and Express.js to develop scalable APIs and backend logic. I manage databases effectively using Mongoose with MongoDB, ensuring efficient data handling and performance. Additionally, I am skilled in EJS for server-side templating and use Git and GitHub for version control and collaborative development, maintaining clean and organized repositories throughout my projects.
        </p>
        <br /><br />
        <h2 className={AboutCss.fonts}>Educational History</h2>
        <h3> Bachelor of Engineering (2022 - 2026)</h3>
        <p> I am currently pursuing my Engineering degree in Computer Science Engineering at
          Cauvery Institute of Technology, Mandya, graduating in 2026.
          I'm excel in collaboration and communication skills that set me apart and
          enhance my ability to work effectively in team environments. I have Great Codding Skills In Javascript, Typescript, C++, Python</p>
        <br />
        <h3> Pre University College (2019 - 2021)</h3>
        <p>I completed my Pre-University Course (PUC) at Jambagi PU College, Belgavi,
          from 2020 to 2022,with a focus on PCMB which helped to me understand science better and increased my interest in technology...</p>
        <br />
        <h3>SSLC (2019)</h3>
        <p>I completed my 10th from ST. Theresa School Hidkal Dam in Belgavi, where I built a strong foundation in science and mathematics.</p>
      </div>
      <div className={AboutCss.child2}>
        <img loading='lazy' src={mayur} alt="" />
      </div>
    </div>
  )
}

export default About
