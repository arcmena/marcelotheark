import Head from 'next/head'

import { SEOProps, TOGImage } from './types'

const defaultOGImage: TOGImage = {
  src: '/og_cover.png',
  alt: 'A lightning bolt and text: ARK',
  type: 'image/png',
  width: '800',
  height: '600'
}

export default function SEO({
  title,
  description,
  ogImage = defaultOGImage
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta itemProp="name" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:image" content={ogImage.src} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:image:type" content={ogImage.type} />
      <meta property="og:image:width" content={ogImage.width} />
      <meta property="og:image:height" content={ogImage.height} />
    </Head>
  )
}
