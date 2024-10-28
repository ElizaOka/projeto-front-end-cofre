import React from 'react'

import style from './Container.module.css'

const ContainerDream = ({children}) => {
    return (
        <div className={style.container_dream}>
            {children}
        </div>
    )
}

export default ContainerDream
