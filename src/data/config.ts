// Global configuration for SolixHub
export const config = {
  // Site Information
  site: {
    name: 'SolixHub',
    description: 'The #1 Roblox script hub supporting Blox Fruits, Hunty Zombies, 99 Nights In The Forest + 15 More Games',
    url: 'https://solixhub.com',
    logo: '/src/assets/solix-logo.png',
    logoAlt: '/src/assets/solix-banner.png',
  },

  // Loader Configuration
  loader: {
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/solixloader/refs/heads/main/solix%20v2%20new%20loader.lua"))()`,
    repository: 'https://github.com/debunked69/solixloader',
  },

  // Social Links
  social: {
    discord: 'https://discord.gg/solixhub',
    youtube: 'https://youtube.com/@solixhub',
    github: 'https://github.com/debunked69',
    twitter: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
  },

  // Features Configuration
  features: {
    enableAnalytics: true,
    enableUserAccounts: false,
    enableComments: false,
    enableRatings: true,
    enableDownloadCounter: true,
  },

  // Theme Configuration
  theme: {
    primaryColor: 'hsl(300, 100%, 60%)',
    accentColor: 'hsl(320, 100%, 65%)',
    backgroundColor: 'hsl(270, 35%, 8%)',
    enableParticles: true,
    enableGalaxyBg: true,
  },

  // SEO Configuration
  seo: {
    keywords: [
      'roblox scripts',
      'blox fruits script',
      'roblox executor',
      'game scripts',
      'solixhub',
      'free scripts'
    ],
    author: 'SolixHub Team',
  },

  // API Configuration
  api: {
    baseUrl: 'https://api.solixhub.com',
    version: 'v1',
    timeout: 10000,
  }
};

// Helper function to get configuration values
export const getConfig = (path: string) => {
  const keys = path.split('.');
  let value: any = config;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return null;
  }
  
  return value;
};

// Update configuration at runtime
export const updateConfig = (path: string, newValue: any) => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  let target: any = config;
  
  for (const key of keys) {
    if (!target[key]) target[key] = {};
    target = target[key];
  }
  
  target[lastKey] = newValue;
};