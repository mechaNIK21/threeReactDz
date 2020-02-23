import React from 'react'
import style from './style.module.css'

const e = React.createElement

const Slidebar = props => {
    return e(
        'a',
        { className: style.Item, href: '#' },
        e('img', { src: props.way }, null),
        e('span', null, props.text),
    )
}

export default Slidebar

// const Slidebar = props => {
//     return (
//         <a className={style.Item} href="#">
//             <img src={props.way} alt="" />
//             <span>{props.children}</span>
//         </a>
//     )
// }

// export default Slidebar
