const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const result = await graphql(`
    {
        allExperienceJson {
          edges {
            node {
              slug
            }
          }
        }
    }
    `);
    result.data.allExperienceJson.edges.forEach( element => {
        const { node } = element
        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/templates/experience.js'),
            context: {
                slug: node.slug
            }
        })
    
    })
}