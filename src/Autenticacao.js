import Cookies from "universal-cookie";

const cookies = new Cookies();

function Autenticacao() {
    if (cookies.get("jwt")) {
        return true;
        }
        return false;
        }


export default Autenticacao;