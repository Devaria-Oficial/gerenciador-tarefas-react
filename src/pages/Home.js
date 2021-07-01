import React, { useState } from 'react'
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';
import { Listagem } from '../componentes/Listagem';
import { Footer } from '../componentes/Footer';

export const Home = props => {

    const [tarefas, setTarefas] = useState([
        {
            id: '123fczasd',
            nome: 'Tarefa Mock 1',
            dataPrevisaoConclusao: '2021-07-03',
            dataConclusao: null
        },
        {
            id: 'rfasf123123',
            nome: 'Tarefa Mock 2',
            dataPrevisaoConclusao: '2021-07-01',
            dataConclusao: '2021-06-30'
        }
    ]);

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
            <Listagem tarefas={tarefas}/>
            <Footer />
        </>
    );
}