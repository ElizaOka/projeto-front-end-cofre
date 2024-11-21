
/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'


import style from '../pages/UpdateDream'
import Input from '../forms/Input'
import Select from '../forms/Select'
import Button from '../forms/Button'

const UpdateDream = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
        const [dream, setDream] = useState({});

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const {cod_sonho} = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categorias, setCategorias] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeDream(event) {
                setDream({...dream, [event.target.name] : event.target.value});
                console.log(dream)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeCategory(event) {
                setDream({...dream, cod_categoria: event.target.value});
                console.log(dream);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemCategorias', {
                        method:'GET',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Headers':'*'
                        },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setCategorias(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO Sonho DO BACKEND */
        useEffect(()=>{

                fetch(`http://localhost:5000/listarSonho/${cod_sonho}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then((resp) => resp.json())
    .then((data) => {
        console.log('Dados retornados pela API:', data); // Inspecione a estrutura aqui
        if (data && data.data) {
            setDream(data.data); // Atualize o estado apenas se a propriedade existir
            console.log('STATE atualizado:', data.data);
        } else {
            console.error('Estrutura inesperada na resposta da API.');
        }
    })
    .catch((err) => console.log('Erro ao buscar os dados do sonho:', err));

        }, []);

        useEffect(() => {
                console.log('Dream atualizado:', dream); // Monitore mudanças no estado
            }, [dream]);

        /* ALTERAÇÃO DOS DADOS DE SONHO */
        function updateDream(dream) {
        
                console.log(JSON.stringify(dream))
        
                fetch('http://localhost:5000/alterarSonho', {
                        method:'PUT',
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
                                navigate('/ListExtrat',{state:'SONHO ALTEARADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                updateDream(dream);
        }

        return (
                <section className={style.create_dream_container}>
                        
                        <h1>ALTERAÇÃO DE SONHO</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_sonho'
                                        placeHolder='Digite seu sonho'
                                        text='Sonho'
                                        value={dream.nome_sonho || ''}
                                        
                                        handlerChangeDream={handlerChangeDream}/>

                                <Input 
                                        type='text'
                                        name='valor_sonho'
                                        placeHolder='Digite o valor'
                                        text='Valor'
                                        value={dream.valor_sonho || ''}
                                        
                                        handlerChangeDream={handlerChangeDream}/>

                                <Input 
                                        type='text'
                                        name='descricao_sonho'
                                        placeHolder='Digite a descrição do sonho aqui'
                                        text='Descrição do Sonho'
                                        value={dream.descricao_sonho || ''}
                                        
                                        handlerChangeDream={handlerChangeDream}
                                    />
                                
                                <Select 
                                        name="categoria_id"
                                        text="Selecione a categoria do sonho"
                                        options={categorias}
                                        value={dream.cod_categoria || ''}
                                        
                                        handleChangeCategory={handleChangeCategory} />

                                <Button 
                                rotulo='Editar Sonho'/>

                        </form>

                </section>
        )
        }

export default UpdateDream
