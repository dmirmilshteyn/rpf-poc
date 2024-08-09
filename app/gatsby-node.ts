import path from "path";
import { parse as parseIni } from './src/util/ini';

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@site": path.resolve(__dirname, "src/")
      }
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: '**/node_modules',
    },
  })
}

async function onCreateNode(context) {
  if (context.node.internal.mediaType === 'text/plain') {
    if (context.node.sourceInstanceName === 'pandas') {
      const content = await context.loadNodeContent(context.node);
      
      await createPandaNode(context, content);
    }
  }
}

async function createPandaNode(context, content) {
  const type = 'Panda'
  
  const parsedContent = parseIni(content);
  
  const panda = parsedContent['panda']
  if (panda) {
    const node = {
      id: panda._id,
      children: [],
      parent: context.node.id,
      internal: {
        contentDigest: context.node.internal.contentDigest,
        type: type
      },
      data: panda
    }
   
    context.actions.createNode(node);
    context.actions.createParentChildLink({parent: context.node, child: node});
  }
}

exports.createPages = async function ({actions, graphql}) {
  const { data } = await graphql(`
    query MyQuery {
      allPanda {
        edges {
          node {
            data {
              _id
            }
          }
        }
      }
    }`)
    
  
  data.allPanda.edges.forEach(edge => {
    actions.createPage({
      path: `/profile/${edge.node.data._id}`,
      component: path.resolve('./src/pages/profile.jsx'),
      context: { id: edge.node.data._id }
    });
  })
}

exports.onCreateNode = onCreateNode;
