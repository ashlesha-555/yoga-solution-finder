const Recommendations = ({ recommendations }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-brown-800 mb-6">
          Recommended Asanas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-beige-50 border border-brown-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <p className="text-brown-700">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Recommendations;
  