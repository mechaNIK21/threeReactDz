import React from 'react'
import style from './style.module.css'

import Google from './google'
import Input from '../Input'
import Button from '../Button'

const Content = () => {
    return (
        <main className={style.mainControl}>
            <div className={style.main}>
                <Google />
                <Input />
                <div>
                    <Button>Поиск в Google</Button>
                    <a href="https://www.google.com/doodles">
                        <Button>Мне повезет!</Button>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Content
