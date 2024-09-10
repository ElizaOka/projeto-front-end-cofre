import React from "react";
import style from './CreateDream.module.css'

import Input from "../forms/Input"
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateDream = () => {
    return (
        <section className={style.create_dream_container}>
            <h1>CRIAR SONHOS</h1>
            
            {/* Campo para o sonho */}
            <Input 
                type='text'
                name='txt_sonho'
                placeHolder='Digite o seu sonho'
                text='Sonho'
            />
            
            {/* Campo para a descrição do sonho */}
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
            
            {/* Select para categoria */}
            <Select 
                name='categoria'
                text='Escolha uma categoria de sonho'
            />

            {/* Botão de cadastrar */}
            <Button 
                rotulo='Cadastrar sonho'
            />
        </section>
    )
}

export default CreateDream;
