export type BuildingType = 'townhall' | 'git_base' | 'jenkins_lab' | 'docker_yard' | 'web_server' | 'storage_vault';

export type BuildingSkin = 'classic' | 'industrial' | 'futuristic' | 'retro';

export interface GameBuilding {
  id: string;
  ownerId: string;
  type: BuildingType;
  level: number;
  gridX: number;
  gridY: number;
  lastHarvested: number; // timestamp
  createdAt: number; // timestamp
  underConstructionUntil?: number | null; // timestamp when construction finishes
  skin?: BuildingSkin;
}

export type AutoBuildPriority = 'resource' | 'level' | 'balanced';

export interface ClanMember {
  userId: string;
  username: string;
  role: 'Leader' | 'Member';
  level: number;
  trophies: number;
  contribution: {
    buildPower: number;
    containers: number;
    data: number;
  };
}

export interface Clan {
  id: string;
  name: string;
  leaderId: string;
  leaderName: string;
  members: ClanMember[];
  totalTrophies: number;
  resources: {
    buildPower: number;
    containers: number;
    data: number;
  };
}

export interface ClanInvite {
  id: string;
  clanId: string;
  clanName: string;
  targetUserId: string;
  targetUsername: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'collect_bp' | 'upgrade_buildings' | 'fork_repos' | 'attacks';
  progress: number;
  target: number;
  reward: {
    buildPower?: number;
    containers?: number;
    data?: number;
    trophies?: number;
  };
  claimed: boolean;
}

export interface UserStats {
  userId: string;
  username: string;
  level: number;
  experience: number;
  buildPower: number;
  containers: number;
  data: number;
  lastUpdated: number;
  buildersMax: number;
  buildersActive: number;
  autoBuildEnabled: boolean;
  autoBuildPriority: AutoBuildPriority;
  clanId?: string;
  clanName?: string;
  clanRole?: 'Leader' | 'Member';
  trophies: number;
  dailyMissions?: Record<string, Mission>;
}

export interface BuildingData {
  name: string;
  description: string;
  baseCost: {
    buildPower: number;
    containers: number;
    data: number;
  };
  resourceProduced?: 'buildPower' | 'containers' | 'data';
  productionRate: number; // units per second per level
  icon: string;
  unlockLevel: number;
  specs?: string[]; 
  flavorText?: string;
}
