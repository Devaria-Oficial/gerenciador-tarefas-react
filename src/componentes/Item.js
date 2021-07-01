import React from 'react';
import moment from 'moment';
import naoConcluido from '../assets/icones/not-checked.svg';
import concluido from '../assets/icones/checked.svg';

export const Item = props => {

    const { tarefa } = props;

    return (
        <div className="container-item">
            <img
                src={naoConcluido}
                alt="Selecionar tarefa" />
            <div>
                <p>{tarefa?.nome}</p>
                <span>Previsão de conclusão em: {moment(tarefa?.dataPrevisaoConclusao).format('DD/MM/yyyy')}</span>
            </div>
        </div>
    );
}