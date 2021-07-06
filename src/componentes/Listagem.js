import React, { useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import listaVazia from '../assets/icones/lista-vazia.svg';
import { Item } from './Item';
import { executaRequisicao } from '../services/api';

export const Listagem = props => {

    const { tarefas, getTarefasComFiltro } = props;

    const [ showModal, setShowModal ] = useState(false);
    // STATES DO CADASTRO
    const [erro, setErro] = useState('');
    const [idTarefa, setIdTarefa] = useState(null);
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [dataPrevisaoTarefa, setDataPrevisaoTarefa] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');

    const selecionarTarefa = tarefa =>{
        setErro('');
        setIdTarefa(tarefa.id);
        setNomeTarefa(tarefa.nome);
        setDataPrevisaoTarefa(moment(tarefa.dataPrevistaConclusao).format('yyyy-MM-DD'));
        setDataConclusao(tarefa.dataConclusao);
        setShowModal(true);
    }

    const atualizarTarefa = async () =>{
        try{
            if(!nomeTarefa || !dataPrevisaoTarefa){
                setErro('Favor informar nome e data de previsão');
                return;
            }

            const body = {
                nome : nomeTarefa,
                dataPrevistaConclusao : dataPrevisaoTarefa,
                dataConclusao: dataConclusao
            }

            await executaRequisicao('tarefa/'+idTarefa, 'put', body);
            await getTarefasComFiltro();
            setNomeTarefa('');
            setDataPrevisaoTarefa('');
            setDataConclusao('');
            setIdTarefa(null);
            setShowModal(false);
        }catch(e){
            console.log(e);
            if(e?.response?.data?.erro){
                setErro(e.response.data.erro);
            }else{
                setErro('Não foi possível atualizar a tarefa, fale com o administrador.')
            }
        }
    }

    const excluirTarefa = async () =>{
        try{
            if(!idTarefa){
                setErro('Favor informar a tarefa a ser excluída');
                return;
            }

            await executaRequisicao('tarefa/'+idTarefa, 'delete');
            await getTarefasComFiltro();
            setNomeTarefa('');
            setDataPrevisaoTarefa('');
            setDataConclusao('');
            setIdTarefa(null);
            setShowModal(false);
        }catch(e){
            console.log(e);
            if(e?.response?.data?.erro){
                setErro(e.response.data.erro);
            }else{
                setErro('Não foi possível excluir a tarefa, fale com o administrador.')
            }
        }
    }

    return (
        <>
            <div className={"container-listagem " + (tarefas && tarefas.length > 0 ? "" : "vazia")}>

                {tarefas && tarefas.length > 0 ?
                    tarefas?.map(tarefa => <Item tarefa={tarefa} key={tarefa.id} selecionarTarefa={selecionarTarefa} />)
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
            <Modal show={showModal} onHide={() => setShowModal(false)} className="container-modal">
                <Modal.Body>
                    <p>Alterar uma tarefa</p>
                    {erro && <p className="error">{erro}</p>}
                    <input type="text" name="nome"
                        placeholder="Nome da tarefa"
                        className="col-12"
                        value={nomeTarefa}
                        onChange={evento => setNomeTarefa(evento.target.value)} />
                    <input type="text" name="dataPrevisao"
                        placeholder="Data de previsão de conclusão"
                        className="col-12"
                        value={dataPrevisaoTarefa}
                        onChange={evento => setDataPrevisaoTarefa(evento.target.value)}
                        onFocus={evento => evento.target.type = 'date'}
                        onBlur={evento => dataPrevisaoTarefa ? evento.target.type = 'date' : evento.target.type = 'text'} />
                    <input type="text" name="dataConclusao"
                        placeholder="Data de conclusão"
                        className="col-12"
                        value={dataConclusao}
                        onChange={evento => setDataConclusao(evento.target.value)}
                        onFocus={evento => evento.target.type = 'date'}
                        onBlur={evento => dataConclusao ? evento.target.type = 'date' : evento.target.type = 'text'} />
                </Modal.Body>
                <Modal.Footer>
                    <div className="buttons col-12">
                        <button onClick={atualizarTarefa}>Alterar</button>
                        <span onClick={excluirTarefa}>Excluir tarefa</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}