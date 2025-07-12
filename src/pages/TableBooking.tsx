const TableBooking: React.FC = () => {
  return (
    <div className="min-h-screen bg-warning-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-warning-700 mb-6">
          Book a Table
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Reserve your gaming experience
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Reservation Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-warning-200 rounded-lg bg-white focus:border-warning-500 focus:ring-2 focus:ring-warning-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Party Size</label>
                <select className="w-full px-4 py-2 border border-warning-200 rounded-lg bg-white focus:border-warning-500 focus:ring-2 focus:ring-warning-200">
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-4 py-2 border border-warning-400 text-warning-700 rounded-lg hover:bg-warning-100 transition-colors">
                    12:00 PM
                  </button>
                  <button className="px-4 py-2 border border-warning-400 text-warning-700 rounded-lg hover:bg-warning-100 transition-colors">
                    2:00 PM
                  </button>
                  <button className="px-4 py-2 border border-warning-400 text-warning-700 rounded-lg hover:bg-warning-100 transition-colors">
                    4:00 PM
                  </button>
                  <button className="px-4 py-2 border border-warning-400 text-warning-700 rounded-lg hover:bg-warning-100 transition-colors">
                    6:00 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Cart Summary</h2>
            <p className="text-gray-600">
              Your selected games and food items will appear here.
            </p>
            
            <div className="mt-6">
              <button className="btn-warning w-full">
                Complete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;