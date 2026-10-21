export default function manifest() {
  return {
    name: 'Modern Blinds & Curtains Kochi',
    short_name: 'Modern Blinds',
    description:
      'Premier digital showroom for custom curtains, motorized blinds, and architectural window treatments in Kochi, Kerala.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#0C2D37',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
