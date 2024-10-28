import style from './CardDream.module.css'
import Button from './button'

const CardDream = ({ tipo, valor, imagem, cod_sonho}) => {
    
    return(
        <div className={style.cardDream}>
            <h3 className={style.tipo}>{tipo}</h3>
            <p className={style.valor}>{valor}</p>
            <img src={imagem} alt={tipo} title={{tipo}} />
            <div>
                <Button label='DETALHE' router='/DetailDream/' cod_sonho={cod_sonho}/>
            </div>
        </div>
    )
}

export default CardDream