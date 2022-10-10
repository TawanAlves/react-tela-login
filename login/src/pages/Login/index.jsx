import  "./login.css"
import { Link } from "react-router-dom"
import LogoDireito from "../../assets/direito-logo.png"

const Login = () => {
  return (
    <div className="container">
      <div className="img"> <img src={LogoDireito} alt="Logo Direito" /></div>
      <form>
      
        <label>
          <p>E-mail</p>
          <input type="email" name="email" placeholder="john.doe@email.com"/>  
        </label>
        <label>
          <p>Senha</p>
          <input type="password" name="password" placeholder="*********"/>
        </label>

        <input type="submit" value="Entrar" className="bt"/>

        <Link to="/resetpassword">Esqueceu a senha?</Link>
      </form>

    </div>
  )
}

export default Login