import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JobList } from './components/JobList';
import { JobDetailDrawer } from './components/JobDetailDrawer';
import { ApplyModal } from './components/ApplyModal';
import { PostJobModal } from './components/PostJobModal';
import { SalaryInsights } from './components/SalaryInsights';
import { CompanySpotlights } from './components/CompanySpotlights';
import { CandidateProof } from './components/CandidateProof';
import { Newsletter } from './components/Newsletter';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { INITIAL_JOBS } from './data/mockJobs';
import { Job, WorkplaceType, JobCategory } from './types';
import { CheckCircle2, Bookmark } from 'lucide-react';

export default function App() {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set(['job-1', 'job-4']));
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [workplaceFilter, setWorkplaceFilter] = useState<WorkplaceType | 'All'>('All');
  const [activeSection, setActiveSection] = useState<string>('jobs');

  // Interactive feedback toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedJobIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Role removed from saved bookmarks');
      } else {
        next.add(id);
        showToast('Role saved to your candidate bookmarks');
      }
      return next;
    });
  };

  const handleSearch = (query: string, location: string, workplace: WorkplaceType | 'All') => {
    setSearchQuery(query);
    setLocationFilter(location);
    setWorkplaceFilter(workplace);
    setActiveSection('jobs');
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setLocationFilter('');
    setWorkplaceFilter('All');
    setSelectedCategory('all');
  };

  const handleSelectCompany = (companyName: string) => {
    setSearchQuery(companyName);
    setSelectedCategory('all');
    setActiveSection('jobs');
    const el = document.getElementById('jobs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`Filtering open positions for ${companyName}`);
  };

  const handleFilterBySalary = (category: JobCategory, minSalary: number) => {
    setSelectedCategory(category);
    setActiveSection('jobs');
    const el = document.getElementById('jobs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`Filtered for ${category} roles matching $${minSalary.toLocaleString()}+`);
  };

  const handleJobCreated = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
    setSelectedJob(newJob);
    showToast(`"${newJob.title}" at ${newJob.company} published successfully!`);
    const el = document.getElementById('jobs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenApply = (job: Job, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setApplyJob(job);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'saved') {
      setSelectedCategory('saved');
      const el = document.getElementById('jobs-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'jobs') {
      setSelectedCategory('all');
      const el = document.getElementById('jobs-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(`${sectionId}-section`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar Navigation */}
      <Navbar
        savedCount={savedJobIds.size}
        onNavigate={handleNavigate}
        onOpenPostJob={() => setIsPostJobOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSearch={handleSearch} totalPositions={jobs.length} />

        {/* Core Jobs Hub */}
        <JobList
          jobs={jobs}
          savedJobIds={savedJobIds}
          onToggleSave={handleToggleSave}
          onSelectJob={(job) => setSelectedJob(job)}
          onApplyJob={handleOpenApply}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          locationFilter={locationFilter}
          workplaceFilter={workplaceFilter}
          onClearFilters={handleClearFilters}
        />

        {/* Salary Benchmarks & Market Intelligence */}
        <SalaryInsights onFilterBySalary={handleFilterBySalary} />

        {/* Partner Organizations */}
        <CompanySpotlights onSelectCompany={handleSelectCompany} />

        {/* Candidate Verified Outcomes & Testimonials */}
        <CandidateProof />

        {/* Newsletter / Job Alerts */}
        <Newsletter />
      </main>

      {/* Quiet Professional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-in Job Detail Drawer */}
      {selectedJob && (
        <JobDetailDrawer
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          isSaved={savedJobIds.has(selectedJob.id)}
          onToggleSave={handleToggleSave}
          onApply={(job) => {
            setSelectedJob(null);
            setApplyJob(job);
          }}
        />
      )}

      {/* Direct Application Modal */}
      {applyJob && (
        <ApplyModal
          job={applyJob}
          onClose={() => setApplyJob(null)}
          onSubmitSuccess={() => {
            showToast(`Application successfully routed to ${applyJob.company}`);
          }}
        />
      )}

      {/* Employer Post Job Modal */}
      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
        onJobCreated={handleJobCreated}
      />

      {/* Candidate Auth / Portal Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
