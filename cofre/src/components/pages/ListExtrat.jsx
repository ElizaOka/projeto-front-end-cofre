import React, { useState, useEffect } from "react";
import style from './ListExtrat.module.css';
import Container from '../layout/Container';
import ContainerDream from "../layout/ContainerDream";
import CardDream from "../CardDream";

import carro from '../../assets/sonhos/carro.jpg';

const ListExtrat = () => {
    const [dream, setDream] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listarSonho', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log('Sonhos: ' + data.data);
            setDream(data.data);
            console.log('STATE: ' + dream);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <section className={style.list_dream_container}>
                <h1>Listar Sonhos</h1>
                <ContainerDream>
                    {
                        dream.map((dreamItem) => (
                            <CardDream
                                titulo={dreamItem.nome_sonho}
                                autor={dreamItem.valor_sonho}
                                imagem={carro}
                                cod_sonho={dreamItem.cod_sonho}
                                key={dreamItem.cod_sonho}
                            />
                        ))
                    }
                </ContainerDream>
            </section>
        </Container>
    );
}

export default ListExtrat;
