import React from "react";
import style from './Home.module.css'

const Home = ()=> {
    return (
        <section className={style.home_container}>
            <h1> Bem vindo ao <span>Banco</span></h1>
            <p> Seu banco que realiza sonhos!</p>
            <img src ="./cofre2.png"/>

        </section>
    )
}
export default Home