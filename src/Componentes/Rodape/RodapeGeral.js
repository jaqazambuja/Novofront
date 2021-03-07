import React from 'react';
import './rodape.css'
// import icones from '../imagens/icones.png';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from "react-icons/ai";



function RodapeGeral(){
    return (           
<div ClassName="ContatoCompleto">
     <div>
<div  ClassName="contatotodo">
    <div className="ContatoBackground">
     <div className="ContatoContainer">
       <div className="ContatoScreen">
       
         <div className="Contato-Screen-header">
           <div className="Contato-Screen-header-left">
             <div className="Contato-Screen-header-button close"></div>
             <div className="Contato-Screen-header-button maximize"></div>
             <div className="Contato-Screen-header-button minimize"></div>
           </div>
           
           <div className="Contato-Screen-header-right">
             
             <div className="Contato-Screen-header-ellipsis"></div>
             <div className="Contato-Screen-header-ellipsis"></div>
             <div className="Contato-Screen-header-ellipsis"></div>
           </div>
         </div>
<div>             <div> 
   <img src={require('../../Imagens/contatinho.png').default} 
  className="Imgcontato" alt="contato-img" width="200px"/>
  
  
  
  </div>                       
         <div className="Contato-screen-body">
           
           <div className="Contato-screen-body-item left">
             <div className="Contato-app-title">
               <span>Duvidas?</span>
               
               <div id="alternativeLogin">
                   <div id="iconGroup">
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> </a><br/>
                    <a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>
                </div>
             </div>
             
                <div className="Contato-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                </div>
                </div>
                 
           <div className="Contato-screen-body-item">
             <div className="Contato-app-form">
               <div className="Contato-app-form-group">
                 <input className="Contato-app-form-control" placeholder="NOME"></input>
               </div>
               <div className="Contato-app-form-group">
                 <input className="Contato-app-form-control" placeholder="EMAIL"></input>
               </div>
               <div className="Contato-app-form-group message">
                <input className="Contato-app-form-control" placeholder="MENSAGEM"></input>
               </div> 
               <div className="Contato-app-form-group buttons">
                 <button className="Contato-app-form-button">APAGAR</button>
                 <button className="Contato-app-form-button">ENVIAR</button>
               </div>
             </div>
           </div>
           </div>
        </div>
        </div>
        </div>
        </div>
        </div>    
</div>
</div>
   )
}
export default RodapeGeral;


