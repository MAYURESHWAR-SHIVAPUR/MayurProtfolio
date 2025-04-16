import React from 'react'
import { Outlet } from "react-router"
import ProjectsCss from './ProjectsCss.module.css'
import Cards from './Cards'
// import { useEffect, useState } from 'react';
// import Errors from '../Error/Error'

const Projects = () => {

  
  // const [loading, setLoading] = useState(true);

  // const imgsource = [];
  // useEffect(() => {
  //   let loadedImg = 0;
  //   imgsource.map((src) => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => {
  //       loadedImg++;
  //       if (loadedImg == imgsource.length) {
  //         setTimeout(() => {
  //           setLoading(false);
  //         }, 1000);
  //       }
  //     }
  //   })
  // }, []);

  // if (loading) {
  //   return (
  //     <Errors />
  //   )
  // }



  // frontend first 
  const info_1 = "This web app features over six unique games, offering both single-player modes and AI - based gameplay.Developed using React, it showcases my  expertise in building interactive applications, implementing login systems, and crafting engaging user experiences with creativity.";
  const ul_1 = <ul> <li>React js</li> <li>Css</li></ul>
  const moreData_1 = "";

  // backend first
  const info_3 = "I independently developed this e-commerce website using HTML, CSS, JavaScript, Node.js, and Mongoose. The platform allows users to sign up, log in, browse, and purchase products, while business owners can upload and manage their listings, along with other advanced features.";
  const ul_3 = <ul><li>HTML</li><li>CSS</li><li>JS</li><li>Node js</li><li>Mongoose</li><li>Git & Git Hub</li></ul>

  // backend second
  const info_4 = "This is website which is connects two or more people in group where they can send text messsages , images and many more this is also User friendly and easy to use which make it more relaible"
  return (
    <div className={ProjectsCss.outer}>

      <h1>Frontend Projects</h1>
      <br />
      <Cards title="Interactive web Game" Basic_info={info_1} ul={ul_1} moreData={moreData_1} host="https://gammingwithmayur.netlify.app/" git='' />
      <Cards title="Upcomming" Basic_info="Not Yet Developed I will Make it soon" ul={ul_1} moreData="No Data avalible" />

      <br /><br /><br />

      <h3>Note : This project is also Developed by me!</h3>

      <br /><br /><hr />

      <h1>Backend Projects</h1>
      <Cards title="👗 Fashora Shopping Website" Basic_info={info_3} ul={ul_3} moreData={moreData_1} />
      <Cards title=" TalkBridge" Basic_info={info_4} ul={ul_3} moreData={moreData_1} />

      <br /><br /><hr />

      <h1>Java</h1>
      <Cards />
      <Outlet />

    </div>
  )
}

export default Projects
