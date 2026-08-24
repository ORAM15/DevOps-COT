import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { auth, db } from './lib/firebase';
import { doc, getDoc, setDoc, onSnapshot, collection, query, updateDoc, increment } from 'firebase/firestore';
import { BUILDINGS } from './constants/game';
import { UserStats, GameBuilding, BuildingType, Mission } from './types/game';
import { IsometricGrid } from './components/game/IsometricGrid';
import { ResourceBar } from './components/game/ResourceBar';
import { ForkClanSelector } from './components/game/ForkClanSelector';
import { OrchestrationPanel } from './components/game/OrchestrationPanel';
import { BuildingPanel } from './components/game/BuildingPanel';
import { BuildingInfo } from './components/game/BuildingInfo';
import { AttackButton } from './components/game/AttackButton';
import { BuilderManagement } from './components/game/BuilderManagement';
import { DailyMissions } from './components/game/DailyMissions';
import { ClanPanel } from './components/game/ClanPanel';
import { Activity, Loader2, LogIn, GitFork, Users } from 'lucide-react';
import { Clan, ClanMember } from './types/game';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [buildings, setBuildings] = useState<GameBuilding[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBuildingId, setSelectedBuildingId] = useState<string | null>(null);
  const [placingType, setPlacingType] = useState<BuildingType | null>(null);
  const [isClanPanelOpen, setIsClanPanelOpen] = useState(false);
  const [clan, setClan] = useState<Clan | null>(null);
  const [isForking, setIsForking] = useState(false);
  const [forkProgress, setForkProgress] = useState(0);
  const [isForkMenuOpen, setIsForkMenuOpen] = useState(false);
  const [isOrchestrationOpen, setIsOrchestrationOpen] = useState(false);

  // --- Real-time Logs Simulation ---
  const [logs, setLogs] = useState<{ id: number, text: string, type: string }[]>([
    { id: 1, text: "COMMIT merged into main", type: "indigo" },
    { id: 2, text: "BUILD #4282 started...", type: "orange" },
    { id: 3, text: "DOCKER push successful", type: "emerald" },
    { id: 4, text: "Latency peak detected in US-EAST", type: "yellow" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const types = ["indigo", "orange", "emerald", "yellow"];
      const messages = [
        "Repository scan initiated",
        "Pipeline validation passing",
        "Container replica scaled",
        "Data persistence verified",
        "Cluster heartbeat normal",
        "API Response: 200 OK"
      ];
      const newLog = {
        id: Date.now(),
        text: messages[Math.floor(Math.random() * messages.length)],
        type: types[Math.floor(Math.random() * types.length)],
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await initUser(u);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const initUser = async (u: User) => {
    setLoading(true);
    const userRef = doc(db, 'users', u.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const initialStats: UserStats = {
        userId: u.uid,
        username: u.displayName || `Architect_${Math.floor(Math.random() * 1000)}`,
        level: 1,
        experience: 0,
        buildPower: 1000,
        containers: 500,
        data: 500,
        lastUpdated: Date.now(),
        buildersMax: 3,
        buildersActive: 0,
        autoBuildEnabled: false,
        autoBuildPriority: 'balanced',
        clanId: 'clan_id_hunters',
        clanName: 'ID Hunters',
        clanRole: 'Leader',
        trophies: 2450
      };
      await setDoc(userRef, initialStats);
      
      // Initial Townhall
      const buildingRef = doc(collection(db, `users/${u.uid}/buildings`));
      await setDoc(buildingRef, {
        id: buildingRef.id,
        ownerId: u.uid,
        type: 'townhall',
        level: 1,
        gridX: 5,
        gridY: 5,
        lastHarvested: Date.now(),
        createdAt: Date.now(),
      });
    }

    // Subscribe to stats
    onSnapshot(userRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        const statsData = data as UserStats;
        if (!statsData.dailyMissions) {
          const defaultMissions: Record<string, Mission> = {
            collect_bp: {
              id: 'collect_bp',
              title: 'Harvest BuildPower',
              description: 'Collect 1,000 extra BuildPower units.',
              type: 'collect_bp',
              progress: 0,
              target: 1000,
              reward: { buildPower: 300, containers: 100, data: 100 },
              claimed: false
            },
            upgrade_buildings: {
              id: 'upgrade_buildings',
              title: 'Overclock Infrastructure',
              description: 'Initiate 2 building upgrades.',
              type: 'upgrade_buildings',
              progress: 0,
              target: 2,
              reward: { buildPower: 150, containers: 150, data: 150 },
              claimed: false
            },
            fork_repos: {
              id: 'fork_repos',
              title: 'Sync Remote Assets',
              description: 'Fork remote repository 2 times.',
              type: 'fork_repos',
              progress: 0,
              target: 2,
              reward: { buildPower: 200, trophies: 10 },
              claimed: false
            },
            attacks: {
              id: 'attacks',
              title: 'Infiltrate Clusters',
              description: 'Launch 2 cluster infiltration attempts.',
              type: 'attacks',
              progress: 0,
              target: 2,
              reward: { buildPower: 250, containers: 100 },
              claimed: false
            }
          };
          updateDoc(userRef, { dailyMissions: defaultMissions }).catch(console.error);
        }
        setStats(statsData);
        
        // Mock Clan Initialization
        const mockMembers: ClanMember[] = [
          {
            userId: u.uid,
            username: data.username,
            role: 'Leader',
            level: data.level,
            trophies: data.trophies || 0,
            contribution: { buildPower: data.buildPower, containers: data.containers, data: data.data }
          },
          ...Array.from({ length: 12 }).map((_, i) => ({
            userId: `mock_${i}`,
            username: `Engineer_${Math.floor(Math.random() * 9999)}`,
            role: 'Member' as const,
            level: Math.floor(Math.random() * 10) + 1,
            trophies: Math.floor(Math.random() * 2000) + 100,
            contribution: {
              buildPower: Math.floor(Math.random() * 5000),
              containers: Math.floor(Math.random() * 2000),
              data: Math.floor(Math.random() * 2000),
            }
          }))
        ];

        const mockClan: Clan = {
          id: 'clan_id_hunters',
          name: 'ID Hunters',
          leaderId: u.uid,
          leaderName: data.username,
          members: mockMembers,
          totalTrophies: mockMembers.reduce((sum, m) => sum + m.trophies, 0),
          resources: mockMembers.reduce((acc, m) => ({
            buildPower: acc.buildPower + m.contribution.buildPower,
            containers: acc.containers + m.contribution.containers,
            data: acc.data + m.contribution.data,
          }), { buildPower: 0, containers: 0, data: 0 })
        };
        setClan(mockClan);
      }
      setLoading(false);
    });

    // Subscribe to buildings
    const buildingsQuery = query(collection(db, `users/${u.uid}/buildings`));
    onSnapshot(buildingsQuery, (snapshot) => {
      setBuildings(snapshot.docs.map(d => d.data() as GameBuilding));
    });
  };

  useEffect(() => {
    if (!stats || buildings.length === 0) return;

    const interval = setInterval(async () => {
      let buildPowerInc = 0;
      let containersInc = 0;
      let dataInc = 0;
      let buildersReleased = 0;

      buildings.forEach(async (b) => {
        // Handle construction completion
        if (b.underConstructionUntil && b.underConstructionUntil <= Date.now()) {
          const bRef = doc(db, `users/${stats.userId}/buildings/${b.id}`);
          await updateDoc(bRef, {
            level: increment(1),
            underConstructionUntil: null
          });
          buildersReleased++;
        }

        // Only produce resources if NOT under construction
        if (!b.underConstructionUntil) {
          const data = BUILDINGS[b.type];
          if (data.resourceProduced) {
            const amount = data.productionRate * b.level;
            if (data.resourceProduced === 'buildPower') buildPowerInc += amount;
            else if (data.resourceProduced === 'containers') containersInc += amount;
            else if (data.resourceProduced === 'data') dataInc += amount;
          }
        }
      });

      if (buildPowerInc > 0 || containersInc > 0 || dataInc > 0 || buildersReleased > 0) {
        const userRef = doc(db, 'users', stats.userId);
        const updatePayload: Record<string, any> = {
          buildPower: increment(buildPowerInc),
          containers: increment(containersInc),
          data: increment(dataInc),
          buildersActive: increment(-buildersReleased),
          lastUpdated: Date.now()
        };

        if (buildPowerInc > 0 && stats.dailyMissions) {
          updatePayload['dailyMissions.collect_bp.progress'] = increment(buildPowerInc);
        }

        await updateDoc(userRef, updatePayload);
      }

      // 🤖 Builder AI Auto-Upgrade Logic
      if (stats.autoBuildEnabled && stats.buildersActive < stats.buildersMax) {
        let currentBuildersActive = stats.buildersActive - buildersReleased;
        let currentBuildPower = stats.buildPower + buildPowerInc;
        let currentContainers = stats.containers + containersInc;
        let currentData = stats.data + dataInc;

        while (currentBuildersActive < stats.buildersMax) {
          const candidates = buildings
            .filter(b => !b.underConstructionUntil)
            .map(b => {
              const bData = BUILDINGS[b.type];
              const cost = {
                buildPower: Math.floor(bData.baseCost.buildPower * Math.pow(1.2, b.level - 1)),
                containers: Math.floor(bData.baseCost.containers * Math.pow(1.2, b.level - 1)),
                data: Math.floor(bData.baseCost.data * Math.pow(1.2, b.level - 1)),
              };
              return { building: b, cost, data: bData };
            })
            .filter(cand => 
              currentBuildPower >= cand.cost.buildPower &&
              currentContainers >= cand.cost.containers &&
              currentData >= cand.cost.data
            );

          if (candidates.length === 0) break;

          // Sort based on priority
          candidates.sort((a, b) => {
            if (stats.autoBuildPriority === 'resource') {
              const aVal = a.data.resourceProduced ? 1 : 0;
              const bVal = b.data.resourceProduced ? 1 : 0;
              if (aVal !== bVal) return bVal - aVal;
              return a.building.level - b.building.level;
            } else if (stats.autoBuildPriority === 'level') {
              return a.building.level - b.building.level;
            } else {
              // Balanced: Productivity / Cost efficiency or just Townhall focus?
              // Simple balanced: Townhall priority > Resources > Others
              const getWeight = (c: typeof a) => {
                if (c.building.type === 'townhall') return 100;
                if (c.data.resourceProduced) return 50;
                return 10;
              };
              const weightDiff = getWeight(b) - getWeight(a);
              if (weightDiff !== 0) return weightDiff;
              return a.building.level - b.building.level;
            }
          });

          const best = candidates[0];
          const bRef = doc(db, `users/${stats.userId}/buildings/${best.building.id}`);
          const uRef = doc(db, 'users', stats.userId);
          
          await updateDoc(bRef, {
            underConstructionUntil: Date.now() + (best.building.level * 30 * 1000)
          });
          
          const uPayload: Record<string, any> = {
            buildPower: increment(-best.cost.buildPower),
            containers: increment(-best.cost.containers),
            data: increment(-best.cost.data),
            buildersActive: increment(1)
          };
          if (stats.dailyMissions) {
            uPayload['dailyMissions.upgrade_buildings.progress'] = increment(1);
          }
          await updateDoc(uRef, uPayload);

          // Optimistically update local trackers for multiple builder assignment in same tick
          currentBuildersActive++;
          currentBuildPower -= best.cost.buildPower;
          currentContainers -= best.cost.containers;
          currentData -= best.cost.data;
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [stats, buildings]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#020617] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,transparent_70%)] opacity-30" />
        <div className="flex flex-col items-center gap-4 z-10">
          <Activity className="w-16 h-16 text-indigo-400 animate-pulse" />
          <p className="text-indigo-200 font-mono text-lg tracking-[0.3em] uppercase">Booting Environment...</p>
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-1/2 h-full bg-indigo-500"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen w-screen bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 flex flex-col items-center text-center px-6"
        >
          <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-indigo-900/40 mb-8 border-2 border-indigo-400 animate-game-float">
            🏗️
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
            Clashing <span className="text-indigo-500 italic">DevTools</span>
          </h1>
          <p className="text-slate-400 max-w-md text-lg mb-12 font-medium">
            Architect, scale, and secure your cloud infrastructure in a gamified DevOps ecosystem.
          </p>

          <button
            onClick={handleLogin}
            className="group relative flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-900/40 transition-all active:scale-95"
          >
            <LogIn className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            INITIALIZE CLUSTER ACCESS
            <div className="absolute inset-0 rounded-2xl ring-2 ring-indigo-400 ring-offset-4 ring-offset-slate-950 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <div className="mt-12 flex items-center gap-8 text-slate-400">
             <div className="flex flex-col items-center">
               <span className="text-white font-bold">1.2k+</span>
               <span className="text-[10px] uppercase tracking-widest font-bold">Deploys</span>
             </div>
             <div className="w-px h-8 bg-slate-800" />
             <div className="flex flex-col items-center">
               <span className="text-white font-bold">500+</span>
               <span className="text-[10px] uppercase tracking-widest font-bold">Infiltrations</span>
             </div>
             <div className="w-px h-8 bg-slate-800" />
             <div className="flex flex-col items-center">
               <span className="text-emerald-400 font-bold">99.9%</span>
               <span className="text-[10px] uppercase tracking-widest font-bold">Uptime</span>
             </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const handlePlaceConfirm = async (x: number, y: number) => {
    if (!placingType || !user || !stats) return;

    const buildingRef = doc(collection(db, `users/${user.uid}/buildings`));
    const newBuilding: GameBuilding = {
      id: buildingRef.id,
      ownerId: user.uid,
      type: placingType,
      level: 1,
      gridX: x,
      gridY: y,
      lastHarvested: Date.now(),
      createdAt: Date.now(),
    };

    // Deduct cost
    const cost = BUILDINGS[placingType].baseCost;
    const userRef = doc(db, 'users', user.uid);
    
    try {
      await setDoc(buildingRef, newBuilding);
      await updateDoc(userRef, {
        buildPower: stats.buildPower - cost.buildPower,
        containers: stats.containers - cost.containers,
        data: stats.data - cost.data
      });
      setPlacingType(null);
      setLogs(prev => [{
        id: Date.now(),
        text: `PROVISIONED: ${BUILDINGS[placingType].name}`,
        type: 'emerald'
      }, ...prev.slice(0, 4)]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFork = () => {
    if (!stats || !user || isForking) return;
    setIsForkMenuOpen(true);
  };

  const handleForkConfirm = async (selectedClan: any) => {
    if (!stats || !user) return;
    
    setIsForking(true);
    const { buildPower, containers, data, reputation } = selectedClan.rewards;

    const userRef = doc(db, 'users', user.uid);
    const forkPayload: Record<string, any> = {
      buildPower: increment(buildPower),
      containers: increment(containers),
      data: increment(data),
      trophies: increment(reputation)
    };
    if (stats.dailyMissions) {
      forkPayload['dailyMissions.fork_repos.progress'] = increment(1);
    }
    
    try {
      await updateDoc(userRef, forkPayload);
      setLogs(prev => [{
        id: Date.now(),
        text: `FORK REPO [${selectedClan.name}]: Cloned successfully! Gained +${buildPower} BP, +${containers} Containers, +${data} Data, +${reputation} Rep`,
        type: 'sky-electric'
      }, ...prev.slice(0, 4)]);
    } catch (e) {
      console.error("Fork Error:", e);
    } finally {
      setIsForking(false);
    }
  };

  const selectedBuildingData = buildings.find(b => b.id === selectedBuildingId);

  return (
    <div className="h-screen w-screen bg-sky-deep text-slate-100 overflow-hidden font-sans selection:bg-sky-neon/30 mesh-gradient">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-sky-electric/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-sky-neon/20 rounded-full blur-[120px]" />
      </div>

      {/* Game UI Layer */}
      <div className="relative z-10 h-full flex flex-col">
        {stats && <ResourceBar stats={stats} />}

        <main className="flex-1 relative cursor-grab active:cursor-grabbing overflow-auto">
          <IsometricGrid 
            buildings={buildings} 
            selectedId={selectedBuildingId}
            onSelect={setSelectedBuildingId}
            placingType={placingType}
            onPlaceConfirm={handlePlaceConfirm}
            onCancel={() => setPlacingType(null)}
          />
        </main>

        {/* Footer UI - Sky Metropolis HUD */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-sky-deep to-transparent flex items-end justify-between px-8 pb-6 z-50 pointer-events-none">
          {/* Mini Logs */}
          <div className="w-72 h-32 sky-glass border-sky-electric/20 p-3 pointer-events-auto overflow-hidden flex flex-col">
            <div className="text-[10px] font-black text-sky-electric uppercase mb-2 flex items-center gap-2 tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-sky-neon animate-pulse"></span> SYSTEM LOGS
            </div>
            <div className="flex-1 space-y-1 font-mono text-[9px] overflow-y-auto custom-scrollbar pr-2">
              {logs.map(log => (
                <div key={log.id} className="text-slate-400 truncate border-l-2 border-transparent hover:border-sky-electric/50 pl-2 transition-all">
                  <span className="opacity-50">[{new Date(log.id).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span> <span className={cn("uppercase font-bold", log.type === 'create' ? 'text-sky-electric' : 'text-sky-neon')}>{log.type}</span> {log.text}
                </div>
              ))}
            </div>
          </div>

          {/* Shop / Actions Centers */}
          <div className="flex items-center gap-6 pointer-events-auto">
            <div className="flex flex-col items-center">
              <button 
                onClick={handleFork} 
                disabled={isForking}
                className={cn(
                  "w-20 h-20 sky-glass sky-neon-border rounded-2xl flex flex-col items-center justify-center transition-all group relative overflow-hidden",
                  isForking ? "cursor-wait opacity-80" : "hover:bg-sky-glow/40 active:scale-95"
                )}
              >
                {isForking && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${forkProgress}%` }}
                    className="absolute bottom-0 left-0 h-1 bg-sky-solar shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                  />
                )}
                <div className={cn(
                  "relative z-10 transition-all",
                  isForking ? "animate-bounce" : "group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                )}>
                  <GitFork className={cn("w-8 h-8", isForking ? "text-sky-solar" : "text-sky-electric")} />
                </div>
                <span className="text-[10px] font-black mt-1 uppercase tracking-wider text-slate-300 relative z-10">
                  {isForking ? `${Math.round(forkProgress)}%` : 'FORK'}
                </span>
              </button>
              <div className="mt-2 text-[10px] text-sky-electric/60 font-black uppercase tracking-widest">Network</div>
            </div>

            {!placingType && (
              <BuildingPanel 
                stats={stats!} 
                buildings={buildings}
                onSelectType={setPlacingType}
              />
            )}

            {placingType && (
              <div className="flex flex-col items-center">
                <button 
                  onClick={() => setPlacingType(null)} 
                  className="w-20 h-20 bg-red-950/40 border-2 border-red-500/50 rounded-2xl flex flex-col items-center justify-center hover:bg-red-900/40 shadow-xl group transition-all"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">🚫</span>
                  <span className="text-[10px] font-bold mt-1 uppercase tracking-wider text-red-100">CANCEL</span>
                </button>
                <div className="mt-2 text-[10px] text-red-500 font-bold uppercase tracking-widest">Placing...</div>
              </div>
            )}

            <div className="flex flex-col items-center">
              <button 
                onClick={() => setIsClanPanelOpen(true)} 
                className="w-20 h-20 sky-glass sky-neon-border rounded-2xl flex flex-col items-center justify-center hover:bg-sky-glow/40 transition-all active:scale-95 group"
              >
                <span className="text-3xl group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)] transition-all">👥</span>
                <span className="text-[10px] font-black mt-1 uppercase tracking-wider text-slate-300">CLAN</span>
              </button>
              <div className="mt-2 text-[10px] text-sky-electric/60 font-black uppercase tracking-widest">Team</div>
            </div>

            <div className="flex flex-col items-center">
              <button 
                onClick={() => setIsOrchestrationOpen(true)} 
                className="w-20 h-20 sky-glass sky-neon-border rounded-2xl flex flex-col items-center justify-center hover:bg-sky-glow/40 transition-all active:scale-95 group"
              >
                <span className="text-3xl group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">⚙️</span>
                <span className="text-[10px] font-black mt-1 uppercase tracking-wider text-slate-300">SYSTEM</span>
              </button>
              <div className="mt-2 text-[10px] text-sky-electric/60 font-black uppercase tracking-widest font-sans">Orchestrate</div>
            </div>
          </div>

          {/* Quest & Builder AI Sidebar */}
          <div className="w-72 flex flex-col items-end gap-3 pointer-events-auto">
            <BuilderManagement stats={stats!} />
            <AttackButton stats={stats!} />
            <DailyMissions stats={stats!} />
          </div>
        </div>

        {/* Atmosphere Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(2,6,23,0.4)_100%)]" />

        <AnimatePresence>
          {selectedBuildingId && selectedBuildingData && (
            <div className="absolute right-6 top-24 z-50">
              <BuildingInfo 
                building={selectedBuildingData} 
                stats={stats!}
                onClose={() => setSelectedBuildingId(null)}
              />
            </div>
          )}

          {isClanPanelOpen && clan && (
            <ClanPanel 
              stats={stats!} 
              clan={clan} 
              onClose={() => setIsClanPanelOpen(false)} 
              onFork={handleFork}
              isForking={isForking}
            />
          )}

          {isForkMenuOpen && (
            <ForkClanSelector 
              onClose={() => setIsForkMenuOpen(false)}
              onForkConfirm={handleForkConfirm}
              isForking={isForking}
            />
          )}

          {isOrchestrationOpen && (
            <OrchestrationPanel 
              onClose={() => setIsOrchestrationOpen(false)}
              clanName={clan?.name || "Alliance"}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Global CSS for Isometric and Game Feel */}
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
}
