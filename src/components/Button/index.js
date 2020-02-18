import React from 'react'
import style from './style.module.css'

const Button = props => {
    return <button className={style.Button}>{props.children}</button>
}

export default Button
