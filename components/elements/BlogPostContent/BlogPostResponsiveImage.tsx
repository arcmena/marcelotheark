import Image, { ImageProps } from 'next/image'

export default function BlogPostResponsiveImage({ ...props }: ImageProps) {
  const { alt, ...restProps } = props

  return (
    <Image
      alt={alt}
      layout="responsive"
      height="380"
      width="768"
      priority
      {...restProps}
    />
  )
}
