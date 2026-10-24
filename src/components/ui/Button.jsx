import { Link } from 'react-router-dom';

export default function Button({ children, to, href, onClick, variant = 'primary', className = '', type = 'button' }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1110]';

  const variants = {
    primary: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20',
    secondary: 'border border-white/15 bg-white/5 text-white hover:border-emerald-400/60 hover:bg-white/10',
    ghost: 'text-emerald-300 hover:text-white hover:bg-white/5',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
