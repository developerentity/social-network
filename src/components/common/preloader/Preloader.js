import React from 'react';
import style from './Preloader.module.css';
// import loading from '../../../assets/images/loading.gif';

const Preloader = () => {
    return (
        <div className={style.preloaderWrap}>
            {/* <img src={loading} alt='...' /> */}
            <h1>Preloader</h1>
        </div>
    )
}

export default Preloader;