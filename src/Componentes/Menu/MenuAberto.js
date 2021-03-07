const MenuAberto = () => {
    return (


        <>
            <nav className="navbar navbar-expand-lg navbar-fixed-top menu-container " id='menu'>
            
                <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   
                <span className="navbar-toggler-icon m-auto "></span>
                </button>   
                <div className="collapse navbar-collapse menu-links" id="navbarNav">
                    <ul className="navbar-nav">

                    <li  className="nav-item active">  

                        <a className="nav-link" href="/" to='/'> INÍCIO </a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/produtos" to='/produtos'> PRODUTOS </a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/servicos" to='/servicos'>SERVIÇOS   </a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contato" to='/contato'> CONTATO </a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                            <span className="sr-only">(current)</span>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="/login" to='/login'> ENTRAR </a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                                <span className="sr-only">(current)</span>
                        </li>

                    </ul>
                    
                </div>
                
            </nav>
        </>
    
    )
}
export default MenuAberto;