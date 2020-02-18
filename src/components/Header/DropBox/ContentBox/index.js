import React from 'react'
import style from './style.module.css'

const Slidebar = props => {
    return (
        <a className={style.Item} href="#">
            <img src={props.way} alt="" />
            <span>{props.children}</span>
        </a>
    )
}

export default Slidebar
