import React from 'react';
import style from './FormControls.module.css'

export const Input = ({ meta, input, ...props }) => {

    // const hasError = meta.touched && meta.error

    return (
        // <div className={`${style.formControl} ${hasError && style.error}`}>
            <div>
                <input {...input} {...props} />
            </div>
        //     {/* { hasError && <span>{meta.error}</span>}
        // </div> */}
    )
}
