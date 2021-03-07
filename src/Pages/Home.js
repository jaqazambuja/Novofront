import MenuAberto from "../Componentes/Menu/MenuAberto";
import './Css/Home.css';
import Rodape from '../Componentes/Rodape/RodapeGeral'


function Home() {
    return (
        <> 
        <MenuAberto/>
        <div ClassName="background-ilustra"> 
         <div className="splash-container"> 
         
                 <div className="splash"> 
                   <h1 className="splash-head">DANDARA</h1>
                      <div ClassName="pure-button-align"> 
                         <p><a href="../cadastrese" className="pure-button pure-button-primary">COMEÇAR</a></p>
                         </div>
                </div>
         </div>
        </div>
    <div class>
     <div className="content-wrapper">
        
         <div className="content">
            <h2 className="content-head is-center">SOBRE O PROJETO
            <img src={require('../Imagens/favela.png').default} className="img-fluid" alt="Imagem responsiva" width="100%" /></h2>

            <div className="pure-g">
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <p>Dandara um projeto de auxílio que disponibiliza ferramentas de networking 
                     e de holofote a um público vulnerável.</p>
                     <p>Nossa proposta é oferecer uma plataforma de divulgação para que mulheres periféricas, especialmente mães solo habitantes de comunidades, tenham onde publicar seus produtos e serviços.</p>
                     <p>O app busca, sobretudo, dar visibilidade a essas pessoas, tendo em vista o constante apagamento que sofrem do governo, suas reformas trabalhistas e medidas de contenção à pandemia excludentes. Por outro lado, há também a sociedade e seu preconceito, o que gera mais estigma.
                     Assim, entendemos que, enquanto essas mulheres não conseguirem sair da informalidade, precisam de um canal de comunicação que facilite a obtenção de renda.</p>
                </div>
            </div>
         </div>

    
        <div className="ribbon l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                </div>
      
            <div className="content">
            <h2 className="content-head-2 is-center">PRA QUEM É?
                    <img src={require('../Imagens/QUEM.PNG').default} id="img2"className="img-fluid" alt="Imagem responsiva" width="70%" /></h2>
           
                  <div className="pure-g2">
                     <div className="box2 pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                     <p className="mt-4">
                                        Mães solo negras das periferias brasileiras são o foco de nossa atividade, e isso se justifica: segundo a reportagem 
                                    <a href="http://www.generonumero.media/retrato-das-maes-solo-na-pandemia/">  Retrato das mães solo na pandemia  </a>   
                                    </p>
                        <p>61% das famílias monoparentais são chefiadas por mães solo negras. Como fica evidente, o racismo estrutural também apresenta consequências no âmbito da formação familiar. </p>
                        <p>Além disso, conforme a mesma reportagem, parcelas dessas mães apresentam condições precárias de moradia e saneamento básico e ainda não têm acesso à internet.</p>
                    </div>
                    
                 </div>
                      
             </div>
         </div>
      <div>  <div className="pure-1 pure-u-md-1-2 pure-u-lg-3-5">
            <img src={require('../Imagens/comofunciona.png').default} id="img2"className="img-fluid" alt="Imagem responsiva" width="auto" />
        </div></div>
      
      </div>
   </div>
</>
    );
}

export default Home;