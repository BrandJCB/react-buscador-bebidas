import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"


function App() {

  return (
    
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-3">
          <h1>Buscardor de Bevidas</h1>
        </header>
        <Container>
          <Formulario/>
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
