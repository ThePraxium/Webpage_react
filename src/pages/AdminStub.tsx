const AdminStub: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary-700 mb-6">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Read-only preview of data management
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">Games</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Total games in catalog</p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-heading font-semibold text-accent-700 mb-2">Menu Items</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Food & beverage items</p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-heading font-semibold text-warning-700 mb-2">Events</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Upcoming events</p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">Bookings</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Active reservations</p>
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Data Management</h2>
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
            <p className="text-warning-800">
              <strong>Note:</strong> This is a read-only dashboard. To enable full CRUD operations, 
              connect to a CMS or API backend system.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-primary-200 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Games Data</h3>
                <p className="text-sm text-gray-500">Manage game catalog and inventory</p>
              </div>
              <button 
                disabled 
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              >
                View Only
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-primary-200 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Menu Data</h3>
                <p className="text-sm text-gray-500">Manage food and beverage items</p>
              </div>
              <button 
                disabled 
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              >
                View Only
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-primary-200 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Events Data</h3>
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