import * as C from "./styles.jsx"

const index = ({children}) => {
  return (
   <C.Screen>
   <C.Container>
    {children}
   </C.Container>
   </C.Screen>
  )
}

export default index