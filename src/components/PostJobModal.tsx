import React, { useState } from 'react';
import { X, Plus, Sparkles, Building2 } from 'lucide-react';
import { Job, JobCategory, WorkplaceType, ExperienceLevel, NewJobFormData } from '../types';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobCreated: (newJob: Job) => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  onJobCreated,
}) => {
  const [formData, setFormData] = useState<NewJobFormData>({
    title: '',
    company: '',
    category: 'Engineering',
    workplaceType: 'Remote',
    type: 'Full-time',
    experienceLevel: 'Senior',
    location: 'Remote · US & Canada',
    salaryMin: 160000,
    salaryMax: 200000,
    tags: 'React, TypeScript, Node.js',
    description: '',
    responsibilities: 'Lead architecture of core customer-facing features.\nWrite reliable, testable TypeScript code.\nCollaborate in cross-functional design sprints.',
    qualifications: '5+ years of software engineering experience.\nDeep proficiency with modern web architectures.\nStrong written and verbal communication.',
    benefits: 'Comprehensive health & dental coverage\n$3,000 continuous education budget\nFlexible remote working schedule',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.company.trim() || !formData.description.trim()) {
      alert('Please fill out the job title, company name, and description.');
      return;
    }

    const createdJob: Job = {
      id: `job-${Date.now()}`,
      title: formData.title.trim(),
      company: formData.company.trim(),
      category: formData.category,
      workplaceType: formData.workplaceType,
      type: formData.type,
      experienceLevel: formData.experienceLevel,
      location: formData.location.trim() || 'Remote',
      salaryMin: Number(formData.salaryMin) || 150000,
      salaryMax: Number(formData.salaryMax) || 190000,
      currency: 'USD',
      postedDaysAgo: 0,
      featured: true,
      applicantCount: 1,
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      companyDescription: `${formData.company.trim()} is an innovative high-growth organization pushing the boundaries of ${formData.category.toLowerCase()}.`,
      description: formData.description.trim(),
      responsibilities: formData.responsibilities
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean),
      qualifications: formData.qualifications
        .split('\n')
        .map((q) => q.trim())
        .filter(Boolean),
      benefits: formData.benefits
        .split('\n')
        .map((b) => b.trim())
        .filter(Boolean),
    };

    onJobCreated(createdJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      {/* Click backdrop to close */}
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-label="Close dialog" />

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl z-10 overflow-hidden border border-slate-200">
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Employer Hiring Portal</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Publish a New Career Opportunity
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Reach thousands of senior engineers and leaders with transparent compensation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* Title & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Position Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Senior Backend Architect"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Acme Systems"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* Category, Workplace & Seniority */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as JobCategory })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
              >
                <option value="Engineering">Engineering</option>
                <option value="Product & Design">Product & Design</option>
                <option value="Data & AI">Data & AI</option>
                <option value="Operations">Operations</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Workplace Arrangement</label>
              <select
                value={formData.workplaceType}
                onChange={(e) => setFormData({ ...formData, workplaceType: e.target.value as WorkplaceType })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Seniority Level</label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as ExperienceLevel })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
              >
                <option value="Junior">Junior</option>
                <option value="Mid">Mid-Level</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
                <option value="Staff">Staff</option>
                <option value="Principal">Principal</option>
              </select>
            </div>
          </div>

          {/* Location & Compensation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">Location / Timezone</label>
              <input
                type="text"
                placeholder="e.g. San Francisco, CA or Remote"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Min Base Pay ($/yr)</label>
              <input
                type="number"
                min="50000"
                step="5000"
                value={formData.salaryMin}
                onChange={(e) => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Max Base Pay ($/yr)</label>
              <input
                type="number"
                min="60000"
                step="5000"
                value={formData.salaryMax}
                onChange={(e) => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Required Technologies / Skills (Comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Rust, Distributed Systems, Kafka, AWS"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 font-mono"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Executive Summary & Mission <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Provide a clear description of the team's charter and key technical challenge..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Core Responsibilities (One per line)
            </label>
            <textarea
              rows={3}
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          {/* Qualifications */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Qualifications & Competencies (One per line)
            </label>
            <textarea
              rows={3}
              value={formData.qualifications}
              onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Publish Position Instantly</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
