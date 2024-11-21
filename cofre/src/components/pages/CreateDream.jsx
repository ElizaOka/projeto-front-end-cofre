
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from './CreateDream.module.css'

import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateDream = () => {
    const navigate = useNavigate();

     const [categorias, setCategorias] = useState([])


    const [dream, setDream] = useState({})

    function handlerChangeDream(event) {
        setDream({...dream, [event.target.name] : event.target.value});
        console.log(dream)
    }
    function handlerChangeCategory(event) {
        setDream({...dream, cod_categoria: event.target.value});
        console.log(dream);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/listagemCategorias',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*', 
                'Acess-Control-Allow-Headers':'*'
            }
        }).then(
            (resp)=>
                // console.log("RESPOSTA: " + resp)
                resp.json()
            
        ).then(
            (data)=>{
                console.log('DATA: ' + data.data.nome_categoria)
                setCategorias(data.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[])


    function CreateDream(dream) {
        
        console.log(JSON.stringify(dream))

        fetch('http://localhost:5000/inserirSonho', {
                method:'POST',
                mode:'cors',
                headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
                },
                body: JSON.stringify(dream)
        })
        .then(
                (resp)=>resp.json()
        )
        .then(
                (data)=>{
                console.log(data);
                navigate('/ListExtrat',{state:'sonho cadastrado!'});
                }
        )
        .catch(
                (err)=>{ console.log(err) }
        )
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        CreateDream(dream);
    }

    return (

        <section className={style.create_dream_container}>
            <h1>CADASTRO DE SONHOS</h1>

            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_sonho'
                    placeHolder='Digite seu sonho aqui'
                    text='Sonho'
                    handlerChangeDream={handlerChangeDream}
                />

                <Input
                    type='text'
                    name='valor_sonho'
                    placeHolder='Digite o valor'
                    text='Valor'
                    handlerChangeDream={handlerChangeDream}
                />

                <Input
                    type='text'
                    name='descricao_sonho'
                    placeHolder='Digite a descrição do sonho'
                    text='Descrição do sonho'
                    handlerChangeDream={handlerChangeDream}
                />

                <Select
                    name='categoria'
                    text='Escolha uma categoria '
                    options={categorias}
                    handlerChangeCategory={handlerChangeCategory}
                />

                <Button
                    rotulo='Cadastrar Sonho'
                />

            </form>

        </section>

    )
}

export default CreateDream