import React from 'react'
import style from './style.module.css'

const NavItem = props => {
    return (
        <div
            className={style.mainItem}
            onClick={() => (props.click ? props.click() : null)}
        >
            <a className={style.Item} href="#">
                {props.children}
            </a>
        </div>
    )
}

export default NavItem
