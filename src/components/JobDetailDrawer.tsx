import React, { useState } from 'react';
import { X, Bookmark, Share2, Check, CheckCircle2, MapPin, DollarSign, Calendar, Building, Sparkles } from 'lucide-react';
import { Job } from '../types';

interface JobDetailDrawerProps {
  job: Job | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onApply: (job: Job) => void;
}

export const JobDetailDrawer: React.FC<JobDetailDrawerProps> = ({
  job,
  onClose,
  isSaved,
  onToggleSave,
  onApply,
}) => {
  const [copied, setCopied] = useState(false);

  if (!job) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-label="Close modal overlay" />

      {/* Slide-in Drawer Container */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl z-10 flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
              <span>{job.company}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">{job.workplaceType}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-900 tabular-nums font-bold">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                ${job.salaryMin.toLocaleString()} – ${job.salaryMax.toLocaleString()} / year
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {job.postedDaysAgo === 1 ? 'Posted 1d ago' : `Posted ${job.postedDaysAgo}d ago`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job.id)}
              className={`p-2 rounded-md border transition-colors cursor-pointer ${
                isSaved
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-slate-400 hover:text-slate-700 bg-white border-slate-200'
              }`}
              title={isSaved ? 'Saved' : 'Save position'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-md transition-colors cursor-pointer"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-md transition-colors cursor-pointer"
              title="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-7 text-sm text-slate-700">
          {/* Company Bio */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              About {job.company}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {job.companyDescription}
            </p>
          </div>

          {/* Role Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Role Overview
            </h3>
            <p className="text-slate-800 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Responsibilities
            </h3>
            <ul className="space-y-2">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Qualifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Qualifications & Competencies
            </h3>
            <ul className="space-y-2">
              {job.qualifications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits & Perks */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Benefits & Offerings
            </h3>
            <ul className="space-y-2">
              {job.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Core Tech Stack & Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono text-xs rounded border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-bold text-slate-900 tabular-nums">
              ${job.salaryMin.toLocaleString()} – ${job.salaryMax.toLocaleString()}/yr
            </div>
            <div className="text-xs text-slate-500">Full-time compensation band</div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onApply(job)}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
