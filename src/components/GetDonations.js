import React from 'react'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

const GET_DONATIONS = gql`
query GET_DONATIONS {
donativos(page:1) {
  id_donativo
  nombres
  apellidos
  pais
  cargo
  ocasion
  descripcion
  fecha
  nombre_institucion
}}
`

export default function GetDonations() {
  const {loading, error, data} = useQuery(GET_DONATIONS)

  console.log(error)
  console.log(data)
  return (
    <div>
      <h1>lo</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}
