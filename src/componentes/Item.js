import React from 'react';
import moment from 'moment';
import naoConcluido from '../assets/icones/not-checked.svg';
import concluido from '../assets/icones/checked.svg';

export const Item = props => {

    const { tarefa, selecionarTarefa } = props;
    const {dataConclusao, nome, dataPrevistaConclusao} = tarefa;

    const getDataTexto = (dtConclusao, dtPrevisaoConclusao) => {
        if(dtConclusao){
            return `Concluído em: ${moment(dtConclusao).format('DD/MM/yyyy')}`
        }else{
            return `Previsão de conclusão em: ${moment(dtPrevisaoConclusao).format('DD/MM/yyyy')}`
        }
    };

    return (
        <div className={"container-item " + (dataConclusao ? "" : "ativo")} onClick={() => dataConclusao ? null : selecionarTarefa(tarefa)}>
            <img
                src={dataConclusao ? concluido : naoConcluido}
                alt={dataConclusao ? "tarefa concluída" : "selecione a tarefa"} />
            <div>
                <p className={dataConclusao? "concluido" : ""}>{nome}</p>
                <span>{getDataTexto(dataConclusao, dataPrevistaConclusao)}</span>
            </div>
        </div>
    );
}