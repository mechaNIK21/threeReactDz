import React from 'react'
import style from './style.module.css'
import Navbar from './Navbar'
import DropBox from './DropBox'
import Menu from './menu.jpg'
import Avatar from './avatar.jpg'

export default () => {
    const [isShowed, setIsShowed] = React.useState(false)
    return (
        <header className={style.Header}>
            <nav className={style.nawbar}>
                <Navbar>Почта</Navbar>
                <Navbar>Картинки</Navbar>
                <Navbar click={() => setIsShowed(!isShowed)}>
                    <img src={Menu} />
                </Navbar>
                <Navbar>
                    <img src={Avatar} />
                </Navbar>
                {isShowed && <DropBox />}
            </nav>
        </header>
    )
}
