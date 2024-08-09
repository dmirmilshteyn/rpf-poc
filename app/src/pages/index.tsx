import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"

import Layout from '@site/components/Layout';

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Layout>
      <p>Red pandas go here!!</p>

      <h1>Three Pandas at Ichikawa</h1>
      <p>Panda 1: My name is {data.allPanda.nodes[0].data.en_name}</p>
      <p>Panda 2: My name is {data.allPanda.nodes[1].data.en_name}</p>
      <p>Panda 3: My name is {data.allPanda.nodes[2].data.en_name}</p>
    </Layout>
  )
}

export const query = graphql`
  query PandaQuery {
    allPanda(filter: {data: {zoo: {eq: "1"}}}, limit: 3) {
      nodes {
        data {
          gender
          en_name
        }
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
