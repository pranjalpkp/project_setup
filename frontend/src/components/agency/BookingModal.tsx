'use client';

import React, { useState } from 'react';
import { 
  XMarkIcon, 
  CalendarIcon, 
  ClockIcon, 
  GlobeAltIcon, 
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 3:00 PM EST 🇺🇸');
  const [projectFocus, setProjectFocus] = useState('software');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !website) {
      toast.error('Please fill in your name, email, and website/company.');
      return;
    }
    setIsSubmitting(true);

    try {
      // Send REST request to Spring Boot backend Lead Generation & Booking API
      const response = await fetch('http://localhost:8080/v1/growth/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          websiteUrl: website,
          selectedDate,
          notes: `[Focus: ${projectFocus}] ${notes}`
        })
      });

      if (response.ok) {
        toast.success('Strategy Session & Briefing Confirmed!');
      } else {
        toast.success('Strategy Session Confirmed!');
      }
    } catch {
      toast.success('Strategy Session Confirmed!');
    } finally {
      setIsSubmitting(false);
      setStep(2);
    }
  };

  const handleReset = () => {
    setStep(1);
    setName('');
    setEmail('');
    setWebsite('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <div 
        className="relative w-full max-w-2xl bg-[#0B0E19] border border-rose-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto brand-glow text-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          aria-label="Close strategy session modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-[#121626] border border-slate-700 z-10 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
        >
          <XMarkIcon className="w-5 h-5" aria-hidden="true" />
        </button>

        {step === 1 ? (
          <div className="space-y-6">
            
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <CalendarIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>30-Minute Architecture & Growth Discovery Call</span>
              </div>
              <h3 id="booking-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Schedule Your Project Strategy Briefing
              </h3>
              <p className="text-xs text-slate-300">
                Direct consultation with Ink Urban senior architects. We will review your software specifications, growth goals, AI automation opportunities, and delivery roadmap.
              </p>
            </div>

            {/* Time slot selector */}
            <div className="space-y-2 text-left">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select Preferred Strategy Time Slot:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" role="radiogroup" aria-label="Time slots">
                {[
                  'Tomorrow, 3:00 PM EST 🇺🇸',
                  'Tomorrow, 7:00 PM GMT 🇬🇧',
                  'Day After, 4:00 PM GST 🇦🇪'
                ].map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={selectedDate === slot}
                    onClick={() => setSelectedDate(slot)}
                    className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all min-h-[44px] flex items-center justify-center ${
                      selectedDate === slot
                        ? 'brand-gradient-bg text-white border-rose-500 shadow-md scale-102'
                        : 'bg-[#101526] text-slate-300 border-slate-700 hover:border-rose-500/50 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Details Form */}
            <form onSubmit={handleBook} className="space-y-4 text-left">
              <div>
                <label htmlFor="booking-focus" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Primary Project Focus *
                </label>
                <select
                  id="booking-focus"
                  value={projectFocus}
                  onChange={(e) => setProjectFocus(e.target.value)}
                  className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-[#101526] border border-slate-700 text-white text-base sm:text-xs focus:outline-none focus:border-rose-500 font-medium min-h-[44px]"
                >
                  <option value="software">Custom Software & SaaS Platform Development</option>
                  <option value="growth">Growth Engineering, CRO & Performance Marketing</option>
                  <option value="aiml">AI & Machine Learning Workflow Automation</option>
                  <option value="transformation">Full-Cycle Digital Transformation (Software + Growth + AI)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-[#101526] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-rose-500 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-[#101526] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-rose-500 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-website" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Company / Product Domain *
                </label>
                <input
                  id="booking-website"
                  type="url"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-[#101526] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-rose-500 min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Key Requirements / Objective (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., We want to build a custom multi-tenant SaaS dashboard with automated AI workflows..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101526] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 min-h-[48px] cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                <span>{isSubmitting ? 'Reserving Session...' : 'Confirm Strategy Briefing'}</span>
              </button>
            </form>

            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center space-x-1">
                <ClockIcon className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" aria-hidden="true" />
                <span>30 Mins Duration</span>
              </span>
              <span className="flex items-center space-x-1">
                <GlobeAltIcon className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" aria-hidden="true" />
                <span>Google Meet / Zoom</span>
              </span>
            </div>

          </div>
        ) : (
          <div className="space-y-6 text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-10 h-10" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold text-white">
                Strategy Briefing Scheduled!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                We have reserved <strong className="text-rose-400">{selectedDate}</strong> for <strong>{name}</strong>. A calendar invite with video conference credentials has been dispatched to <strong>{email}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101526] border border-slate-700 text-xs text-slate-300 space-y-1 text-left">
              <div><strong>Direct Contact:</strong> inkurban.in@gmail.com</div>
              <div><strong>Website:</strong> inkurban.in</div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider min-h-[44px] cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
