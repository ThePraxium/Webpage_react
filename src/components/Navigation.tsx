import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-heading font-bold text-primary">
            Game & Grub
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/games" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Games
            </Link>
            <Link 
              to="/menu" 
              className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
            >
              Menu
            </Link>
            <Link 
              to="/book" 
              className="text-gray-700 dark:text-gray-300 hover:text-warning transition-colors"
            >
              Book
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/admin" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Admin
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;