import Menu from "../Componentes/Menu/Menu";
import {BsFillCaretDownFill} from 'react-icons/bs';
import './Css/Servicos.css';
import React from 'react';
import IndexServicos from "../Componentes/servicos/indexServicos";
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';

const Servicos = () => {
    const [action, setAction] = React.useState('');
    
    React.useEffect(async()=>{

        const url = await fetch('http://localhost:3050/servicos');    
        const urlResponse = await url.json();

        setAction(urlResponse);
        console.log(action);
    }, []);
     return (
    <>
              
        <Menu/> 
        <nav className="navbar navbar-expand-lg navbar-light fundoNavItens">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""><BsFillCaretDownFill/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Limpeza</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Reforma</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Babá</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Costureira</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Pintura</a>
                    </li>
                  
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Outros<BsFillCaretDownFill className="ml-2"/>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Educação</a></li>
                            <li><a className="dropdown-item" href="#">Serviços Domésticos</a></li>
                            <li className="dropdown-divider"></li>
                            <li><a className="dropdown-item" href="#">Salão de Beleza</a></li>
                            <li><a className="dropdown-item" href="#">Transporte</a></li>
                        </ul>
                    </li>
                    
                    </ul>
                    <form className="d-flex ml-auto">
                        <input className="form-control me-2 mr-4" type="search" placeholder="Pesquisar Produto" aria-label="Search" />
                        <button className="btn botaoBuscar" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">                
                <div className="row">
                    <div className="col-md-4 col-lg-1 col-sm-12 col-xs-12 mb-3 wrapperServico">
                        <div className="sidebar">
                        <img className="imgSidebarServico" src={require('../Imagens/cabelo.PNG').default}/>
               
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-11 col-xs-12 box-servico mb-5" id="">  
                        {action && action.map(mapear => <IndexServicos username={mapear.username} nome={mapear.nome} email={mapear.email} servico={mapear.servico} categoria={mapear.categoria} valor={mapear.valor} descricao={mapear.descricao} telefone={mapear.celular} imagem={mapear.imagem} />)}  
                    </div>
                </div>
            </div>
        <RodapeGeral/>
    </>
           
    )

}

   
export default Servicos;