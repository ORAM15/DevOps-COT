import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Cpu, Terminal, Layers, RefreshCw, Key, ShieldCheck, 
  Settings, Play, Loader2, Server, Hourglass, Database, 
  CheckCircle2, AlertTriangle, HelpCircle, Activity, ArrowRight, Gauge
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface OrchestrationPanelProps {
  onClose: () => void;
  clanName: string;
}

interface DockerContainer {
  id: string;
  name: string;
  image: string;
  port: string;
  cpu: number;
  memory: string;
  status: 'running' | 'idle' | 'building';
  uptime: string;
}

export const OrchestrationPanel: React.FC<OrchestrationPanelProps> = ({ onClose, clanName }) => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'success'>('running');
  const [activeStage, setActiveStage] = useState(0);
  const [uniqueDeployId, setUniqueDeployId] = useState('');
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [containers, setContainers] = useState<DockerContainer[]>([]);

  // Generating a randomized deployment UUID
  useEffect(() => {
    const chars = 'abcdef0123456789';
    let uuid = 'DEPL-';
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        uuid += chars[Math.floor(Math.random() * chars.length)];
      }
      if (i < 3) uuid += '-';
    }
    uuid += '-ORCH-V4';
    setUniqueDeployId(uuid);
  }, []);

  // Docker Container details with live CPU fluctuation
  useEffect(() => {
    setContainers([
      { id: 'c-web', name: 'clan-balancer-nginx', image: 'nginx:1.24-alpine', port: '80:80', cpu: 12, memory: '144 MB', status: 'running', uptime: '12h 45m' },
      { id: 'c-app', name: 'gemini-agent-service', image: 'google/gemini-sdk:latest', port: '3010:3010', cpu: 28, memory: '512 MB', status: 'running', uptime: '4h 12m' },
      { id: 'c-jenkins', name: 'jenkins-cd-runner', image: 'jenkins/jenkins:lts-jdk17', port: '8080:8080', cpu: 45, memory: '1.2 GB', status: 'running', uptime: '1d 3h' },
      { id: 'c-db', name: 'supabase-pg-pooler', image: 'supabase/postgres:15.3', port: '5432:5432', cpu: 8, memory: '256 MB', status: 'running', uptime: '6d 18h' },
      { id: 'c-cache', name: 'clan-redis-cache', image: 'redis:7.0-alpine', port: '6379:6379', cpu: 2, memory: '64 MB', status: 'running', uptime: '6d 18h' },
      { id: 'c-exporter', name: 'prometheus-cadvisor', image: 'gcr.io/cadvisor:v0.47', port: '9100:9100', cpu: 4, memory: '98 MB', status: 'running', uptime: '12h 45m' }
    ]);

    const cpuTimer = setInterval(() => {
      setContainers(prev => prev.map(c => {
        const variance = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return {
          ...c,
          cpu: Math.max(1, Math.min(99, c.cpu + variance))
        };
      }));
    }, 1800);

    return () => clearInterval(cpuTimer);
  }, []);

  // Automated infinite Continuous Delivery loop simulating a running pipeline logs
  const baseLogPool = [
    'webhook-received: ref="refs/heads/main" sha="4b29f03a"',
    'jenkins: pulling branch details configuration...',
    'jenkins-pipeline: status = RUNNING',
    'docker-builder: building workspace image tags...',
    'docker-builder: caching intermediate layers Layer-3/12...',
    'api-gateways: verifying authentication SSL connections...',
    'gemini-api-agent: executing automated codebase static impact analysis...',
    'gemini-api: response generated (latency=142ms) - code security score 10/10',
    'pytest-suites: running unit files count=48... PASSED',
    'docker-deployer: pushing image registry.clan.io/gemini-agent-service:latest',
    'docker-deployer: updating cluster rolling configuration namespace: production',
    'prometheus-alerts: zero anomalies detected during canary stage',
    'orchestrator-gateway: continuous integration successful, cluster fully updated!'
  ];

  useEffect(() => {
    let index = 0;
    setCurrentLogs([
      '// PIPELINE INITIALIZATION CHANNELS READY',
      'System: listening on production webhooks...'
    ]);

    const logTimer = setInterval(() => {
      setCurrentLogs(prev => {
        const next = [...prev, `[${new Date().toLocaleTimeString()}] ${baseLogPool[index]}`];
        if (next.length > 8) next.shift(); // keep last 8 entries
        return next;
      });
      index = (index + 1) % baseLogPool.length;
    }, 2800);

    return () => clearInterval(logTimer);
  }, []);

  // Jenkins pipeline stages slider
  useEffect(() => {
    if (pipelineState !== 'running') return;
    const stageTimer = setInterval(() => {
      setActiveStage(prev => {
        if (prev >= 4) {
          return 0; // infinite loops representing CD flow
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(stageTimer);
  }, [pipelineState]);

  const STAGES = [
    { title: 'Trigger', desc: 'Pulling GitLab/GitHub', icon: '⚡' },
    { title: 'Jenkins Build', desc: 'Compiling bundles', icon: '⚙️' },
    { title: 'Image Build', desc: 'Docker build -t registry', icon: '📦' },
    { title: 'Gemini Analysis', desc: 'Impact telemetry', icon: '🤖' },
    { title: 'CD Ingress', desc: 'Zero-Downtime Rollout', icon: '🚀' }
  ];

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center z-[100] p-4 select-none font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="w-full max-w-5xl sky-glass border border-sky-electric/30 rounded-3xl relative flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Dynamic ambient grid background */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-sky-electric/10 to-transparent pointer-events-none -z-10" />

        {/* Top Header */}
        <div className="p-6 border-b border-white/5 bg-sky-deep/20 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-sky-neon/40 flex items-center justify-center relative shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              <Cpu className="w-8 h-8 text-sky-neon animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-sky-electric/15 text-sky-electric font-black font-mono px-2 py-0.5 rounded border border-sky-electric/20 tracking-wider">
                  ACTIVE PIPELINE ENVIRONMENT
                </span>
                <span className="w-1 h-1 bg-slate-700 rounded-full" />
                <span className="text-xs text-emerald-400 font-mono tracking-tighter">● CD SECURE</span>
              </div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight flex items-center gap-2.5 mt-0.5">
                <span>{clanName} Orchestration Hub</span>
              </h2>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Orchestrate serverless integrations, audit core static keys, container clusters, and live cloud runners.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Status overview */}
            <div className="flex flex-col items-end mr-3">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">Deployment ID</span>
              <span className="text-xs font-mono font-black text-white tracking-widest">{uniqueDeployId || 'GENERATINGID...'}</span>
            </div>

            <button 
              onClick={onClose}
              className="p-2.5 rounded-xl border border-white/5 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-slate-950/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-950/45">
          {/* Section 1: Jenkins CI/CD Pipeline Visualizer with Continuous Delivery lines */}
          <div className="sky-glass border-slate-800/80 p-5 rounded-2xl relative overflow-hidden">
            {/* Background glowing line */}
            <div className="absolute inset-x-12 top-[60px] h-[3px] bg-slate-900 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-sky-500/40 to-indigo-500/10" />
            </div>

            {/* Glowing Pipeline flow animation */}
            <div className="absolute inset-x-12 top-[60px] h-[3px] z-[1] overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-sky-500 shadow-[0_0_8px_#22d3ee]"
              />
            </div>

            <div className="flex items-center justify-between mb-6 z-10 relative">
              <div className="flex items-center gap-2">
                <span className="text-xl bg-slate-950 p-1 rounded-md border border-white/5">🏗️</span>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-wider">Jenkins CI/CD Pipeline</h3>
                  <p className="text-[10px] text-slate-500">Continuous delivery stream delivering real-time docker container replication triggers.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest animate-pulse">ACTIVE DELIVERY LOOP</span>
              </div>
            </div>

            {/* Stage Cards Layout */}
            <div className="grid grid-cols-5 gap-3.5 relative z-10">
              {STAGES.map((stage, idx) => {
                const isCompleted = idx < activeStage;
                const isCurrent = idx === activeStage;
                
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <motion.div
                      animate={isCurrent ? { 
                        borderColor: ['rgba(34,211,238,0.4)', 'rgba(34,211,238,1)', 'rgba(34,211,238,0.4)'],
                        boxShadow: [
                          '0 0 10px rgba(34,211,238,0.1)',
                          '0 0 20px rgba(34,211,238,0.4)',
                          '0 0 10px rgba(34,211,238,0.1)'
                        ]
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg select-none transition-all duration-500 relative border",
                        isCompleted ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]" :
                        isCurrent ? "bg-sky-950/60 border-cyan-400 text-cyan-400 font-black scale-105" :
                        "bg-slate-900/60 border-slate-800 text-slate-600"
                      )}
                    >
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : stage.icon}

                      {/* Micro pulse wave ring if active */}
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-2xl border border-cyan-400 animate-ping opacity-35" />
                      )}
                    </motion.div>

                    <div className="text-center mt-3 space-y-0.5 max-w-full">
                      <div className={cn(
                        "text-[10px] font-black uppercase tracking-tight",
                        isCurrent ? "text-cyan-400 font-bold" : "text-slate-200"
                      )}>
                        {stage.title}
                      </div>
                      <div className="text-[8px] text-slate-500 leading-none truncate max-w-[90px] mx-auto">
                        {stage.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column Layout: Gemini API Credentials vs Logger Terminal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Block 1: Gemini AI Cloud Config & Credential Verification */}
            <div className="sky-glass border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3.5 text-pink-400">
                  <Key className="w-4.5 h-4.5 text-pink-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Google Gemini LLM Config</span>
                </div>

                <div className="space-y-4">
                  {/* API Key container */}
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 space-y-1 relative group hover:border-pink-500/20 transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest font-mono">Gemini Token Variable</span>
                      <span className="text-[8px] font-mono font-bold text-fuchsia-400 animate-pulse bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/10">
                        VERIFIED SECURE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span className="text-[11px] font-mono font-bold text-slate-200">
                        GEMINI_API_KEY = sk-gemini-aistudio-v4-{uniqueDeployId ? uniqueDeployId.substring(5, 13) : 'xxxxx'}******
                      </span>
                    </div>
                  </div>

                  {/* LLM Model verification pipeline status details */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900 flex justify-between items-center">
                      <span className="text-slate-500">Model Deployment</span>
                      <span className="font-mono text-white font-bold">gemini-2.5-pro</span>
                    </div>
                    <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900 flex justify-between items-center">
                      <span className="text-slate-500">Sync Status</span>
                      <span className="font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Synchronized
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure note */}
              <div className="bg-emerald-950/15 border border-emerald-500/15 rounded-xl p-3 flex items-start gap-2 mt-4 text-[9px] text-slate-400 leading-snug">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  The API token is securely handled server-side at the cloud run gateway and never directly leaked or exposed onto standard browser client vectors.
                </span>
              </div>
            </div>

            {/* Block 2: Live Pipeline Telemetry Log monitor */}
            <div className="sky-glass border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5 text-cyan-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4.5 h-4.5 text-cyan-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Continuous Delivery Console</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                </div>

                <div className="bg-slate-950/90 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 h-[120px] overflow-hidden flex flex-col justify-end space-y-1.5 shadow-inner border border-white/5">
                  <div className="flex-1 flex flex-col justify-start space-y-1.5 overflow-hidden">
                    {currentLogs.map((log, index) => (
                      <div key={index} className="truncate">
                        <span className="text-sky-electric select-none mr-1.5">&gt;</span>
                        <span className={index === currentLogs.length - 1 ? "text-white font-semibold" : ""}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Registered Docker Containers Run Center */}
          <div className="sky-glass border-slate-800/80 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🐳</span>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-wider">Docker Cluster Microservices</h3>
                  <p className="text-[10px] text-slate-500">Live virtualization statistics representing active clan nodes powering local operations.</p>
                </div>
              </div>

              {/* Total specs overview */}
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Server className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Pods: <span className="font-mono text-white font-bold">{containers.length}/6 active</span></span>
                </div>
              </div>
            </div>

            {/* Containers grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {containers.map((container, idx) => (
                <div 
                  key={container.id} 
                  className="bg-slate-950/70 rounded-xl border border-white/5 p-3.5 space-y-3 relative overflow-hidden hover:border-sky-electric/30 hover:bg-slate-950/90 transition-all group"
                >
                  {/* Decorative corner flash indicator */}
                  <div className="absolute right-0 top-0 w-12 h-12 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08]" style={{
                    background: 'radial-gradient(circleAtTopRight, #0ea5e9, transparent 70%)'
                  }} />

                  {/* Container identity */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-black text-white uppercase tracking-tight group-hover:text-sky-neon transition-colors leading-none">
                        {container.name}
                      </div>
                      <div className="text-[8px] text-slate-500 font-mono">
                        {container.image} • {container.port}
                      </div>
                    </div>
                    {/* Pulsing signal status */}
                    <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 text-[8px] font-mono font-bold text-emerald-400">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                      RUNNING
                    </div>
                  </div>

                  {/* Resource meters */}
                  <div className="space-y-2 pt-1 border-t border-white/5">
                    {/* CPU Usage percentage meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-end text-[8px] font-mono">
                        <span className="text-slate-500 uppercase font-black uppercase">CPU Allocation</span>
                        <span className="text-sky-electric font-bold">{container.cpu}%</span>
                      </div>
                      <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-sky-electric" 
                          animate={{ width: `${container.cpu}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Footer values details */}
                    <div className="flex justify-between items-center font-mono text-[8.5px] text-slate-500 pt-1">
                      <span>Memory Limit: <span className="text-slate-300 font-bold">{container.memory}</span></span>
                      <span>Uptime: <span className="text-slate-300 font-bold">{container.uptime}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info line */}
        <div className="p-4 bg-slate-950 border-t border-white/5 flex justify-between items-center text-[9px] text-slate-500 uppercase font-mono">
          <span>Continuous Integration / Continuous Delivery Control Room v4.269</span>
          <span className="text-sky-neon/80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-neon animate-pulse" /> Jenkins trigger automation active
          </span>
        </div>
      </motion.div>
    </div>
  );
};
