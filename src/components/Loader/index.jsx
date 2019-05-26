import React from 'react'
import LoaderIMG from './assets/loader.gif'
import style from './style'

const Loader = () => (
  <div className={style.wrapper}>
    <img src={LoaderIMG} alt='Loader' />
  </div>
)

export default Loader
