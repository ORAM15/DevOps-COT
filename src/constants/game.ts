import { BuildingData, BuildingType } from '@/src/types/game';

export const GRID_SIZE = 12;

export const BUILDINGS: Record<BuildingType, BuildingData> = {
  townhall: {
    name: 'Main Repository (Townhall)',
    description: 'The core of your DevOps ecosystem. Unlocks more buildings as it levels up.',
    baseCost: { buildPower: 100, containers: 50, data: 50 },
    productionRate: 0,
    icon: 'Terminal',
    unlockLevel: 1,
    specs: ['Primary Control Loop', 'Level-Gated Access', 'Cluster Orchestration'],
    flavorText: 'The root of all branches. Without the main repository, the cluster falls into chaos.',
  },
  git_base: {
    name: 'Git Base',
    description: 'Generates Data through continuous commits and code reviews.',
    baseCost: { buildPower: 50, containers: 0, data: 0 },
    resourceProduced: 'data',
    productionRate: 1.0, 
    icon: 'GitBranch',
    unlockLevel: 1,
    specs: ['Commit Velocity: 1.0/s', 'Conflict Resolution: Auto', 'History Persistence: 100%'],
    flavorText: 'Every line of code is a brick in the wall of your digital empire.',
  },
  jenkins_lab: {
    name: 'Jenkins Lab',
    description: 'Generates Build Power by running optimized CI/CD pipelines.',
    baseCost: { buildPower: 0, containers: 25, data: 25 },
    resourceProduced: 'buildPower',
    productionRate: 1.25,
    icon: 'Activity',
    unlockLevel: 2,
    specs: ['Build Success Rate: 99.9%', 'Parallel Execution: Enabled', 'Plugin Integration: Full'],
    flavorText: 'Automating the mundane so you can focus on the insane.',
  },
  docker_yard: {
    name: 'Docker Yard',
    description: 'Generates Containers by orchestrating microservices.',
    baseCost: { buildPower: 75, containers: 0, data: 25 },
    resourceProduced: 'containers',
    productionRate: 1.25,
    icon: 'Box',
    unlockLevel: 3,
    specs: ['Image Compression: LZ4', 'Isolation Level: Kernel', 'Cold Start Time: <10ms'],
    flavorText: 'Packaging dependencies like gifts for the production server.',
  },
  web_server: {
    name: 'Nginx Web Server',
    description: 'Deploys your apps. Increases XP gain from other buildings.',
    baseCost: { buildPower: 150, containers: 100, data: 100 },
    productionRate: 0,
    icon: 'Globe',
    unlockLevel: 4,
    specs: ['Concurrent Connections: 10k+', 'Load Balancing: Round Robin', 'SSL Termination: HW Soft'],
    flavorText: 'The public face of your infrastructure. Keep it fast, keep it safe.',
  },
  storage_vault: {
    name: 'Storage Vault',
    description: 'Increases the maximum capacity for all resources.',
    baseCost: { buildPower: 100, containers: 100, data: 100 },
    productionRate: 0,
    icon: 'Database',
    unlockLevel: 2,
    specs: ['Capacity Factor: 1.5x', 'Redundancy Level: RAID-6', 'Access Latency: 1ms'],
    flavorText: 'Data is the new oil, and this is your strategic reserve.',
  },
};

export const RESOURCE_CAPS = {
  initial: 1000,
  per_vault_level: 500,
};

export const LEVEL_XP_REQUIREMENTS = [0, 100, 300, 700, 1500, 3100, 6300];
