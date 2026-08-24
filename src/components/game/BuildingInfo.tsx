import React from 'react';
import { GameBuilding, UserStats, BuildingSkin } from '@/src/types/game';
import { BUILDINGS } from '@/src/constants/game';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpCircle, Trash2, X, Terminal, GitBranch, Activity, Box, Database, Globe, Loader2, CheckCircle2, Palette, Info, ChevronRight, Lock } from 'lucide-react';
import { db } from '@/src/lib/firebase';
import { doc, updateDoc, deleteDoc, increment } from 'firebase/firestore';
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

interface BuildingInfoProps {
  building: GameBuilding;
  stats: UserStats;
  onClose: () => void;
}

export const BuildingInfo: React.FC<BuildingInfoProps> = ({ building, stats, onClose }) => {
  const data = BUILDINGS[building.type];
  const Icon = IconMap[data.icon] || Terminal;
  const [isTriggering, setIsTriggering] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const upgradeCost = {
    buildPower: Math.floor(data.baseCost.buildPower * Math.pow(1.2, building.level - 1)),
    containers: Math.floor(data.baseCost.containers * Math.pow(1.2, building.level - 1)),
    data: Math.floor(data.baseCost.data * Math.pow(1.2, building.level - 1)),
  };

  const constructionTime = building.level * 30 * 1000;
  
  const affordable = {
    buildPower: stats.buildPower >= upgradeCost.buildPower,
    containers: stats.containers >= upgradeCost.containers,
    data: stats.data >= upgradeCost.data,
  };

  const buildersAvailable = stats.buildersActive < stats.buildersMax;
  const canAffordUpgrade = 
    affordable.buildPower &&
    affordable.containers &&
    affordable.data &&
    buildersAvailable && 
    !building.underConstructionUntil;

  const getStatusText = () => {
    if (building.underConstructionUntil) return "CONSTRUCTING";
    if (!buildersAvailable && !building.underConstructionUntil) return "BUILDERS BUSY";
    if (!affordable.buildPower || !affordable.containers || !affordable.data) return "LOW RESOURCES";
    return "READY";
  };

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!building.underConstructionUntil) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const total = constructionTime;
      const remaining = building.underConstructionUntil! - now;
      const p = Math.max(0, Math.min(100, 100 - (remaining / total) * 100));
      setProgress(p);
    }, 500);

    return () => clearInterval(interval);
  }, [building.underConstructionUntil, constructionTime]);

  const getUpgradeButtonContent = () => {
    if (building.underConstructionUntil) {
      return (
        <>
          <div className="absolute inset-0 bg-indigo-600/20" style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }} />
          <Loader2 className="w-5 h-5 text-indigo-400 animate-spin z-10" />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-widest text-indigo-200 z-10">
            {progress.toFixed(0)}% SYNCED
          </span>
        </>
      );
    }
    return (
      <>
        <span className="text-xl group-hover:scale-110 transition-transform">🔧</span>
        <span className={cn("text-[9px] font-bold mt-1 uppercase tracking-widest", canAffordUpgrade ? "text-white" : "text-slate-400")}>UPGRADE</span>
      </>
    );
  };

  const handleUpgrade = async () => {
    if (!canAffordUpgrade) return;

    const buildingRef = doc(db, `users/${stats.userId}/buildings/${building.id}`);
    const userRef = doc(db, 'users', stats.userId);

    try {
      await updateDoc(buildingRef, {
        underConstructionUntil: Date.now() + constructionTime
      });
      const userPayload: Record<string, any> = {
        buildPower: increment(-upgradeCost.buildPower),
        containers: increment(-upgradeCost.containers),
        data: increment(-upgradeCost.data),
        buildersActive: increment(1)
      };
      if (stats.dailyMissions) {
        userPayload['dailyMissions.upgrade_buildings.progress'] = increment(1);
      }
      await updateDoc(userRef, userPayload);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    if (building.type === 'townhall') return;
    
    const buildingRef = doc(db, `users/${stats.userId}/buildings/${building.id}`);
    const userRef = doc(db, 'users', stats.userId);

    try {
      await deleteDoc(buildingRef);
      if (building.underConstructionUntil) {
        await updateDoc(userRef, {
          buildersActive: increment(-1)
        });
      }
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancelUpgrade = async () => {
    if (!building.underConstructionUntil) return;
    
    const buildingRef = doc(db, `users/${stats.userId}/buildings/${building.id}`);
    const userRef = doc(db, 'users', stats.userId);

    try {
      await updateDoc(buildingRef, {
        underConstructionUntil: null
      });
      await updateDoc(userRef, {
        buildersActive: increment(-1)
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleManualAction = async () => {
    if (isTriggering) return;
    setIsTriggering(true);
    
    // Simulate devops delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    try {
      if (data.resourceProduced) {
        const userRef = doc(db, 'users', stats.userId);
        const reward = 15 * building.level;
        await updateDoc(userRef, {
          [data.resourceProduced]: increment(reward)
        });
      }
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsTriggering(false);
    }
  };

  const getActionConfig = () => {
    switch (building.type) {
      case 'git_base':
        return { label: 'Manual push', icon: '🚀', sub: 'Instant Data Burst' };
      case 'jenkins_lab':
        return { label: 'Trigger pipeline', icon: '⚡', sub: 'Build Power Spike' };
      case 'docker_yard':
        return { label: 'Scale pod', icon: '🐋', sub: 'Container Spawn' };
      default:
        return { label: 'Trigger manual sync', icon: '🔄', sub: 'Health Check' };
    }
  };

  const action = getActionConfig();

  const SKINS: { id: BuildingSkin; name: string; icon: string }[] = [
    { id: 'classic', name: 'Original', icon: '🏛️' },
    { id: 'industrial', name: 'Industrial', icon: '⚙️' },
    { id: 'futuristic', name: 'Futuristic', icon: '🚀' },
    { id: 'retro', name: 'Retro', icon: '🕹️' },
  ];

  const handleSkinChange = async (skinId: BuildingSkin) => {
    const buildingRef = doc(db, `users/${stats.userId}/buildings/${building.id}`);
    try {
      await updateDoc(buildingRef, { skin: skinId });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        className="w-80 sky-glass border-sky-electric/20 rounded-2xl p-4 shadow-2xl z-50 pointer-events-auto flex flex-col max-h-[85vh] relative overflow-hidden"
      >
      <div className="absolute top-0 left-0 w-full h-[2px] gemini-gradient" />
      
      <div className="flex items-center gap-3 mb-6 relative flex-shrink-0">
        <div className="w-12 h-12 rounded-xl sky-glass border border-sky-electric/30 flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(14,165,233,0.3)] bg-sky-glow/10">
          {building.type === 'townhall' ? '🏘️' : 
           building.type === 'jenkins_lab' ? '🧪' :
           building.type === 'docker_yard' ? '📦' : 
           building.type === 'git_base' ? '🌿' : '💎'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-black text-white truncate leading-tight uppercase italic tracking-tighter">{data.name}</div>
          <div className="text-[10px] text-sky-neon font-black uppercase tracking-[0.2em] mt-0.5">Core v{building.level}.0</div>
        </div>
        <button onClick={onClose} className="p-2 sky-glass hover:bg-sky-glow/20 rounded-xl transition-all text-slate-400 hover:text-white border border-sky-electric/10">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4 overflow-y-auto pr-1 custom-scrollbar pb-2">
        {/* System Diagnostics Section */}
        <div className="sky-glass p-3 rounded-xl border border-sky-electric/5 bg-sky-electric/5">
          <div className="text-[10px] text-sky-electric uppercase font-black mb-3 tracking-[0.3em] flex items-center justify-between">
            Diagnostics
            <span className="text-sky-neon animate-pulse">●</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950/40 p-2 rounded-full border border-sky-electric/10">
            <div className="w-full h-1.5 bg-slate-800 rounded-full mr-3 overflow-hidden ml-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                className="h-full gemini-gradient rounded-full shadow-[0_0_10px_rgba(232,121,249,0.3)]"
              />
            </div>
            <span className="text-[10px] font-mono font-black text-sky-electric mr-1 leading-none italic">92%</span>
          </div>
        </div>

        {/* Operational Yield Section */}
        <Tooltip
          className="w-full"
          content={
            <div className="p-1 space-y-2 font-sans">
              <div className="text-[10px] font-black text-white uppercase tracking-tighter italic">Yield Optimization</div>
              <div className="flex justify-between items-center bg-slate-950/40 p-2 rounded-lg border border-sky-electric/10 gap-4">
                <div className="text-left">
                  <div className="text-[8px] text-slate-500 uppercase font-black">Current</div>
                  <div className="text-[10px] font-mono text-sky-neon font-black">+{(data.productionRate * building.level).toFixed(1)}/s</div>
                </div>
                <ChevronRight className="w-3 h-3 text-sky-electric" />
                <div className="text-right">
                  <div className="text-[8px] text-sky-electric uppercase font-black">v{building.level + 1}.0</div>
                  <div className="text-[10px] font-mono text-white font-black">+{(data.productionRate * (building.level + 1)).toFixed(1)}/s</div>
                </div>
              </div>
              <p className="text-[9px] text-slate-400 italic font-medium leading-tight ml-1">Upgrading increases the base throughput by {(data.productionRate).toFixed(1)} units/sec.</p>
            </div>
          }
        >
          <div className="sky-glass p-3 rounded-xl border border-sky-electric/5">
            <div className="text-[10px] text-slate-400 uppercase font-black mb-2 tracking-[0.2em]">Operational Yield</div>
            <div className="text-xs font-mono font-black text-sky-neon bg-sky-neon/5 p-2 rounded-lg border border-sky-neon/10">
              {data.resourceProduced ? (
                <span className="flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
                  +{(data.productionRate * building.level).toFixed(1)} {data.resourceProduced}/sec
                </span>
              ) : (
                <span className="text-slate-500 italic opacity-50 uppercase text-[10px]">Static Infrastructure Node</span>
              )}
            </div>
          </div>
        </Tooltip>

        {/* Technical Specs Section */}
        <Tooltip
          className="w-full"
          content={
            <div className="p-1 space-y-1 max-w-[200px]">
              <div className="text-[10px] font-black text-white uppercase italic">System Specs</div>
              <p className="text-[9px] text-slate-400 leading-tight">These parameters represent the module's core runtime configuration and efficiency metrics.</p>
            </div>
          }
        >
          <div className="sky-glass p-4 rounded-xl border border-sky-electric/5 bg-sky-electric/5">
            <div className="text-[10px] text-slate-400 uppercase font-black mb-2 tracking-[0.2em] flex items-center justify-between">
              Architecture
              <Info className="w-3 h-3 text-sky-electric/50" />
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {data.specs?.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-sky-electric rounded-full group-hover:shadow-[0_0_8px_rgba(14,165,233,0.8)] transition-all" />
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter group-hover:text-white transition-colors">{spec}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-sky-electric/10">
              <p className="text-[10px] text-slate-400 italic leading-relaxed font-medium">"{data.flavorText}"</p>
            </div>
          </div>
        </Tooltip>
        
        {/* Construction Progress Bar */}
        {building.underConstructionUntil && (
          <div className="sky-glass p-4 rounded-xl border border-sky-neon/30 bg-sky-neon/5 animate-in fade-in slide-in-from-top-2 duration-300 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="text-[10px] text-sky-neon uppercase font-black mb-3 tracking-[0.3em] flex items-center justify-between">
              Sync in Progress
              <span className="text-sky-neon font-mono tabular-nums">
                {Math.max(0, Math.ceil((building.underConstructionUntil - Date.now()) / 1000))}s
              </span>
            </div>
            <div className="h-3 w-full bg-slate-950/60 rounded-full border border-sky-neon/20 overflow-hidden mb-2 p-[2px]">
              <motion.div 
                className="h-full gemini-gradient rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-[8px] font-black text-sky-neon/60 uppercase tracking-widest">
              <span>Initializing</span>
              <span>{progress.toFixed(0)}%</span>
              <span>Finalizing</span>
            </div>
          </div>
        )}

        {/* Visual Theme Section */}
        <div className="sky-glass p-3 rounded-xl border border-sky-electric/5">
          <div className="text-[10px] text-slate-400 uppercase font-black mb-2 tracking-[0.2em] flex items-center justify-between">
            Skin Matrix
            <Palette className="w-3 h-3 text-sky-electric" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {SKINS.map((skin) => (
              <button
                key={skin.id}
                onClick={() => handleSkinChange(skin.id)}
                className={cn(
                  "flex flex-col items-center p-2 rounded-xl border transition-all",
                  (building.skin || 'classic') === skin.id 
                    ? "gemini-gradient border-sky-neon shadow-[0_0_15px_rgba(232,121,249,0.3)] scale-105" 
                    : "sky-glass border-sky-electric/10 hover:border-sky-electric/30"
                )}
                title={skin.name}
              >
                <span className="text-lg mb-1">{skin.icon}</span>
                <span className="text-[8px] font-black text-white/50 truncate w-full text-center tracking-tighter uppercase">{skin.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upgrade Requirements Section */}
        <div className="sky-glass p-3 rounded-xl border border-sky-electric/5">
          <div className="text-[10px] text-slate-400 uppercase font-black mb-3 tracking-[0.2em] flex items-center justify-between">
            Resources
            <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase", canAffordUpgrade ? "bg-sky-neon/10 text-sky-neon border border-sky-neon/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]" : "bg-red-500/10 text-red-400 border border-red-500/20")}>
              {canAffordUpgrade ? "Affordable" : "Insufficient"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {upgradeCost.buildPower > 0 && (
              <div className={cn("flex flex-col items-center p-2 rounded-xl border min-w-[60px]", stats.buildPower >= upgradeCost.buildPower ? "bg-sky-solar/5 border-sky-solar/20" : "bg-red-950/20 border-red-900/30 opacity-60")}>
                <span className="text-[10px] text-sky-solar mb-0.5">⚡</span>
                <span className={cn("text-[10px] font-mono font-black", stats.buildPower >= upgradeCost.buildPower ? "text-sky-solar" : "text-red-400")}>{upgradeCost.buildPower}</span>
              </div>
            )}
            {upgradeCost.containers > 0 && (
              <div className={cn("flex flex-col items-center p-2 rounded-xl border min-w-[60px]", stats.containers >= upgradeCost.containers ? "bg-sky-electric/5 border-sky-electric/20" : "bg-red-950/20 border-red-900/30 opacity-60")}>
                <span className="text-[10px] text-sky-electric mb-0.5">📦</span>
                <span className={cn("text-[10px] font-mono font-black", stats.containers >= upgradeCost.containers ? "text-sky-electric" : "text-red-400")}>{upgradeCost.containers}</span>
              </div>
            )}
            {upgradeCost.data > 0 && (
              <div className={cn("flex flex-col items-center p-2 rounded-xl border min-w-[60px]", stats.data >= upgradeCost.data ? "bg-sky-neon/5 border-sky-neon/20" : "bg-red-950/20 border-red-900/30 opacity-60")}>
                <span className="text-[10px] text-sky-neon mb-0.5">💾</span>
                <span className={cn("text-[10px] font-mono font-black", stats.data >= upgradeCost.data ? "text-sky-neon" : "text-red-400")}>{upgradeCost.data}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Actions Section */}
        <div className="grid grid-cols-2 gap-3 pb-2">
          <Tooltip
            className="w-full"
            content={
              <div className="p-2 space-y-2 max-w-[200px] font-sans">
                <div className="text-[10px] font-black text-sky-electric uppercase tracking-tighter">Upgrade Protocol</div>
                <p className="text-[9px] text-slate-300 leading-relaxed italic">
                  Upgrading to <span className="text-white font-black">v{building.level + 1}.0</span> will improve the module's performance characteristics. 
                </p>
                {!buildersAvailable && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 p-2 rounded text-red-400">
                    <Lock className="w-3 h-3" />
                    <span className="text-[8px] font-black uppercase">Bots Occupied</span>
                  </div>
                )}
              </div>
            }
          >
            <button 
              onClick={handleUpgrade}
              disabled={!canAffordUpgrade && !building.underConstructionUntil}
              className={cn(
                "relative flex w-full flex-col items-center justify-center p-4 rounded-xl border group transition-all overflow-hidden shadow-xl",
                canAffordUpgrade 
                  ? "gemini-gradient border-sky-neon/30 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:brightness-110 active:scale-95" 
                  : building.underConstructionUntil
                    ? "sky-glass border-sky-neon/50 cursor-wait text-sky-neon shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/40 border-slate-800 opacity-40 cursor-not-allowed grayscale"
              )}
            >
              {getUpgradeButtonContent()}
            </button>
          </Tooltip>
          {building.underConstructionUntil ? (
            <button 
              onClick={handleCancelUpgrade}
              className="flex flex-col items-center justify-center bg-red-950/40 hover:bg-red-900/60 p-4 rounded-xl border border-red-500/30 group transition-all active:scale-95 shadow-xl shadow-red-900/20"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">🛑</span>
              <span className="text-[9px] text-red-400 font-black mt-1 uppercase tracking-[0.2em]">Abort Sync</span>
            </button>
          ) : (
            <button 
              onClick={handleDelete}
              disabled={building.type === 'townhall'}
              className="flex flex-col items-center justify-center sky-glass hover:bg-red-950/30 hover:border-red-500/50 p-4 rounded-xl border border-sky-electric/10 group transition-all active:scale-95 disabled:opacity-20 shadow-xl"
            >
              <Trash2 className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors" />
              <span className="text-[9px] text-slate-500 font-black mt-2 uppercase tracking-[0.2em] group-hover:text-red-400">Decom</span>
            </button>
          )}
        </div>
        
        {/* Manual Action Button */}
        <button 
          onClick={handleManualAction}
          disabled={isTriggering}
          className="relative w-full sky-glass sky-neon-border hover:bg-sky-glow/30 p-4 rounded-xl transition-all active:scale-[0.98] group disabled:opacity-80 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-neon/0 via-sky-neon/5 to-sky-neon/0 -translate-x-full group-hover:animate-infinite-shimmer" />
          <AnimatePresence mode="wait">
            {isTriggering ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2 text-sky-electric font-black uppercase tracking-widest"
              >
                <Loader2 className="w-3 h-3 animate-spin" />
                Syncing Matrix...
              </motion.div>
            ) : showSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center gap-2 text-sky-neon font-black uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              >
                <CheckCircle2 className="w-3 h-3" />
                Link Established
              </motion.div>
            ) : (
              <motion.div 
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center leading-none"
              >
                <span className="flex items-center gap-2 mb-1.5 font-black uppercase tracking-widest text-sky-electric group-hover:text-sky-neon transition-colors">
                  <span className="text-lg group-hover:scale-125 transition-transform">{action.icon}</span>
                  {action.label}
                </span>
                <span className="text-[8px] text-slate-500 font-black uppercase tracking-tighter italic opacity-60">
                  {action.sub}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
    <style>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #334155;
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #475569;
      }
    `}</style>
    </>
  );
};
