import React from 'react'
import style from './style.module.css'
import ContentBox from './ContentBox'

import YouTube from './youtube.jpg'
import Map from './map.jpg'
import Gmail from './gmail.jpg'
import Gplay from './Gplay.jpg'
import Duo from './Duo.png'

const e = React.createElement

const items: Items[] = [
    { id: 1, text: 'YouTube', way: YouTube },
    { id: 2, text: 'Карты', way: Map },
    { id: 3, text: 'Почта', way: Gmail },
    { id: 4, text: 'Google Play', way: Gplay },
    { id: 5, text: 'Duo', way: Duo },
]

export default () => {
    return e(
        'div',
        { className: style.Content },
        items.map(item =>
            e(
                ContentBox,
                { key: item.id, text: item.text, way: item.way },
                null,
            ),
        ),
    )
}

// export default () => {
//     return (
//         <div className={style.Content}>
//             <ContentBox way={YouTube}>YouTube</ContentBox>
//             <ContentBox way={Map}>Карты</ContentBox>
//             <ContentBox way={Gmail}>Почта</ContentBox>
//         </div>
//     )
// }
