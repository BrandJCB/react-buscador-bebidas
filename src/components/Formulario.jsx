import { useState } from "react"
import {Button, Form, Row, Col, Alert} from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {

  const [ busqueda, setBusqueda ] = useState({
    nombre: '',
    categoria: ''
  })
  const [ alerta, setAlerta ] = useState('')

  const { categorias } = useCategorias()
  const { consultarBebida } = useBebidas()

  const handleSubmit = e =>{
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarBebida(busqueda)
  }

  return (
    <Form
      className="mt-5"
      onSubmit={handleSubmit}
    >

      {
        alerta && <Alert className="text-center w-50 m-auto mb-4" variant='danger'>{alerta}</Alert>
      }

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bevida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Ej: Tequila, Vodka, etc"
              value={busqueda.nombre}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value
              })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bevida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value
              })}
            >
              <option value="">-- Selecciona Categoria --</option>
              {
                categorias.map(categoria =>(
                  <option
                    key={categoria.strCategory} 
                    value={categoria.strCategory} 
                  >
                    {categoria.strCategory} 
                  </option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
            <Button
              type='submit'
              variant="danger"
              className='text-uppercase w-100'
            >
              Buscar Bevidas
            </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario