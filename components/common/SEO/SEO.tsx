import Head from 'next/head'

interface Props {
  title: string
  description: string
}

export default function SEO({ title, description }: Props) {
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
    </Head>
  )
}
