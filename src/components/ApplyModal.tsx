import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { Job, ApplicationFormData } from '../types';

interface ApplyModalProps {
  job: Job | null;
  onClose: () => void;
  onSubmitSuccess: (data: ApplicationFormData) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  job,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    expectedSalary: '',
    noticePeriod: '2 weeks',
    coverNote: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!job) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.linkedinUrl.trim()) {
      newErrors.linkedinUrl = 'LinkedIn or GitHub profile link is required';
    }
    if (!formData.fileName) {
      newErrors.resume = 'Please attach your CV / Resume';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomId = `WF-${Math.floor(10000 + Math.random() * 90000)}`;
      setApplicationId(randomId);
      onSubmitSuccess(formData);
    }, 700);
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }));
      if (errors.resume) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.resume;
          return next;
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      {/* Click backdrop to close */}
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-label="Close dialog" />

      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl z-10 overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              Direct Application
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Apply for {job.title}
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              {job.company} · {job.location} ({job.workplaceType})
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body or Success State */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Application Successfully Submitted
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Your credentials have been securely routed to the hiring team at{' '}
                <span className="font-semibold text-slate-900">{job.company}</span>. You will receive an initial response within the 48-hour hiring SLA.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Tracking Reference:</span>
                <span className="font-mono font-bold text-slate-900">{applicationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Candidate Email:</span>
                <span className="font-medium text-slate-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Role:</span>
                <span className="font-medium text-slate-900">{job.title}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Done & Return to Catalog
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex.morgan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  LinkedIn or GitHub <span className="text-rose-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                {errors.linkedinUrl && <p className="text-xs text-rose-500 mt-1">{errors.linkedinUrl}</p>}
              </div>
            </div>

            {/* Expected Salary & Notice Period */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Expected Base Salary ($ / yr)
                </label>
                <input
                  type="text"
                  placeholder={`Band: $${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`}
                  value={formData.expectedSalary}
                  onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Notice Period
                </label>
                <select
                  value={formData.noticePeriod}
                  onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                >
                  <option value="Immediate">Available Immediately</option>
                  <option value="2 weeks">2 Weeks</option>
                  <option value="1 month">1 Month</option>
                  <option value="2+ months">2+ Months</option>
                </select>
              </div>
            </div>

            {/* Resume Upload Simulation */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                CV / Resume (PDF, DOCX) <span className="text-rose-500">*</span>
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors bg-slate-50 relative">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleSimulateUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {formData.fileName ? (
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-800">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>{formData.fileName}</span>
                    <span className="text-emerald-600 font-semibold">(Attached)</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <UploadCloud className="w-6 h-6 text-slate-400 mx-auto" />
                    <p className="text-xs text-slate-600 font-medium">
                      Drag and drop your resume or <span className="text-blue-600">browse files</span>
                    </p>
                    <p className="text-2xs text-slate-400">PDF or DOCX up to 10MB</p>
                  </div>
                )}
              </div>
              {errors.resume && <p className="text-xs text-rose-500 mt-1">{errors.resume}</p>}
            </div>

            {/* Cover Note */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Brief Introduction or Relevant Highlights (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share a short note on why your technical background aligns with this challenge..."
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Transmitting Profile...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
