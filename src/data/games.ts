export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  popularity: number;
  users: string;
  features: string[];
  slug: string;
  status: 'active' | 'beta' | 'coming-soon';
  category: string;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Blox Fruits',
    description: 'Solara & Xeno supported. Auto V4, auto level, auto raid — best all-in-one.',
    image: '/src/assets/games/blox-fruits.jpg',
    popularity: 5,
    users: '2.0M+',
    features: ['Auto Farm', 'Auto V4', 'Auto Raid', 'Auto Level', 'ESP'],
    slug: 'blox-fruits',
    status: 'active',
    category: 'Fighting'
  },
  {
    id: '2',
    title: 'Hunty Zombie',
    description: '[UPDATE 2] Best Kaitun, auto farm, auto join, auto roll, infinite perk & more.',
    image: '/src/assets/games/hunty-zombie.jpg',
    popularity: 4,
    users: '270+',
    features: ['Kaitun', 'Auto Farm', 'Auto Join', 'Auto Roll', 'Inf Perk'],
    slug: 'hunty-zombie',
    status: 'active',
    category: 'Survival'
  },
  {
    id: '3',
    title: '99 Nights in the Forest',
    description: 'Instant bring all items, new method, best SolixHub — infinite wood.',
    image: '/src/assets/games/99-nights-forest.jpg',
    popularity: 5,
    users: '343K+',
    features: ['Bring Items', 'Auto Farm', 'Item Finder', 'Lighting Tools', 'Teleports'],
    slug: '99-nights-forest',
    status: 'active',
    category: 'Horror'
  },
  {
    id: '4',
    title: 'Build A Plane',
    description: 'Best infinite money, auto part, infinite HP, auto plane speed — the works.',
    image: '/src/assets/games/build-a-plane.jpg',
    popularity: 5,
    users: '90K+',
    features: ['Infinite Money', 'Plane GodMode', 'Auto Buy Parts', 'Speed Multiplier', 'Character Fly'],
    slug: 'build-a-plane',
    status: 'active',
    category: 'Simulation'
  },
  {
    id: '5',
    title: 'Build A Boat For Treasure',
    description: 'OP auto gold farm, anti-AFK, TP to end and lots more features.',
    image: '/src/assets/games/build-a-boat.jpg',
    popularity: 4,
    users: '123K+',
    features: ['Auto Gold', 'TP To End', 'Anti AFK', 'Auto Build', 'Teleports'],
    slug: 'build-a-boat',
    status: 'active',
    category: 'Adventure'
  },
  {
    id: '6',
    title: 'Dig',
    description: '[UPDATE] Best undetected script — auto dig, auto sell, auto all.',
    image: '/src/assets/games/dig.jpg',
    popularity: 4,
    users: '101K+',
    features: ['Auto Dig', 'Auto Sell', 'Teleport Ores', 'ESP', 'Anti AFK'],
    slug: 'dig',
    status: 'active',
    category: 'Simulator'
  },
  {
    id: '7',
    title: 'Rivals',
    description: 'OP best script — undetected silent aim, ragebot, unlock all ESP.',
    image: '/src/assets/games/rivals.jpg',
    popularity: 5,
    users: '296K+',
    features: ['Silent Aim', 'Ragebot', 'No Spread', 'ESP Suite', 'Config System'],
    slug: 'rivals',
    status: 'active',
    category: 'FPS'
  },
  {
    id: '8',
    title: 'Grow a Garden',
    description: 'Dupe sheckles, buy any item with Robux, best SolixHub auto farm.',
    image: '/src/assets/games/grow-a-garden.jpg',
    popularity: 5,
    users: '1.1M+',
    features: ['Auto Harvest', 'Auto Plant', 'Auto Buy', 'Pet Viewer', 'Item ESP'],
    slug: 'grow-a-garden',
    status: 'active',
    category: 'Simulation'
  },
  {
    id: '9',
    title: '3008 [2.73]',
    description: 'Best script — infinite HP, hunger, energy, hide from workers, etc.',
    image: '/src/assets/games/3008.jpg',
    popularity: 3,
    users: '4+',
    features: ['Inf HP', 'Inf Hunger', 'Inf Energy', 'Safe Zones', 'ESP'],
    slug: '3008',
    status: 'active',
    category: 'Survival'
  },
  {
    id: '10',
    title: 'Dead Rails [Alpha]',
    description: '3000 Bonds per hour — free OP script, SolixHub insta-win — best.',
    image: '/src/assets/games/dead-rails.jpg',
    popularity: 5,
    users: '2.3M+',
    features: ['Auto Win', 'Auto Bonds', 'TP To End', 'Gun Aura', 'Item/Train ESP'],
    slug: 'dead-rails',
    status: 'active',
    category: 'Action'
  },
  {
    id: '11',
    title: 'Jailbreak',
    description: 'Best OP undetected — silent aim, ESP, auto arrest, car mods.',
    image: '/src/assets/games/jailbreak.jpg',
    popularity: 5,
    users: '507K+',
    features: ['Silent Aim', 'Arrest Aura', 'Vehicle Fly', 'Player ESP', 'Auto Escape'],
    slug: 'jailbreak',
    status: 'active',
    category: 'Action'
  },
  {
    id: '12',
    title: 'Murder Mystery 2',
    description: 'New OP MM script — auto farm, insta kill all, auto collect coin.',
    image: '/src/assets/games/mm2.jpg',
    popularity: 4,
    users: '565K+',
    features: ['Auto Farm', 'Insta Kill', 'Coin Magnet', 'ESP', 'Antis'],
    slug: 'murder-mystery-2',
    status: 'active',
    category: 'Horror'
  },
  {
    id: '13',
    title: 'Jujutsu Infinite',
    description: '[PLANT] LUNAR SolixHub — auto quest, auto boss, auto inventory.',
    image: '/src/assets/games/jujutsu-infinite.jpg',
    popularity: 4,
    users: '409K+',
    features: ['Auto Quest', 'Auto Boss', 'Auto Farm', 'Inventory Manager', 'Teleports'],
    slug: 'jujutsu-infinite',
    status: 'active',
    category: 'Fighting'
  },
  {
    id: '14',
    title: 'Fisch',
    description: '[FISCHFEST] Infinite money, auto fish/catch, auto event, auto all.',
    image: '/src/assets/games/fisch.jpg',
    popularity: 4,
    users: '311K+',
    features: ['Auto Fish', 'Auto Catch', 'Event Auto', 'Infinite Money', 'ESP'],
    slug: 'fisch',
    status: 'active',
    category: 'Simulator'
  },
  {
    id: '15',
    title: 'Pet Simulator 99!',
    description: 'New updated best script — auto farm, auto tap, auto egg.',
    image: '/src/assets/games/pet-simulator-99.jpg',
    popularity: 4,
    users: '302K+',
    features: ['Auto Farm', 'Auto Tap', 'Auto Egg', 'Pet ESP', 'Trade Helper'],
    slug: 'pet-simulator-99',
    status: 'active',
    category: 'Simulation'
  },
  {
    id: '16',
    title: 'Shindo Life',
    description: 'Support Solara — insta kill, auto scroll, auto spin, auto dungeon.',
    image: '/src/assets/games/shindo-life.jpg',
    popularity: 5,
    users: '412K+',
    features: ['Autofarm', 'Scroll Sniper', 'Auto Spin', 'Auto Dungeon', 'ESP'],
    slug: 'shindo-life',
    status: 'active',
    category: 'RPG'
  },
  {
    id: '17',
    title: 'Demonfall',
    description: 'DUPE — SolixHub OP auto farms — Solara supported.',
    image: '/src/assets/games/demonfall.jpg',
    popularity: 4,
    users: '303K+',
    features: ['Dupe', 'Auto Farm', 'ESP', 'Combat Aids', 'Teleports'],
    slug: 'demonfall',
    status: 'active',
    category: 'Fighting'
  }
];
