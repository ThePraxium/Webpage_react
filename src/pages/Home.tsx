const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Welcome to Game & Grub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your premier destination for board games and delicious food!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-heading font-semibold text-primary mb-4">
              Browse Games
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover our extensive collection of board games for all ages and skill levels.
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Explore Games
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-heading font-semibold text-accent mb-4">
              See Menu
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Check out our delicious food and beverage offerings.
            </p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              View Menu
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-heading font-semibold text-warning mb-4">
              Book a Table
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Reserve your spot for an unforgettable gaming experience.
            </p>
            <button className="bg-warning text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;