import React from 'react'
import style from './style.module.css'

const e = React.createElement

export default props => {
    return e(
        'div',
        {
            className: style.mainItem,
            onClick: () => (props.click ? props.click() : null),
        },
        e('a', { className: style.Item, href: '#' }, props.children),
    )
}

// const NavItem = props => {
//     return (
//         <div
//             className={style.mainItem}
//             onClick={() => (props.click ? props.click() : null)}
//         >
//             <a className={style.Item} href="#">
//                 {props.children}
//             </a>
//         </div>
//     )
// }

// export default NavItem
