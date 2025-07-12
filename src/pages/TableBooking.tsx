const TableBooking: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Book a Table
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Reserve your gaming experience
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-heading font-semibold mb-4">Reservation Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Party Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    12:00 PM
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    2:00 PM
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    4:00 PM
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    6:00 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-heading font-semibold mb-4">Cart Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your selected games and food items will appear here.
            </p>
            
            <div className="mt-6">
              <button className="w-full bg-warning text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
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