import React from 'react';
import { UserStats, AutoBuildPriority } from '@/src/types/game';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Settings2, Power, Zap, Layers, BarChart3, ChevronRight, Info } from 'lucide-react';
import { db } from '@/src/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { cn } from '@/src/lib/utils';
import { Tooltip } from '@/src/components/ui/Tooltip';

interface BuilderManagementProps {
  stats: UserStats;
}

export const BuilderManagement: React.FC<BuilderManagementProps> = ({ stats }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAutoBuild = async () => {
    const userRef = doc(db, 'users', stats.userId);
    await updateDoc(userRef, {
      autoBuildEnabled: !stats.autoBuildEnabled
    });
  };

  const setPriority = async (priority: AutoBuildPriority) => {
    const userRef = doc(db, 'users', stats.userId);
    await updateDoc(userRef, {
      autoBuildPriority: priority
    });
  };

  const priorities: { id: AutoBuildPriority; name: string; icon: any; desc: string }[] = [
    { 
      id: 'resource', 
      name: 'Yield Max', 
      icon: Zap, 
      desc: 'Prioritizes resource generating buildings (Jenkins, Docker, Git)' 
    },
    { 
      id: 'level', 
      name: 'Equalizer', 
      icon: Layers, 
      desc: 'Prioritizes upgrading lowest level buildings first' 
    },
    { 
      id: 'balanced', 
      name: 'Balanced', 
      icon: BarChart3, 
      desc: 'Hybrid logic targeting the most cost-effective upgrades' 
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all shadow-lg backdrop-blur-md",
          stats.autoBuildEnabled 
            ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-200" 
            : "bg-slate-900/60 border-slate-700/50 text-slate-400 hover:text-slate-200"
        )}
      >
        <Bot className={cn("w-4 h-4", stats.autoBuildEnabled && "animate-bounce")} />
        <span className="text-[10px] font-black uppercase tracking-widest">Builder AI</span>
        <Settings2 className="w-3 h-3 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-3 right-0 w-64 bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-xl p-4 shadow-2xl z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-500/20 rounded-md">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-[10px] font-black text-white uppercase tracking-tighter">AI Configuration</div>
              </div>
              <button 
                onClick={toggleAutoBuild}
                className={cn(
                  "p-1.5 rounded-md border transition-all",
                  stats.autoBuildEnabled 
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" 
                    : "bg-slate-800 border-slate-700 text-slate-500"
                )}
              >
                <Power className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 px-1">Logic Priority</div>
              {priorities.map((p) => {
                const Icon = p.icon;
                const isSelected = stats.autoBuildPriority === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPriority(p.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-2 rounded-lg border transition-all group text-left",
                      isSelected 
                        ? "bg-indigo-600/10 border-indigo-500/30 text-white" 
                        : "bg-slate-900/40 border-slate-800/50 text-slate-400 hover:bg-slate-800/60"
                    )}
                  >
                    <div className={cn(
                      "p-1.5 rounded-md",
                      isSelected ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                    )}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black uppercase tracking-tight">{p.name}</div>
                      <div className="text-[8px] text-slate-500 font-bold leading-tight line-clamp-1">{p.desc}</div>
                    </div>
                    {isSelected && <ChevronRight className="w-3 h-3 text-indigo-400" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/50">
              <div className="flex items-start gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800/40">
                <Info className="w-3 h-3 text-slate-500 mt-0.5 shrink-0" />
                <p className="text-[8px] text-slate-400 leading-relaxed font-medium">
                  Autonomous agents will automatically provision resource-available upgrades based on the selected heuristic. 
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
