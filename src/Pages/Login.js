import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
import {RiContactsBookUploadLine} from 'react-icons/ri'
import { FiInstagram, FiFacebook,AiOutlineWhatsApp } from 'react-icons/fi';


const Login = () => {
    

    // puxar o bd e tentar validar
    const [action, setAction] = React.useState([]);
    
    React.useEffect(async()=>{

        const url = await fetch('https://back-dandara.herokuapp.com/usuarios/login');    
        const urlResponse = await url.json();
        
        console.log(JSON.stringify(urlResponse));
        setAction(urlResponse);
        

    }, []);
    
    /*console.log(action[0])
    let validacao = action.filter(item => item.email == document.getElementById("email").value)
        console.log(validacao)
    
    const validar=()=> {
        // document.getElementById("email").value !== '' && document.getElementById("senha").value !== '' 
        
        let validacao = action.filter(item => item.email === document.getElementById("email").value)
        console.log(validacao[0])
        if (document.getElementById("email").value !== '' && document.getElementById("senha").value !== '') {
            alert('Login efetuado!')
            localStorage.setItem('key', true);
            
        } else {
            // condição para verificar e colocar no localstorage
            alert("Acesso negado")  
        };   
    }
    if (localStorage.getItem('key')) {
        window.location='/minhaconta'
    }*/
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
           

   

           <form action="https://back-dandara.herokuapp.com/usuarios/login" method="post">
           <div className="Login-screen-body-item">
             <div className="Login-app-form">
               <div className="Login-app-form-group">
                 <input type="text" name="username" className="Login-app-form-control" placeholder="Usuário"></input>
               </div>
               <div className="Login-app-form-group message">
                <input type="password" className="Login-app-form-control" name="senha" placeholder="Senha"></input>
               </div> 
               
               <div className="Login-app-form-group buttons">
                 <button className="Login-app-form-button">APAGAR</button>
                 <button type="submit" href="/minhaconta" className="Login-app-form-button">ENTRAR</button>
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