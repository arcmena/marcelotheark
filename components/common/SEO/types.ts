export type TOGImage = {
  src: string
  alt: string
  type: string
  width: string
  height: string
}

export interface SEOProps {
  title: string
  description: string
  ogImage?: TOGImage
}
