const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query MyQuery {
        allDatoCmsGaleriaDrona {
            nodes {
                zdjeciaIFilmy {
                ... on DatoCmsZdjecie {
                    plikZdjecia {
                    url
                    }
                    id
                    }
                }
            }
        }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, {
      lower: true
    });

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
