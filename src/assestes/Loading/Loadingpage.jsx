import LoadingCss from './LodingCss.module.css'

const Loadingpage = () => {

  return (
    <div className={LoadingCss.center}>
      <div className={LoadingCss.img}></div>
      <br />
      <h1>Loading please Wait...</h1>
    </div>
  )
}

export default Loadingpage
