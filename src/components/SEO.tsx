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

  const siteTitle = title ? `${title} | Caminhos da Rainha Santa` : t('seo.default.title');
  const seoDescription = description || t('seo.default.description');
  const siteUrl = "https://caminhos-rainha-santa.onrender.com";
  
  // Constrói o URL canónico
  // Se for PT, removemos o prefixo /pt para que a versão canónica seja a da raiz
  let currentPath = window.location.pathname;
  
  // Limpeza do path para o canónico (remover /pt se existir)
  let canonicalPath = currentPath;
  if (i18n.language === 'pt') {
    if (canonicalPath.startsWith('/pt/')) {
      canonicalPath = canonicalPath.replace('/pt/', '/');
    } else if (canonicalPath === '/pt') {
      canonicalPath = '/';
    }
  }

  // Garantir que não temos double slashes e que o canónico é absoluto
  const finalCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : `${siteUrl}${canonicalPath}`.replace(/\/$/, '') || siteUrl; // Remove trailing slash para consistência

  // Lista de línguas para as tags alternate
  const languages = ['pt', 'en', 'es'];
  
  // Função para gerar o URL de uma língua para o path atual
  const getLangUrl = (lang: string) => {
    // Remove qualquer prefixo de língua atual (/pt/, /en/, /es/)
    let purePath = currentPath;
    ['/pt', '/en', '/es'].forEach(prefix => {
      if (purePath.startsWith(prefix + '/')) {
        purePath = purePath.replace(prefix, '');
      } else if (purePath === prefix) {
        purePath = '/';
      }
    });
    
    // Se for PT, o URL é o purePath (com x-default e pt a apontar para o mesmo)
    if (lang === 'pt') return `${siteUrl}${purePath}`;
    
    // Para outras línguas, adicionamos o prefixo
    return `${siteUrl}/${lang}${purePath === '/' ? '/' : purePath}`;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={seoDescription} />
      <html lang={i18n.language} />
      <link rel="canonical" href={finalCanonical} />

      {/* Hreflang Tags - Crucial para resolver erros de duplicado em sites multi-língua */}
      {languages.map(lang => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={getLangUrl(lang).replace(/\/$/, '') || siteUrl} 
        />
      ))}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={getLangUrl('pt').replace(/\/$/, '') || siteUrl} 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:url" content={finalCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
    </Helmet>
  );
}
