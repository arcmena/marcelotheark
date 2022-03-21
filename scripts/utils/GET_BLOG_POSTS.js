const { gql } = require('graphql-request')

module.exports = gql`
  query getPosts {
    posts {
      id
      title
      content
      tags
    }
  }
`
