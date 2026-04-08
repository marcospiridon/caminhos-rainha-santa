import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = '/hero.jpg'
}: SEOProps) {
  const { t, i18n } = useTranslation();

  const siteTitle = t('seo.default.title');
  const defaultDescription = t('seo.default.description');
  
  const seoTitle = title ? `${title} | Caminhos da Rainha Santa` : siteTitle;
  const seoDescription = description || defaultDescription;
  const siteUrl = "https://caminhos-rainha-santa.onrender.com";
  
  // Constrói o URL canónico com a língua se não for fornecido
  const currentPath = window.location.pathname;
  const defaultCanonical = `${siteUrl}${currentPath}`;
  const finalCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : defaultCanonical;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <html lang={i18n.language} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:url" content={finalCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
    </Helmet>
  );
}
