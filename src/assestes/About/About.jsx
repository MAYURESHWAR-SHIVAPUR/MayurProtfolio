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
      }, 1000);
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
        <p> I am a passionate Java Developer
          and a Computer Science
          Engineering student at Cauvery
          Institute of Technology, Mandya,
          with a strong interest in software
          development and problem-solving.
          My journey in technology began with
          a curiosity to build and create,
          leading me to develop projects in
          web development and application
          design.
          I have hands-on experience in Java,
          along with knowledge of front-end
          and back-end technologies. My
          ability to collaborate effectively,
          communicate ideas clearly, and
          adapt to new challenges sets me
          apart in team environments. I enjoy
          working on innovative solutions and
          continuously expanding my skill set</p>
        <h2 className={AboutCss.fonts}>Educational History</h2>
        <h3> Bachelor of Engineering (2021 - 2025)</h3>
        <p> I am currently pursuing my Engineering degree in Electronis and Communication Engineering at
          Cauvery Institute of Technology, Mandya, graduated in 2025.
          I'm excel in collaboration and communication, skills that set me apart and
          enhance my ability to work effectively in team environments</p>
        <br />
        <h3> Pre University College (2019 - 2021)</h3>
        <p>I completed my Pre-University Course (PUC) at STG PU College, Mandya,
          from 2019 to 2021,with a focus on PCMB which helped to me understand science better and increased my interest in technology..</p>
        <br />
        <h3>SSLC (2019)</h3>
        <p>I completed my 10th from Nirmala English High school in pandavapura, where I built a strong foundation in science and mathematics.</p>
      </div>
      <div className={AboutCss.child2}>
        <img loading='lazy' src={mayur} alt="" />
      </div>
    </div>
  )
}

export default About
