import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-heading font-bold text-primary-600 hover:text-primary-700 transition-colors">
            🎲 Game & Grub
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="nav-link"
            >
              🏠 Home
            </Link>
            <Link 
              to="/games" 
              className="nav-link"
            >
              🎮 Games
            </Link>
            <Link 
              to="/menu" 
              className="nav-link accent"
            >
              🍕 Menu
            </Link>
            <Link 
              to="/book" 
              className="nav-link warning"
            >
              📅 Book
            </Link>
            <Link 
              to="/events" 
              className="nav-link"
            >
              🎉 Events
            </Link>
            <Link 
              to="/about" 
              className="nav-link"
            >
              ℹ️ About
            </Link>
            <Link 
              to="/admin" 
              className="nav-link"
            >
              ⚙️ Admin
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Home
              </Link>
              <Link 
                to="/games" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                🎮 Games
              </Link>
              <Link 
                to="/menu" 
                className="nav-link accent"
                onClick={() => setIsMenuOpen(false)}
              >
                🍕 Menu
              </Link>
              <Link 
                to="/book" 
                className="nav-link warning"
                onClick={() => setIsMenuOpen(false)}
              >
                📅 Book
              </Link>
              <Link 
                to="/events" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                🎉 Events
              </Link>
              <Link 
                to="/about" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ℹ️ About
              </Link>
              <Link 
                to="/admin" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚙️ Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;