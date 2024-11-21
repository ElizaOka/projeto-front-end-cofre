import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteDream() {

    const {cod_sonho} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirSonho/${cod_sonho}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/ListExtrat',{state:'SONHO EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
            {/* <h1>TESTE DE EXCLUSÃO DE LIVRO!!!!</h1> */}
        </div>
    )
}

    export default DeleteDream