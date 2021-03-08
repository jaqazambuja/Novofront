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
    //inicio codigo
    const url = "https://back-dandara.herokuapp.com/login";
    const [form, setForm] = React.useState({
        
        username: "",
        senha: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarInfo({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }

   
     function pegarDados(event) {
       event.preventDefault()
        fetch('https://back-dandara.herokuapp.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((resposta) => {
           alert(resposta.message)
        })
    }
    
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
           

   

           <form action="https://back-dandara.herokuapp.com/usuarios/login" method="post" onSubmit={pegarDados}>
           <div className="Login-screen-body-item">
             <div className="Login-app-form">
               <div className="Login-app-form-group">
                 <input type="text" name="username" className="Login-app-form-control" placeholder="Usuário" value={form.username} onChange={pegarInfo}></input>
               </div>
               <div className="Login-app-form-group message">
                <input type="password" className="Login-app-form-control" name="senha" placeholder="Senha" value={form.senha} onChange={pegarInfo}></input>
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