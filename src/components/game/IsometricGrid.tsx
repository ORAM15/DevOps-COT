import React from 'react';
import { GameBuilding, BuildingType, BuildingSkin } from '@/src/types/game';
import { BUILDINGS, GRID_SIZE } from '@/src/constants/game';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface IsometricGridProps {
  buildings: GameBuilding[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  placingType: BuildingType | null;
  onPlaceConfirm: (x: number, y: number) => void;
  onCancel: () => void;
}

const BuildingTypeStyles: Record<string, string> = {
  townhall: "border-sky-electric shadow-sky-electric/30",
  git_base: "border-emerald-400 shadow-emerald-400/30",
  jenkins_lab: "border-sky-neon shadow-sky-neon/30",
  docker_yard: "border-blue-400 shadow-blue-400/30",
  web_server: "border-white shadow-white/20",
  storage_vault: "border-sky-solar shadow-sky-solar/30",
};

const SkinStyles: Record<BuildingSkin, string> = {
  classic: "",
  industrial: "border-amber-600/60 shadow-amber-900/30 brightness-90",
  futuristic: "border-cyan-400/80 shadow-cyan-900/40 saturate-150",
  retro: "border-fuchsia-500/80 shadow-fuchsia-900/40 hue-rotate-30",
};

interface BuildingStyles3D {
  leftWall: string;
  rightWall: string;
  roof: string;
  holoColor: string;
  holoBg: string;
  border: string;
  glow: string;
}

const get3DBuildingStyles = (type: BuildingType, skin: BuildingSkin = 'classic'): BuildingStyles3D => {
  const styles: Record<BuildingType, BuildingStyles3D> = {
    townhall: {
      leftWall: "bg-gradient-to-t from-stone-950 via-amber-950 to-amber-900 border-r border-amber-500/30",
      rightWall: "bg-gradient-to-t from-amber-900 via-amber-800 to-amber-500/90 border-l border-amber-400/40",
      roof: "bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-400 border border-amber-300/50",
      holoColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]",
      holoBg: "bg-amber-400/20",
      border: "border-amber-400/80",
      glow: "bg-amber-400/30",
    },
    jenkins_lab: {
      leftWall: "bg-gradient-to-t from-slate-950 via-teal-950 to-teal-900 border-r border-sky-400/30",
      rightWall: "bg-gradient-to-t from-teal-900 via-cyan-950 to-sky-500/90 border-l border-sky-300/40",
      roof: "bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-500 border border-sky-300/50",
      holoColor: "text-sky-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]",
      holoBg: "bg-sky-400/20",
      border: "border-sky-400/80",
      glow: "bg-sky-400/30",
    },
    docker_yard: {
      leftWall: "bg-gradient-to-t from-slate-950 via-blue-950 to-blue-900 border-r border-blue-500/30",
      rightWall: "bg-gradient-to-t from-blue-900 via-indigo-950 to-blue-500/90 border-l border-blue-400/40",
      roof: "bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-600 border border-blue-300/50",
      holoColor: "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]",
      holoBg: "bg-blue-400/20",
      border: "border-blue-400/80",
      glow: "bg-blue-400/30",
    },
    git_base: {
      leftWall: "bg-gradient-to-t from-stone-950 via-emerald-950 to-emerald-900 border-r border-emerald-500/30",
      rightWall: "bg-gradient-to-t from-emerald-900 via-emerald-800 to-emerald-500/90 border-l border-emerald-400/40",
      roof: "bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500 border border-emerald-300/50",
      holoColor: "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]",
      holoBg: "bg-emerald-400/20",
      border: "border-emerald-400/80",
      glow: "bg-emerald-400/30",
    },
    web_server: {
      leftWall: "bg-gradient-to-t from-slate-950 via-fuchsia-950 to-fuchsia-900 border-r border-fuchsia-500/30",
      rightWall: "bg-gradient-to-t from-fuchsia-900 via-pink-950 to-fuchsia-500/90 border-l border-fuchsia-400/40",
      roof: "bg-gradient-to-br from-fuchsia-800 via-pink-700 to-fuchsia-500 border border-fuchsia-300/50",
      holoColor: "text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]",
      holoBg: "bg-fuchsia-400/20",
      border: "border-fuchsia-400/80",
      glow: "bg-fuchsia-500/30",
    },
    storage_vault: {
      leftWall: "bg-gradient-to-t from-stone-950 via-orange-950 to-orange-900 border-r border-orange-500/30",
      rightWall: "bg-gradient-to-t from-orange-900 via-amber-950 to-orange-500/90 border-l border-orange-400/40",
      roof: "bg-gradient-to-br from-orange-700 via-amber-600 to-orange-500 border border-orange-300/50",
      holoColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      holoBg: "bg-orange-400/20",
      border: "border-orange-400/80",
      glow: "bg-orange-400/30",
    }
  };

  const defaultStyle = styles.townhall;
  const base = styles[type] || defaultStyle;

  if (skin === 'industrial') {
    return {
      leftWall: "bg-gradient-to-t from-stone-950 via-stone-800 to-stone-700 border-r border-amber-600/30",
      rightWall: "bg-gradient-to-t from-stone-800 via-stone-700 to-amber-600/90 border-l border-amber-500/40",
      roof: "bg-gradient-to-br from-stone-800 via-amber-900/40 to-stone-700 border border-amber-600/40",
      holoColor: "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      holoBg: "bg-amber-500/20",
      border: "border-amber-600/80",
      glow: "bg-amber-500/35",
    };
  } else if (skin === 'futuristic') {
    return {
      leftWall: "bg-gradient-to-t from-slate-900 via-slate-800 to-cyan-950/80 border-r border-cyan-400/30",
      rightWall: "bg-gradient-to-t from-slate-800 via-slate-100 to-white/95 border-l border-cyan-200/40",
      roof: "bg-gradient-to-br from-slate-100 via-cyan-100 to-slate-200 border border-cyan-300/50",
      holoColor: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.95)] animate-pulse",
      holoBg: "bg-cyan-500/25",
      border: "border-cyan-400/80",
      glow: "bg-cyan-400/30",
    };
  } else if (skin === 'retro') {
    return {
      leftWall: "bg-gradient-to-t from-indigo-950 via-purple-950 to-violet-900 border-r border-fuchsia-500/30",
      rightWall: "bg-gradient-to-t from-violet-900 via-purple-900 to-fuchsia-500/80 border-l border-fuchsia-400/40",
      roof: "bg-gradient-to-br from-indigo-900 via-violet-800 to-fuchsia-900 border border-fuchsia-300/50",
      holoColor: "text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.9)]",
      holoBg: "bg-fuchsia-500/30",
      border: "border-fuchsia-500/80",
      glow: "bg-fuchsia-500/35",
    };
  }

  return base;
};

const getBuildingVisual = (type: BuildingType, skin?: BuildingSkin) => {
  const visuals: Record<BuildingType, string> = {
    townhall: '🏗️',
    jenkins_lab: '🧪',
    docker_yard: '📦',
    git_base: '🌿',
    web_server: '🌐',
    storage_vault: '💎'
  };

  if (!skin || skin === 'classic') return visuals[type];

  if (skin === 'industrial') {
    const industrial: Record<BuildingType, string> = {
      townhall: '🏭',
      jenkins_lab: '⚙️',
      docker_yard: '🏗️',
      git_base: '🔌',
      web_server: '🏮',
      storage_vault: '🏦'
    };
    return industrial[type];
  }

  if (skin === 'futuristic') {
    const futuristic: Record<BuildingType, string> = {
      townhall: '🏛️',
      jenkins_lab: '📡',
      docker_yard: '🛸',
      git_base: '💠',
      web_server: '🌌',
      storage_vault: '💠'
    };
    return futuristic[type];
  }

  if (skin === 'retro') {
    const retro: Record<BuildingType, string> = {
      townhall: '🕹️',
      jenkins_lab: '💾',
      docker_yard: '👾',
      git_base: '📺',
      web_server: '📠',
      storage_vault: '🪙'
    };
    return retro[type];
  }

  return visuals[type];
};

export const IsometricGrid: React.FC<IsometricGridProps> = ({ 
  buildings, 
  selectedId, 
  onSelect,
  placingType,
  onPlaceConfirm,
  onCancel
}) => {
  const tileSize = 60;
  const [hoveredTile, setHoveredTile] = React.useState<{x: number, y: number} | null>(null);

  interface SceneryItem {
    id: string;
    x: number;
    y: number;
    type: 'oak' | 'pine' | 'blossom' | 'shroom' | 'cyber_crystal' | 'boulder' | 'bamboo';
    scale: number;
    rotation: number;
    glowColor: string;
    height: number;
  }

  const sceneryItems = React.useMemo(() => {
    const items: SceneryItem[] = [];
    const seed = 54321; // High quality seed for forest distribution
    const random = (s: number) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };

    let s = seed;
    const getRandom = () => {
      s += 1.3579;
      return random(s);
    };

    // Surrounding boundary from -7 to GRID_SIZE + 6 for a massive expansive 3D natural backdrop
    const minX = -7;
    const maxX = GRID_SIZE + 6;
    const minY = -7;
    const maxY = GRID_SIZE + 6;

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        // Exclude active map terrain
        if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
          continue;
        }

        // Generate dense coverage for a majestic framing backdrop
        if (getRandom() < 0.72) {
          const tVal = getRandom();
          let type: SceneryItem['type'] = 'pine';
          let glowColor = 'bg-teal-400/10';

          if (tVal < 0.22) {
            type = 'bamboo';
            glowColor = 'bg-emerald-400/20';
          } else if (tVal < 0.42) {
            type = 'oak';
            glowColor = 'bg-emerald-500/15';
          } else if (tVal < 0.60) {
            type = 'pine';
            glowColor = 'bg-teal-500/15';
          } else if (tVal < 0.72) {
            type = 'shroom';
            glowColor = 'bg-fuchsia-500/25';
          } else if (tVal < 0.85) {
            type = 'cyber_crystal';
            glowColor = 'bg-cyan-400/25';
          } else if (tVal < 0.94) {
            type = 'blossom';
            glowColor = 'bg-pink-500/20';
          } else {
            type = 'boulder';
            glowColor = 'bg-slate-600/10';
          }

          items.push({
            id: `scenery-${x}-${y}`,
            x,
            y,
            type,
            scale: 0.8 + getRandom() * 0.45,
            rotation: Math.floor(getRandom() * 360),
            glowColor,
            height: 10 + Math.floor(getRandom() * 20),
          });
        }
      }
    }

    // Sort according to painter's algorithm depth
    return items.sort((a, b) => (a.x + a.y) - (b.x + b.y));
  }, []);

  const isOccupied = (x: number, y: number) => {
    return buildings.some(b => b.gridX === x && b.gridY === y);
  };

  const handleTileClick = (x: number, y: number) => {
    if (placingType && !isOccupied(x, y)) {
      onPlaceConfirm(x, y);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-20 min-w-[1000px] min-h-[800px] relative">
      {/* City Foundation Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, #d946ef 100%)',
          transform: 'rotateX(60deg) translateY(200px)',
        }}
      />

      <div 
        className="relative"
        onMouseLeave={() => setHoveredTile(null)}
        style={{
          transform: 'rotateX(60deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d',
          width: GRID_SIZE * tileSize,
          height: GRID_SIZE * tileSize,
        }}
      >
        {/* Render Floor Tiles - Vibrant Grassy Greenland */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 border border-emerald-500/40 bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950/90 shadow-[inset_0_0_80px_rgba(16,185,129,0.25)] rounded-sm overflow-hidden">
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const occupied = isOccupied(x, y);
            const isDarkerLawn = (x + y) % 2 === 0;
            
            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredTile({ x, y })}
                onClick={() => handleTileClick(x, y)}
                className={cn(
                  "border-[0.5px] border-emerald-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-center",
                  isDarkerLawn ? "bg-emerald-950/40" : "bg-emerald-900/40",
                  placingType 
                    ? (occupied 
                        ? "bg-rose-500/20 cursor-not-allowed border-rose-500/20" 
                        : "hover:bg-emerald-400/25 shadow-[inset_0_0_15px_rgba(52,211,153,0.4)] border-emerald-400/30") 
                    : "hover:bg-emerald-500/15"
                )}
              >
                {/* Micro grassy details/tufts on non-occupied tiles */}
                {!occupied && (x * 7 + y * 13) % 5 === 0 && (
                  <span className="text-[7px] text-emerald-400/35 font-serif absolute select-none pointer-events-none transform rotate-12 scale-90">🌱</span>
                )}
                {!occupied && (x * 7 + y * 13) % 9 === 0 && (
                  <span className="text-[6px] text-emerald-300/20 absolute select-none pointer-events-none transform -rotate-12 scale-110">✧</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Ghost Building during Placement */}
        {placingType && hoveredTile && !isOccupied(hoveredTile.x, hoveredTile.y) && (
          <div 
            className="absolute pointer-events-none opacity-50"
            style={{
              width: tileSize,
              height: tileSize,
              left: hoveredTile.x * tileSize,
              top: hoveredTile.y * tileSize,
              transformStyle: 'preserve-3d',
              transition: 'all 0.1s ease-out'
            }}
          >
             <div 
                className="relative w-full h-full" 
                style={{ transform: 'rotateZ(45deg) rotateX(-60deg) translateY(-20px)' }}
              >
                <div className={cn(
                  "relative bg-slate-800/50 border-4 border-dashed border-indigo-400 flex flex-col items-center justify-center p-2 rounded-2xl scale-105",
                )}>
                   <div className="text-3xl grayscale opacity-70">
                    {getBuildingVisual(placingType)}
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[8px] font-black text-indigo-400 whitespace-nowrap uppercase">
                    CONFIRM PLACEMENT
                  </div>
                </div>
              </div>
          </div>
        )}

        {/* Render Surrounding 3D Scenery (Natural Cyber Forest) */}
        {sceneryItems.map((item) => {
          return (
            <div
              key={item.id}
              className="absolute cursor-default pointer-events-none select-none z-[5]"
              style={{
                width: tileSize,
                height: tileSize,
                left: item.x * tileSize,
                top: item.y * tileSize,
                transformStyle: 'preserve-3d',
              }}
            >
              <div 
                className="relative w-full h-full flex items-center justify-center p-0.5" 
                style={{ 
                  transform: 'rotateZ(45deg) rotateX(-60deg) translateY(-20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                 {/* 0. Bamboo: Cyber Bamboo segment structure */}
                 {item.type === 'bamboo' && (
                  <div className="relative flex flex-col items-center justify-end h-28 w-12" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Shadow */}
                    <div className="absolute bottom-1 w-8 h-2 bg-slate-950/50 rounded-full blur-[2px] -z-10" />
                    
                    {/* 3D joint-segmented stacked Bamboo trunk with natural sway */}
                    <motion.div 
                      animate={{ rotate: [-1.5, 1.5, -1.5], y: [0, -0.5, 0] }}
                      transition={{ duration: 4.8 + Math.abs(item.x % 3), repeat: Infinity, ease: 'easeInOut' }}
                      className="flex flex-col items-center justify-end w-4 h-24 relative"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Segment 3 (Top) */}
                      <div className="w-1.5 h-7 bg-gradient-to-t from-emerald-500 via-green-400 to-emerald-400 rounded-sm relative" style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}>
                        {/* Leaf cluster at top segment */}
                        <div className="absolute -top-1 -left-2.5 text-[8px] transform rotate-12 select-none pointer-events-none filter drop-shadow">🎋</div>
                        <div className="absolute -top-2.5 -right-2 text-[8px] transform -rotate-12 select-none pointer-events-none filter drop-shadow">🍃</div>
                        {/* Glowing neon joint line */}
                        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-sky-neon shadow-[0_0_6px_#22d3ee] animate-pulse" />
                      </div>

                      {/* Segment 2 (Middle) */}
                      <div className="w-2 h-8 bg-gradient-to-t from-emerald-600 via-green-500 to-emerald-500 rounded-sm relative" style={{ transform: 'translateZ(8px)', transformStyle: 'preserve-3d' }}>
                        {/* Medium Leaf */}
                        <div className="absolute top-2 -left-2 text-[7px] select-none pointer-events-none filter drop-shadow">🍃</div>
                        {/* Glowing neon joint line */}
                        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-sky-neon shadow-[0_0_6px_#22d3ee] animate-pulse" />
                      </div>

                      {/* Segment 1 (Base Trunk) */}
                      <div className="w-2.5 h-9 bg-gradient-to-t from-emerald-800 via-emerald-600 to-emerald-600 rounded-sm relative" style={{ transform: 'translateZ(4px)' }}>
                        {/* Low Leaf */}
                        <div className="absolute top-3 -right-2 text-[7px] select-none pointer-events-none filter drop-shadow">🍃</div>
                        {/* Joint connector */}
                        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-sky-neon shadow-[0_0_6px_#22d3ee] animate-pulse" />
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 1. Oak: Traditional Grand Oak with multi-tier leafy cards */}
                {item.type === 'oak' && (
                  <div className="relative flex flex-col items-center justify-end h-24 w-16" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Shadow */}
                    <div className="absolute bottom-1 w-12 h-3 bg-slate-950/50 rounded-full blur-[2.5px] -z-10" />
                    
                    {/* Broad Gradient Trunk */}
                    <div className="w-3 h-8 bg-gradient-to-t from-stone-900 via-amber-950 to-amber-900/80 rounded-full mt-auto" style={{ transform: 'translateZ(1px)' }} />
                    
                    {/* Tier 1 Broad Canopy */}
                    <motion.div 
                      animate={{ rotate: [-1.4, 1.4, -1.4], y: [0, -1, 0] }}
                      transition={{ duration: 4.5 + Math.abs(item.x % 3), repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-6 w-14 h-14 bg-emerald-950/95 border-b-2 border-emerald-900 rounded-full flex items-center justify-center shadow-inner"
                      style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
                    >
                      {/* Tier 2 Canopy */}
                      <div className="absolute -top-1.5 w-10 h-10 bg-emerald-800/90 border-b-2 border-emerald-700 rounded-full" style={{ transform: 'translateZ(10px)' }}>
                        {/* Tier 3 Crown */}
                        <div className="absolute -top-1 left-0.5 w-8 h-8 bg-green-500 border border-green-400 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.35)] flex items-center justify-center text-[10px]" style={{ transform: 'translateZ(8px)' }}>
                          🌳
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 2. Pine: Mystic Pointed 3D Conifer */}
                {item.type === 'pine' && (
                  <div className="relative flex flex-col items-center justify-end h-24 w-16" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Shadow */}
                    <div className="absolute bottom-1 w-10 h-2 bg-slate-950/40 rounded-full blur-[2px] -z-10" />
                    
                    {/* 3D Trunk */}
                    <div className="w-2.5 h-7 bg-gradient-to-t from-amber-950 to-amber-900/90 rounded-full mt-auto" style={{ transform: 'translateZ(1px)' }} />
                    
                    {/* Tier 1 Level Canopy (Leaves) */}
                    <motion.div 
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 3.8 + Math.abs(item.y % 3), repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-6 w-12 h-12 bg-teal-950 border-b-2 border-teal-900 rounded-full flex items-center justify-center shadow-md shadow-slate-950/50"
                      style={{ transform: 'translateZ(8px)', transformStyle: 'preserve-3d' }}
                    >
                      {/* Tier 2 Canopy Layer */}
                      <div className="absolute -top-1.5 w-9 h-9 bg-teal-800/90 border-b-2 border-teal-700 rounded-full" style={{ transform: 'translateZ(8px)' }}>
                        {/* Tier 3 Top Canopy Layer */}
                        <div className="absolute -top-1 left-0.5 w-7 h-7 bg-teal-500/90 border border-cyan-400/80 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.4)] flex items-center justify-center text-[10px]" style={{ transform: 'translateZ(6px)' }}>
                          🌲
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 3. Blossom: Ether Sakura Blossom Tree */}
                {item.type === 'blossom' && (
                  <div className="relative flex flex-col items-center justify-end h-24 w-16" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Ambient glowing shadow */}
                    <div className="absolute bottom-1 w-11 h-2.5 bg-pink-950/30 rounded-full blur-[3px] -z-10" />
                    
                    {/* Twisted Trunk */}
                    <div className="w-2.5 h-9 bg-slate-950 border border-pink-950/40 rounded-full mt-auto" style={{ transform: 'translateZ(1px) rotateZ(-8deg)' }} />
                    
                    {/* Cherry Blossom Foliage */}
                    <motion.div 
                      animate={{ rotate: [1.5, -1.5, 1.5], y: [0, -1, 0] }}
                      transition={{ duration: 5.2 + Math.abs(item.x % 4), repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-7 w-12 h-12 bg-pink-950/90 border-b-2 border-pink-900/60 rounded-full flex items-center justify-center"
                      style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}
                    >
                      {/* Tier 2 Bloom */}
                      <div className="absolute -top-1.5 w-9 h-9 bg-pink-700/80 border-b-2 border-pink-600 rounded-full" style={{ transform: 'translateZ(8px)' }}>
                        {/* Tier 3 Neon Peak */}
                        <div className="absolute -top-1 left-0.5 w-7 h-7 bg-pink-500 border border-pink-400 rounded-full shadow-[0_0_15px_#ec4899] flex items-center justify-center text-[10px]" style={{ transform: 'translateZ(6px)' }}>
                          🌸
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 4. Shroom: Cyber Biolum Spore Shroom */}
                {item.type === 'shroom' && (
                  <div className="relative flex flex-col items-center justify-end h-20 w-12" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Pulsing rings on floor */}
                    <div className="absolute bottom-2 w-8 h-2 bg-fuchsia-950/40 rounded-full blur-[2px] -z-10" />
                    <motion.div 
                      animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.35, 0, 0.35] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute bottom-1 w-8 h-8 rounded-full border border-fuchsia-500/30 -z-10"
                    />

                    {/* Glowing bioluminescent stem */}
                    <div className="w-2 h-6 bg-violet-950 border border-violet-800/40 rounded-t-lg mt-auto flex items-center justify-center" style={{ transform: 'translateZ(1px)' }}>
                      <div className="w-0.5 h-full bg-fuchsia-400/60 animate-pulse" />
                    </div>

                    {/* Neon Cap */}
                    <motion.div 
                      animate={{ scale: [1, 1.06, 1], y: [0, -0.8, 0] }}
                      transition={{ duration: 2.2 + Math.abs(item.x % 2), repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-4.5 w-7 h-5 bg-fuchsia-600 border border-fuchsia-400 rounded-full shadow-[0_0_12px_#d946ef] flex items-center justify-center text-[9px]"
                      style={{ transform: 'translateZ(8px)' }}
                    >
                      🍄
                    </motion.div>
                  </div>
                )}

                {/* 5. Cyber Crystal: Sharp Neon Data Crystals */}
                {item.type === 'cyber_crystal' && (
                  <div className="relative flex flex-col items-center justify-end h-20 w-12" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Light projection base */}
                    <div className="absolute bottom-2 w-7 h-2 bg-cyan-950/40 rounded-full blur-[2px] -z-10" />
                    <motion.div 
                      animate={{ opacity: [0.25, 0.5, 0.25] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-1 w-6 h-6 bg-cyan-400/15 rounded-full blur-md -z-10"
                    />

                    {/* Crystalline Data pillar geometry */}
                    <motion.div 
                      animate={{ 
                        y: [0, -1.2, 0],
                        rotateY: [0, 8, 0]
                      }}
                      transition={{ duration: 3.5 + Math.abs(item.y % 2), repeat: Infinity, ease: 'easeInOut' }}
                      className="relative w-4.5 h-9 bg-cyan-950 border-2 border-cyan-400/80 rounded-md flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.55)]"
                      style={{ transform: 'translateZ(4px) rotateZ(12deg)', transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute top-0.5 w-2.5 h-5 bg-cyan-400 border border-cyan-200/50 flex items-center justify-center rounded-sm" style={{ transform: 'translateZ(4px)' }}>
                        💎
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 6. Boulder: Antique Mossy Boulder Monolith */}
                {item.type === 'boulder' && (
                  <div className="relative flex flex-col items-center justify-end h-16 w-12" style={{ transformStyle: 'preserve-3d', scale: item.scale }}>
                    {/* Footprint Shadow */}
                    <div className="absolute bottom-1 w-9 h-3 bg-slate-950/60 rounded-full blur-[1px] -z-10" />
                    
                    {/* Moss Stone core */}
                    <div 
                      className="w-9 h-6 bg-slate-800 border-2 border-slate-700 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
                      style={{ transform: 'translateZ(4px) rotateZ(-10deg)' }}
                    >
                      {/* Moss growth coating */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-600/70 border-b border-emerald-500 rounded-t-2xl" />
                      <span className="text-[9px] mt-0.5 relative z-10 filter brightness-90">🪨</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Render Buildings */}
        {buildings.map((building) => {
          const data = BUILDINGS[building.type];
          const isSelected = selectedId === building.id;
          const buildingHeight = (building.type === 'townhall' ? 64 : building.type === 'web_server' ? 70 : building.type === 'jenkins_lab' ? 58 : 50) + (building.level || 1) * 3;
          const sizeX = 44;
          const sizeY = 44;
          const offsetX = (tileSize - sizeX) / 2; // Offset to center 44px on 60px tile
          const offsetY = (tileSize - sizeY) / 2;
          const styles3D = get3DBuildingStyles(building.type, building.skin);
          const isUnderConstruction = !!building.underConstructionUntil;

          return (
            <motion.div
              key={building.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(building.id);
              }}
              className="absolute cursor-pointer"
              style={{
                width: tileSize,
                height: tileSize,
                left: building.gridX * tileSize,
                top: building.gridY * tileSize,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Selector Ring: Flat on the grass ground */}
              {isSelected && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] z-0"
                  style={{ transform: 'translateZ(1px)' }}
                />
              )}

              {/* Static 3D Building Base Block */}
              <div 
                className="absolute"
                style={{
                  width: `${sizeX}px`,
                  height: `${sizeY}px`,
                  left: `${offsetX}px`,
                  top: `${offsetY}px`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 1. Base Footprint Ground Shadow */}
                <div className="absolute inset-[2px] bg-slate-950/75 rounded-md blur-[3px]" style={{ transform: 'translateZ(-1px)' }} />

                {/* 2. Front-Right Wall (Facing bottom-right along Y line) */}
                <div 
                  className={cn(
                    "absolute left-0 bottom-0 select-none origin-bottom transition-all duration-300",
                    styles3D.rightWall,
                    isUnderConstruction ? "opacity-30 border-dashed" : ""
                  )}
                  style={{ 
                    width: `${sizeX}px`,
                    height: `${buildingHeight}px`,
                    transform: 'rotateX(-90deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Decorative server status rows & LEDs */}
                  <div className="absolute inset-0 flex flex-col justify-between p-1 overflow-hidden pointer-events-none">
                    <div className="flex justify-between items-center opacity-45">
                      <span className="text-[5px] font-mono text-white/60 tracking-tighter uppercase select-none">
                        {building.type.substring(0, 4)}.{building.level}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                    </div>

                    <div className="space-y-0.5 opacity-70">
                      <div className="h-[1px] w-full bg-white/10" />
                      <div className={cn(
                        "h-[1.5px] w-4/5 rounded-full",
                        building.type === 'web_server' ? "bg-fuchsia-400 shadow-[0_0_2px_#ec4899]" :
                        building.type === 'jenkins_lab' ? "bg-sky-400 shadow-[0_0_2px_#22d3ee]" : "bg-emerald-400/40"
                      )} />
                      <div className="h-[1px] w-[55%] bg-white/5" />
                    </div>

                    <div className="flex gap-0.5 pointer-events-none mt-auto">
                      <div className="w-[2px] h-[2px] rounded-full bg-rose-500 opacity-80" />
                      <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.15 }}
                        className="w-[2px] h-[2px] rounded-full bg-emerald-400 shadow-[0_0_2px_rgba(52,211,153,0.8)]" 
                      />
                      <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                        className="w-[2px] h-[2px] rounded-full bg-cyan-400 shadow-[0_0_2px_rgba(34,211,238,0.8)]" 
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Front-Left Wall (Facing bottom-left along X line) */}
                <div 
                  className={cn(
                    "absolute top-0 right-0 select-none origin-right transition-all duration-300",
                    styles3D.leftWall,
                    isUnderConstruction ? "opacity-35 border-dashed" : ""
                  )}
                  style={{ 
                    width: `${buildingHeight}px`,
                    height: `${sizeY}px`,
                    transform: 'rotateY(90deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* High tech panel detailing for shaded illusion */}
                  <div className="absolute inset-0 flex flex-col justify-around p-1 opacity-60 pointer-events-none">
                    <div className="flex gap-1">
                      <div className="h-4 w-[1px] bg-white/10" />
                      <div className="h-4 w-[1px] bg-white/10" />
                      <div className="h-4 w-[1px] bg-white/10" />
                    </div>
                    <div className="h-[1px] w-full bg-white/5" />
                    <div className="flex flex-col gap-0.5 scale-90 origin-left">
                      <div className="h-[1px] w-[65%] bg-emerald-400/20" />
                      <div className="h-[1px] w-[45%] bg-emerald-400/10" />
                    </div>
                  </div>
                </div>

                {/* 4. Roof Plate (Flat XY Plate Raised on Z-axis) */}
                <div 
                  className={cn(
                    "absolute inset-0 select-none transition-all duration-300",
                    styles3D.roof,
                    isUnderConstruction ? "opacity-45" : "",
                    isSelected ? "brightness-110" : ""
                  )}
                  style={{ 
                    transform: `translateZ(${buildingHeight}px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Roof technological grid textures */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-full h-full border border-white/20 rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 border border-dashed border-white/40 rounded-full" />
                    </div>
                  </div>

                  {/* Visual structures for Server cooling fans */}
                  {building.type === 'web_server' && (
                    <div className="absolute inset-x-1.5 top-1.5 bottom-1.5 flex flex-col justify-between opacity-60">
                      <div className="h-[1.5px] bg-fuchsia-400 shadow-[0_0_3px_#ec4899]" />
                      <div className="h-[1.5px] bg-fuchsia-400 shadow-[0_0_3px_#ec4899]" />
                    </div>
                  )}

                  {/* Satellite or transmission dish masts */}
                  {(building.type === 'jenkins_lab' || building.type === 'web_server') && (
                    <div 
                      className="absolute top-1 left-1 flex items-center justify-center" 
                      style={{ transform: 'translateZ(3px)', transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
                        <div className="w-0.5 h-3 bg-cyan-400 animate-pulse origin-bottom" style={{ transform: 'rotateX(-25deg) translateY(-2px)' }} />
                      </div>
                    </div>
                  )}

                  {/* Holographic Projection Core */}
                  <div 
                    className="absolute left-1/2 top-1/2 pointer-events-none flex flex-col items-center justify-center"
                    style={{
                      transform: 'translate3d(-50%, -50%, 15px) rotateZ(45deg) rotateX(-60deg)',
                      transformStyle: 'preserve-3d',
                      width: '64px',
                      height: '64px'
                    }}
                  >
                    {/* Glowing vertical projector stream */}
                    <div 
                      className={cn(
                        "absolute bottom-0 w-8 h-12 bg-gradient-to-t from-transparent via-emerald-400/10 to-transparent blur-md transform origin-bottom scale-y-125 select-none pointer-events-none",
                        building.type === 'web_server' && "via-fuchsia-400/10",
                        building.type === 'townhall' && "via-amber-400/10",
                        building.type === 'jenkins_lab' && "via-sky-400/10"
                      )} 
                      style={{ transform: 'rotateX(90deg)' }}
                    />

                    {/* Floating HUD Widget */}
                    <motion.div
                      animate={{ 
                        y: [0, -3, 0],
                        scale: [0.96, 1.04, 0.96]
                      }}
                      transition={{
                        duration: 3.2 + Math.abs(building.gridX % 2),
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative flex flex-col items-center justify-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Interactive glowing outer ring */}
                      <div className={cn(
                        "w-12 h-12 rounded-full border border-dashed flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.4)] relative backdrop-blur-[1px]",
                        styles3D.holoBg,
                        styles3D.border
                      )}>
                        {/* Spinning diagnostic circle */}
                        <div className="absolute inset-0.5 rounded-full border border-white/5 animate-spin duration-10000" />

                        {/* Interactive Building Icon */}
                        <span className={cn("text-2xl select-none filter drop-shadow-md z-10 block transition-all", isUnderConstruction ? "opacity-35 blur-[0.5px]" : "")}>
                          {getBuildingVisual(building.type, building.skin)}
                        </span>
                      </div>

                      {/* Code Compiler Construction Drone */}
                      {isUnderConstruction && (
                        <div className="absolute -top-8 flex flex-col items-center">
                          <motion.div 
                            animate={{ y: [0, -2, 0], rotate: [0, 8, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-[13px] filter drop-shadow"
                          >
                            🤖
                          </motion.div>
                          <div className="w-8 h-1 bg-slate-900 border border-amber-500/50 rounded-full overflow-hidden shadow-inner mt-0.5">
                            <div className="h-full bg-amber-400 animate-pulse w-3/4" />
                          </div>
                        </div>
                      )}

                      {/* Display level indicator shield */}
                      <div className="mt-1 bg-slate-950/85 px-1.5 py-0.5 rounded border border-white/10 shadow-md flex items-center gap-0.5 scale-90">
                        <span className="text-[5px] text-slate-400 font-bold tracking-tighter uppercase">Lv.</span>
                        <span className={cn("text-[6px] font-black font-mono leading-none", styles3D.holoColor)}>
                          {building.level}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
