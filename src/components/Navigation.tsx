import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Users, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'Scripts', path: '/scripts', icon: Download },
    { name: 'Tutorials', path: '/tutorials', icon: BookOpen },
    { name: 'Social', path: '/social', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-glow rounded-lg p-2">
            <img src="/src/assets/solix-logo-main.png" alt="SolixHub" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'text-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            <Button variant="gaming" size="sm" asChild>
              <Link to="/loader">Get Loader</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'text-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium text-lg">{item.name}</span>
                  </Link>
                );
              })}
              
              <Button variant="gaming" className="mt-4 mx-4" asChild>
                <Link to="/loader" onClick={() => setIsOpen(false)}>
                  Get Loader
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;