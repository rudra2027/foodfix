import { categories, foodItems } from '../data';
import { SearchBar } from './SearchBar';
import { FoodGrid } from './FoodGrid';
import { SupportChat } from './SupportChat';
import { LogOut, User } from 'lucide-react';

interface FoodFixMainProps {
  user: {
    email?: string;
    id?: string;
  };
  onLogout: () => void;
}

export const FoodFixMain = ({ user, onLogout }: FoodFixMainProps) => (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Navigation bar */}
      <nav className="bg-white border-b border-slate-100 py-4 px-8 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <h1 className="text-2xl font-bold text-orange-500 tracking-tight">
          Food<span className="text-slate-800">Fix</span>
        </h1>
        
        {/* User profile & logout controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full py-1.5 px-4 text-xs text-slate-600">
            <User size={13} className="text-orange-500" />
            <span className="font-semibold text-slate-700 truncate max-w-40" title={user?.email}>
              {user?.email}
            </span>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-100 hover:border-rose-200 text-rose-700 hover:text-rose-800 text-xs font-bold py-1.5 px-3.5 rounded-full transition cursor-pointer"
            title="Sign out"
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-12 bg-orange-50 text-center px-4 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight animate-fade-in">
          Hungry? We've got you covered.
        </h2>
        <SearchBar />
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* Category horizontal scroll selection */}
        <section className="mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {categories.map(c => (
              <button key={c.id} className="flex flex-col items-center gap-2 min-w-20 bg-white p-4 rounded-2xl border border-slate-100 hover:border-orange-200 transition cursor-pointer">
                <span className="text-3xl">{c.icon}</span>
                <span className="font-semibold text-xs text-slate-600">{c.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Food grid section */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Popular near you</h3>
          <FoodGrid items={foodItems} />
        </section>
      </main>
      
      {/* AI Assistant chat drawer tool */}
      <SupportChat userEmail={user?.email} />
    </div>
);
