import React from 'react'
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';
import { Listagem } from '../componentes/Listagem';
import { Footer } from '../componentes/Footer';

export const Home = props => {

    const sair = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair}/>
            <Filtros />
            <Listagem />
            <Footer />
        </>
    );
}