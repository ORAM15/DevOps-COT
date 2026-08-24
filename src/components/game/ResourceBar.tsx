import React from 'react';
import { UserStats } from '@/src/types/game';
import { motion } from 'motion/react';
import { Shield, Trophy, Zap, Box, Database, Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Tooltip } from '@/src/components/ui/Tooltip';

interface ResourceBarProps {
  stats: UserStats;
}

export const ResourceBar: React.FC<ResourceBarProps> = ({ stats }) => {
  return (
    <header className="absolute top-0 left-0 w-full h-20 sky-glass border-b border-sky-electric/20 flex items-center justify-between px-8 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-sky-electric/5 opacity-50" />
      
      {/* Profile Section */}
      <div className="flex items-center gap-5 z-10">
        <div className="relative group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl gemini-gradient flex items-center justify-center text-xl font-black italic shadow-[0_0_20px_rgba(14,165,233,0.4)] border border-white/20 transform group-hover:rotate-6 transition-all">
            {stats.username.substring(0, 1).toUpperCase()}
          </div>
          {stats.clanRole === 'Leader' && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-lg border-2 border-slate-900 flex items-center justify-center shadow-lg">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-sky-neon font-black uppercase tracking-[0.2em] bg-sky-neon/10 px-2 py-0.5 rounded border border-sky-neon/20">Architect</span>
            {stats.clanName && (
              <span className="text-[10px] text-white font-black uppercase tracking-widest bg-indigo-900/40 px-2 py-0.5 rounded border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                [{stats.clanName}]
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-black text-white tracking-tight uppercase">{stats.username}</h1>
            <span className="w-1.5 h-1.5 bg-sky-electric rounded-full animate-pulse" />
            <span className="text-xs font-mono font-black text-sky-electric">v{stats.level}.0</span>
          </div>
        </div>
      </div>

      {/* Resources Section - Centralized */}
      <div className="hidden xl:flex items-center gap-3 z-10 bg-slate-950/40 p-2 rounded-2xl border border-white/5 shadow-2xl">
        <div className="flex items-center gap-3 bg-indigo-900/30 px-3 py-2 rounded-xl border border-indigo-500/10 mr-2">
          <Cpu className="w-4 h-4 text-indigo-400" />
          <div className="flex flex-col">
            <span className="text-[8px] text-indigo-300/60 font-black uppercase leading-none">Runtime</span>
            <span className="text-xs font-black text-white leading-none mt-1 uppercase italic tracking-tighter">Healthy</span>
          </div>
        </div>

        <ResourcePill 
          icon={<Zap className="w-4 h-4" />} 
          label="Power" 
          value={stats.buildPower} 
          color="text-sky-solar" 
        />
        <ResourcePill 
          icon={<Box className="w-4 h-4" />} 
          label="Containers" 
          value={stats.containers} 
          color="text-sky-electric" 
        />
        <ResourcePill 
          icon={<Database className="w-4 h-4" />} 
          label="Data" 
          value={stats.data} 
          color="text-sky-neon"
          isData 
        />
        
        <div className="flex items-center gap-3 bg-yellow-500/10 px-4 py-2 rounded-xl border border-yellow-500/20 ml-2 group cursor-help transition-all">
          <Trophy className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[8px] text-yellow-500/60 font-black uppercase leading-none">Global Rep</span>
            <span className="text-xs font-mono font-black text-white leading-none mt-1">{stats.trophies?.toLocaleString() || '0'}</span>
          </div>
        </div>
      </div>

      <div className="z-10" />
    </header>
  );
};

interface ResourcePillProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
  isData?: boolean;
}

const ResourcePill: React.FC<ResourcePillProps> = ({ icon, label, value, color, isData }) => {
  const formatValue = (val: number) => {
    if (isData) return `${(val / 1000).toFixed(1)} TB`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
    return Math.floor(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-xl transition-all cursor-pointer">
      <div className={cn(color, "drop-shadow-[0_0_8px_currentColor]")}>{icon}</div>
      <div className="flex flex-col">
        <span className="text-[9px] text-slate-400 leading-none uppercase font-black tracking-tight">{label}</span>
        <span className="text-sm font-mono font-bold leading-none text-white mt-1 uppercase tracking-tighter">{formatValue(value)}</span>
      </div>
    </div>
  );
};
