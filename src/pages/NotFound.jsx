import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found | Hack Halt Security" description="The requested page could not be found." />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">This page could not be found.</h1>
        <p className="mt-4 max-w-xl text-lg text-slate-300">The link may be outdated or the page may have moved. Please return to the homepage and continue exploring.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          <ArrowLeft size={16} />
          Return home
        </Link>
      </main>
    </>
  );
}
