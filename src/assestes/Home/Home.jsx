import React, { useEffect, useState } from 'react'
import HomeCss from './Home.module.css'
import Loading from '../Loading/Loadingpage'
import mayur from './mayur.png'

const Profile = () => {
  const imgsorce = mayur;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imgsorce;
    img.onload = () => {
      setLoading(false);
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
    <div className={HomeCss.outer}>
      <div className={HomeCss.child1}>
        <h1>I'm <u>Mayureshwar</u></h1>
        <div className={HomeCss.lines}></div>
        <h3>Aspiring<span> Mernstack Developer</span></h3>
        <br /><br />
        <h4>Quick Intro</h4>
        <p> I am a passionate Web Developer and a Computer Science Engineering student at Cauvery Institute of Technology, Mandya, with a strong interest in software development and problem-solving. My journey in technology began with a curiosity to build and create, leading me to develop projects in web development and application design. I have hands-on experience in Java, along with knowledge of front-end and back-end technologies. My ability to collaborate effectively, communicate ideas clearly and adapt to new challenges sets me apart in team environments. I enjoy working on innovative solutions and continuously expanding my skill set.</p>
        <br /><br />
        <a className={HomeCss.Download} href="">Download CV</a>
        <a href="https://wa.me/916360656920?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank">
          <i class="fa-brands fa-whatsapp" ></i>
        </a>
        <a href="https://github.com/MAYURESHWAR-SHIVAPUR">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mayureshwar-shivapur-a34b25313">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="tel:+916360656920">
          <i class="fa-solid fa-phone-flip fa-flip-horizontal" ></i>
        </a>
      </div>
      <div>
        <div className={HomeCss.img}>
          <img loading='lazy' src={mayur} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Profile
