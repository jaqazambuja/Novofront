import Menu from "../Componentes/Menu/Menu"
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'
const EditarDados = () => {
    return (
        <>
            <Menu/>
            <div className="container">
                <div className="mt-5  p-3  border box-menu">
                    <h1 className="text-center">Editar Dados</h1><hr></hr>
                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">NOME</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="cpf" className="form-label">CPF</label>
                        <input type="number" className="form-control" id="cpf" name="cpf" />
                    </div>
                    <div className="mb-3">
                        <label for="celular" className="form-label">CELULAR</label>
                        <input type="phone" className="form-control" id="celular" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmaemail" className="form-label">CONFIRMAR EMAIL</label>
                        <input type="email" className="form-control" id="confirmaemail" name="confirmaemail" />
                    </div>
                    <div className="mb-3">
                        <label for="senha" className="form-label">SENHA</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Registrar</button>  
                    </div>
                </form>
                </div>
            </div>
            <RodapeGeral/>
        </>
    )
}
export default EditarDados;