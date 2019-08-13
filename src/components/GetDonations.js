import React from 'react'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

const GET_DONATIONS = gql`
query GET_DONATIONS {
  donations(page: 1) {
    nombres
  }
}
`

export default function GetDonations() {
  const {loading, error, data} = useQuery(GET_DONATIONS)

  console.log(data)
  return (
    <div>
      <h1>lo</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}
