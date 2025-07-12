const AboutContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary-700 mb-6">
          About & Contact
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">About Game & Grub</h2>
              <p className="text-gray-600 mb-4">
                Game & Grub is the premier destination for board game enthusiasts and food lovers. 
                We combine the joy of gaming with delicious cuisine in a welcoming atmosphere.
              </p>
              <p className="text-gray-600">
                Whether you're a casual player or a serious strategist, we have something for everyone. 
                Our extensive game library and carefully crafted menu make every visit memorable.
              </p>
            </div>
            
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Hours & Location</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Thursday:</strong> 4:00 PM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 12:00 PM - 12:00 AM</p>
                <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong>Address:</strong> 123 Game Street, Board City, BC 12345</p>
                <p><strong>Phone:</strong> (555) 123-GAME</p>
                <p><strong>Email:</strong> info@gameandgrub.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Location Map</h2>
              <div className="h-64 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-medium">Map will be displayed here</span>
              </div>
            </div>
            
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  ></textarea>
                </div>
                <button className="btn-primary w-full">
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