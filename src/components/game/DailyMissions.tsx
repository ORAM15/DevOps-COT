import React, { useState, useEffect } from 'react';
import { UserStats, Mission } from '@/src/types/game';
import { db } from '@/src/lib/firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, Gift, Sparkles, RefreshCw, ChevronRight, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Tooltip } from '@/src/components/ui/Tooltip';

interface DailyMissionsProps {
  stats: UserStats;
}

export const DailyMissions: React.FC<DailyMissionsProps> = ({ stats }) => {
  const [isClaiming, setIsClaiming] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');

  const missions: Mission[] = stats.dailyMissions ? (Object.values(stats.dailyMissions) as Mission[]) : [];

  // Simulate time left to midnight (sprint reset)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaim = async (mission: Mission) => {
    if (isClaiming || mission.claimed || mission.progress < mission.target) return;

    setIsClaiming(mission.id);
    const userRef = doc(db, 'users', stats.userId);

    // Build the updates atomic increment payload
    const updates: Record<string, any> = {
      [`dailyMissions.${mission.id}.claimed`]: true,
    };

    const rewardDetails: string[] = [];
    if (mission.reward.buildPower) {
      updates.buildPower = increment(mission.reward.buildPower);
      rewardDetails.push(`+${mission.reward.buildPower} BP`);
    }
    if (mission.reward.containers) {
      updates.containers = increment(mission.reward.containers);
      rewardDetails.push(`+${mission.reward.containers} Containers`);
    }
    if (mission.reward.data) {
      updates.data = increment(mission.reward.data);
      rewardDetails.push(`+${mission.reward.data} Data`);
    }
    if (mission.reward.trophies) {
      updates.trophies = increment(mission.reward.trophies);
      rewardDetails.push(`+${mission.reward.trophies} Rep`);
    }

    try {
      await updateDoc(userRef, updates);
      setSuccessMessage(`SPRINT RELEASED! Claimed: ${rewardDetails.join(', ')} 🚀`);
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (e) {
      console.error('Failed to claim mission reward:', e);
    } finally {
      setIsClaiming(null);
    }
  };

  if (missions.length === 0) {
    return (
      <div className="sky-glass border-sky-electric/20 p-4 rounded-xl w-full flex flex-col items-center justify-center py-6">
        <Loader2 className="w-5 h-5 text-sky-neon animate-spin mb-2" />
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
          Provisioning Daily Sprints...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Toast Reward Banner */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="sky-glass border-sky-neon/40 text-sky-neon p-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <Sparkles className="w-5 h-5 text-sky-solar animate-bounce shrink-0" />
            <p className="text-[9px] font-black uppercase tracking-wider leading-relaxed">
              {successMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Sprints Control Panel */}
      <div className="sky-glass border-sky-electric/20 p-3 rounded-xl w-full shadow-xl relative overflow-hidden flex flex-col">
        {/* Futuristic Grid Layer */}
        <div className="absolute top-0 right-0 w-24 h-24 gemini-gradient blur-[40px] opacity-10 pointer-events-none" />

        {/* Header Block */}
        <div className="flex items-center justify-between border-b border-sky-electric/10 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-sky-solar" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
              DAILY SPRINTS
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950/60 border border-sky-electric/20 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-sky-neon rounded-full animate-pulse" />
            <span className="text-[8px] font-mono font-black text-sky-electric tracking-widest uppercase">
              RESET: {timeLeft}
            </span>
          </div>
        </div>

        {/* Missions Stack */}
        <div className="space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar pr-1">
          {missions.map((mission) => {
            const progressPercent = Math.min(
              100,
              Math.max(0, (mission.progress / mission.target) * 100)
            );
            const isCompleted = mission.progress >= mission.target;
            const isClaimed = mission.claimed;

            return (
              <div
                key={mission.id}
                className={cn(
                  "p-2.5 rounded-xl border transition-all relative overflow-hidden flex flex-col gap-2 bg-slate-950/20",
                  isClaimed
                    ? "border-emerald-500/10 opacity-60"
                    : isCompleted
                    ? "border-sky-neon/30 bg-sky-neon/5 shadow-[0_0_15px_rgba(232,121,249,0.05)]"
                    : "border-sky-electric/10 hover:border-sky-electric/20"
                )}
              >
                {/* Title and Progress Text */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-black text-white uppercase tracking-tight leading-tight flex items-center gap-1.5">
                      {isClaimed && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                      <span className="truncate">{mission.title}</span>
                    </h4>
                    <p className="text-[8px] text-slate-400 font-medium leading-relaxed mt-0.5 max-w-[170px]">
                      {mission.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[9px] font-mono font-black text-sky-electric">
                      {Math.round(mission.progress).toLocaleString()}/
                      {mission.target.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-950/80 rounded-full overflow-hidden p-[0.5px] border border-sky-electric/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    className={cn(
                      "h-full rounded-full shadow-[0_0_8px]",
                      isClaimed
                        ? "bg-emerald-400 shadow-emerald-400/50"
                        : isCompleted
                        ? "gemini-gradient shadow-sky-glow/50"
                        : "bg-sky-electric shadow-sky-electric/50"
                    )}
                  />
                </div>

                {/* Rewards and Claim Actions */}
                <div className="flex items-center justify-between mt-1 pt-1.5 border-t border-sky-electric/5">
                  {/* Reward Indicators */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider mr-1">
                      Booty:
                    </span>
                    {mission.reward.buildPower && (
                      <Tooltip content={`${mission.reward.buildPower} BuildPower`}>
                        <span className="text-[8px] font-mono font-black text-sky-solar flex items-center gap-0.5 bg-sky-solar/5 border border-sky-solar/10 px-1 py-0.5 rounded">
                          ⚡{mission.reward.buildPower}
                        </span>
                      </Tooltip>
                    )}
                    {mission.reward.containers && (
                      <Tooltip content={`${mission.reward.containers} Containers`}>
                        <span className="text-[8px] font-mono font-black text-sky-electric flex items-center gap-0.5 bg-sky-electric/5 border border-sky-electric/10 px-1 py-0.5 rounded">
                          📦{mission.reward.containers}
                        </span>
                      </Tooltip>
                    )}
                    {mission.reward.data && (
                      <Tooltip content={`${mission.reward.data} Data`}>
                        <span className="text-[8px] font-mono font-black text-sky-neon flex items-center gap-0.5 bg-sky-neon/5 border border-sky-neon/10 px-1 py-0.5 rounded">
                          💾{mission.reward.data}
                        </span>
                      </Tooltip>
                    )}
                    {mission.reward.trophies && (
                      <Tooltip content={`${mission.reward.trophies} Trophies`}>
                        <span className="text-[8px] font-mono font-black text-amber-500 flex items-center gap-0.5 bg-amber-500/5 border border-amber-500/10 px-1 py-0.5 rounded">
                          🏆{mission.reward.trophies}
                        </span>
                      </Tooltip>
                    )}
                  </div>

                  {/* Actions (Claim Rewards, Closed/Claimed statuses) */}
                  <div>
                    {isClaimed ? (
                      <span className="text-[8px] font-black text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                        MERGED
                      </span>
                    ) : isCompleted ? (
                      <motion.button
                        whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleClaim(mission)}
                        disabled={isClaiming === mission.id}
                        className="py-0.5 px-2.5 bg-sky-neon border border-sky-neon text-slate-950 rounded-full font-black text-[8px] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all shadow-[0_0_10px_rgba(34,211,238,0.4)] hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                      >
                        <Gift className="w-2.5 h-2.5 animate-bounce" />
                        CLAIM
                      </motion.button>
                    ) : (
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
