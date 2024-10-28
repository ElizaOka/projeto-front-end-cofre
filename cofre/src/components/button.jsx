import { Link } from 'react-router-dom'
import style from './button.module.css'

const Button = ({label, router, cod_sonho}) => {
    return(
        <div className={style.buttonContainer}>
            <Link to={`${router}${cod_sonho}`}>
            <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button