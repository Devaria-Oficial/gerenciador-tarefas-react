import React from 'react';
import adicionar from '../assets/icones/adicionar.svg';

export const Footer = props => {
    const {showModal} = props;
    return (
        <div className="container-footer">
            <button onClick={showModal}><img src={adicionar} alt="Adicionar tarefa" />Adicionar tarefa</button>
            <span>© Copyright {new Date().getFullYear()} Devaria. Todos os direitos reservados.</span>
        </div>
    )
}