import MenuAberto from "../Componentes/Menu/MenuAberto";
import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import { RiContactsBookUploadLine } from 'react-icons/ri'
import { FiInstagram, FiFacebook, AiOutlineWhatsApp } from 'react-icons/fi';
import "../Pages/Css/Cadastrese.css";

const Cadastrese = () => {
  const url = "https://back-dandara.herokuapp.com/registro";
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
      fetch('https://back-dandara.herokuapp.com/registro', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          //transforma em json para mandar pra api e api mandar pro banco
          body: JSON.stringify(form)
      }).then((res) => {
          setResponse(res);
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

                <form action="https://back-dandara.herokuapp.com/registro" method="post" className="formAlign" onSubmit={pegarDados}>
                  <div className="Cadastrese-screen-body-item">
                    <div className="Cadastrese-app-form">
                      
                      <div className="Cadastrese-app-form-group">
                        <input className="Cadastrese-app-form-control" placeholder="UserName" name="username"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="text" name="nome" className="Cadastrese-app-form-control" placeholder="Nome"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" name="cpf" placeholder="CPF"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" placeholder="Número do Nis" name="numnis"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="number" className="Cadastrese-app-form-control" placeholder="Celular" name="celular"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="text" className="Cadastrese-app-form-control" placeholder="Email" name="email"></input>
                      </div>

                      <div className="Cadastrese-app-form-group message">
                        <input type="password" className="Cadastrese-app-form-control" placeholder="Senha" name="senha"></input>
                      </div>
                       </div>
                        <div className="bt-center" >
                        <button className="Cadastrese-app-form-button">APAGAR</button>
                        <button type="submit" className="Cadastrese-app-form-button2">ENVIAR</button>
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


/*{{#each erros}}
    {{texto}}
{{else}}

{{/each}}

/*<form action="/usuarios/registro" method="post">
    <label for="nome">Nome: </label>
        <input type="text" name="nome" class="form-control" required>
    <label for="email">Email:</label>
        <input type="email" name="email" class="form-control" required>
    <label for="senha">Senha: </label>
        <input type="password" name="senha" class="form-control" required>
    <label for="senha2">Repita a sua senha: </label>
        <input type="password" name="senha2" class="form-control" required>
    <button type="submit" class="btn btn-sucess">Criar conta</button>
</form>*/