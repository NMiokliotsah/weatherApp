import React from 'react';
import style from './Info.module.css';
const Info = ()=>{
    return (
        <div className={style.giveWeather}>
            <input placeholder="City"/>
            <button>download</button>
        </div>
    );
}

export default Info;