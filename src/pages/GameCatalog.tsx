const GameCatalog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Game Catalog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Browse our extensive collection of board games
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
              <option>All Genres</option>
              <option>Strategy</option>
              <option>Party</option>
              <option>Family</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
              <option>Any Player Count</option>
              <option>2 Players</option>
              <option>3-4 Players</option>
              <option>5+ Players</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-gray-500">Game Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Sample Game</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A fantastic board game for all ages.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">$5/day</span>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCatalog;