import { Outlet } from 'react-router-dom'
import SkillCss from './SkillCss.module.css'
import Cards from './cards'
import html from './photos/html.png'
import css from './photos/css.png';
import js from './photos/js.png'
import react from './photos/react.png'
import vite from './photos/vite.png'
import tailwind from './photos/tailwind.png'
import express from './photos/express.png'
import node from './photos/node.png'
import mondb from './photos/mongodb.png'
import ejs from './photos/ejs.png'
import git from './photos/git.png'
import github from './photos/github.png'
import ts from './photos/ts.png'
import java from './photos/java.png'
import py from './photos/py.png'
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loadingpage'


const Skills = () => {

  const [loading, setLoading] = useState(true);

  const imgsource = [html, css, js, tailwind, react, vite, express, node, mondb, ejs, git, github, ts, java, py];

  useEffect(() => {
    let loadedImg = 0;
    imgsource.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImg++;
        if (loadedImg == imgsource.length) {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      }
    })
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  const name = ['HTML', 'CSS', "JS", "TailwindCss", "React", "Vite", 'Express JS', 'NODE JS', "Mongo DB", "EJS", "git", "GitHub", "TypeScript", "JAVA", "Python"];
  const imgs = [html, css, js, tailwind, react, vite, express, node, mondb, ejs, git, github, ts, java, py];
  const cards = name.map((_, i) => <Cards name={name[i]} imgs={imgs[i]} />);
  return (
    <div className={SkillCss.outer}>
      <h1>My Skills</h1>
      <br /><br />
      <div className={SkillCss.outerblock}>
        {cards}
      </div>
      <Outlet />
    </div>
  )
}

export default Skills