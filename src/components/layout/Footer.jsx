import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0f0f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <img src="/logo/hack-halt-logo.svg" alt="Hack Halt Security logo placeholder" className="h-11 w-auto" />
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Technology is our tool. Safety is our purpose.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">SEE. THINK. PROTECT.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigate</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/daksha" className="transition hover:text-white">
                Daksha
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href="mailto:hello@hackhaltsecurity.work.gd" className="transition hover:text-white">
                hello@hackhaltsecurity.work.gd
              </a>
            </li>
            <li>
              <a href="tel:+916299925169" className="transition hover:text-white">
                6299925169
              </a>
            </li>
            <li>
              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {year} Hack Halt Security</p>
          <p>Built for thoughtful, privacy-conscious school safety.</p>
        </div>
      </div>
    </footer>
  );
}
