import { Link } from "react-router-dom"
import * as C from "./styles";

const index = () => {
  return (
   <C.Container>
      <C.P>Preencha o campo abaixo para solicitar a recuperação de senha</C.P>
      <label>
        <C.Pi>E-mail</C.Pi>
        <C.Input type="text" placeholder="john.doe@email.com"></C.Input>
      </label>
      <C.Bt> Recuperar senha</C.Bt>
      <Link to="/login"><C.P>Login</C.P></Link>
   </C.Container>
   
  )
}

export default index