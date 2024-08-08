import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from '@site/components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Red pandas go here</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
