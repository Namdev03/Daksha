import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/siteContent';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 md:hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <nav className="space-y-1 border-t border-white/10 bg-[#0c1110]/95 px-4 py-4 backdrop-blur-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `block rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          onClick={onClose}
          className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
}
