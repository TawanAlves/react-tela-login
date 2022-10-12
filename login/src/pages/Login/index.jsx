import { Link } from "react-router-dom";

//assets
import LogoDireito from "../../assets/img/direito-logo.png";

//components
import CardAuth from "../../components/cards/CardAuth";

//css
import * as C from "./styles";

const Login = () => {
  return (
    <>
      <CardAuth>
        {/* <div className="img"> <img src={LogoDireito} alt="Logo Direito" /></div> */}
        <C.Circle>
          
          <img src={LogoDireito} alt="Logo Direito" />{" "}
        </C.Circle>

        <C.Form>
          <label>
            <C.LabelParagraph>E-mail</C.LabelParagraph>
            <C.Input type="text" placeholder="john.doe@email.com" />
          </label>
          <label>
            <C.LabelParagraph> Senha </C.LabelParagraph>
            <C.Input type="password" name="password" placeholder="*********" />
          </label>
          <C.Submit type="submit" value="Entrar" className="bt" />
          <Link to="/resetpassword" style={ {textDecoration: "none"}}> <C.Paragraph>Esqueceu a senha?</C.Paragraph></Link>
        </C.Form>
      </CardAuth>

      {/* <div className="container">
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

    </div> */}
    </>
  );
};

export default Login;

{
  /* <CardAuth>
      <C.Paragraph>Preencha o campo abaixo para solicitar a recuperação de senha</C.Paragraph>
      <label>
        <C.LabelParagraph>E-mail</C.LabelParagraph>
        <C.Input type="text" placeholder="john.doe@email.com"></C.Input>
      </label>
      <C.Button> Recuperar senha</C.Button>
      <Link to="/login"><C.Paragraph>Login</C.Paragraph></Link>   
    </CardAuth>  */
}
