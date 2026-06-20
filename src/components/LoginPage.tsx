import { useState, FormEvent } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    
    // Smooth transition simulation
    setTimeout(() => {
      setLoading(false);
      onLogin(email);
    }, 850);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
      {/* Brand logo & title */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm animate-bounce-slow">
          <span className="text-3xl font-extrabold text-orange-500 font-display">F</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          Food<span className="text-orange-500">Fix</span>
        </h1>
        <p className="text-slate-500 mt-2 max-w-sm text-sm">
          A polished, modern food delivery application interface.
        </p>
      </div>

      <div className="w-full max-w-md bg-white border border-slate-100 rounded-3xl shadow-xl p-8 relative">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 font-display">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              {isSignUp 
                ? 'Sign up to access exclusive food offers and secure interface.' 
                : 'Log in to browse, manage, and order foods.'}
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl py-3 pl-10 pr-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-150"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl py-3 pl-10 pr-10 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-150"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-rose-50 text-rose-800 text-xs p-3 rounded-xl border border-rose-100 flex gap-2 items-center">
                <AlertCircle size={16} className="text-rose-600 shrink-0" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3 rounded-xl text-sm shadow-md transition duration-150 flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : isSignUp ? (
                'Create Free Account'
              ) : (
                'Sign In'
              )}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                }}
                className="text-orange-500 hover:text-orange-600 text-xs font-semibold transition cursor-pointer"
              >
                {isSignUp 
                  ? 'Already have an account? Sign In' 
                  : "New to FoodFix? Sign up"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
