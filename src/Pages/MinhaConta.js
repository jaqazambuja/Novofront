import MenuFechado from '../Componentes/Menu/MenuFechado';
import './Css/MinhaConta.css'
import Sair from '../Sair'
import {BsPersonSquare} from 'react-icons/bs';
import {BiCommentEdit, BiBriefcase, BiFoodMenu} from 'react-icons/bi';
import { FiEdit, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'
const MinhaConta = () => {
    return (
        <>
            <MenuFechado />

            <div className="containermc mb-5">
                <div className="row d-flex justify-content-center m-1">
                    <div className="col-md-10  mt-2 mb-4 pt-5">
                        <div className="row z-depth-3 boxPerfil">
                            <div className="col-sm-4  rounded-left">
                                <div className="card-block text-center text-white">
                                    <BsPersonSquare className="iconMinhaConta mt-5"/>
                                    <h2 className="font-weight-bold text-white mt-4">Nome</h2>
                                  
                                    <FiEdit className="fiEdit mb-3"/>
                                    <ul className="list-unstyled d-flex justify-content-center mt-4">
                                        <li><a href="#"> <FiFacebook className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiTwitter className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiInstagram className="iconContatoConta"/> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-8 bg-none text-white rounded-right">
                                <h2 className="mt-3 text-white text-center">Informaçoes</h2>
                                <hr className="badge-primary mt-0 w-25 ml-auto mr-auto"></hr>
                                <div className="text-white row mb-3">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bolder">Email:</p>
                                        <h3 className="text-muted">teste@gmail.com</h3>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bolder">Telefone:</p>
                                        <h3 className="text-muted">(11)997765-9090</h3>
                                    </div>
                                </div>

                                <div className="text-white row mb-3 ">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bolder">Username:</p>
                                        <h3 className="text-muted">@algumacoisa</h3>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bolder">Cidade:</p>
                                        <h3 className="text-muted">Sao Paulo</h3>
                                    </div>
                                </div>
                                <hr className="bg-primary"></hr>
                                <div className="row text-center mb-3">
                                    <div className="col-sm-4">
                                        <p className="font-weight-bolder">Cadastrar Produtos</p>
                                        <h3 className="text-muted"><a href="/cadastrarprodutos"><BiFoodMenu className='icon-minha-conta'/></a></h3>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="font-weight-bolder">Cadastrar Serviço</p>
                                        <h3 className="text-muted"><a href="/cadastrarservicos"><BiBriefcase className='icon-minha-conta'/></a></h3>
                                    </div>

                                    <div className="col-sm-4">
                                        <p className="font-weight-bolder">Editar Dados</p>
                                        <h3 className="text-muted"><a href="/editardados" ><BiCommentEdit className='icon-minha-conta'/></a></h3>
                                    </div>
                                </div>                                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <RodapeGeral/>
        </>
    )
}
export default MinhaConta;