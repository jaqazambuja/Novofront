import Menu from "../Componentes/Menu/Menu";
import './Css/CadastrarProdutos.css';
//import ImageForm from '../Componentes/imgUpload';
import React from 'react';
import {BiStore} from 'react-icons/bi';
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
export default function CadastrarProdutos() {

   /* const Categoria = () => {

        const [action, setAction] = React.useState('');
        
        React.useEffect(async()=>{
    
            const urli= await fetch('http://localhost:3050/admin/categorias');    
            const urlResponse = await url.json();
    
            setAction(urlResponse);
            console.log(actionz);
        }, []);

    }*/
    
    const url = "http://localhost:3050/admin/produtos/cad";
    const [form, setForm] = React.useState({

        username: "",
        produto: "",
        categoria: "",
        valor: "",
        descricao: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarDados({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }


    function enviarDados(event) {
        fetch('http://localhost:3050/admin/produtos/cad', {
            method: "POST",
            enctype:'multipart/form-data',
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) => {
            setResponse(res);
        })
    }

    return (
        <>
            <Menu />
 <div className="container1">
 <div class="registration-form">


<form action="/produtos" className="form-group" onSubmit={enviarDados}>
 <div className="form-icon">
<span className=""><BiStore/></span>
</div>
<div className="mb-3">
<label for="nome" className="form-label text-dark font-weight-bold">USERNAME</label>
<input type="text" className="form-control" id="username" name="username" placeholder=" @exemplo" value={form.username} onChange={pegarDados} />         </div>
<div className="mb-3">
<label for="nome" className="form-label text-dark font-weight-bold">PRODUTOS</label>
<input type="text" className="form-control" id="produto" name="produto" placeholder="NOME DO PRODUTO" value={form.produto} onChange={pegarDados} />
 </div>
                
<div className="mb-3">
                           
                            <select className="form-select-lg select form-control" name="categoria" id='categoria' value={form.categoria} onChange={pegarDados}>
                                <option selected>Selecionar categoria</option>
                                <option valeu='alimentação'>Alimentação</option>
                                <option valeu='construcao e reforma'>Construção e reforma</option>
                                <option valeu='educacao'>Educação</option>
                                <option valeu='informatica'>Informática</option>
                                <option valeu='moda'>Moda</option>
                                <option valeu='salao'>Salão de beleza</option>
                                <option valeu='servicos domesticos'>Serviços domésticos</option>
                                <option valeu='transporte'>Transporte</option>
                                <option valeu='teste'>teste</option>
                            </select>
                        </div>
<div className="mb-3">
</div>
 <div className="mb-3">
 <div className="input-group mb-3">
 <input type="text" name="valor" id="valor" className="form-control" placeholder="PREÇO DO PRODUTO" aria-label="Username" aria-describedby="basic-addon1" value={form.valor} onChange={pegarDados} />
<span className="input-group-text" id="basic-addon1">$</span>
</div>
</div>
 <div className="mb-3">
 <div className="form-floating">
<textarea className="form-control textarea" name="descricao" id="descricao" placeholder="DESCRIÇÃO DO PRODUTO" value={form.descricao} onChange={pegarDados}></textarea>
 </div>
 </div>
 <div className="form-group">
  <button type="submit" className="btn btn-block create-account fundoBotao">Cadastrar Produto</button>
 </div>
</form>
 
 
 </div>
</div>       
<RodapeGeral></RodapeGeral>
        </>
    )
}