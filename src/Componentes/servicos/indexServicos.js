import './indexServicos.css';
import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
//import Autenticacao from '../../Autenticacao';

const IndexServicos = (props) => {
    
    function deletar(){
        alert(`Serviço  deletado, por gentileza   recaregar  a pagina`)

        fetch(`http://localhost:3050/admin/servicos/delete/${props.id}`, {
            method: "DELETE",
            enctype:'multipart/form-data',
            headers: {
                "Content-Type": "application/json"
            }
            //transforma em json para mandar pra api e api mandar pro banco
                
        })
    }

    return(
            <>
                <div className="card servico">
                        <div className="imgBox">
                            <img className="img-img" src={require(`../../Imagens/Servicos/default.jpg`).default} />
                        </div>
                        <div className="details">
                            <div className="text-content">
                                <h3 className="textH3">{props.servico}</h3>
                                <span className="text-muted">{props.categoria}</span>
                                <div className="price text-danger">{props.valor}</div>
                            </div>
                            <h4 className="textH4">Para mais informações, clique no círculo do card.</h4>

                            <div className='containerservicos container-fluid d-flex justify-content-around'>
                           <button className='btnServicoDeletar' onClick={deletar}>Deletar</button> : <></>

                        <button className="btnServico " type="button">Contato</button>
                    </div>
                        </div>
                        <div className="descriptionServico">
                            <div className="iconProdu"><BsInfoCircleFill/></div>
                            <div className="contentsServico">
                            <h2 className="textH2">Descrição</h2>
                                <p>{props.descricao}</p><hr/>
                                <div className="textoProduto">
                                    <p className="d-flex m-2"><b>Email:</b>{props.email}</p>
                                    <p className="d-flex m-2"><b>Telefone:</b>{props.telefone}</p>
                                    <p className="d-flex m-2"><b>Nome:</b>{props.nome}</p>
                                    <p className="d-flex m-2"><b>Username:</b>{props.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    );

}

export default IndexServicos;