import React, { useState } from 'react';
import { Sword, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/src/lib/firebase';
import { UserStats } from '@/src/types/game';

interface AttackButtonProps {
  stats: UserStats;
}

export const AttackButton: React.FC<AttackButtonProps> = ({ stats }) => {
  const [isAttacking, setIsAttacking] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'fail', message: string } | null>(null);

  const startAttack = async () => {
    setIsAttacking(true);
    setResult(null);

    // Simulate pipeline infiltration
    await new Promise(resolve => setTimeout(resolve, 3000));

    const success = Math.random() > 0.3;
    const userRef = doc(db, 'users', stats.userId);

    const updatePayload: Record<string, any> = {};
    if (stats.dailyMissions) {
      updatePayload['dailyMissions.attacks.progress'] = increment(1);
    }

    if (success) {
      const lootBuildPower = Math.floor(Math.random() * 200) + 50;
      const lootExperience = 25;

      updatePayload.buildPower = increment(lootBuildPower);
      updatePayload.experience = increment(lootExperience);

      try {
        await updateDoc(userRef, updatePayload);
      } catch (e) {
        console.error(e);
      }

      setResult({ 
        type: 'success', 
        message: `Infiltration successful! Looted ${lootBuildPower} Build Power and gained ${lootExperience} XP.` 
      });
    } else {
      try {
        await updateDoc(userRef, updatePayload);
      } catch (e) {
        console.error(e);
      }

      setResult({ 
        type: 'fail', 
        message: "Attack failed! Their security scans detected our unauthorized pipeline trigger." 
      });
    }

    setIsAttacking(false);
    
    // Clear result after 5s
    setTimeout(() => setResult(null), 5000);
  };

  return (
    <div className="flex flex-col items-end gap-3 pointer-events-auto w-full">
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`px-4 py-3 rounded-xl border flex items-center gap-3 sky-glass shadow-2xl w-full ${
              result.type === 'success' 
                ? 'border-sky-neon/40 text-sky-neon' 
                : 'border-red-500/40 text-red-100'
            }`}
          >
            {result.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <p className="text-[10px] font-black uppercase tracking-widest leading-snug">{result.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={startAttack}
        disabled={isAttacking}
        className="w-full py-4 gemini-gradient sky-neon-border rounded-xl flex items-center justify-center gap-3 text-white font-black shadow-[0_0_20px_rgba(232,121,249,0.3)] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.3em] text-[10px] transition-all italic"
      >
        {isAttacking ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            SYNCHRONIZING...
          </>
        ) : (
          <>
            <Sword className="w-4 h-4" />
            DEPLOY ATTACK VECTOR
          </>
        )}
      </motion.button>
    </div>
  );
};
