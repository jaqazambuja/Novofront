import MenuAberto from "../Componentes/Menu/MenuAberto";
import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import { RiContactsBookUploadLine } from 'react-icons/ri'
import { FiInstagram, FiFacebook, AiOutlineWhatsApp } from 'react-icons/fi';
import "../Pages/Css/Cadastrese.css";

const Cadastrese = () => {
  const url = "https://back-dandara.herokuapp.com/auth/register";
  const [form, setForm] = React.useState({

    username: "",
    nome: "",
    cpf: "",
    numnis: "",
    celular: "",
    email: "",
    senha: ""
  });

  
  const [response, setResponse] = React.useState(null)

  function pegarInfo({ target }) {
      const { id, value } = target
      setForm({ ...form, [id]: value })
      console.log({ [id]: value });
  }
  function pegarDados(event) {
    let url = 'https://back-dandara.herokuapp.com/auth/register';

    fetch(url, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        }
      }).then((res) => {
          setResponse(res)
      })
  }
  const Enviar = () => {
      if (alert("Cadastro feito!")) {
          window.location.href='/login';
      }
  }

  return (
    <>

      <MenuAberto />
      
      <div className="CadastreseGroup">
        <div className="CadastreseBackground">
          <div className="CadastreseContainer">
            <div className="CadastreseScreen">
              <div className="Cadastrese-Screen-header">
                <div className="Cadastrese-Screen-header-left">
                </div>
              </div>
              <div className="Cadastrese-app-title">
                    
                    <span>Cadastre-se!</span> </div>
              <div className="Cadastrese-screen-body">

                <form action="https://back-dandara.herokuapp.com/auth/register" method="post" className="formAlign" onSubmit={pegarDados}>
                  <div className="Cadastrese-screen-body-item">
                    <div className="Cadastrese-app-form">
                      
                      <div className="Cadastrese-app-form-group">
                        <input className="Cadastrese-app-form-control" placeholder="UserName" name="username" id="username" value={form.username} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="text" name="nome" className="Cadastrese-app-form-control" placeholder="Nome" id="nome" value={form.nome} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" name="cpf" placeholder="CPF" id="cpf" value={form.cpf} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" placeholder="Número do Nis" name="numnis" id="numnis" value={form.numnis} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" placeholder="Celular" name="celular" id="celular" value={form.celular} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="text" className="Cadastrese-app-form-control" placeholder="Email" name="email" id="email" value={form.email} onChange={pegarInfo}></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="password" className="Cadastrese-app-form-control" placeholder="Senha" name="senha" id="senha" value={form.senha} onChange={pegarInfo}></input>
                      </div>
                       </div>
                        <div className="bt-center" >
                        <button className="Cadastrese-app-form-button">APAGAR</button>
                        <button type="submit" className="Cadastrese-app-form-button2" onClick={Enviar}>ENVIAR</button>
                      </div>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>
        </div>

      
      <RodapeGeral />
    </>
  )
}
export default Cadastrese;


