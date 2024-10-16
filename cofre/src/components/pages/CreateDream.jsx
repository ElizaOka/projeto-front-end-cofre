import React, { useState, useEffect } from "react";
import style from './CreateDream.module.css'

import Input from "../forms/Input"
import Select from "../forms/Select";
import Button from "../forms/Button";



const CreateDream = () => {
    
     const [categorias, setCategorias] = useState([])
    
     const [dream, setDream] = useState({})
 
    
     function handlerChangeDream(event) {
         setDream({...dream, [event.target.name] : event.target.value});
         console.log(dream)
     }
 
         useEffect(()=>{
         fetch('http://localhost:5000/listagemCategorias', {
             method:'GET',
             headers:{
                 'Content-Type':'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Headers':'*',
             }
         }).then(
             (resp)=>
                 // console.log('RESPOSTA:' + resp)
                 resp.json()
             
         ).then(
             (data)=>{
                 console.log('DATA: ' + data.data[0].nome_categoria)
                 setCategorias(data.data)
             }
         ).catch(
             (error)=>{
                 console.log(error)
             }
         )
     },[]);
 
   
     function createDream(dream) {
         
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
                 alert(data.mensageStatus);
                 
                 }
         )
         .catch(
                 (err)=>{ console.log(err) }
         )
     }
 
   
     function submit(event) {
         event.preventDefault();
         createDream(dream);
     }
    return (
        <section className={style.create_dream_container}>
            <h1>CRIAR SONHOS</h1>
            <img src = "./src/assets/sonho2.png"/>
            
            <Input 
                type='text'
                name='txt_sonho'
                placeHolder='Digite o seu sonho'
                text='Sonho'
                handlerChangeDream={handlerChangeDream}
            />
            
            
            <Input 
                type='text'
                name='txt_descricao_sonho'
                placeHolder='Digite a descrição do sonho'
                text='Descrição do sonho'
                handlerChangeDream={handlerChangeDream}
            />
            <Input 
                type='text'
                name='txt_valor_sonho'
                placeHolder='Digite o valor do seu  sonho'
                text='Valor do sonho'
                handlerChangeDream={handlerChangeDream}
            />
            
            <Select 
                name='categoria'
                text='Escolha uma categoria de sonho'
                options={categorias}
            />

            
            <Button 
                rotulo='Cadastrar sonho'
            />
        </section>
    )
}

export default CreateDream;
