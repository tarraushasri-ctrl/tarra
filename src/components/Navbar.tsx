import React from 'react';
import { Bookmark, PlusCircle, UserCheck } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onNavigate: (sectionId: string) => void;
  onOpenPostJob: () => void;
  onOpenAuth: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onNavigate,
  onOpenPostJob,
  onOpenAuth,
  activeSection,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('jobs');
          }}
          className="text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          WorkForge
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Main Navigation">
          <button
            onClick={() => onNavigate('jobs')}
            className={`hover:text-slate-900 transition-colors cursor-pointer ${
              activeSection === 'jobs' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Explore Roles
          </button>
          <button
            onClick={() => onNavigate('companies')}
            className={`hover:text-slate-900 transition-colors cursor-pointer ${
              activeSection === 'companies' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Companies
          </button>
          <button
            onClick={() => onNavigate('salaries')}
            className={`hover:text-slate-900 transition-colors cursor-pointer ${
              activeSection === 'salaries' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Salary Insights
          </button>
          <button
            onClick={() => onNavigate('saved')}
            className={`flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer ${
              activeSection === 'saved' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            <Bookmark className="w-4 h-4 text-slate-400" />
            <span>Saved Roles</span>
            {savedCount > 0 && (
              <span className="font-mono text-xs text-blue-600 font-bold tabular-nums">
                ({savedCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAuth}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <UserCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Candidate Portal</span>
          </button>

          <button
            onClick={onOpenPostJob}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-xs transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Post a Role</span>
          </button>
        </div>
      </div>
    </header>
  );
};
