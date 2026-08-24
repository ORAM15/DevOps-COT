import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitFork, Terminal, CheckCircle2, Shield, Heart, HelpCircle, HardDrive, Cpu, ExternalLink, RefreshCw } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface ClanOption {
  id: string;
  name: string;
  leader: string;
  tagline: string;
  stars: number;
  emoji: string;
  primaryColor: string; // Tailwind accent border/text
  particleColor: string; // Hex code for floating sparks
  rewards: {
    buildPower: number;
    containers: number;
    data: number;
    reputation: number;
  };
  focus: string;
  terminalLogs: string[];
}

export const CLAN_OPTIONS: ClanOption[] = [
  {
    id: 'gitkraken_legion',
    name: 'GitKraken Legion',
    leader: 'Sina_V3',
    tagline: 'Advanced Git merging algorithms & high-reputation network nodes.',
    stars: 12450,
    emoji: '🐙',
    primaryColor: 'text-amber-400 border-amber-500/20 hover:border-amber-400/40 bg-amber-950/20 shadow-amber-500/5',
    particleColor: '#fbbf24', // Amber
    rewards: {
      buildPower: 450,
      containers: 150,
      data: 100,
      reputation: 25,
    },
    focus: 'Optimized build processes & build power pipeline grids.',
    terminalLogs: [
      'Initializing remote handshake with GitKraken Legion database...',
      'Validating SSL transport tunnels: SUCCESS',
      'Executing multi-threaded git.clone() of target trees...',
      'Caching index objects: 100% (2560/2560)',
      'Resolving upstream deltas: +450 Build Power pipeline allocated.',
      'Synchronization complete.'
    ]
  },
  {
    id: 'kube_swarm_co',
    name: 'Kube Swarm Consortium',
    leader: 'Alex_K8',
    tagline: 'Fault-tolerant microservice swarms & zero-downtime container replicas.',
    stars: 9820,
    emoji: '☸️',
    primaryColor: 'text-sky-400 border-sky-500/20 hover:border-sky-400/40 bg-sky-950/20 shadow-sky-500/5',
    particleColor: '#38bdf8', // Sky Blue
    rewards: {
      buildPower: 150,
      containers: 350,
      data: 100,
      reputation: 20,
    },
    focus: 'Massive replication counts & container containerization storage vaults.',
    terminalLogs: [
      'Opening deployment port with Kubernetes Swarm orchestration...',
      'Applying secret YAML configurations to namespace: prod-swarm...',
      'Deploying replicate pods for active high-availability...',
      'Allocating virtual container limits: +350 physical containers secured.',
      'Checking ingress controllers... STATUS: ONLINE',
      'Sync successfully completed.'
    ]
  },
  {
    id: 'supabase_matrix',
    name: 'Supabase Matrix',
    leader: 'CozyPostgre',
    tagline: 'Reactive Postgres cluster architectures & real-time telemetry tables.',
    stars: 15120,
    emoji: '💾',
    primaryColor: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-400/40 bg-emerald-950/20 shadow-emerald-500/5',
    particleColor: '#10b981', // Emerald Green
    rewards: {
      buildPower: 100,
      containers: 100,
      data: 300,
      reputation: 30,
    },
    focus: 'Fast schema transitions, atomic locks, & massive cloud database storage.',
    terminalLogs: [
      'Establishing persistent socket to Supabase Matrix main cluster...',
      'Dumping database schema configurations... SUCCESS',
      'Replicating master table structures into user sandbox...',
      'Provisioned high-performance tables: +300 TB data space allocated.',
      'Activating real-time websocket channels... CONNECTED',
      'Database migration done.'
    ]
  },
  {
    id: 'pytorch_nexus',
    name: 'Neural PyTorch Cybernetics',
    leader: 'Holo_AI',
    tagline: 'Distributed transformer weight structures & deep synthetic matrix compilers.',
    stars: 18450,
    emoji: '🧠',
    primaryColor: 'text-pink-400 border-pink-500/20 hover:border-pink-400/40 bg-pink-950/20 shadow-pink-500/5',
    particleColor: '#ec4899', // Pink
    rewards: {
      buildPower: 250,
      containers: 100,
      data: 200,
      reputation: 35,
    },
    focus: 'Deep-learning dataset matrices, neural layers & build pipelines.',
    terminalLogs: [
      'Handshaking with Neural Tensor Hub over satellite downlink...',
      'Syncing transformer layer model weights: SUCCESS',
      'Compiling AI engine tensor pipeline with neural pathways...',
      'Secured training buffer slots: +250 BP & +200 Data mapped.',
      'Optimizing deep matrix gradients...',
      'Compilation successful. Neural Nexus active.'
    ]
  },
  {
    id: 'vercel_edge_knights',
    name: 'Vercel Edge Knights',
    leader: 'V_Edge',
    tagline: 'Serverless global CDN endpoints & high-speed Incremental Static Builds.',
    stars: 11300,
    emoji: '📐',
    primaryColor: 'text-orange-400 border-orange-500/20 hover:border-orange-400/40 bg-orange-950/20 shadow-orange-500/5',
    particleColor: '#f97316', // Orange
    rewards: {
      buildPower: 200,
      containers: 200,
      data: 200,
      reputation: 20,
    },
    focus: 'Edge computing efficiency, CDN routing lists, and rapid deployment cycles.',
    terminalLogs: [
      'Connecting to high-capacity Edge Endpoint servers...',
      'Deploying CDN routes over 250+ global locations...',
      'Allocating static pipeline tasks and edge processes...',
      'Gained network efficiency bonus: +200 BP, +200 Containers, +200 Data.',
      'Deployment of branch verified.',
      'Serverless integration done.'
    ]
  }
];

interface ForkClanSelectorProps {
  onClose: () => void;
  onForkConfirm: (clan: ClanOption) => Promise<void>;
  isForking: boolean;
}

export const ForkClanSelector: React.FC<ForkClanSelectorProps> = ({
  onClose,
  onForkConfirm,
  isForking: appIsForking,
}) => {
  const [selectedClan, setSelectedClan] = useState<ClanOption | null>(null);
  const [forkState, setForkState] = useState<'idle' | 'cloning' | 'sprinkling'>('idle');
  const [progress, setProgress] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [particles, setParticles] = useState<Array<{
    id: number;
    startX: number;
    startY: number;
    midX: number;
    midY: number;
    endX: number;
    endY: number;
    delay: number;
    duration: number;
    size: number;
    symbol: string;
  }>>([]);

  // Generate particles for sprinkle effect
  const generateSparks = (clan: ClanOption) => {
    const list: typeof particles = [];
    const symbols = [];
    if (clan.rewards.buildPower > 0) symbols.push('⚡');
    if (clan.rewards.containers > 0) symbols.push('📦');
    if (clan.rewards.data > 0) symbols.push('💾');
    if (symbols.length === 0) symbols.push('✨');

    for (let i = 0; i < 48; i++) {
      const angle = (Math.PI * 2 * i) / 48 + (Math.random() - 0.5) * 0.3;
      const speed = 100 + Math.random() * 200;
      
      // Determine target layout zones in top header (ResourceBar pills)
      // Left coordinate for user: profile is around X=10%, mid pills are between X=38% to X=62%, telemetry slots at X=80%
      const chosenSymbol = symbols[i % symbols.length];
      
      let targetX = 50; // default middle
      if (chosenSymbol === '⚡') targetX = 42 + Math.random() * 4; // Build power pill zone
      else if (chosenSymbol === '📦') targetX = 50 + Math.random() * 4; // container capacity pill zone
      else if (chosenSymbol === '💾') targetX = 58 + Math.random() * 4; // data capacity pill zone
      else targetX = 35 + Math.random() * 30;

      const targetY = 3 + Math.random() * 4; // top height around 3% to 7% of screen height

      list.push({
        id: i,
        startX: 50, // Screen center horizontal
        startY: 55, // Screen center vertical (terminal spot)
        midX: 50 + Math.cos(angle) * (speed / 12),
        midY: 55 + Math.sin(angle) * (speed / 12) - 10,
        endX: targetX,
        endY: targetY,
        delay: Math.random() * 0.45,
        duration: 1.2 + Math.random() * 0.73,
        size: 8 + Math.random() * 10,
        symbol: chosenSymbol,
      });
    }
    setParticles(list);
  };

  const handleStartClone = async (clan: ClanOption) => {
    if (forkState !== 'idle') return;
    setSelectedClan(clan);
    setForkState('cloning');
    setProgress(0);
    setTerminalOutput([]);

    // Print logs progressively
    let logIdx = 0;
    const logInterval = setInterval(() => {
      if (logIdx < clan.terminalLogs.length) {
        setTerminalOutput(prev => [...prev, clan.terminalLogs[logIdx]]);
        logIdx++;
      } else {
        clearInterval(logInterval);
      }
    }, 380);

    // Increment progress bar smoothly
    const duration = 2400;
    const intervalStep = 30;
    const totalSteps = duration / intervalStep;
    let step = 0;

    const progInterval = setInterval(async () => {
      step++;
      const nextProgress = Math.min((step / totalSteps) * 100, 100);
      setProgress(nextProgress);

      if (step >= totalSteps) {
        clearInterval(progInterval);
        
        // Finalize Fork updates in original app stats
        await onForkConfirm(clan);

        // Transition to sprinkle particle explosion!
        setForkState('sprinkling');
        generateSparks(clan);

        // Keep sprinkling for 2 seconds then self-close
        setTimeout(() => {
          onClose();
        }, 2200);
      }
    }, intervalStep);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center z-[100] p-4 select-none">
      {/* Dynamic Floating Sparkles Particle Overlay during sprinkle state */}
      {forkState === 'sprinkling' && selectedClan && (
        <div className="absolute inset-0 pointer-events-none z-[110] overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ 
                x: `${p.startX}vw`, 
                y: `${p.startY}vh`, 
                opacity: 0, 
                scale: 0.1 
              }}
              animate={{
                x: [
                  `${p.startX}vw`, 
                  `${p.midX}vw`, 
                  `${p.endX}vw`
                ],
                y: [
                  `${p.startY}vh`, 
                  `${p.midY}vh`, 
                  `${p.endY}vh`
                ],
                opacity: [0, 1, 1, 0.9, 0],
                scale: [0.1, 1.4, 1.1, 0.7, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.16, 1, 0.3, 1], // Custom snappy ease out curve
              }}
              className="absolute pointer-events-none rounded-full flex items-center justify-center font-black select-none"
              style={{
                width: p.size,
                height: p.size,
                color: selectedClan.particleColor,
                backgroundColor: `${selectedClan.particleColor}15`,
                border: `1.5px solid ${selectedClan.particleColor}`,
                boxShadow: `0 0 14px ${selectedClan.particleColor}`,
                fontSize: `${p.size * 0.7}px`,
                textShadow: `0 0 6px ${selectedClan.particleColor}`
              }}
            >
              {p.symbol}
            </motion.div>
          ))}

          {/* Flash Effect on Completion at Center */}
          <motion.div 
            initial={{ opacity: 0.8, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2.2 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${selectedClan.particleColor}40 0%, transparent 70%)`
            }}
          />
        </div>
      )}

      {/* Main Container */}
      <AnimatePresence mode="wait">
        {forkState === 'idle' ? (
          <motion.div
            key="list-panel"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="w-full max-w-4xl sky-glass border-sky-electric/30 p-6 rounded-3xl relative flex flex-col max-h-[85vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2.5 text-sky-electric mb-1">
                  <GitFork className="w-5 h-5 animate-pulse" />
                  <span className="text-xs font-black tracking-[0.25em] uppercase">REPOSITORY HANDSHAKE</span>
                </div>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">CLONE FROM REPO CLANS</h2>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Inspect and clone files from decentralized game clans. Each repo contains specific, highly-charged tech resources to instantly expand your cloud runtime telemetry.
                </p>
              </div>
              
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-slate-900/40"
              >
                ✕
              </button>
            </div>

            {/* List of Option Cards */}
            <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 custom-scrollbar">
              {CLAN_OPTIONS.map((clan) => (
                <div
                  key={clan.id}
                  className={cn(
                    "relative border-2 p-4 rounded-2xl transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group",
                    clan.primaryColor
                  )}
                >
                  {/* Left Specs */}
                  <div className="flex items-start gap-4">
                    <span className="text-4xl filter drop-shadow-md p-1 bg-slate-950/40 rounded-xl border border-white/5 group-hover:scale-105 transition-transform select-none">
                      {clan.emoji}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-sky-neon transition-colors">
                          {clan.name}
                        </h3>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-slate-400">
                          ⭐️ {(clan.stars/1000).toFixed(1)}k
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">{clan.tagline}</p>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Main Focus:</span>
                        <span className="text-[10px] text-sky-electric font-mono tracking-wide">{clan.focus}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rewards and Fork CTA */}
                  <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-3 md:pt-0 justify-between md:justify-end">
                    {/* Rewards specs */}
                    <div className="flex items-center gap-3 bg-slate-950/50 px-3 py-2 rounded-xl border border-white/5">
                      {clan.rewards.buildPower > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] text-amber-400">⚡</span>
                          <span className="text-[11px] font-mono font-bold text-white">+{clan.rewards.buildPower}</span>
                        </div>
                      )}
                      {clan.rewards.containers > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] text-sky-400">📦</span>
                          <span className="text-[11px] font-mono font-bold text-white">+{clan.rewards.containers}</span>
                        </div>
                      )}
                      {clan.rewards.data > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] text-emerald-400">💾</span>
                          <span className="text-[11px] font-mono font-bold text-white">+{clan.rewards.data}</span>
                        </div>
                      )}
                      <div className="w-[1px] h-3.5 bg-white/10" />
                      <div className="flex items-center gap-1 font-semibold text-[10px] text-yellow-500">
                        🏆 +{clan.rewards.reputation}
                      </div>
                    </div>

                    {/* Clone action button */}
                    <button
                      onClick={() => handleStartClone(clan)}
                      disabled={appIsForking}
                      className={cn(
                        "px-4 py-2 bg-sky-electric hover:bg-sky-glow border border-white/10 text-slate-950 text-xs font-black rounded-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer relative overflow-hidden uppercase tracking-wider"
                      )}
                    >
                      <GitFork className="w-3.5 h-3.5" />
                      <span>FORK REPO</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Status lines */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4 text-[10px] text-slate-500 uppercase font-mono tracking-tight">
              <span>Secure git SHA-256 handshake enabled</span>
              <span className="text-emerald-400/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ALL upstream repositories verified healthy
              </span>
            </div>
          </motion.div>
        ) : (
          /* High-Tech Terminal / Construction Loading progression screen */
          <motion.div
            key="cloning-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-xl sky-glass border-sky-neon/30 p-6 rounded-3xl flex flex-col relative overflow-hidden"
          >
            {/* Pulsing visual glow */}
            <div 
              className="absolute left-1/2 -top-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-20"
              style={{ backgroundColor: selectedClan?.particleColor }}
            />

            {/* Title / Repo identification */}
            <div className="flex items-center gap-2 mb-2 text-sky-neon">
              <Terminal className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs font-black tracking-widest uppercase">GIT CLONING TELEMETRY</span>
            </div>
            
            <h3 className="text-base font-extrabold text-white uppercase mb-4 tracking-tight flex items-center justify-between">
              <span>FORKING FROM {selectedClan?.name}</span>
              <span className="font-mono text-slate-400 text-xs">{Math.round(progress)}%</span>
            </h3>

            {/* Live Terminal window */}
            <div className="flex-1 bg-slate-950/80 border border-white/5 rounded-2xl p-4 font-mono text-[10px] text-slate-400 mb-5 min-h-[160px] flex flex-col justify-end space-y-1.5 shadow-inner">
              <div className="flex-1 flex flex-col justify-start space-y-1.5 overflow-hidden">
                <div className="text-slate-500">// CLONE CHANNEL COMMENCING</div>
                {terminalOutput.map((line, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="text-sky-electric select-none">&gt;</span>
                    <span className={idx === terminalOutput.length - 1 ? "text-white font-bold" : ""}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
              
              {forkState === 'sprinkling' && (
                <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-emerald-400 font-bold flex items-center gap-1.5 border-t border-white/5 pt-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>REPOSITORY STREAM COMMITTED SUCCESSFUL! SPRINKLING REWARDS...</span>
                </motion.div>
              )}
            </div>

            {/* Neon slider progress bar */}
            <div className="relative w-full h-2 bg-slate-950 border border-white/5 rounded-full overflow-hidden mb-3">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
                style={{
                  backgroundColor: selectedClan?.particleColor,
                  boxShadow: `0 0 10px ${selectedClan?.particleColor}`
                }}
              />
            </div>

            <div className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              {forkState === 'sprinkling' ? "Showering static elements..." : "Synchronizing decentralized nodes..."}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
