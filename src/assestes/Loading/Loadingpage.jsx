
import styles from './LodingCss.module.css';
const Loadingpage = () => {

  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>
        <div className={styles.boxWrap}>
          <div className={`${styles.box} ${styles.one}`}></div>
          <div className={`${styles.box} ${styles.two}`}></div>
          <div className={`${styles.box} ${styles.three}`}></div>
          <div className={`${styles.box} ${styles.four}`}></div>
          <div className={`${styles.box} ${styles.five}`}></div>
          <div className={`${styles.box} ${styles.six}`}></div>
        </div>
        <h1>Just a moment...</h1>
      </div>
    </div>
  )
}

export default Loadingpage