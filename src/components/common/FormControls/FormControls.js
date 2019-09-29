import React from 'react';
import style from './FormControls.module.css';

export const input = ({meta, input, ...props})=>{
    const error = meta.error && meta.touched;
    debugger;
    return(
        <span className = {error && style.error}>
            <input {...input} {...props}/>
            { error && <div className={style.errorInformation}> {meta.error} </div>}
        </span>
    );
}