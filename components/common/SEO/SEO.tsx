import Head from 'next/head'

import { isProduction } from '@constants/globalConstants';

import { SEOProps, TypeOGImage } from './types';

const defaultOGImage: TypeOGImage = {
  src: '/og_cover.png',
  alt: 'Marcelo The Ark logo. A lightning bolt',
  type: 'image/png',
  width: '800',
  height: '600'
}

const defaultUrl = "https://www.marcelotheark.com";

const SEO = (props: SEOProps) => {
  const {
    pageTitle = "Title",
    description = "Description",
    favicon = "/favicon.ico",
    ogType = "website",
    ogSiteName = "Marcelo The Ark",
    ogUrl = defaultUrl,
    ogImage = defaultOGImage,
  } = props

  return (
    <Head>
      {/* page title and description */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* page theme */}
      <meta name="theme-color" content="#000000" />

      {/* website favicon */}
      <link rel="icon" href={favicon} />

      {/* Schema.org page name and description */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={description} />

      {/* twitter identification */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />

      {/* robots authorization to index this file */}
      <meta name="robots" content="index, follow" />

      {/* open graph protocols */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:url" content={ogUrl} />
      <meta
        property="og:image"
        content={
          isProduction()
            ? `${defaultOGImage}${ogImage.src}`
            : ogImage.src
        }
      />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:image:type" content={ogImage.type} />
      <meta property="og:image:width" content={ogImage.width} />
      <meta property="og:image:height" content={ogImage.height} />
    </Head>
  );
};

export default SEO;

