import React, { useState, useMemo } from 'react';
import { UserStats, Clan, ClanMember } from '@/src/types/game';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Shield, Trophy, Zap, Box, Database, X, GitFork, UserPlus, Star, ChevronRight, BarChart3, Info, Send, Check, XCircle, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Tooltip } from '@/src/components/ui/Tooltip';
import { ClanInvite } from '@/src/types/game';

interface ClanPanelProps {
  stats: UserStats;
  clan: Clan;
  onClose: () => void;
  onFork: () => void;
  isForking?: boolean;
}

export const ClanPanel: React.FC<ClanPanelProps> = ({ stats, clan, onClose, onFork, isForking }) => {
  const [activeTab, setActiveTab] = useState<'members' | 'resources' | 'invites'>('members');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteUsername, setInviteUsername] = useState('');
  const [invites, setInvites] = useState<ClanInvite[]>([
    {
      id: 'inv_1',
      clanId: clan.id,
      clanName: clan.name,
      targetUserId: 'target_1',
      targetUsername: 'KubeMaster_42',
      status: 'pending',
      createdAt: Date.now() - 3600000
    },
    {
      id: 'inv_2',
      clanId: clan.id,
      clanName: clan.name,
      targetUserId: 'target_2',
      targetUsername: 'NullPointer_Ex',
      status: 'pending',
      createdAt: Date.now() - 7200000
    }
  ]);

  const isLeader = stats.clanRole === 'Leader';

  const sortedMembers = useMemo(() => {
    return [...clan.members].sort((a, b) => b.trophies - a.trophies);
  }, [clan.members]);

  const totalContribution = useMemo(() => {
    return clan.members.reduce((acc, m) => ({
      buildPower: acc.buildPower + m.contribution.buildPower,
      containers: acc.containers + m.contribution.containers,
      data: acc.data + m.contribution.data,
    }), { buildPower: 0, containers: 0, data: 0 });
  }, [clan.members]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-20 right-6 bottom-6 w-[500px] sky-glass border border-sky-electric/20 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-sky-electric/10 bg-sky-deep/40 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-900/50 border-2 border-sky-electric/30 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
            <Shield className="w-10 h-10 text-sky-neon" />
          </div>
          <div>
            <div className="text-[10px] text-sky-neon font-black uppercase tracking-[0.3em] mb-1">Active Alliance</div>
            <h2 className="text-3xl font-black text-white italic tracking-tighter">{clan.name}</h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-slate-400">Leader: <span className="text-sky-electric font-bold">{clan.leaderName}</span></span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span className="text-xs text-slate-400">{clan.members.length} Members</span>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Clan Collective Reputation</span>
            <span className="text-sm font-mono font-black text-sky-solar">{clan.totalTrophies} <Trophy className="inline w-3 h-3 mb-1 ml-1" /></span>
          </div>
          <div className="h-2 w-full bg-slate-900/60 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, (clan.totalTrophies / 10000) * 100)}%` }}
              className="h-full gemini-gradient rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Tabs Nav */}
      <div className="flex border-b border-sky-electric/10 bg-slate-950/20 px-2">
        {(['members', 'resources', 'invites'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative",
              activeTab === tab ? "text-sky-electric" : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab === 'invites' ? `Requests (${invites.length})` : tab}
            {activeTab === tab && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-electric shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'members' && (
            <motion.div
              key="members"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {sortedMembers.map((member, idx) => (
                <div 
                  key={member.userId}
                  className={cn(
                    "group p-4 rounded-xl border transition-all flex items-center justify-between",
                    member.userId === stats.userId 
                      ? "bg-sky-electric/10 border-sky-electric/30 shadow-[0_0_15px_rgba(14,165,233,0.1)]" 
                      : "bg-slate-900/40 border-slate-800/50 hover:bg-slate-900/60 hover:border-slate-700"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-bold text-slate-400">
                        {member.username[0].toUpperCase()}
                      </div>
                      {member.role === 'Leader' && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{member.username}</span>
                        {member.userId === stats.userId && <span className="text-[8px] bg-sky-neon/20 text-sky-neon px-1.5 py-0.5 rounded uppercase font-black">You</span>}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">Level {member.level} &bull; {member.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 font-black uppercase">Trophies</div>
                      <div className="text-xs font-mono font-black text-sky-solar">{member.trophies}</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-600 group-hover:text-sky-electric transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4">
                <ClanResourceCard 
                  label="Collective Build Power"
                  value={totalContribution.buildPower}
                  icon={<Zap className="w-5 h-5 text-sky-solar" />}
                  color="sky-solar"
                />
                <ClanResourceCard 
                  label="Containers Orchestrated"
                  value={totalContribution.containers}
                  icon={<Box className="w-5 h-5 text-sky-electric" />}
                  color="sky-electric"
                />
                <ClanResourceCard 
                  label="Data Processed"
                  value={totalContribution.data}
                  icon={<Database className="w-5 h-5 text-sky-neon" />}
                  color="sky-neon"
                  isData
                />
              </div>

              <div className="bg-sky-deep/40 p-5 rounded-2xl border border-sky-electric/10">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-5 h-5 text-sky-neon" />
                  <h4 className="text-sm font-black text-white uppercase tracking-tighter">Your Contribution</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-slate-900/60 rounded-xl border border-white/5">
                    <div className="text-[8px] text-slate-500 uppercase font-black mb-1">Power</div>
                    <div className="text-xs font-mono font-black text-sky-solar">{stats.buildPower.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/60 rounded-xl border border-white/5">
                    <div className="text-[8px] text-slate-500 uppercase font-black mb-1">Containers</div>
                    <div className="text-xs font-mono font-black text-sky-electric">{stats.containers.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/60 rounded-xl border border-white/5">
                    <div className="text-[8px] text-slate-500 uppercase font-black mb-1">Data</div>
                    <div className="text-xs font-mono font-black text-sky-neon">{(stats.data / 1000).toFixed(1)}T</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ranking' && (
            <motion.div
              key="ranking"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">Global Reach</h3>
              <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">Rankings are calculated based on collective clan reputation and active deployments.</p>
              <button className="mt-6 px-8 py-3 bg-slate-800 text-[10px] font-black uppercase tracking-widest text-white rounded-lg border border-white/10 hover:bg-slate-700 transition-all">
                View Global Leaderboard
              </button>
            </motion.div>
          )}
          {activeTab === 'invites' && (
            <motion.div
              key="invites"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Pending Protocol Invites</h3>
                {isLeader && (
                  <button 
                    onClick={() => setIsInviteModalOpen(true)}
                    className="flex items-center gap-2 text-[10px] font-black text-sky-neon bg-sky-neon/10 px-3 py-1.5 rounded-lg border border-sky-neon/20 hover:bg-sky-neon/20 transition-all uppercase tracking-tighter"
                  >
                    <UserPlus className="w-3 h-3" />
                    New Invite
                  </button>
                )}
              </div>

              {invites.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
                  <Info className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                  <p className="text-sm text-slate-500 uppercase font-black italic">No pending transmission</p>
                </div>
              ) : (
                invites.map(invite => (
                  <div key={invite.id} className="bg-slate-900/60 p-4 rounded-xl border border-sky-electric/10 flex items-center justify-between group hover:border-sky-electric/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-electric/5 flex items-center justify-center border border-sky-electric/20 text-sky-electric">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{invite.targetUsername}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Status: {invite.status}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setInvites(prev => prev.filter(i => i.id !== invite.id))}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20 hover:bg-red-500/20 transition-all"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Recruitment Info */}
              <div className="p-4 bg-indigo-900/20 rounded-xl border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-2 text-indigo-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Leadership Note</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  "Only higher-tier architects can authorize resource-sharing via clan recruitment. Every member added increases total repository throughput by <span className="text-indigo-300 font-bold">5.0%</span>."
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Invite Modal Overlay */}
      <AnimatePresence>
        {isInviteModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-slate-900 border border-sky-electric/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-sky-electric shadow-[0_0_20px_rgba(14,165,233,1)]" />
              
              <button 
                onClick={() => setIsInviteModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-sky-electric/10 rounded-2xl flex items-center justify-center border border-sky-electric/20 mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-sky-electric" />
                </div>
                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Invite Architect</h3>
                <p className="text-xs text-slate-500 mt-2">Deploy a recruitment pulse to a remote DevOps engineer.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Target Repository (Username)</label>
                  <input 
                    type="text"
                    value={inviteUsername}
                    onChange={(e) => setInviteUsername(e.target.value)}
                    placeholder="e.g. Docker_Wizard_88"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-700 focus:border-sky-electric/50 focus:outline-none transition-all font-mono"
                  />
                </div>

                <button 
                  onClick={() => {
                    if (inviteUsername.trim()) {
                      const newInvite: ClanInvite = {
                        id: `inv_${Date.now()}`,
                        clanId: clan.id,
                        clanName: clan.name,
                        targetUserId: `user_${Math.floor(Math.random() * 1000)}`,
                        targetUsername: inviteUsername,
                        status: 'pending',
                        createdAt: Date.now()
                      };
                      setInvites(prev => [newInvite, ...prev]);
                      setInviteUsername('');
                      setIsInviteModalOpen(false);
                    }
                  }}
                  className="w-full py-4 gemini-gradient rounded-xl text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  Initiate Handshake
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Actions */}
      <div className="p-6 border-t border-sky-electric/10 bg-slate-950/40 flex items-center gap-4">
        <Tooltip 
          content={isForking ? "Cloning remote repository..." : "Forge a copy of a remote project to boost your clan's infrastructure and gain immediate resources."}
          className="flex-1"
        >
          <button 
            disabled={isForking}
            onClick={onFork}
            className={cn(
              "w-full flex items-center justify-center gap-3 py-4 gemini-gradient rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all text-white",
              isForking ? "opacity-50 cursor-wait" : "hover:brightness-110 active:scale-95"
            )}
          >
            {isForking ? <Loader2 className="w-4 h-4 animate-spin" /> : <GitFork className="w-4 h-4" />}
            {isForking ? "Deploying Fork..." : "Fork Remote Repo"}
          </button>
        </Tooltip>
        
        <Tooltip 
          content={isLeader ? "Invite other architects to join your repository alliance." : "Only the Clan Leader can authorize new recruitments."}
          className="flex-shrink-0"
        >
          <button 
            disabled={!isLeader}
            onClick={() => setIsInviteModalOpen(true)}
            className={cn(
              "p-4 rounded-xl border transition-all",
              isLeader 
                ? "bg-slate-800 text-sky-electric border-sky-electric/20 hover:text-white hover:bg-sky-electric/20" 
                : "bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed opacity-50"
            )}
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </Tooltip>
      </div>
    </motion.div>
  );
};

interface ClanResourceCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  isData?: boolean;
}

const ClanResourceCard: React.FC<ClanResourceCardProps> = ({ label, value, icon, color, isData }) => (
  <div className="sky-glass p-5 rounded-2xl border border-sky-electric/10 flex items-center justify-between group hover:border-sky-electric/30 transition-all">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mb-1">{label}</div>
        <div className={cn("text-2xl font-mono font-black", `text-${color}`)}>
          {isData ? `${(value / 1000).toFixed(1)} PB` : value.toLocaleString()}
        </div>
      </div>
    </div>
    <div className="opacity-10 group-hover:opacity-20 transition-opacity">
      <BarChart3 className="w-12 h-12" />
    </div>
  </div>
);
