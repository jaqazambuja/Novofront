import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
import {RiContactsBookUploadLine} from 'react-icons/ri'
import { FiInstagram, FiFacebook,AiOutlineWhatsApp } from 'react-icons/fi';


const Login = () => {
    

    return (
        <div className="BackGround-ilustra">  
            <Menu/>
            
            
        <div> 
           <div className="container-fluid">     
      <div>
       <div className="LoginBackgroundlg">
         <div className="LoginContainer">
          <div className="LoginScreen">
            <div className="Login-Screen-header">
             <div className="Login-app-title">
            <span>Já é cadastrada?</span></div>
           
           
         </div>
         <div className="Login-screen-body">
           

   
         
           <form action="http://localhost:3050/auth/login"  method="post" >
           <div className="Login-screen-body-item">
             <div className="Login-app-form">
               <div className="Login-app-form-group">
                 <input type="text" name="username" className="Login-app-form-control" placeholder="Usuário" id="username" name="username"></input>
               </div>
               <div className="Login-app-form-group message">
                <input type="password" className="Login-app-form-control" name="senha" placeholder="Senha"  id="senha" name="senha"></input>
               </div> 
               
               <div className="Login-app-form-group buttons">
                 <button className="Login-app-form-button">APAGAR</button>
                 <button type="submit" className="Login-app-form-button">ENTRAR</button>
               </div>

             </div>
           </div>
        </form>
        <div id="Login-app-form-group-buttons-0">
               <button href="./RecuperarSenha" className="Login-app-form-button">Esqueci minha senha</button>
               <button href="/Cadastrese" className="Login-app-form-button">Cadastre-se</button>
                </div>
         </div>
         
       </div>
     
       </div>
     </div>
   </div>
   </div>
    
                </div>
            <RodapeGeral/>
            </div>
    )
}
export default Login;