import './rodape.css'
// import icones from '../imagens/icones.png';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from "react-icons/ai";
function Rodape() {
    return (

        <div className="rodape ">
            <div className='d-flex justify-content-around'>
              <div className='nossoProjeto'>
                    <h5>Nosso projeto</h5>
                    <a href='#sobreProjeto'><p>Sobre o projeto</p></a>
                    <a href='#comoFunciona'><p>Como funciona</p></a>
                    <a href='#paraQuem'><p>Para quem é</p></a>
                </div>
                 {/* 
                <div className='nossoSite'>
                    <h5>Nosso site</h5>
                    <a href='/'><p>Home</p></a>
                    <a href='/produtos'><p>Produtos</p></a>
                    <a href='/servicos'><p>Serviços</p></a>
                    <a href='/contato'><p>Contato</p></a>
                    <a href='#menu'><p>Voltar ao topo</p></a>
    </div>*/}
                <div className='nossasRedes'>
                    <h5>Nossas redes sociais</h5>
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> Facebook</a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> Instagram</a><br/>
                    <a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> Whatsapp</a><br/>
                </div>

               
            </div>
            <hr/>
            <p>&copy; Recode Pro</p>

        </div>

    )
}


export default Rodape;