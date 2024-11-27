import { useState } from "react";

const ProblemForm = ({ onFetchRecommendations }) => {
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!problem.trim()) {
      alert("Please describe your concern");
      return;
    }

    setLoading(true);

    // Simulate an API call delay
    setTimeout(() => {
      onFetchRecommendations(problem);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full h-13 p-4 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-400 focus:outline-none resize-none bg-beige-50 shadow-sm"
          placeholder="Describe your health concern in detail..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="hover-effect w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition-transform transform-gpu hover:scale-105"
          disabled={loading}
        >
          {loading ? "Finding Solutions..." : "Find Solution"}
        </button>
      </form>
    </div>
  );
};

export default ProblemForm;
