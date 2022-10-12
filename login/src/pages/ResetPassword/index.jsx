import { Link } from "react-router-dom"

//css
import * as C from "./styles";

//components
import CardAuth from "../../components/cards/CardAuth"

const index = () => {
  return (

    <CardAuth>
      <C.Paragraph>Preencha o campo abaixo para solicitar a recuperação de senha</C.Paragraph>
      <label>
        <C.LabelParagraph>E-mail</C.LabelParagraph>
        <C.Input type="text" placeholder="john.doe@email.com"></C.Input>
      </label>
      <C.Button> Recuperar senha</C.Button>
      <Link to="/login" style={ {textDecoration: "none"}}>  <C.Paragraph>Login</C.Paragraph> </Link>   
    </CardAuth> 
   
  )
}

export default index