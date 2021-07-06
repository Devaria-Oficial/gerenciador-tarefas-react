import React from 'react';
import logo from '../assets/icones/devaria-logo.svg';
import sair from '../assets/icones/exit.svg';
import sairDesktop from '../assets/icones/exit-desktop.svg';

export const Header = props => {

    const {showModal} = props;

    const nomeCompleto = localStorage.getItem('usuarioNome');
    const primeiroNome = nomeCompleto?.split(' ')[0] || '';

    return (
        <div className="container-header">
            <img className="logo" src={logo} alt="Logo Devaria" />
            <button onClick={showModal}><span>+</span> Adicionar tarefa</button>
            <div className="mobile">
                <span>{'Olá, ' + primeiroNome}</span>
                <img className="sair" src={sair} alt="Deslogar" onClick={props.sair} />
            </div>
            <div className="desktop">
                <span>{'Olá, ' + primeiroNome}</span>
                <img className="sair" src={sairDesktop} alt="Deslogar" onClick={props.sair} />
            </div>
        </div>
    )
}