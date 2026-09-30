import React, { useState } from 'react';
import { Mail, Check, BellRing } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [rolePreference, setRolePreference] = useState('Engineering');
  const [frequency, setFrequency] = useState('weekly');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please provide a valid email address.');
      return;
    }
    setIsSubscribed(true);
  };

  return (
    <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
          <BellRing className="w-5 h-5" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Receive Verified Role Dispatches
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
          Get weekly curated engineering, architecture, and design positions matching your exact criteria with transparent salary bands.
        </p>

        {isSubscribed ? (
          <div className="p-4 bg-emerald-950/60 border border-emerald-700/60 rounded-xl text-emerald-300 max-w-md mx-auto flex items-center justify-center gap-2 text-xs">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Alerts confirmed for <strong className="text-white">{email}</strong>. Check your inbox for verification.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs pl-10 pr-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
              >
                Subscribe
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-2xs text-slate-400">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="freq"
                  checked={frequency === 'weekly'}
                  onChange={() => setFrequency('weekly')}
                  className="accent-blue-500"
                />
                <span>Weekly Digest</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="freq"
                  checked={frequency === 'instant'}
                  onChange={() => setFrequency('instant')}
                  className="accent-blue-500"
                />
                <span>Real-time Dispatches</span>
              </label>
              <span className="text-slate-600">·</span>
              <span>Zero spam. Unsubscribe anytime.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
