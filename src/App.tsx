import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { FoodFixMain } from './components/FoodFixMain';

export default function App() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const handleLoginSuccess = (email: string) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLoginSuccess} />;
  }

  return <FoodFixMain user={user} onLogout={handleLogout} />;
}
