import React from 'react';
import { Building, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_SPOTLIGHTS } from '../data/mockJobs';

interface CompanySpotlightsProps {
  onSelectCompany: (companyName: string) => void;
}

export const CompanySpotlights: React.FC<CompanySpotlightsProps> = ({ onSelectCompany }) => {
  return (
    <section id="companies-section" className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              04. Partner Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Engineering Organizations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Teams with committed engineering charters, transparent equity structures, and continuous technical investment.
            </p>
          </div>
        </div>

        {/* Featured Bento-Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual Feature Card */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 bg-slate-800">
              <img
                src="/src/assets/images/company_modern_campus_1790763382355.jpg"
                alt="Modern corporate engineering campus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-2xs font-mono uppercase tracking-wider text-blue-300">
                  Campus Spotlight
                </span>
                <h3 className="text-lg font-bold">CloudMatrix Global Systems</h3>
                <p className="text-xs text-slate-300">San Francisco · Remote Operations</p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leading developer-infrastructure organization powering real-time stream consensus protocols. Recognized for autonomous engineering pods and asynchronous decision-making.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Distributed Consensus', 'Go', 'Kubernetes', 'Infra-as-Code'].map((item) => (
                    <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">8 open technical roles</span>
                <button
                  onClick={() => onSelectCompany('CloudMatrix')}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Explore Roles</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Company Grid List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPANY_SPOTLIGHTS.map((comp) => (
              <div
                key={comp.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                        <span>{comp.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-xs text-slate-500">{comp.industry}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-600 font-mono font-bold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{comp.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {comp.highlight}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {comp.techStack.map((tech) => (
                      <span key={tech} className="text-2xs text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{comp.openRolesCount} positions</span>
                  </span>

                  <button
                    onClick={() => onSelectCompany(comp.name)}
                    className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer flex items-center gap-0.5"
                  >
                    <span>View Roles</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
