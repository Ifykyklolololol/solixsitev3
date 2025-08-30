export interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  steps: string[];
  tags: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'How To Get Solix Key Using Rinku',
    description: 'Complete step-by-step guide to obtain your SolixHub key through the Rinku system safely and efficiently.',
    thumbnail: 'https://images.unsplash.com/photo-1551808525-051524e863ec?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:30',
    difficulty: 'beginner',
    category: 'Key Generation',
    steps: [
      'Join the SolixHub Discord server',
      'Navigate to the key generation channel',
      'Click on the Rinku link provided',
      'Complete the verification process',
      'Copy your unique SolixHub key',
      'Use the key in the script interface'
    ],
    tags: ['solix key', 'rinku', 'key generation', 'discord']
  },
  {
    id: '2', 
    title: 'SolixHub Complete Installation Guide',
    description: 'Learn how to properly install and set up SolixHub for the first time with our detailed walkthrough.',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8:15',
    difficulty: 'beginner', 
    category: 'Setup',
    steps: [
      'Download a compatible executor',
      'Copy the SolixHub loader script',
      'Launch your chosen Roblox game',
      'Execute the loader in your executor',
      'Navigate the SolixHub interface',
      'Select your desired game script'
    ],
    tags: ['installation', 'setup', 'executor', 'loader']
  },
  {
    id: '3',
    title: 'Getting Your Free Solix Key - Discord Method',
    description: 'Alternative method to get your SolixHub key directly through our Discord server verification system.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:45',
    difficulty: 'beginner',
    category: 'Key Generation',
    steps: [
      'Join discord.gg/solixhub',
      'Complete the verification process',
      'React to get the member role',
      'Access the key generation channel',
      'Follow the automated key generation',
      'Save your key securely for future use'
    ],
    tags: ['discord key', 'free key', 'verification', 'solix']
  },
  {
    id: '4',
    title: 'Advanced Script Configuration Guide',
    description: 'Master the art of customizing SolixHub scripts for optimal performance and safety in your favorite games.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '12:20',
    difficulty: 'advanced',
    category: 'Configuration',
    steps: [
      'Open the SolixHub configuration panel',
      'Understand each feature category',
      'Adjust auto-farm settings for efficiency',
      'Configure ESP and visual settings',
      'Set up safety and anti-detection features',
      'Save and test your custom configuration',
      'Fine-tune based on game performance'
    ],
    tags: ['config', 'settings', 'optimization', 'safety', 'customization']
  },
  {
    id: '5',
    title: 'Executor Setup for SolixHub (2024 Updated)',
    description: 'Complete guide to setting up the best executors for SolixHub compatibility and optimal performance.',
    thumbnail: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '9:10',
    difficulty: 'intermediate',
    category: 'Setup',
    steps: [
      'Choose a compatible executor (Synapse X, Script-Ware, etc.)',
      'Download from official sources only',
      'Disable antivirus temporarily during installation',
      'Install with administrator privileges',
      'Configure executor settings for SolixHub',
      'Test with the SolixHub loader script',
      'Add executor to antivirus exclusions'
    ],
    tags: ['executor', 'synapse', 'script-ware', 'installation', 'antivirus']
  },
  {
    id: '6',
    title: 'Account Safety While Using SolixHub',
    description: 'Essential safety tips and best practices to protect your Roblox account while enjoying SolixHub scripts.',
    thumbnail: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '7:30',
    difficulty: 'beginner',
    category: 'Safety',
    steps: [
      'Always use alternate accounts for scripting',
      'Never use SolixHub on your main account',
      'Enable 2-Step Verification on all accounts',
      'Use VPN for additional protection',
      'Avoid obvious scripting behaviors',
      'Take regular breaks between sessions',
      'Keep SolixHub and executors updated'
    ],
    tags: ['safety', 'account protection', 'alt account', 'vpn', 'security']
  }
];