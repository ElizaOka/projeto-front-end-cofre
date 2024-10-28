import style from './NavBar.module.css'
import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <>
        <nav className= {style.navbar}>
            <ul className = {style.list}>
                <Link to='/'>
                    <li className ={style.item}><img className ={style.logo} src ="./logo.jpg"/></li>
                </Link>

                <Link to='/'>
                    <li className ={style.item}>HOME</li>
                </Link>

                <Link to ='/createDream'>
                    <li className ={style.item}>CREATE  DREAMS</li>
                </Link>

                <Link to ='/listExtrat'>
                    <li className ={style.item}>LIST EXTRAT</li>
                </Link>
            </ul>
        </nav>
        <Outlet/>
    </>
    )

}

export default NavBar