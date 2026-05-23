import { useState } from "react";

function FaceAnalysis() {

  const [emotion, setEmotion] = useState("");
  const [confidence, setConfidence] = useState("");

  const detectEmotion = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/detect-emotion/"
      );

      const data = await response.json();

      console.log(data);

      if (data.predictions.length > 0) {

        const detectedEmotion =
  data.predictions[0].emotion;

const detectedConfidence =
  `${(data.predictions[0].confidence * 100).toFixed(2)}%`;

setEmotion(detectedEmotion);

setConfidence(detectedConfidence);

localStorage.setItem(
  "emotion",
  detectedEmotion
);

localStorage.setItem(
  "confidence",
  detectedConfidence
);

      } else {

        setEmotion("No Face Detected");

        setConfidence("");
      }

    } catch (error) {

      console.log(error);

      setEmotion("Backend Error");
    }
  };

  return (

    <div className="p-8">

      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Face Emotion Analysis 😄
      </h1>

      <button
        onClick={detectEmotion}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-lg transition"
      >
        Detect Emotion
      </button>

      <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg w-[400px]">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Detection Result
        </h2>

        <p className="text-2xl text-purple-600 font-semibold">
          Emotion: {emotion}
        </p>

        <p className="text-xl text-gray-600 mt-2">
          Confidence: {confidence}
        </p>

      </div>

    </div>
  );
}

export default FaceAnalysis;