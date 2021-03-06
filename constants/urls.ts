export const SITE =
  process.env.NODE_ENV === 'production'
    ? 'https://marcelotheark.com'
    : 'http://localhost:3000'

export const SITE_URLS = {
  HOME: '/',
  ABOUT_ME: '/#hero',
  PROJECTS: '/#projects',
  TIMELINE: '/#timeline',
  BLOG_POSTS: '/#blog-posts',
  CONTACTS: '/#contacts',
  BLOG_POST: '/blog/',
  ABOUT: '/about',
  BLOG: '/blog'
}

export const GRADIENTS = {
  BORDER_GRADIENT: '/gradients/border-gradient.png'
}

export const CONTACTS = {
  GITHUB: 'https://github.com/arcmena',
  LINKEDIN: 'https://www.linkedin.com/in/marcelo-mena',
  INSTAGRAM: 'https://www.instagram.com/marcelotheark'
}

export const TECHS = {
  FIGMA: 'https://www.figma.com/',
  NEXTJS: 'https://nextjs.org/',
  GRAPHCMS: 'https://graphcms.com/',
  VERCEL: 'https://vercel.com/'
}
