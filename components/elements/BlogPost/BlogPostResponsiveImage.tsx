import Image, { ImageProps } from 'next/image'

export default function BlogPostResponsiveImage({ ...props }: ImageProps) {
  return (
    <Image
      alt={props.alt}
      layout="responsive"
      height="380"
      width="768"
      priority
      {...props}
    />
  )
}
