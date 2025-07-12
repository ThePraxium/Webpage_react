const EventsPromos: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold text-primary-700 mb-6">
          Events & Promotions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Join our special events and gaming leagues
        </p>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">
                  Weekly Board Game League
                </h3>
                <p className="text-gray-600 mb-2">
                  Every Thursday at 7:00 PM
                </p>
                <p className="text-sm text-gray-500">
                  Competitive gaming with prizes for winners!
                </p>
              </div>
              <button className="btn-primary mt-4 md:mt-0">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-accent-700 mb-2">
                  Trivia Night
                </h3>
                <p className="text-gray-600 mb-2">
                  Every Tuesday at 8:00 PM
                </p>
                <p className="text-sm text-gray-500">
                  Test your knowledge and win great prizes!
                </p>
              </div>
              <button className="btn-accent mt-4 md:mt-0">
                RSVP
              </button>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-warning-700 mb-2">
                  Themed Dinner Nights
                </h3>
                <p className="text-gray-600 mb-2">
                  First Saturday of every month
                </p>
                <p className="text-sm text-gray-500">
                  Special menu paired with themed games
                </p>
              </div>
              <button className="btn-warning mt-4 md:mt-0">
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