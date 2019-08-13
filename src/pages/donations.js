import React from 'react'
import GetDonations from '../components/GetDonations'
import Layout from 'gatsby-theme-blog/src/components/layout'

export default function donations() {
  return (
    <Layout location='/donations' title='Home'>
      <h2>Donaciones a funcionarios del gobierno</h2>
      <GetDonations />
    </Layout>
  )
}
