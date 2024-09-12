import React from "react";
import style from './CreateDream.module.css'

import Input from "../forms/Input"
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateDream = () => {
    return (
        <section className={style.create_dream_container}>
            <h1>CRIAR SONHOS</h1>
            <img src = "./src/assets/sonho2.png"/>
            
            <Input 
                type='text'
                name='txt_sonho'
                placeHolder='Digite o seu sonho'
                text='Sonho'
            />
            
            
            <Input 
                type='text'
                name='txt_descricao_sonho'
                placeHolder='Digite a descrição do sonho'
                text='Descrição do sonho'
            />
            <Input 
                type='text'
                name='txt_valor_sonho'
                placeHolder='Digite o valor do seu  sonho'
                text='Valor do sonho'
            />
            
            <Select 
                name='categoria'
                text='Escolha uma categoria de sonho'
            />

            
            <Button 
                rotulo='Cadastrar sonho'
            />
        </section>
    )
}

export default CreateDream;
