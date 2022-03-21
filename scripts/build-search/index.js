const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')

const apiClient = require('../utils/apiClient')
const GET_BLOG_POSTS = require('../utils/GET_BLOG_POSTS')

dotenv.config()

const getBlogPosts = async () => {
  const posts = await apiClient.request(GET_BLOG_POSTS)

  return posts
}

const transformPostsToSearchObjects = posts =>
  posts.map(post => ({
    objectID: post.id,
    title: post.title,
    content: post.content.toString(),
    tags: post.tags.join(', ')
  }))

const buildSearch = async () => {
  try {
    const { posts } = await getBlogPosts()
    const transformed = transformPostsToSearchObjects(posts)

    const algoliaClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    const algoliaIndex = algoliaClient.initIndex('blog_posts')

    const algoliaResponse = await algoliaIndex.saveObjects(transformed)

    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        '\n'
      )}`
    )
  } catch (error) {
    console.error(error)
  }
}

buildSearch()
