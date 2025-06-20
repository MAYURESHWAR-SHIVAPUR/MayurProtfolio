import { useEffect, useRef, useState } from 'react'
import ResumeCss from './ResumeCss.module.css'
import frontend_1 from './frontend_1.png'
import frontend_2 from './frontend_2.png'
import fullstack_1 from './fullstack_1.png'
import fullstack_2 from './fullstack_2.png'
import Loading from '../Loading/Loadingpage'

const Resume = () => {
  const [loading, setLoading] = useState(true);
  
  const shows = useRef();
  const back = useRef();
  const arr = [frontend_1, frontend_2, fullstack_1, fullstack_2];
  const imgs_1 = useRef();
  const imgs_2 = useRef();
  const imgsource = [frontend_1, frontend_2, fullstack_1, fullstack_2];

  useEffect(() => {
    let loadedImg = 0;
    imgsource.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImg++;
        if (loadedImg === imgsource.length) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (shows.current) {
      shows.current.style.visibility = "hidden";
    }
  }, []);

  function hide() {
    shows.current.style.visibility = "hidden";
    back.current.style.visibility = "visible";
  }

  function show(e) {
    shows.current.style.visibility = "visible";
    back.current.style.visibility = "hidden";
    imgs_1.current.src = arr[e];
    imgs_2.current.src = arr[parseInt(e) + 1];
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>MY <span className={ResumeCss.fonts}>Resume</span></h1>
      <div ref={back} className={ResumeCss.outer}>
        <div className={ResumeCss.resume}>
          <div className={ResumeCss.frontend}>
            <img src={frontend_1} alt="" />
            <img src={frontend_2} alt="" />
          </div>
          <h1>Frontend Resume</h1>
          <button onClick={() => show(0)}>Read</button>
          <button className={ResumeCss.download}>Download</button>
        </div>

        <div className={ResumeCss.resume}>
          <div className={ResumeCss.frontend}>
            <img src={fullstack_1} alt="" />
            <img src={fullstack_2} alt="" />
          </div>
          <h1>Full Stack Resume</h1>
          <button onClick={() => show(2)}>Read</button>
          <button className={ResumeCss.download}>Download</button>
        </div>
      </div>

      <div ref={shows} className={ResumeCss.Reading}>
        <div className={ResumeCss.image}>
          <img ref={imgs_1} alt="" />
          <img ref={imgs_2} alt="" />
        </div>
        <button onClick={hide} className={ResumeCss.showButton}>Cancel</button>
      </div>
    </>
  );
};


export default Resume
