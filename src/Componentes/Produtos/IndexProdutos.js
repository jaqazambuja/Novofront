import './IndexProdutos.css';
import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
//import Autenticacao from '../../Autenticacao';
import { MdHttp } from 'react-icons/md';

const IndexProduto = (props)=>{
    
    
    function deletar (event) {
       
        alert(`Produto  deletado  recaregar a pagina`)

        fetch(`http://localhost:3050/admin/produtos/delete/${props.id}`, {
            method: "DELETE",
            enctype:'multipart/form-data',
            headers: {
                "Content-Type": "application/json"
            }
            //transforma em json para mandar pra api e api mandar pro banco
                
        })
           
        
    }
    
    
    
    
    /*function deletar(){
        alert("Deletado com sucesso!")
       
    }*/
    return(
        <>         
                    <div className="card">
                    <div className="imgBox">
                            //<img className="img-img" src={require(`../../Imagens/Produtos/default.jpg`).default} />
                           </div>
                        <div className="details">
                            <div className="text-content">
                                <h3 className="textH3">{props.produto}</h3>
                                <span className="text-muted">{props.categoria}</span>
                                <div className="price text-danger">${props.valor}</div>
                            </div>
                            <h4 className="textH4">Para mais informações, clique no círculo do card.</h4>

                            <div className='containerproduto container-fluid d-flex justify-content-around'>
                            <button className= "btnServicoDeletar"  type="submit"  onClick={deletar}>Deletar</button>: <></>
                           <a href={'http://localhost:3000/editarprodutos'+props.id}><button className="btnProduto" type="submit" >Editar</button></a>
                    </div>
                        </div>
                        <div className="description">
                            <div className="iconProdu"><BsInfoCircleFill/></div>
                            <div className="contents">
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

export default IndexProduto;