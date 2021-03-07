import Menu from "../Componentes/Menu/Menu";
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";

export const RecuperarSenha = () => {
    return (
        <>
            <Menu />
            <div className='container container-fluid'>
            <div className='d mt-5  p-3  border box-menu'>
                <h1 className='text-center'>Recuperar Senha</h1>
                    <hr />
                    <p className='text-center'>Digite o seu CPF para recuperar a senha</p>
                <form action='' method=''>
                    <div className="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" className="form-control" id="nome" placeholder="Digite seu CPF" autoComplete='off' maxLength='14' />
                    </div>
                    

                    <button type='submit' className='btn btn-lg  btn-primary'>Enviar</button>
                </form>
                </div>
            </div>
            <RodapeGeral/>
        </>
    );
}