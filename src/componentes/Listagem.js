import React from 'react';
import listaVazia from '../assets/icones/lista-vazia.svg';
import { Item } from './Item';

export const Listagem = props => {

    const { tarefas } = props;

    return (
        <div className={"container-listagem "+ (tarefas && tarefas.length > 0 ? "" : "vazia")}>

            {tarefas && tarefas.length > 0 ?
                tarefas?.map(tarefa => <Item tarefa={tarefa} key={tarefa.id}/> )
            :
                <>
                    <img
                        src={listaVazia}
                        alt="Nenhuma atividade encontrada"
                    />
                    <p>Você ainda não possui tarefas cadastradas!</p>
                </>
            }
        </div>
    )
}