import React from 'react';
import { graphql } from 'gatsby';

const PandaContainer = ({data}) => {
  return (
    <div>
      <p>Panda goes here</p>
      <span>{data.nodes[0].data.en_name}</span>
    </div>
  )
};



export default PandaContainer
