const dotenv = require('dotenv')
const { GraphQLClient } = require('graphql-request')

dotenv.config()

const apiClient = new GraphQLClient(process.env.GRAPHCMS_API_ENDPOINT, {
  headers: { Authorization: `Bearer ${process.env.GRAPHCMS_API_KEY}` }
})

module.exports = apiClient
