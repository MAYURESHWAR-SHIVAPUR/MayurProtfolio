import { Outlet } from 'react-router-dom'
import CertificateCss from './CertificateCss.module.css';
import img_1 from './photos/1.png';
import img_2 from './photos/2.jpg';
import img_4 from './photos/3.jpg';
import img_3 from './photos/4.jpg';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loadingpage'

const Certificate = () => {

  const [loading, setLoading] = useState(true);

  const imgsource = [img_1, img_2, img_3, img_4];

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

  const certificates = [img_1, img_2, img_3, img_4];
  const cerificat = certificates.map((e) =>
    < img src={e} className={CertificateCss.child} ></img >
  );
  return (
    <section className={CertificateCss.body}>
      <br /><br />
      <h1>Certificates, I have Achived from my skills</h1>
      <br /><br />
      <div className={CertificateCss.outer}> {cerificat}  </div>
      <Outlet />
    </section>
  )
}

export default Certificate
