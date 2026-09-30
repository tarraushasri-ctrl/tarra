import React, { useState } from 'react';
import { DollarSign, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { JobCategory, ExperienceLevel } from '../types';

interface SalaryInsightsProps {
  onFilterBySalary: (category: JobCategory, minSalary: number) => void;
}

const BASE_MEDIANS: Record<JobCategory, Record<ExperienceLevel, number>> = {
  Engineering: {
    Junior: 110000,
    Mid: 145000,
    Senior: 185000,
    Lead: 210000,
    Staff: 245000,
    Principal: 275000,
  },
  'Product & Design': {
    Junior: 95000,
    Mid: 130000,
    Senior: 165000,
    Lead: 190000,
    Staff: 215000,
    Principal: 240000,
  },
  'Data & AI': {
    Junior: 115000,
    Mid: 155000,
    Senior: 195000,
    Lead: 225000,
    Staff: 260000,
    Principal: 295000,
  },
  Operations: {
    Junior: 90000,
    Mid: 125000,
    Senior: 160000,
    Lead: 180000,
    Staff: 205000,
    Principal: 230000,
  },
};

const GEO_MULTIPLIERS: Record<string, { label: string; mult: number }> = {
  sf: { label: 'San Francisco Bay Area', mult: 1.05 },
  ny: { label: 'New York Metro', mult: 1.0 },
  sea: { label: 'Seattle / Pacific Northwest', mult: 0.98 },
  remote_us: { label: 'Remote (US Nationwide)', mult: 0.92 },
  eu: { label: 'London & European Hubs', mult: 0.82 },
};

export const SalaryInsights: React.FC<SalaryInsightsProps> = ({ onFilterBySalary }) => {
  const [department, setDepartment] = useState<JobCategory>('Engineering');
  const [level, setLevel] = useState<ExperienceLevel>('Senior');
  const [geoKey, setGeoKey] = useState<string>('sf');

  const rawMedian = BASE_MEDIANS[department][level];
  const mult = GEO_MULTIPLIERS[geoKey]?.mult ?? 1.0;

  const median = Math.round((rawMedian * mult) / 1000) * 1000;
  const p25 = Math.round((median * 0.84) / 1000) * 1000;
  const p75 = Math.round((median * 1.16) / 1000) * 1000;
  const p90 = Math.round((median * 1.32) / 1000) * 1000;

  return (
    <section id="salaries-section" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            03. Compensation Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Real-Time Salary Benchmarks & Market Percentiles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Derived from over 8,400 verified offers across high-growth technology teams. All figures represent base cash compensation, excluding equity grants and sign-on bonuses.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-900 mb-2">
                Discipline / Function
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Engineering', 'Product & Design', 'Data & AI', 'Operations'] as JobCategory[]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setDepartment(cat)}
                    className={`px-3 py-2 text-xs font-medium rounded-md border text-left transition-colors cursor-pointer ${
                      department === cat
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-900 mb-2">
                Seniority Level
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['Junior', 'Mid', 'Senior', 'Lead', 'Staff', 'Principal'] as ExperienceLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                      level === lvl
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-900 mb-2">
                Geographic Market
              </label>
              <select
                value={geoKey}
                onChange={(e) => setGeoKey(e.target.value)}
                className="w-full text-xs font-medium text-slate-800 bg-white border border-slate-300 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer"
              >
                {Object.entries(GEO_MULTIPLIERS).map(([key, data]) => (
                  <option key={key} value={key}>
                    {data.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onFilterBySalary(department, p25)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Matching Positions in Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visualization Output Card */}
          <div className="lg:col-span-7 bg-slate-900 text-white p-7 rounded-xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Calculated Market Median
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mt-1 tabular-nums">
                  ${median.toLocaleString()}
                  <span className="text-sm font-normal text-slate-400 font-sans"> / year</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-md self-start sm:self-auto">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12.4% YoY Market Velocity</span>
              </div>
            </div>

            {/* Percentile Distribution Bars */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-300">
                Base Compensation Percentile Distribution:
              </div>

              {/* 25th Percentile */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">25th Percentile (Entry band)</span>
                  <span className="text-white font-bold tabular-nums">${p25.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              {/* 50th Percentile (Median) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-blue-400 font-semibold">50th Percentile (Market Median)</span>
                  <span className="text-blue-400 font-bold tabular-nums">${median.toLocaleString()}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>

              {/* 75th Percentile */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">75th Percentile (Senior tier)</span>
                  <span className="text-white font-bold tabular-nums">${p75.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>

              {/* 90th Percentile */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">90th Percentile (Top tier / Specialized)</span>
                  <span className="text-white font-bold tabular-nums">${p90.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
            </div>

            {/* Note & Trust signal */}
            <div className="pt-4 border-t border-slate-800 flex items-start gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <span>
                Figures represent W2 base salary. Equity compensation typically adds an estimated 25% – 60% value depending on funding stage and seniority.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
