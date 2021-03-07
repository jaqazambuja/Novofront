import Menu from "../Componentes/Menu/Menu";
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import React from 'react';
import {BiBriefcase} from 'react-icons/bi';
export default function CadastrarServicos() {

    // const cadastrarServicos = async (evento) => {

    //     const url = "http://localhost/API/acion/cadastroservico.php";
    //     const dados = new FormData(evento.target)
    //     const cabecalho = {
    //         method: 'POST',
    //         body: dados
    //     }

    //     const resposta = await fetch(url, cabecalho);
    //     const retorno = await resposta.json();
    //     console.log(retorno);
    // }
    const [form, setForm] = React.useState({

        username:"",
        servico: "",
        categoria: "",
        valor: "",
        descricao: ""
    })
    const [response, setResponse]=React.useState(null)
    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({...form, [id]: value })
    }
    function handleSubmit(event) {
        fetch("http://localhost:3050/admin/servicos/cad", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((resposta) => {
            setResponse(resposta);
        })
        
    }

    return (
        <>
            <Menu />
            <div className='container'>
                <div className="registration-form">
                    <form action="/servicos" className="form-group" onSubmit={handleSubmit}>
                        <div className="form-icon">
                            <span><BiBriefcase/></span>
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">USERNAME</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder=" @exemplo" value={form.username} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">SERVIÇO</label>
                            <input type="text" className="form-control" id="servico" name="servico" placeholder="Sua profissão" value={form.produto} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark font-weight-bold">CATEGORIAS</label>
                            <select className="form-select-lg select form-control" name="categoria" id='categoria' value={form.categoria} onChange={handleChange}>
                                <option selected>Selecionar categoria</option>
                                <option valeu='Limpeza'>Limpeza</option>
                                <option valeu='Construcao e Reforma'>Construção e Reforma</option>
                                <option valeu='Baba'>Babá</option>
                                <option valeu='Costureira'>Costureira</option>
                                <option valeu='Pintura'>Pintura</option>
                                <option valeu='Educacao'>Educação</option>
                                <option valeu='Salão de Beleza'>Salão de Beleza</option>
                            </select>
                        </div>
                        {/*<div className="mb-3">
                            <label className="form-label text-dark font-weight-bold">IMAGEM</label>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                <label className="custom-file-label" for="validatedCustomFile">Escolha o arquivo</label>
                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                        </div>*/}
                        <div className="mb-3">
                            <div className="input-group mb-3">
                                <input type="text" name="valor" id="valor" className="form-control" placeholder="Valor" aria-label="Username" aria-describedby="basic-addon1" value={form.valor} onChange={handleChange} />
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-floating">
                                <textarea className="form-control textarea" name="descricao" id="descricao" placeholder="Fale sobre você!" value={form.descricao} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block create-account fundoBotao">Finalizar</button>
                        </div>
                    </form>
                    <div className="social-media">    
                        {/* null */}  
                    </div>
                </div>
            </div>
        <RodapeGeral/>    
        </>

    )
}