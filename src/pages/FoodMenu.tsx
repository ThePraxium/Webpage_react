const FoodMenu: React.FC = () => {
  return (
    <div className="min-h-screen bg-accent-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-accent-700 mb-6">
          Food Menu
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Delicious food to fuel your gaming sessions
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <button className="btn-accent">
              Snacks
            </button>
            <button className="px-4 py-2 bg-white text-accent-600 border border-accent-200 rounded-lg hover:bg-accent-50 transition-colors">
              Entrées
            </button>
            <button className="px-4 py-2 bg-white text-accent-600 border border-accent-200 rounded-lg hover:bg-accent-50 transition-colors">
              Beverages
            </button>
            <button className="px-4 py-2 bg-white text-accent-600 border border-accent-200 rounded-lg hover:bg-accent-50 transition-colors">
              Desserts
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card overflow-hidden">
            <div className="h-48 bg-accent-100 flex items-center justify-center">
              <span className="text-accent-600 font-medium">Food Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2 text-gray-800">Sample Dish</h3>
              <p className="text-gray-600 mb-4">
                A delicious meal perfect for sharing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-accent-600">$12.99</span>
                <button className="btn-accent">
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

export default FoodMenu;