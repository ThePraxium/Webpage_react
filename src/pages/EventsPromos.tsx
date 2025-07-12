const EventsPromos: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6">
          Events & Promotions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join our special events and gaming leagues
        </p>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Weekly Board Game League
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Every Thursday at 7:00 PM
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Competitive gaming with prizes for winners!
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-accent mb-2">
                  Trivia Night
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Every Tuesday at 8:00 PM
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Test your knowledge and win great prizes!
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-warning mb-2">
                  Themed Dinner Nights
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  First Saturday of every month
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Special menu paired with themed games
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-warning text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPromos;