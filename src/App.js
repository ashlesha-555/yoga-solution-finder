import { useState } from "react";
import Header from "./components/Header";
import ProblemForm from "./components/ProblemForm";
import Recommendations from "./components/Recommendations";
import { getYogaRecommendations } from "./api/yogaApi";

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleFetchRecommendations = (problem) => {
    const result = getYogaRecommendations(problem);
    setRecommendations(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-beige-200">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Header />
        <ProblemForm onFetchRecommendations={handleFetchRecommendations} />
        {recommendations.length > 0 && (
          <Recommendations recommendations={recommendations} />
        )}
      </div>
    </div>
  );
};

export default App;
