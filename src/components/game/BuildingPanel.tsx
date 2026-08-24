import React, { useState } from 'react';
import { BUILDINGS } from '@/src/constants/game';
import { BuildingType, UserStats, GameBuilding } from '@/src/types/game';
import { Plus, X, GitBranch, Activity, Box, Database, Terminal, Globe, ChevronRight, Lock, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { db } from '@/src/lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { cn } from '@/src/lib/utils';
import { Tooltip } from '@/src/components/ui/Tooltip';

const IconMap: Record<string, any> = {
  Terminal,
  GitBranch,
  Activity,
  Box,
  Globe,
  Database,
};

interface BuildingPanelProps {
  stats: UserStats;
  buildings: GameBuilding[];
  onSelectType: (type: BuildingType) => void;
}

export const BuildingPanel: React.FC<BuildingPanelProps> = ({ stats, buildings, onSelectType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredType, setHoveredType] = useState<BuildingType | null>(null);

  const canAfford = (type: BuildingType) => {
    const cost = BUILDINGS[type].baseCost;
    return (
      stats.buildPower >= cost.buildPower &&
      stats.containers >= cost.containers &&
      stats.data >= cost.data
    );
  };

  const handleBuy = async (type: BuildingType) => {
    if (!canAfford(type)) return;
    onSelectType(type);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="w-20 h-20 sky-glass sky-neon-border rounded-2xl flex flex-col items-center justify-center pointer-events-auto transition-all hover:bg-sky-glow/40 group active:scale-95 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
      >
        <span className="text-3xl group-hover:scale-110 transition-transform">🏗️</span>
        <span className="text-[10px] font-black mt-1 uppercase tracking-wider text-slate-300">SHOP</span>
      </motion.button>
      <div className="mt-2 text-[10px] text-sky-electric/60 font-black uppercase tracking-widest">Build</div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 isolate font-sans">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-sky-deep/80 backdrop-blur-xl -z-10"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="sky-glass border-sky-electric/20 w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[85vh] pointer-events-auto relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 gemini-gradient" />
              
              {/* Header */}
              <div className="p-8 border-b border-sky-electric/10 flex items-center justify-between bg-sky-electric/5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-8 h-[2px] bg-sky-neon rounded-full" />
                    <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Provisioning Hub</h2>
                  </div>
                  <AnimatePresence mode="wait">
                    {hoveredType ? (
                      <motion.div
                        key={hoveredType}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-sky-electric/10 border border-sky-electric/20 px-2 py-0.5 rounded text-[10px] text-sky-electric font-mono font-black uppercase">
                            Architecture
                          </div>
                          <p className="text-sky-electric text-sm font-bold tracking-tight">
                            {BUILDINGS[hoveredType].description}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p 
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-400 text-sm font-medium tracking-tight"
                      >
                        Select high-performance infrastructure components for deployment.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-3 sky-glass hover:bg-sky-glow/20 rounded-xl text-slate-400 transition-colors border border-sky-electric/20 ml-8 group shadow-lg"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Grid content */}
              <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-900/40 custom-scrollbar">
                {(Object.entries(BUILDINGS) as [BuildingType, any][]).map(([type, data]) => {
                  const Icon = IconMap[data.icon] || Terminal;
                  const affordable = canAfford(type);
                  const isLocked = false;
                  const isHovered = hoveredType === type;

                  return (
                    <Tooltip
                      key={type}
                      className="w-full"
                      content={
                        <div className="p-1 space-y-3 font-sans">
                          <div className="flex items-center gap-2 border-b border-sky-electric/20 pb-2">
                            <Icon className="w-4 h-4 text-sky-neon" />
                            <h4 className="text-[11px] font-black text-white uppercase tracking-tighter">{data.name}</h4>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
                              <Info className="w-2.5 h-2.5" /> Background
                            </div>
                            <p className="text-[9px] text-slate-400 italic leading-snug">"{data.flavorText}"</p>
                          </div>

                          <div className="space-y-1.5">
                            <div className="text-[8px] font-black text-sky-electric uppercase tracking-widest">Capabilities & Specs</div>
                            <div className="grid grid-cols-1 gap-1">
                              {data.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-center gap-2 group/spec">
                                  <div className="w-1 h-1 bg-sky-electric rounded-full group-hover/spec:scale-125 transition-transform" />
                                  <span className="text-[9px] text-slate-300 font-medium">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-sky-deep/40 p-2 rounded-lg border border-sky-electric/10">
                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Architecture Note</div>
                            <p className="text-[9px] text-slate-300 italic leading-tight">{data.description}</p>
                          </div>
                        </div>
                      }
                    >
                      <div 
                        onMouseEnter={() => setHoveredType(type)}
                        onMouseLeave={() => setHoveredType(null)}
                        className={cn(
                          "group p-6 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden h-full",
                          isLocked
                            ? "bg-slate-950/60 border-slate-900 opacity-40 grayscale cursor-not-allowed"
                            : affordable 
                              ? "sky-glass border-sky-electric/10 hover:border-sky-electric hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] cursor-pointer" 
                              : "bg-slate-950/40 border-slate-800 opacity-70 grayscale-50 cursor-not-allowed"
                        )}
                        onClick={() => !isLocked && affordable && handleBuy(type)}
                      >
                      {isLocked && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[2px]">
                          <div className="bg-slate-900 shadow-xl p-2 rounded-full border border-sky-electric/20 mb-2">
                             <Lock className="w-5 h-5 text-sky-electric" />
                          </div>
                          <span className="text-[10px] font-black text-sky-electric/60 uppercase tracking-[0.2em]">Lvl {data.unlockLevel} Required</span>
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "sky-glass border border-sky-electric/20 p-3 rounded-xl text-sky-electric group-hover:text-sky-neon transition-all bg-sky-glow/5 shadow-inner",
                          isHovered && "scale-110 border-sky-neon/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                        )}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">
                            {data.resourceProduced ? "Logic" : "Core"}
                          </div>
                          <div className="text-xs font-black text-sky-neon italic tracking-widest">SYSTEM</div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-electric transition-colors uppercase tracking-tight">{data.name}</h3>
                        {data.resourceProduced && (
                          <div className="flex items-center gap-2 mb-3">
                            <div className="px-2 py-0.5 rounded-full bg-sky-neon/5 border border-sky-neon/20 text-[9px] font-mono font-black text-sky-neon shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                              +{data.productionRate}/SEC
                            </div>
                            <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{data.resourceProduced}</span>
                          </div>
                        )}
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{data.description}</p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-sky-electric/10">
                        <div className="flex gap-2">
                          {data.baseCost.buildPower > 0 && (
                            <span className="flex items-center gap-1 text-[10px] font-mono font-black text-sky-solar bg-sky-solar/5 px-2 py-1 rounded-md border border-sky-solar/20">
                              ⚡ {data.baseCost.buildPower}
                            </span>
                          )}
                          {data.baseCost.containers > 0 && (
                            <span className="flex items-center gap-1 text-[10px] font-mono font-black text-sky-electric bg-sky-electric/5 px-2 py-1 rounded-md border border-sky-electric/20">
                              📦 {data.baseCost.containers}
                            </span>
                          )}
                          {data.baseCost.data > 0 && (
                            <span className="flex items-center gap-1 text-[10px] font-mono font-black text-sky-neon bg-sky-neon/5 px-2 py-1 rounded-md border border-sky-neon/20">
                              💾 {data.baseCost.data}
                            </span>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-sky-glow/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 border border-sky-electric/30">
                          <ChevronRight className="w-5 h-5 text-sky-electric" />
                        </div>
                      </div>
                    </div>
                  </Tooltip>
                );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
