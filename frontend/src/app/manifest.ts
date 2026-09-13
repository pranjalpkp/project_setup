import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ink Urban - Custom Software, Growth & AI/ML Automation Agency',
    short_name: 'Ink Urban',
    description: 'Premier digital innovation agency architecting custom software, growth funnels, and autonomous AI & Machine Learning automation systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07080C',
    theme_color: '#07080C',
    icons: [
      {
        src: '/images/ink_fav.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/ink_fav.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
