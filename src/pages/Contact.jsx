import { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, Phone } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';
import { submitContactRequest } from '../services/contactService';
import { validateContactForm } from '../utils/validation';

const initialForm = {
  name: '',
  company: '',
  role: '',
  contact: '',
  enquiryType: '',
  message: '',
  acknowledged: false,
};

export default function Contact() {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const formReadyMessage = useMemo(
    () =>
      'This form is a non-live prototype until a backend or approved service is configured. Please use the approved contact details below for active enquiries.',
    [],
  );

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await submitContactRequest({
        name: formValues.name.trim(),
        company: formValues.company.trim(),
        role: formValues.role.trim(),
        contact: formValues.contact.trim(),
        enquiryType: formValues.enquiryType,
        message: formValues.message.trim(),
      });

      if (response.prototype) {
        setStatus({ type: 'prototype', message: response.message + ' ' + formReadyMessage });
      } else {
        setStatus({ type: 'success', message: response.message });
        setFormValues(initialForm);
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact | Hack Halt Security"
        description="Contact Hack Halt Security to learn more about Daksha, school safety technology, and institution partnerships."
      />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with our team."
          description="We are happy to discuss school safety needs, responsible product design, and partnership opportunities."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
            <h3 className="text-xl font-semibold text-white">Approved contact details</h3>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-emerald-300" size={18} />
                <a href="mailto:hello@hackhaltsecurity.work.gd" className="hover:text-white">hello@hackhaltsecurity.work.gd</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-emerald-300" size={18} />
                <a href="tel:+916299925169" className="hover:text-white">6299925169</a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/5 p-4 text-sm leading-6 text-amber-100">
              <p className="font-medium">Prototype notice</p>
              <p className="mt-2">This enquiry form is not connected to a live backend service yet. For active enquiries, use the approved email or phone details above.</p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 sm:p-8" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
                <input id="name" name="name" value={formValues.name} onChange={handleInputChange} aria-invalid={Boolean(errors.name)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none" placeholder="Your full name" />
                {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">School or organisation</label>
                <input id="company" name="company" value={formValues.company} onChange={handleInputChange} aria-invalid={Boolean(errors.company)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none" placeholder="School or institution name" />
                {errors.company ? <p className="mt-2 text-sm text-rose-300">{errors.company}</p> : null}
              </div>

              <div>
                <label htmlFor="role" className="mb-2 block text-sm font-medium text-slate-200">Role</label>
                <input id="role" name="role" value={formValues.role} onChange={handleInputChange} aria-invalid={Boolean(errors.role)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none" placeholder="Principal, teacher, parent, partner..." />
                {errors.role ? <p className="mt-2 text-sm text-rose-300">{errors.role}</p> : null}
              </div>

              <div>
                <label htmlFor="contact" className="mb-2 block text-sm font-medium text-slate-200">Work email or phone number</label>
                <input id="contact" name="contact" value={formValues.contact} onChange={handleInputChange} aria-invalid={Boolean(errors.contact)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none" placeholder="name@school.edu or 6299925169" />
                {errors.contact ? <p className="mt-2 text-sm text-rose-300">{errors.contact}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="enquiryType" className="mb-2 block text-sm font-medium text-slate-200">Enquiry type</label>
              <select id="enquiryType" name="enquiryType" value={formValues.enquiryType} onChange={handleInputChange} aria-invalid={Boolean(errors.enquiryType)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white focus:border-emerald-400 focus:outline-none">
                <option value="">Select an enquiry type</option>
                <option value="School inquiry">School inquiry</option>
                <option value="Partnership inquiry">Partnership inquiry</option>
                <option value="Product demo">Product demo</option>
                <option value="General enquiry">General enquiry</option>
              </select>
              {errors.enquiryType ? <p className="mt-2 text-sm text-rose-300">{errors.enquiryType}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows="5" value={formValues.message} onChange={handleInputChange} aria-invalid={Boolean(errors.message)} className="w-full rounded-xl border border-white/10 bg-[#111a1a] px-3 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none" placeholder="Tell us about your school or organisation, your goals, and how we can help." />
              {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
            </div>

            <div className="mt-5 flex items-start gap-3">
              <input id="acknowledged" type="checkbox" name="acknowledged" checked={formValues.acknowledged} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-white/20 bg-[#111a1a] text-emerald-500 focus:ring-emerald-400" />
              <label htmlFor="acknowledged" className="text-sm leading-6 text-slate-300">
                I acknowledge that this message is for general enquiry purposes only and that student records, medical details, or incident information should not be shared through this form.
              </label>
            </div>
            {errors.acknowledged ? <p className="mt-2 text-sm text-rose-300">{errors.acknowledged}</p> : null}

            {status.message ? (
              <div className={`mt-6 flex items-start gap-3 rounded-xl border p-3 text-sm ${status.type === 'error' ? 'border-rose-500/30 bg-rose-500/10 text-rose-200' : status.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-amber-500/30 bg-amber-500/10 text-amber-100'}`}>
                {status.type === 'error' ? <AlertCircle className="mt-0.5" size={18} /> : status.type === 'success' ? <CheckCircle2 className="mt-0.5" size={18} /> : <AlertCircle className="mt-0.5" size={18} />}
                <span>{status.message}</span>
              </div>
            ) : null}

            <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Sending...' : 'Send enquiry'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
