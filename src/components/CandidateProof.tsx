import React from 'react';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';

export const CandidateProof: React.FC = () => {
  return (
    <section className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            05. Verified Placements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Proof of Impact & Candidate Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Real outcomes from senior engineers and engineering directors placed through our direct hiring pipelines.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/src/assets/images/candidate_success_story_1790763409735.jpg"
                  alt="Senior Engineering Architect portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 justify-center sm:justify-start">
                  <span>Elena Vance</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="text-xs text-slate-500">Staff Distributed Systems Lead</div>
                <div className="text-xs text-blue-600 font-medium">Placed at CloudMatrix</div>
              </div>
            </div>

            {/* Testimonial Statement & Metrics */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative">
                <Quote className="w-8 h-8 text-slate-200 absolute -top-4 -left-3 -z-10" />
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  "Most job boards waste weeks in recruiter black holes. Through WorkForge, I connected directly with CloudMatrix’s VP of Infrastructure within 36 hours. The salary bands were published transparently upfront, skipping the typical negotiation friction entirely."
                </p>
              </div>

              {/* Quantified Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">+38% Base</div>
                  <div className="text-xs text-slate-500">Compensation Increase</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">14 Days</div>
                  <div className="text-xs text-slate-500">From Apply to Formal Offer</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">100% Remote</div>
                  <div className="text-xs text-slate-500">Asynchronous Working Model</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
