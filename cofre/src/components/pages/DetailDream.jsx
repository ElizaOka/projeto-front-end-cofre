import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import style from './DetailDream.module.css'
import Button from '../button'
import carro from '../../assets/sonhos/carro.jpg'

const DetailDream = () => {
    const {cod_sonho} =useParams()
    console.log("codigo do sonho "+ cod_sonho)
 
    const[dream, setDream] = useState({});

        useEffect(()=>{

            fetch(`http://localhost:5000/listarSonho/${cod_sonho}`, {
                method: 'GET',
                mode:'cors',
                headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            },
            })
                .then((resp)=>resp.json())
                .then((data)=>{
                setDream(data.data);
                console.log("dados do sonho" + data.data);
            })
            .catch((err)=>{console.log(err)});
    
            },[]);
    

    return(
        <div className={style.grid}> 
           <div className={style.container_img}>
                <img className={style.img_dream_detail} src={carro} alt='se voce esta lendo isso eu to chorando internamente' />
            </div>
            <div className={style.info}>
            <span className={style.tipo}>{dream.nome_sonho}</span>
                <span className={style.valor}>{dream.valor_sonho}</span>

                <span className={style.descricao}>
                    {dream.descricao_sonho}
                </span>
                <div className={style.container_buttons}>
                    <Button 
                        label='EDIT'
                        router='/updatedream/'
                        cod_sonho={dream.cod_sonho}
                    />

                    <Button 
                        label='DELETE'
                        router='/deleteDream/'
                        cod_sonho={dream.cod_sonho}
                    />

                </div>
            </div>
        </div>
    )
}

export default DetailDream