// {
//     id: string
//     createdAt: string
//     slug: string
//     title: string
//     tags: Array<string>
//     content: string
//     description: string
//     subtitle: string
//     postCover: TImage
//   }

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
