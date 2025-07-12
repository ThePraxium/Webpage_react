const GameCatalog: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary-700 mb-6">
          Game Catalog
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse our extensive collection of board games
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-primary-200 rounded-lg bg-white text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
              <option>All Genres</option>
              <option>Strategy</option>
              <option>Party</option>
              <option>Family</option>
            </select>
            <select className="px-4 py-2 border border-primary-200 rounded-lg bg-white text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
              <option>Any Player Count</option>
              <option>2 Players</option>
              <option>3-4 Players</option>
              <option>5+ Players</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card overflow-hidden">
            <div className="h-48 bg-primary-100 flex items-center justify-center">
              <span className="text-primary-500 font-medium">Game Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2 text-gray-800">Sample Game</h3>
              <p className="text-gray-600 mb-4">
                A fantastic board game for all ages.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-600">$5/day</span>
                <button className="btn-primary">
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