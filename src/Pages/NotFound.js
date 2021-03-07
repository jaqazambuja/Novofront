import React from 'react';
import Menu from '../Componentes/Menu/Menu'
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'
export default function NotFound() {
    return (
        <>
            <Menu />
            <div className='container container-fluid'>
                <h1>Página não encontrada</h1>
            </div>
            <RodapeGeral/>
        </>
    )
}