const AboutContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          About & Contact
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-semibold mb-4">About Game & Grub</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Game & Grub is the premier destination for board game enthusiasts and food lovers. 
                We combine the joy of gaming with delicious cuisine in a welcoming atmosphere.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you're a casual player or a serious strategist, we have something for everyone. 
                Our extensive game library and carefully crafted menu make every visit memorable.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-semibold mb-4">Hours & Location</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Monday - Thursday:</strong> 4:00 PM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 12:00 PM - 12:00 AM</p>
                <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Address:</strong> 123 Game Street, Board City, BC 12345</p>
                <p><strong>Phone:</strong> (555) 123-GAME</p>
                <p><strong>Email:</strong> info@gameandgrub.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-semibold mb-4">Location Map</h2>
              <div className="h-64 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map will be displayed here</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-semibold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;