import { paths } from './src/data/pathsData';

export const getRoutes = () => {
  const routes = ['/', '/paths'];
  
  paths.forEach(path => {
    // Adiciona a rota principal do trilho
    if (!path.parentSlug) {
      routes.push(`/path/${path.slug}`);
    }
    
    // Adiciona as etapas
    if (path.parentSlug) {
      routes.push(`/path/${path.parentSlug}/${path.slug}`);
    }
  });

  return routes;
};
