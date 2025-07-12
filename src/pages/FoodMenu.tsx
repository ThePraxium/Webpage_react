const FoodMenu: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Food Menu
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Delicious food to fuel your gaming sessions
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
              Snacks
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Entrées
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Beverages
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Desserts
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-gray-500">Food Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Sample Dish</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A delicious meal perfect for sharing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-accent">$12.99</span>
                <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
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