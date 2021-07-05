import React, { useState } from 'react';
import filtro from '../assets/icones/filtro.svg';

export const Filtros = props => {

    const {periodoDe, periodoAte, status, setPeriodoDe, setPeriodoAte, setStatus} = props;

    const [showFiltros, setShowFiltro] = useState(false);

    return (
        <div className="container-filtros">
            <div className="title">
                <span>Tarefas</span>
                <img
                    src={filtro}
                    alt="Filtrar tarefas" onClick={() => setShowFiltro(!showFiltros)} />
                <div className="form">
                    <div>
                        <label>Data prevista de conclusão de:</label>
                        <input type="date" value={periodoDe} onChange={evento => setPeriodoDe(evento.target.value)}/>
                    </div>
                    <div>
                        <label>até:</label>
                        <input type="date" value={periodoAte} onChange={evento => setPeriodoAte(evento.target.value)}/>
                    </div>
                    <div className="line" />
                    <div>
                        <label>Status:</label>
                        <select
                            value={status} onChange={evento => setStatus(evento.target.value)}>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            </div>
            {showFiltros === true && (
                <div className="filtrosMobile">
                    <div>
                        <label>Período de:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Período até:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}