import React from 'react'
import style from './style.module.css'
import Navbar from '../Header/Navbar'

export default () => {
    return (
        <footer className={style.Footer}>
            <nav>
                <Navbar>Реклама</Navbar>
                <Navbar>Для бизнеса</Navbar>
                <Navbar>Все о Google</Navbar>
            </nav>
            <nav>
                <Navbar>Конфидециальность</Navbar>
                <Navbar>Условия</Navbar>
                <Navbar>Настройки</Navbar>
            </nav>
        </footer>
    )
}
