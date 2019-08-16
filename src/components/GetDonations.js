import React, {useState} from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks'

const GET_DONATIONS = gql`
query getDonations($page: Int) {
  donations(page: $page) {
    id_donativo
    nombres
    apellidos
    cargo
    ocasion
    descripcion
    fecha
}}
`

export default function GetDonations() {
  const [page, setPage] = useState(1)
  const { loading, error, data, refetch } = useQuery(GET_DONATIONS, {
    variables: { page },
  });

  const handleChange = e => {
    const newPage = parseInt(e.target.value)
    setPage(newPage)
    refetch({ newPage})
  }

  const renderTable = () => {
    return data.donations.map(donativo => (
      <Tr key={donativo.id_donativo}>
        <Td>{donativo.id_donativo}</Td>
        <Td>{`${donativo.nombres} ${donativo.apellidos}`}</Td>
        <Td>{donativo.cargo}</Td>
        <Td>{donativo.ocasion}</Td>
        <Td>{donativo.descripcion}</Td>
        <Td>{donativo.fecha}</Td>
      </Tr>
    ))
  }
  return (
    <div>
      <div><input type="number" value={page} onChange={handleChange} /></div>
      <T>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nombre receptor</Th>
            <Th>Cargo</Th>
            <Th>Ocasión</Th>
            <Th>Descripción</Th>
            <Th>Fecha</Th>
          </Tr>
        </thead>
        <tbody>
          {loading && <tr><td>Loading</td></tr>}
          {data.donations && data.donations.length>0 && renderTable()}
        </tbody>
      </T>
    </div>
  )
}

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;
  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  text-align: "left";
  font-size: 18px;
  color: #686f7a;
  font-weight: 700;
  opacity: 0.65;
`;

const Td = styled.td`
  text-align: "left";
`;

const Tr = styled.tr`
  border-bottom: 2px solid rgba(150, 150, 150, 0.5);
`;
