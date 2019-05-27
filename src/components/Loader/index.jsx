import React from 'react'
import LoaderIMG from './assets/loader.gif'
import style from './style.css'

const Loader = () => (
  <div className={style.wrapper}>
    { (typeof LoaderIMG !== 'undefined') && <img src={LoaderIMG} alt='Loader' /> }
  </div>
)

export default Loader
