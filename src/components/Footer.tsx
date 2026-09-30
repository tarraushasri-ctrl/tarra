import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-3">
            <span className="text-base font-bold text-white tracking-tight">WorkForge</span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              The verified careers and compensation intelligence platform for high-impact software engineers, designers, and technical leaders.
            </p>
          </div>

          {/* Catalog Col */}
          <div>
            <div className="font-semibold text-white mb-3 uppercase tracking-wider text-2xs">
              Explore Roles
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Distributed Systems & Backend
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frontend & Design Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Machine Learning & AI Infra
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cloud Architecture & SRE
                </button>
              </li>
            </ul>
          </div>

          {/* Intelligence Col */}
          <div>
            <div className="font-semibold text-white mb-3 uppercase tracking-wider text-2xs">
              Market Intelligence
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('salaries')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Real-time Salary Benchmarks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Verified Employer Network
                </button>
              </li>
              <li>
                <span className="text-slate-500">Equity Grant Calculator (Beta)</span>
              </li>
              <li>
                <span className="text-slate-500">48-Hour Response SLA Policy</span>
              </li>
            </ul>
          </div>

          {/* Hiring Teams */}
          <div>
            <div className="font-semibold text-white mb-3 uppercase tracking-wider text-2xs">
              For Employers
            </div>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300">Direct Candidate Delivery</span>
              </li>
              <li>
                <span className="text-slate-300">Custom Engineering Assessments</span>
              </li>
              <li>
                <span className="text-slate-300">Compensation Calibration</span>
              </li>
              <li>
                <span className="text-slate-300">Hiring Partner Terms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-slate-500">
          <div>
            © {new Date().getFullYear()} WorkForge Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Postings Only</span>
            <span>·</span>
            <span>Equal Opportunity Transparency</span>
            <span>·</span>
            <span>SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
