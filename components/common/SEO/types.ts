
export type TypeOGImage = {
  src: string;
  alt: string;
  type: string;
  width: string;
  height: string;
};

export interface SEOProps {
  pageTitle?: string;
  description?: string;
  favicon?: string;
  ogType?: string;
  ogSiteName?: string;
  ogUrl?: string;
  ogImage?: TypeOGImage;
}