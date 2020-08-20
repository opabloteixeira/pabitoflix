import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import FormField from '../../components/FormField'
import PageDefault from '../../components/PageDefault'
export default function CadastroCategoria () {
  const initialsValues = {
    title: '',
    description: '',
    color: ''
  }

  const [categorias, setCategorias] = useState([])
  // const [categoria, setCategoria] = useState([])
  const [values, setValues] = useState(initialsValues)

  function setValue (chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    // setCategoria(e.target.value)

    setCategorias([
      ...categorias,
      values
    ])

    setValues(initialsValues)
  }

  function handleChange (e) {
    console.log(e.target.value)
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    )
  }

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria
        </h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label='Nome'
            name='title'
            type='text'
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            label='Cor'
            name='color'
            type='color'
            value={values.color}
            onChange={handleChange}
          />

          <FormField
            label='Descrição'
            name='description'
            type='textarea'
            value={values.description}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          { categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>
              {categoria.title}
            </li>
          )) }
        </ul>
      </PageDefault >
    </>
  )
}
