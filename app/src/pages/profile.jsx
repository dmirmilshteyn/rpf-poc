import React from 'react'
import Layout from '@site/components/Layout'
import {graphql, Link} from "gatsby";

const Profile = ({data}) => {
  return (
    <Layout>
      <Link to={'/'}>Test</Link>
      <div className={'nameBar profile'}>
        <div className={'shrinker'}>
          <div className={'gender profile'}>
            {data.panda.data.gender}
          </div>
          <div className={'pandaName profile'}>
            {data.panda.data.en_name}
          </div>
        </div>
      </div>
      
      
      <div id={'contentFrame'} className={'profile'} style={{'display': 'block'}}>
        <div className={'shrinker'}>
          <div className={'profileFrame'}>
            <div className={'pandaPhoto'}>
              
            </div>
            
            <div className={'profileDossier'}>
              <div className={'species'}>
                <h4>
                  🐼
                  <i>--species name--</i>
                </h4>
              </div>
              
              <ul className={'pandaList'}>
                <li style={{'display': 'inline-block', 'paddingBottom': '0.25ex', 'paddingRight': '1em'}}>👼 {data.panda.data.birthday}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    panda(id: {eq: $id}) {
      data {
        en_name
        gender
        birthday
      }
    }
  }
`

export default Profile;
