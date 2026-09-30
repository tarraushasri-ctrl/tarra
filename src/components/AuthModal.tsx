import React, { useState } from 'react';
import { X, CheckCircle2, UserCheck, Shield } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-label="Close dialog" />

      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl z-10 overflow-hidden border border-slate-200">
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Candidate Portal</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Sign In to Your Career Dashboard
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Track submitted applications, manage bookmarks, and access direct hiring messaging.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSent ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Magic Link Dispatched
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We sent a secure, passwordless authentication link to{' '}
                <strong className="text-slate-900">{email}</strong>.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Work or Personal Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Continue with Secure Magic Link
            </button>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-2xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>We never share candidate profiles without explicit permission.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
