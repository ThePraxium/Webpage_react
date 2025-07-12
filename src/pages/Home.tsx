import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-pulse">
            Welcome to Game & Grub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for board games and delicious food! 
            Where strategy meets flavor in perfect harmony.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/games" className="btn-primary text-lg inline-block">
              🎮 Explore Games
            </Link>
            <Link to="/book" className="btn-warning text-lg inline-block">
              📅 Book Your Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-gray-800">
            Why Choose Game & Grub?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎲</div>
              <h3 className="text-2xl font-heading font-bold text-primary-600 mb-4">
                500+ Board Games
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From classic favorites to the latest releases, we have an extensive collection 
                for all ages and skill levels. Strategy, party games, and everything in between!
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🍕</div>
              <h3 className="text-2xl font-heading font-bold text-accent-600 mb-4">
                Gourmet Food & Drinks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fuel your gaming sessions with our chef-crafted meals, artisanal pizzas, 
                craft beverages, and specialty cocktails designed for gamers.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👥</div>
              <h3 className="text-2xl font-heading font-bold text-warning-600 mb-4">
                Community & Events
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join our vibrant gaming community! Regular tournaments, game nights, 
                and special events for players of all experience levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-8 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🎮</span>
                <h2 className="text-3xl font-heading font-bold text-primary-700">
                  Browse Games
                </h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Discover our extensive collection of board games for all ages and skill levels. 
                From strategy games to party favorites, find your next adventure!
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Strategy</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Party Games</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Family</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Co-op</span>
              </div>
              <Link to="/games" className="btn-primary w-full inline-block text-center">
                🔍 Explore Games
              </Link>
            </div>
            
            <div className="card p-8 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍽️</span>
                <h2 className="text-3xl font-heading font-bold text-accent-700">
                  See Menu
                </h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Check out our delicious food and beverage offerings. From hearty meals 
                to quick snacks, we've got everything to fuel your gaming sessions!
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">Pizza</span>
                <span className="px-3 py-1 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">Burgers</span>
                <span className="px-3 py-1 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">Craft Beer</span>
                <span className="px-3 py-1 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">Cocktails</span>
              </div>
              <Link to="/menu" className="btn-accent w-full inline-block text-center">
                📋 View Menu
              </Link>
            </div>
            
            <div className="card p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📅</span>
                <h2 className="text-3xl font-heading font-bold text-warning-700">
                  Book a Table
                </h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Reserve your spot for an unforgettable gaming experience. 
                Perfect for date nights, family time, or hanging out with friends!
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full text-sm font-medium">2-4 Players</span>
                <span className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full text-sm font-medium">Large Groups</span>
                <span className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full text-sm font-medium">Private Events</span>
              </div>
              <Link to="/book" className="btn-warning w-full inline-block text-center">
                🎯 Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join the Game & Grub community today and discover why we're the favorite destination 
            for gamers and food lovers alike!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              🎉 View Events
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-block"
            >
              ℹ️ Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;