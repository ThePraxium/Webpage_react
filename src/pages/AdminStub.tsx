const AdminStub: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Read-only preview of data management
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Games</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</p>
            <p className="text-sm text-gray-500">Total games in catalog</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-accent mb-2">Menu Items</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</p>
            <p className="text-sm text-gray-500">Food & beverage items</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-warning mb-2">Events</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</p>
            <p className="text-sm text-gray-500">Upcoming events</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Bookings</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</p>
            <p className="text-sm text-gray-500">Active reservations</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-semibold mb-4">Data Management</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This is a read-only dashboard. To enable full CRUD operations, 
              connect to a CMS or API backend system.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Games Data</h3>
                <p className="text-sm text-gray-500">Manage game catalog and inventory</p>
              </div>
              <button 
                disabled 
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              >
                View Only
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Menu Data</h3>
                <p className="text-sm text-gray-500">Manage food and beverage items</p>
              </div>
              <button 
                disabled 
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              >
                View Only
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Events Data</h3>
                <p className="text-sm text-gray-500">Manage events and promotions</p>
              </div>
              <button 
                disabled 
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              >
                View Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStub;