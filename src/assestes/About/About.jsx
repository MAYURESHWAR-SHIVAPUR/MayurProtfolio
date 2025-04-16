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
        <h3> Bachelor of Engineering (2022 - 2026)</h3>
        <p> I am currently pursuing my Engineering degree in Computer Science at
          Cauvery Institute of Technology, Mandya, with an expected graduation in 2026.
          I excel in collaboration and communication, skills that set me apart and
          enhance my ability to work effectively in team environments</p>
        <br />
        <h3> High School PUC(2020 - 2022)</h3>
        <p>I completed my Pre-University Course (PUC) at Jambagi PU College, Belagavi,
          from 2020 to 2022, specializing in the Biology stream. During this time, I
          developed a strong understanding of scientific concepts while also enhancing
          my analytical and problem-solving skills. Though my focus was on biology, my
          passion for technology led me to pursue engineering in Computer Science. This
          diverse academic background gives me a unique perspective in the tech field.</p>
      </div>
      <div className={AboutCss.child2}>
        <img loading='lazy' src={mayur} alt="" />
      </div>
    </div>
  )
}

export default About
