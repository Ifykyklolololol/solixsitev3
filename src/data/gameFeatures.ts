// Detailed features organized by categories for each game
export interface FeatureCategory {
  name: string;
  icon: string;
  features: {
    name: string;
    description: string;
    status: 'available' | 'premium' | 'beta';
  }[];
}

export const gameFeatures: Record<string, FeatureCategory[]> = {
  'blox-fruits': [
    {
      name: 'Auto Farm',
      icon: 'Zap',
      features: [
        {
          name: 'Auto Farm Levels',
          description: 'Automatically farms NPCs and quests for fast leveling',
          status: 'available'
        },
        {
          name: 'Auto Farm Fruits',
          description: 'Automatically collects devil fruits when they spawn',
          status: 'available'
        },
        {
          name: 'Auto Farm Bones',
          description: 'Farms bones efficiently in the Third Sea',
          status: 'available'
        },
        {
          name: 'Auto Farm Raids',
          description: 'Automatically completes raids for awakened fruits',
          status: 'premium'
        },
        {
          name: 'Auto Farm Sea Events',
          description: 'Participates in special sea events automatically',
          status: 'available'
        }
      ]
    },
    {
      name: 'Combat & PvP',
      icon: 'Sword',
      features: [
        {
          name: 'Aimbot',
          description: 'Helps with accurate targeting in PvP battles',
          status: 'available'
        },
        {
          name: 'Farm Players',
          description: 'Executes perfect combos automatically',
          status: 'premium'
        },
        {
          name: 'Bounty Farm',
          description: 'Predicts enemy movements for better hits',
          status: 'available'
        },
        {
          name: 'Auto Ken Haki',
          description: 'Automatically activates Ken Haki when needed',
          status: 'available'
        }
      ]
    },
    {
      name: 'Visuals & ESP',
      icon: 'Eye',
      features: [
        {
          name: 'Player ESP',
          description: 'See all players through walls with distance',
          status: 'available'
        },
        {
          name: 'Fruit ESP',
          description: 'Highlights devil fruits on the map',
          status: 'available'
        },
        {
          name: 'NPC ESP',
          description: 'Shows all NPCs and their levels',
          status: 'available'
        },
        {
          name: 'Chest ESP',
          description: 'Reveals all treasure chests locations',
          status: 'available'
        },
        {
          name: 'Raid ESP',
          description: 'Shows raid locations and objectives',
          status: 'available'
        }
      ]
    },
    {
      name: 'Movement & Teleport',
      icon: 'MapPin',
      features: [
        {
          name: 'Speed Hack',
          description: 'Increases movement speed significantly',
          status: 'available'
        },
        {
          name: 'Fly Hack',
          description: 'Enables flight mode for easy navigation',
          status: 'available'
        },
        {
          name: 'Island Teleports',
          description: 'Instant teleportation to any island',
          status: 'available'
        },
        {
          name: 'Player Teleport',
          description: 'Teleport to any player instantly',
          status: 'available'
        },
        {
          name: 'Safe Teleport',
          description: 'Anti-detection teleportation system',
          status: 'available'
        }
      ]
    }
  ],
  'hunty-zombies': [
    {
      name: 'Auto Farms',
      icon: 'Target',
      features: [
        {
          name: 'Auto Join Game',
          description: 'Joins Game With Configuration',
          status: 'available'
        },
        {
          name: 'Auto Roll Trait',
          description: 'Auto Rolls Trait',
          status: 'available'
        },
        {
          name: 'Auto Roll Weapon',
          description: 'Auto Rolls Weapon',
          status: 'available'
        },
        {
          name: 'Auto Roll Perk',
          description: 'Auto Rolls Perk',
          status: 'available'
        },
        {
          name: 'Auto Roll Pet',
          description: 'Auto Rolls Pet',
          status: 'available'
        }
      ]
    },
    {
      name: 'Dungeon',
      icon: 'Shield',
      features: [
        {
          name: 'Auto Loot',
          description: 'Automatically collects valuable items',
          status: 'available'
        },
        {
          name: 'Kill Aura',
          description: 'Kills All Enemy Nearby',
          status: 'premium'
        },
        {
          name: 'Auto Open Doors',
          description: 'Opens All Doors',
          status: 'available'
        },
        {
          name: 'Auto Use Skill',
          description: 'Uses  (Z / X / C)',
          status: 'available'
        },
        {
          name: 'Auto Use Awaken',
          description: 'Uses Awaken When Available',
          status: 'available'
        }
      ]
    },
    {
      name: 'Visuals',
      icon: 'Eye',
      features: [
        {
          name: 'VFX',
          description: 'Change VFX Color',
          status: 'available'
        },
        {
          name: 'Free Fire Mode',
          description: '???',
          status: 'available'
        },
        {
          name: 'Black Screen',
          description: 'Good For Performance',
          status: 'available'
        },
        {
          name: 'Ambient ',
          description: 'Changes Ambient',
          status: 'available'
        }
      ]
    }
  ],
  '99-nights-forest': [
  {
    name: 'Resources & Chests',
    icon: 'PackageOpen',
    features: [
      { name: 'Auto Collect Coins', description: 'Continuously gathers coins on the map', status: 'available' },
      { name: 'Auto Open All Chests', description: 'Opens every chest it can reach', status: 'available' },
      { name: 'Auto Collect Flowers', description: 'Picks all flowers it finds', status: 'available' },
      { name: 'Auto Collect Scrap', description: 'Farms scrap until target reached', status: 'available' },
      { name: 'Amount of Scrap', description: 'Scrap target (slider)', status: 'available' },
      { name: 'Bring All Logs', description: 'Teleports logs to you', status: 'available' },
      { name: 'Amount of Logs', description: 'Log target (slider)', status: 'available' },
      { name: 'Cook All Items', description: 'Cook everything in inventory', status: 'available' },
      { name: 'Eat All Items', description: 'Consume all edible items', status: 'available' }
    ]
  },

  {
    name: 'Food & Trees',
    icon: 'Trees',
    features: [
      { name: 'Auto Cook All', description: 'Auto-cook any raw food in inventory', status: 'available' },
      { name: 'Auto Eat Food', description: 'Keeps hunger topped up', status: 'available' },
      { name: 'Hunger %', description: 'Desired hunger threshold (slider)', status: 'available' },
      { name: 'Auto Plant Trees', description: 'Automatically plants saplings', status: 'available' },
      { name: 'Tree Chop All', description: 'Chops all trees in range', status: 'available' },
      { name: 'Tree Distance', description: 'Max distance to target trees (slider)', status: 'available' },
      { name: 'Collect All Flowers', description: 'Collects all flowers on the map', status: 'available' }
    ]
  },

  {
    name: 'Mobs & Fuel',
    icon: 'Swords',
    features: [
      { name: 'Bring to Player Instead', description: 'Brings mobs to your position', status: 'available' },
      { name: 'Kill All Mobs (Equip Axe)', description: 'Auto-equip axe and clear mobs', status: 'available' },
      { name: 'Disable All Hostile Mobs', description: 'Temporarily disables hostile AI', status: 'available' },
      { name: 'Kill Distance', description: 'Engagement distance (slider)', status: 'available' },
      { name: 'Always Use Booster', description: 'Auto-uses booster during combat', status: 'available' },
      { name: 'Auto Fuel Fire', description: 'Keeps campfire fueled', status: 'available' }
    ]
  },

  {
    name: 'Teleport & Map',
    icon: 'MapPin',
    features: [
      { name: 'Load Entire Map', description: 'Forces streaming to load all regions', status: 'available' },
      { name: 'Teleport to Chests', description: 'Path/port to each chest sequentially', status: 'available' },
      { name: 'Teleport All Locations', description: 'Quick ports to major POIs', status: 'available' },
      { name: 'Teleport', description: 'Generic position teleport tool', status: 'available' }
    ]
  },

  {
    name: 'Lighting',
    icon: 'Sun',
    features: [
      { name: 'Brightness', description: 'Adjust scene brightness', status: 'available' },
      { name: 'Clock Time', description: 'Set time of day', status: 'available' },
      { name: 'Fog Start', description: 'Fog start distance', status: 'available' },
      { name: 'Fog End', description: 'Fog end distance', status: 'available' },
      { name: 'Shadow Softness', description: 'Soften/harden shadows', status: 'available' },
      { name: 'Global Shadows', description: 'Toggle world shadows', status: 'available' },
      { name: 'Ambient', description: 'Indoor ambient color/level', status: 'available' },
      { name: 'Outdoor Ambient', description: 'Outdoor ambient color/level', status: 'available' },
      { name: 'Fog Color', description: 'Set fog color', status: 'available' },
      { name: 'Technology', description: 'Rendering tech override', status: 'available' }
    ]
  },

  {
    name: 'Items',
    icon: 'Boxes',
    features: [
      { name: 'Bring All Selected Items', description: 'Selector to bring chosen item types', status: 'available' },
      { name: 'Selection: All', description: 'Preset that targets all items', status: 'available' }
    ]
  },

  {
    name: 'Utilities',
    icon: 'Settings',
    features: [
      { name: 'Anti AFK', description: 'Prevents AFK kick', status: 'available' },
      { name: 'Rejoin', description: 'Rejoin current server', status: 'available' },
      { name: 'Server Hop', description: 'Join a different server', status: 'available' },
      { name: 'Fly', description: 'Client-side flight toggle', status: 'available' },
      { name: 'Remote Spy', description: 'Inspect remote events/functions', status: 'available' }
    ]
  },

  {
    name: 'FE Badge Shower',
    icon: 'Star',
    features: [
      { name: 'Image (rbxassetid)', description: 'Image ID for advancement', status: 'available' },
      { name: 'Stars', description: 'Star count (slider)', status: 'available' },
      { name: 'Text', description: 'Custom advancement text', status: 'available' }
    ]
  }
],

'dead-rails': [
  {
    name: 'Core Progress',
    icon: 'Trophy',
    features: [
      { name: 'Auto Win', description: 'Runs full route, completes objectives, and collects Bonds automatically', status: 'available' },
      { name: 'Auto Bonds', description: 'Hands-free bond farm (~1k bonds/hour); now super fast and never breaks; handles death cases', status: 'available' },
      { name: 'Crank Timer', description: 'On-screen timer shows when you can pull the crank again', status: 'available' }
    ]
  },

  {
    name: 'Train Controls',
    icon: 'Train',
    features: [
      { name: 'Insta-Kill with Train', description: 'Eliminates all enemies using the train, even if not nearby', status: 'available' },
      { name: 'Fuel Train Anywhere', description: 'Refuel from any location after picking up fuel', status: 'available' },
      { name: 'Loop Tween to Train', description: 'Automatically tween back to the train on loop', status: 'available' }
    ]
  },

  {
    name: 'Combat',
    icon: 'Swords',
    features: [
      { name: 'Gun Kill Aura', description: 'Aura kills with guns without equipping; damage scales with number of guns; now more stable', status: 'available' },
      { name: 'Melee Kill Aura', description: 'Melee aura works without needing weapon equipped', status: 'available' },
      { name: 'Silent Aim', description: 'Silent aim targeting (note: not supported on Xeno/Solara for this feature)', status: 'beta' },
      { name: 'Aimbot', description: 'Standard aimbot with smoothing/FOV options', status: 'available' },
      { name: 'NPC Camlock', description: 'Camera locks onto NPC targets', status: 'available' }
    ]
  },

  {
    name: 'Movement',
    icon: 'Move',
    features: [
      { name: 'Fly (P Keybind)', description: 'Toggle fly; default keybind P', status: 'available' },
      { name: 'Auto Walk to End', description: 'Horse-friendly auto pathing to the end', status: 'available' },
      { name: 'NoClip', description: 'Walk through obstacles/walls', status: 'available' },
      { name: 'Third Person', description: 'Forced 3rd-person view; fixed stability', status: 'available' },
      { name: 'Edit FOV', description: 'Adjust camera field of view', status: 'available' },
      { name: 'FE Crawl (Troll)', description: 'Front-end crawl animation for trolling', status: 'available' }
    ]
  },

  {
    name: 'ESP & Visuals',
    icon: 'Eye',
    features: [
      { name: 'Item ESP + Blacklist', description: 'Highlight items with ability to ignore selected types', status: 'available' },
      { name: 'Train ESP', description: 'Visual overlay for train position/track info', status: 'available' },
      { name: 'Player ESP', description: 'Show players through walls with distance', status: 'available' },
      { name: '3D Render Toggle', description: 'Disable 3D rendering for performance/AFK farming', status: 'available' }
    ]
  },

  {
    name: 'Teleports',
    icon: 'MapPin',
    features: [
      { name: 'TP to End', description: 'Instantly teleport to the end (OP button)', status: 'available' },
      { name: 'Tesla Lab', description: 'Quick-teleport to TESLA LAB', status: 'available' },
      { name: 'Outlaw Base', description: 'Teleport to OUTLAWBASE', status: 'available' },
      { name: 'Crank', description: 'Teleport straight to the crank', status: 'available' },
      { name: '10k–70k Towns', description: 'Teleport to money-tier towns', status: 'available' },
      { name: 'Train', description: 'Teleport to train', status: 'available' },
      { name: 'Center Spawn', description: 'Teleport to center spawn', status: 'available' },
      { name: 'GunSmith', description: 'Teleport to gunsmith', status: 'available' },
      { name: 'Doctor Store', description: 'Teleport to doctor', status: 'available' },
      { name: 'Trading Post', description: 'Teleport to trading post', status: 'available' },
      { name: 'General Store', description: 'Teleport to general store', status: 'available' },
      { name: 'Daily Store', description: 'Teleport to daily store', status: 'available' }
    ]
  },

  {
    name: 'Looting & Pickup',
    icon: 'Backpack',
    features: [
      { name: 'Bag Pickup Aura', description: 'Automatically vacuum nearby bags/loot', status: 'available' }
    ]
  },

  {
    name: 'QoL & System',
    icon: 'Settings',
    features: [
      { name: 'Rejoin', description: 'Rejoin the current server', status: 'available' },
      { name: 'Server Hop', description: 'Switch to a different server', status: 'available' },
      { name: 'New UI', description: 'Improved UI/UX and event content support (2025-07-18)', status: 'available' },
      { name: 'New TP System', description: 'Updated and more reliable teleport framework', status: 'available' },
      { name: 'Compatibility', description: 'Script supports Solara & Xeno; Silent Aim excluded', status: 'available' },
      { name: 'Optimization', description: 'Major script performance optimizations and bug fixes', status: 'available' }
    ]
  }
],

// ======================= Build A Plane =======================
'build-a-plane': [
  {
    name: 'Economy & Progress',
    icon: 'Coins',
    features: [
      { name: 'Infinite Money', description: 'Set/lock currency to a huge value', status: 'available' },
      { name: 'Auto Buy Parts', description: 'Purchases required plane parts automatically', status: 'available' }
    ]
  },
  {
    name: 'Plane Controls',
    icon: 'Plane',
    features: [
      { name: 'Plane GodMode', description: 'Prevents plane damage/despawn', status: 'available' },
      { name: 'Toggle Plane Speed', description: 'On/off speed boost for your plane', status: 'available' },
      { name: 'Plane Speed Multiplier', description: 'Multiplier slider for plane velocity', status: 'available' }
    ]
  },
  {
    name: 'Character & Movement',
    icon: 'Move',
    features: [
      { name: 'Character Fly', description: 'Free-flight for your character', status: 'available' },
      { name: 'WalkSpeed', description: 'Adjust player WalkSpeed', status: 'available' },
      { name: 'JumpPower', description: 'Adjust player JumpPower', status: 'available' },
      { name: 'NoClip', description: 'Pass through walls/objects', status: 'available' },
      { name: 'AntiVoid', description: 'Teleport back if falling into void', status: 'available' }
    ]
  },
  {
    name: 'System',
    icon: 'Settings',
    features: [
      { name: 'AntiAFK', description: 'Prevents idle kick', status: 'available' },
      { name: 'Rejoin', description: 'Rejoin current server', status: 'available' },
      { name: 'Serverhop', description: 'Hop to a different server', status: 'available' }
    ]
  }
],

// ======================= Rivals =======================
'rivals': [
  {
    name: 'Aiming',
    icon: 'Crosshair',
    features: [
      { name: 'Silent Aim', description: 'Target parts with visibility checks', status: 'available' },
      { name: 'Silent Aim Bullet Manipulation', description: 'Redirect bullets server-side where possible', status: 'available' },
      { name: 'Aim Assist / Aimbot', description: 'Strength & smoothness with hit-part and visibility filters', status: 'available' }
    ]
  },
  {
    name: 'Rage',
    icon: 'Flame',
    features: [
      { name: 'Ragebot', description: 'Aggressive autoshoot/target logic', status: 'available' },
      { name: 'Ragebot Bullet Manipulation', description: 'Force-hit logic for ragebot', status: 'available' }
    ]
  },
  {
    name: 'Gun Handling',
    icon: 'Zap',
    features: [
      { name: 'No Spread', description: 'Removes weapon spread', status: 'available' },
      { name: 'Fire Rate Multiplier', description: 'Increase weapon fire rate', status: 'available' },
      { name: 'Bullet Tracers', description: 'Render tracer lines for bullets', status: 'available' },
      { name: 'Hit Sounds', description: 'Play custom sounds on hit', status: 'available' },
      { name: 'Hit Notifications', description: 'On-screen hit markers/alerts', status: 'available' }
    ]
  },
  {
    name: 'Visuals (ESP)',
    icon: 'Eye',
    features: [
      { name: 'ESP', description: 'Master toggle for ESP suite', status: 'available' },
      { name: 'Box ESP', description: 'Corner/box styles', status: 'available' },
      { name: 'Healthbar', description: 'Health bars on targets', status: 'available' },
      { name: 'Health Text', description: 'Numeric HP display', status: 'available' },
      { name: 'Name', description: 'Show player names', status: 'available' },
      { name: 'Weapon', description: 'Show held weapon', status: 'available' },
      { name: 'Ambient Changer', description: 'Adjust environment ambient', status: 'available' }
    ]
  },
  {
    name: 'Viewmodel & Camera',
    icon: 'Camera',
    features: [
      { name: 'Third Person', description: 'Force third-person camera', status: 'available' },
      { name: 'Change Gun Viewmodel', description: 'Swap weapon viewmodel', status: 'available' },
      { name: 'Viewmodel Position', description: 'Offset X/Y/Z of gun model', status: 'available' },
      { name: 'Viewmodel Chams', description: 'Color/material overrides', status: 'available' }
    ]
  },
  {
    name: 'Movement',
    icon: 'Move',
    features: [
      { name: 'Fly', description: 'Configurable flight speed', status: 'available' },
      { name: 'WalkSpeed Modifiers', description: 'Adjust movement speed', status: 'available' },
      { name: 'JumpPower Modifiers', description: 'Adjust jump power', status: 'available' }
    ]
  },
  {
    name: 'Anti-Aim',
    icon: 'Shield',
    features: [
      { name: 'Anti Aim', description: 'Spin/speed/smoothness options to desync aim', status: 'available' }
    ]
  },
  {
    name: 'Configs',
    icon: 'Save',
    features: [
      { name: 'Config System', description: 'Save/load multiple presets', status: 'available' }
    ]
  }
],

// ======================= Grow A Garden =======================
'grow-a-garden': [
  {
    name: 'Automation – Core',
    icon: 'Sprout',
    features: [
      { name: 'Auto Harvest', description: 'Harvest all (mobile-friendly pacing)', status: 'available' },
      { name: 'Auto Sell', description: 'Automatically sells harvested items', status: 'available' },
      { name: 'Auto Collect', description: 'Collect fruits/plants; mobile-stable mode', status: 'available' },
      { name: 'Auto Plant All', description: 'Plants all seeds with filters', status: 'available' },
      { name: 'Auto Plant Under Character', description: 'Drop-planting beneath player', status: 'available' },
      { name: 'Auto Plant Eggs on Plot', description: 'Place eggs automatically', status: 'available' },
      { name: 'Auto Submit Fruits to Beanstalk', description: 'Turn in fruits automatically', status: 'available' },
      { name: 'Auto Submit Chi', description: 'Auto-completes Chi submissions', status: 'available' },
      { name: 'Auto Submit Zen Quest', description: 'Auto-completes Zen tasks', status: 'available' }
    ]
  },
  {
    name: 'Shopping',
    icon: 'Cart',
    features: [
      { name: 'Auto Buy Seeds', description: 'Rapid seed purchasing', status: 'available' },
      { name: 'Auto Buy Event Items', description: 'Buys from event shop (with dropdown)', status: 'available' },
      { name: 'Open Event Shop', description: 'Opens event shop UI (may work post-event)', status: 'available' },
      { name: 'Auto Buy Selected Eggs', description: 'Buys chosen eggs automatically', status: 'available' }
    ]
  },
  {
    name: 'Mutation & Pets',
    icon: 'DNA',
    features: [
      { name: 'Auto Mutation (Fixed)', description: 'Stable mutation automation', status: 'available' },
      { name: 'Mutation Selection & Weights', description: 'Weighted targeting during auto-harvest', status: 'available' },
      { name: 'Auto Mutate Best Pet (WIP)', description: 'Picks best pet to mutate automatically', status: 'available' },
      { name: 'Auto Feed Equipped Pets', description: 'Feeds pets by selected fruit rarities', status: 'available' },
      { name: 'Pet Viewer', description: 'Inspect pets and stats', status: 'available' }
    ]
  },
  {
    name: 'Filters & UX',
    icon: 'Filter',
    features: [
      { name: 'Ignored Fruit Rarities', description: 'Exclude low rarities from planting', status: 'available' },
      { name: 'Only Collect Tranquil Plants', description: 'Collector filter mode', status: 'available' },
      { name: 'Dropdown Search', description: 'Searchable dropdowns for long lists', status: 'available' },
      { name: 'Mobile-Friendly Toggles', description: 'Optimized pacing for mobile FPS', status: 'available' },
      { name: 'Organized GUI', description: 'Reorganized panels for readability', status: 'available' }
    ]
  },
  {
    name: 'ESP & Visuals',
    icon: 'Eye',
    features: [
      { name: 'Item ESP (On-Screen)', description: 'ESP for visible items on screen', status: 'available' }
    ]
  },
  {
    name: 'Hatching',
    icon: 'Egg',
    features: [
      { name: 'Auto Hatch', description: 'Automatically hatches selected eggs', status: 'available' },
      { name: 'Egg Dropdown', description: 'Choose eggs to hatch/buy', status: 'available' }
    ]
  },
  {
    name: 'Sprinklers',
    icon: 'Droplets',
    features: [
      { name: 'Shovel All Sprinklers', description: 'Remove all sprinklers (infinite trick)', status: 'available' },
      { name: 'Remove All Sprinklers (Fixed)', description: 'Stable remove routine', status: 'available' }
    ]
  },
  {
    name: 'Performance',
    icon: 'Gauge',
    features: [
      { name: 'Mobile FPS Optimizations', description: 'Improved FPS on mobile/emulators', status: 'available' }
    ]
  }
],

// ======================= Shindo Life =======================
'shindo-life': [
  {
    name: 'Autofarm & Quests',
    icon: 'Hammer',
    features: [
      { name: 'Autofarm', description: 'General-purpose farming engine', status: 'available' },
      { name: 'Farm Method', description: 'Choose strategy for farming', status: 'available' },
      { name: 'Boss Quest', description: 'Automate boss quest loop', status: 'available' },
      { name: 'Green Quest / Weeds / Grocerybag / Graffiti / Office', description: 'Automate village quests', status: 'available' },
      { name: 'Auto Claim', description: 'Auto claim quest rewards', status: 'available' },
      { name: 'Auto Rank / Auto Rank [Max]', description: 'Automate ranking progress', status: 'available' },
      { name: 'Auto Training', description: 'Train stats automatically', status: 'available' },
      { name: 'Fully Tailed Auto Farm', description: 'Complete tailed-beast farm loop', status: 'available' }
    ]
  },
  {
    name: 'Combat & Auras',
    icon: 'Swords',
    features: [
      { name: 'Attack Method', description: 'Normal / No Cooldown / Apollo', status: 'available' },
      { name: 'Mob Aura [ALL]', description: 'AoE mob clearing', status: 'available' },
      { name: 'Mob Aura Distance', description: 'Set range (e.g., 300)', status: 'available' },
      { name: 'KillAura Boss', description: 'Boss-focused aura', status: 'available' },
      { name: 'Aim Bot (Single/Auto)', description: 'One-player lock + auto aim bot', status: 'available' },
      { name: 'Distance [Aim Bot]', description: 'Targeting distance control', status: 'available' }
    ]
  },
  {
    name: 'Tailed Beasts & Modes',
    icon: 'Flame',
    features: [
      { name: 'Tailed Beast [RealTime]', description: 'Live tracking & engagement', status: 'available' },
      { name: 'Kill Tailed Beast', description: 'Automated takedown', status: 'available' },
      { name: 'Auto Change Tailed', description: 'Rotate targets automatically', status: 'available' },
      { name: 'Defeat Tailed (Gen1/Gen3)', description: 'Automates Gen1+Gen3 routes', status: 'available' },
      { name: '[Gen3] Korama', description: 'Korama assistance', status: 'available' },
      { name: 'Mode Set', description: 'Switch/lock modes', status: 'available' },
      { name: 'Auto INF Mode [Z/C]', description: 'Infinite mode on full MD', status: 'available' },
      { name: 'Set MD (Reset Character)', description: 'Set MD via controlled reset', status: 'available' },
      { name: 'Auto Godmode V1/V2', description: 'Two godmode routines', status: 'available' }
    ]
  },
  {
    name: 'Scrolls & Events',
    icon: 'Scroll',
    features: [
      { name: 'Scroll Sniper [All/Select]', description: 'Snipe any or selected scrolls', status: 'available' },
      { name: 'Collect Scrolls (All/Select/Bloodline/Companions/Race)', description: 'Full scroll collection suite', status: 'available' },
      { name: 'TP to Scroll', description: 'Teleport directly to scroll', status: 'available' },
      { name: 'Mode Event / The Hunt', description: 'Automate limited-time events', status: 'available' },
      { name: 'Teleport (Deva/Forged/Shindai/Kagoku/Jinshiki)', description: 'Quick teleports to event bosses', status: 'available' },
      { name: 'Aizden Mask Hop / Unlock', description: 'Hop & unlock Aizden', status: 'available' }
    ]
  },
  {
    name: 'Stats & Loadouts',
    icon: 'BarChart',
    features: [
      { name: 'Auto Stat Chakra/Ninjutsu/Taijutsu/Health', description: 'Auto allocate stats', status: 'available' },
      { name: 'Bloodlines (Select/Slot/Auto)', description: 'Manage and spin bloodlines', status: 'available' },
      { name: 'Elements (Select/Slot/Auto)', description: 'Manage and spin elements', status: 'available' },
      { name: 'Kenjutsu (Select/Auto)', description: 'Auto acquire/level Kenjutsu', status: 'available' },
      { name: 'Redeem All Codes / Notification Spin / Reset Spin', description: 'Code and spin helpers', status: 'available' }
    ]
  },
  {
    name: 'Movement & Player',
    icon: 'Move',
    features: [
      { name: 'Inf Jump', description: 'Unlimited jumping', status: 'available' },
      { name: 'WalkSpeed / Set WalkSpeed', description: 'Adjust and lock speed', status: 'available' },
      { name: 'JumpPower / Set JumpPower', description: 'Adjust and lock jump', status: 'available' },
      { name: 'Auto Chakra 80% / Auto Heal 60%', description: 'Smart resource thresholds', status: 'available' },
      { name: 'Auto Consumable', description: 'Use consumables when needed', status: 'available' },
      { name: 'No Clip', description: 'Pass through obstacles', status: 'available' },
      { name: 'Lock Position', description: 'Prevent displacement', status: 'available' }
    ]
  },
  {
    name: 'ESP & Visuals',
    icon: 'Eye',
    features: [
      { name: 'ESP Player / ESP Scroll', description: 'Overlay for players & scrolls', status: 'available' },
      { name: 'FPS Boost / Black Screen / Hide Effect-Damage', description: 'Performance & stealth tools', status: 'available' }
    ]
  },
  {
    name: 'Game Modes & Dungeons',
    icon: 'Castle',
    features: [
      { name: 'Select Dungeon / Difficulty', description: 'Choose dungeon & level', status: 'available' },
      { name: 'Auto Wave / Auto Dungeon', description: 'Automate dungeon waves', status: 'available' },
      { name: 'PVP Method', description: 'Preset behaviors for PVP', status: 'available' },
      { name: 'Auto Conquest / Auto Point', description: 'Automate conquest objectives', status: 'available' }
    ]
  },
  {
    name: 'Targets & PvP',
    icon: 'Target',
    features: [
      { name: 'Select/Refresh/Kill Player', description: 'Target selection and kill routine', status: 'available' },
      { name: 'Teleport / Spectate Player', description: 'Utility for target pursuit', status: 'available' },
      { name: 'Check Team / Reset HP 15%', description: 'Team checks and safety reset', status: 'available' }
    ]
  },
  {
    name: 'Servers & Travel',
    icon: 'MapPin',
    features: [
      { name: 'HOP [No Quest] / AutoBoss [HOP]', description: 'Smart server hopping', status: 'available' },
      { name: 'Select Mode [HOP] / Select Village', description: 'Hop by mode or village', status: 'available' },
      { name: 'Auto Join (Village)', description: 'Auto connect to chosen village', status: 'available' },
      { name: 'Rejoin Server / Server Hop', description: 'Reconnect & hop tools', status: 'available' },
      { name: 'Join Private / Copy Code (Self)', description: 'Private server utilities', status: 'available' }
    ]
  },
  {
    name: 'Config & Webhooks',
    icon: 'Save',
    features: [
      { name: 'Menu Keybind', description: 'Toggle UI with hotkey', status: 'available' },
      { name: 'Auto Save Config', description: 'Persist settings automatically', status: 'available' },
      { name: 'Copy Webhook Code / Test Webhook', description: 'Webhook integration helpers', status: 'available' },
      { name: 'Webhook Alert Kick!/Collect!', description: 'Notify on kicks/collections', status: 'available' },
      { name: 'RellCoin Change', description: 'Adjust RellCoin UI view', status: 'available' },
      { name: 'Reset Character', description: 'Force character reset', status: 'available' }
    ]
  }
],

'jailbreak': [
  {
    name: 'Movement',
    icon: 'Move',
    features: [
      { name: 'Fly (P)', description: 'Toggle character fly (default key: P)', status: 'available' },
      { name: 'Character Fly Speed', description: 'Fly speed slider for player', status: 'available' },
      { name: 'Car Fly Speed', description: 'Vehicle fly speed slider', status: 'available' },
      { name: 'WalkSpeed Toggle (X)', description: 'Toggle custom WalkSpeed (key: X)', status: 'available' },
      { name: 'WalkSpeed', description: 'Adjust player WalkSpeed', status: 'available' },
      { name: 'JumpPower Toggle (J)', description: 'Toggle custom JumpPower (key: J)', status: 'available' },
      { name: 'JumpPower', description: 'Adjust player JumpPower', status: 'available' }
    ]
  },

  {
    name: 'Combat & Auras',
    icon: 'Swords',
    features: [
      { name: 'Silent Aim', description: 'Assist aims without snapping', status: 'available' },
      { name: 'Eject Aura', description: 'Auto-eject nearby enemies from vehicles', status: 'available' },
      { name: 'Arrest Aura', description: 'Automatically arrest nearby criminals', status: 'available' },
      { name: 'Pop Tires Aura', description: 'Auto-pop tires of nearby enemy vehicles', status: 'available' },
      { name: 'Kill Aura', description: 'Close-range auto-damage aura', status: 'available' }
    ]
  },

  {
    name: 'NPCs',
    icon: 'UserMinus',
    features: [
      { name: 'Kill AirDrop NPCs', description: 'Auto-eliminate airdrop NPCs', status: 'available' },
      { name: 'Kill OilRig NPCs', description: 'Auto-eliminate oil rig NPCs', status: 'available' },
      { name: 'Kill Mansion NPCs', description: 'Auto-eliminate mansion NPCs', status: 'available' }
    ]
  },

  {
    name: 'ESP',
    icon: 'Eye',
    features: [
      { name: 'Player ESP', description: 'Show players through walls with info', status: 'available' }
    ]
  },

  {
    name: 'Misc',
    icon: 'Settings',
    features: [
      { name: 'Open All Doors', description: 'Force-open all nearby doors', status: 'available' },
      { name: 'Auto Escape', description: 'Automatically escape prison', status: 'available' },
      { name: 'Anti FallDamage / Ragdoll', description: 'Prevent fall damage and ragdoll', status: 'available' },
      { name: 'Always Key', description: 'Maintain keycard access', status: 'available' },
      { name: 'Anti AFK', description: 'Prevent idle kick', status: 'available' },
      { name: 'Reset Character', description: 'Quick reset button', status: 'available' },
      { name: 'Rejoin', description: 'Rejoin current server', status: 'available' }
    ]
  }
]



};