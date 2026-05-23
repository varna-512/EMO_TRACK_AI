function ResultsPreview() {

  const detectedEmotion =
    localStorage.getItem("emotion") || "Neutral 😐";

  const detectedConfidence =
    localStorage.getItem("confidence") || "85%";

  const recommendations = {
    "Happy 😊":
      "Keep maintaining your positive routine and healthy habits.",

    "Sad 😔":
      "Consider relaxation exercises and taking short mental breaks.",

    "Angry 😠":
      "Try breathing exercises and mindfulness activities.",

    "Neutral 😐":
      "Your emotional state is balanced and stable.",

    "Surprised 😲":
      "Your responses show heightened emotional activity.",
  };

  return (

    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* LEFT CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <h2 className="text-2xl font-semibold text-gray-800">
          AI Emotion Result
        </h2>

        <p className="text-gray-500 mt-2">
          Real-time emotional wellness analysis.
        </p>

        <div className="mt-10 flex items-center justify-center">

          <div className="w-56 h-56 rounded-full border-[18px] border-purple-500 flex flex-col items-center justify-center">

            <h1 className="text-4xl font-bold text-gray-800 text-center">

              {detectedEmotion}

            </h1>

            <p className="text-gray-500 mt-3">

              Confidence: {detectedConfidence}

            </p>

          </div>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <h2 className="text-2xl font-semibold text-gray-800">
          Wellness Insights
        </h2>

        <p className="text-gray-500 mt-2">
          Personalized AI-generated recommendation.
        </p>

        <div className="mt-10 space-y-6">

          <div className="bg-[#f8f8fc] rounded-2xl p-6">

            <h3 className="text-lg font-semibold text-gray-800">

              Detected Emotion

            </h3>

            <p className="text-[#7c3aed] text-2xl font-bold mt-3">

              {detectedEmotion}

            </p>

          </div>

          <div className="bg-[#f8f8fc] rounded-2xl p-6">

            <h3 className="text-lg font-semibold text-gray-800">

              Confidence Level

            </h3>

            <p className="text-gray-700 text-2xl font-bold mt-3">

              {detectedConfidence}

            </p>

          </div>

          <div className="bg-[#f8f8fc] rounded-2xl p-6">

            <h3 className="text-lg font-semibold text-gray-800">

              AI Recommendation

            </h3>

            <p className="text-gray-600 leading-7 mt-3">

              {recommendations[detectedEmotion]}

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResultsPreview;