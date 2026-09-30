import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { WorkplaceType } from '../types';

interface HeroProps {
  onSearch: (query: string, location: string, workplace: WorkplaceType | 'All') => void;
  totalPositions: number;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, totalPositions }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [workplace, setWorkplace] = useState<WorkplaceType | 'All'>('All');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim(), location.trim(), workplace);
    // Smooth scroll down to jobs section
    const el = document.getElementById('jobs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Media with Measured Scrim */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/src/assets/images/hero_workspace_team_1790763363752.jpg"
          alt="Modern technology workspace and engineering collaboration"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            // Zero-broken image policy: hide and let fallback dark gradient show
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Natural editorial kicker */}
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            01. High-Growth Engineering & Product Directory
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight [text-wrap:balance]">
            Where exceptional software engineers and architects build what matters.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Access verified opportunities with transparent compensation bands, direct hiring manager review, and guaranteed response SLAs within 48 hours.
          </p>

          {/* Unified Search & Filter Bar */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-xl shadow-xl border border-slate-200 text-slate-900 grid grid-cols-1 md:grid-cols-12 gap-2"
          >
            {/* Keyword Input */}
            <div className="md:col-span-5 flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Title, skill, or keyword (e.g. Go, React)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full text-sm bg-transparent placeholder-slate-400 text-slate-900 focus:outline-none"
              />
            </div>

            {/* Location Input */}
            <div className="md:col-span-3 flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <MapPin className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="City or Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm bg-transparent placeholder-slate-400 text-slate-900 focus:outline-none"
              />
            </div>

            {/* Workplace Type Selector */}
            <div className="md:col-span-2 flex items-center px-2 py-2">
              <Briefcase className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <select
                value={workplace}
                onChange={(e) => setWorkplace(e.target.value as WorkplaceType | 'All')}
                className="w-full text-xs font-medium text-slate-700 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[40px] px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Find Roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Quick popular search tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span>Popular:</span>
            {['Distributed Systems', 'React 19', 'Kubernetes', 'Product Design', 'Machine Learning'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setKeyword(tag);
                  onSearch(tag, location, workplace);
                  const el = document.getElementById('jobs-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-4 hover:decoration-white transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Claim-to-Proof Adjacency Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono tabular-nums">
              {totalPositions.toLocaleString()}+
            </div>
            <div className="text-xs text-slate-400 mt-1">Verified Open Roles</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono tabular-nums">
              $178,000
            </div>
            <div className="text-xs text-slate-400 mt-1">Median Base Compensation</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono tabular-nums">
              &lt; 48 hrs
            </div>
            <div className="text-xs text-slate-400 mt-1">Hiring Manager Response SLA</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Direct Verified Employers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
