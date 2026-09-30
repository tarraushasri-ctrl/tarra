import React, { useState } from 'react';
import { Bookmark, CheckCircle2, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Job, JobCategory, WorkplaceType, ExperienceLevel } from '../types';

interface JobListProps {
  jobs: Job[];
  savedJobIds: Set<string>;
  onToggleSave: (id: string, e?: React.MouseEvent) => void;
  onSelectJob: (job: Job) => void;
  onApplyJob: (job: Job, e?: React.MouseEvent) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  locationFilter: string;
  workplaceFilter: WorkplaceType | 'All';
  onClearFilters: () => void;
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  savedJobIds,
  onToggleSave,
  onSelectJob,
  onApplyJob,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  locationFilter,
  workplaceFilter,
  onClearFilters,
}) => {
  const [levelFilter, setLevelFilter] = useState<ExperienceLevel | 'All'>('All');
  const [minSalary, setMinSalary] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'newest' | 'salary'>('newest');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Positions' },
    { id: 'Engineering', label: 'Engineering' },
    { id: 'Product & Design', label: 'Product & Design' },
    { id: 'Data & AI', label: 'Data & AI' },
    { id: 'Operations', label: 'Operations' },
    { id: 'saved', label: `Saved (${savedJobIds.size})` },
  ];

  // Filtering
  const filteredJobs = jobs.filter((job) => {
    // Category or saved filter
    if (selectedCategory === 'saved') {
      if (!savedJobIds.has(job.id)) return false;
    } else if (selectedCategory !== 'all') {
      if (job.category !== selectedCategory) return false;
    }

    // Keyword search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchTag = job.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchCompany && !matchTag) return false;
    }

    // Location search
    if (locationFilter) {
      const loc = locationFilter.toLowerCase();
      const matchLoc = job.location.toLowerCase().includes(loc);
      const isRemote = job.workplaceType === 'Remote' && loc.includes('remote');
      if (!matchLoc && !isRemote) return false;
    }

    // Workplace
    if (workplaceFilter !== 'All' && job.workplaceType !== workplaceFilter) {
      return false;
    }

    // Experience level
    if (levelFilter !== 'All' && job.experienceLevel !== levelFilter) {
      return false;
    }

    // Min salary
    if (minSalary > 0 && job.salaryMax < minSalary) {
      return false;
    }

    return true;
  });

  // Sorting
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'salary') {
      return b.salaryMax - a.salaryMax;
    }
    return a.postedDaysAgo - b.postedDaysAgo;
  });

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(locationFilter) ||
    workplaceFilter !== 'All' ||
    levelFilter !== 'All' ||
    minSalary > 0 ||
    selectedCategory !== 'all';

  return (
    <div id="jobs-section" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              02. Role Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Verified Open Opportunities
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="text-xs text-slate-500">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'salary')}
              className="text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer shadow-2xs"
            >
              <option value="newest">Recently Posted</option>
              <option value="salary">Highest Compensation</option>
            </select>
          </div>
        </div>

        {/* Interactive Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Bar */}
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-1">
              <span className="text-slate-400">Seniority:</span>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as ExperienceLevel | 'All')}
                className="font-medium text-slate-700 bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                <option value="All">All Levels</option>
                <option value="Mid">Mid-Level</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
                <option value="Staff">Staff</option>
                <option value="Principal">Principal</option>
              </select>
            </div>

            {/* Min Salary Filter */}
            <div className="flex items-center gap-1">
              <span className="text-slate-400">Min Base:</span>
              <select
                value={minSalary}
                onChange={(e) => setMinSalary(Number(e.target.value))}
                className="font-medium text-slate-700 bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                <option value={0}>Any Salary</option>
                <option value={140000}>$140k+/yr</option>
                <option value={170000}>$170k+/yr</option>
                <option value={200000}>$200k+/yr</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500">
              Showing <span className="font-mono font-semibold text-slate-900 tabular-nums">{sortedJobs.length}</span> positions
            </span>

            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Job Cards Grid / List */}
        {sortedJobs.length > 0 ? (
          <div className="space-y-3">
            {sortedJobs.map((job) => {
              const isSaved = savedJobIds.has(job.id);
              return (
                <div
                  key={job.id}
                  onClick={() => onSelectJob(job)}
                  className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Role Info */}
                    <div className="flex-1 min-w-0">
                      {/* Company Name + Verified */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                        <span>{job.company}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" aria-label="Verified employer" />
                      </div>

                      {/* Job Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {job.title}
                      </h3>

                      {/* Clean Unboxed Metadata with · separators (Zero-Pill Compliance) */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
                        <span className="text-slate-900 font-semibold">{job.workplaceType}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.location}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="font-mono text-slate-900 tabular-nums">
                          ${job.salaryMin.toLocaleString()} – ${job.salaryMax.toLocaleString()}/yr
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.type}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.experienceLevel}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-400">
                          {job.postedDaysAgo === 1 ? '1 day ago' : `${job.postedDaysAgo} days ago`}
                        </span>
                      </div>

                      {/* Brief Excerpt */}
                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Tags / Stack */}
                      <div className="flex flex-wrap items-center gap-2 mt-3.5">
                        {job.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                        {job.tags.length > 4 && (
                          <span className="text-xs text-slate-400 font-mono">
                            +{job.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      {/* Save Bookmark Button */}
                      <button
                        onClick={(e) => onToggleSave(job.id, e)}
                        aria-label={isSaved ? 'Remove saved role' : 'Save this role'}
                        className={`p-2 rounded-md transition-colors cursor-pointer border ${
                          isSaved
                            ? 'text-blue-600 bg-blue-50 border-blue-200'
                            : 'text-slate-400 hover:text-slate-700 bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`} />
                      </button>

                      {/* Primary Apply Button */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => onApplyJob(job, e)}
                          className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md shadow-2xs transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                        >
                          Quick Apply
                        </button>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all hidden sm:block" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              No matching positions found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try adjusting your search criteria, clearing category filters, or broadening your salary expectations.
            </p>
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            >
              Clear All Search Criteria
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
