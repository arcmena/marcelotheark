import { TBlogPost } from '@graphql/schema'

export const mockBlogPost: TBlogPost = {
  id: '123',
  createdAt: '03/03/2022',
  slug: 'rataalada',
  title: 'Rata alada',
  tags: ['Riddler', 'Batman'],
  content: 'Ave Maria <br /> Gratia plena <br /> Maria, gratia plena',
  description: 'THE BATMAN',
  subtitle: 'SOMETHING IN THE WAY',
  postCover: { url: 'https://rataalada.com' }
}
