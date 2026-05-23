import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingAnalysis() {

  const navigate = useNavigate();

  const messages = [
    "Analyzing facial expressions...",
    "Processing voice patterns...",
    "Evaluating pulse data...",
    "Generating emotional insights...",
    "Preparing recommendations...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });

    }, 1200);

    const timer = setTimeout(() => {
      navigate("/results", {
  state: {
    wellnessScore: 82,
    mood: "Calm 😄",
    stress: "Moderate",
    pulseBefore: 72,
    pulseDuring: 88,
    pulseAfter: 76,
  },
});
    }, 6500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };

  }, [navigate]);

  return (

    <div className="min-h-screen bg-[#f6f4ff] flex items-center justify-center px-6">

      <div className="bg-white rounded-[32px] p-12 shadow-sm w-full max-w-2xl text-center">

        {/* SPINNER */}
        <div className="flex justify-center">

          <div
            className="
              w-24
              h-24
              border-[8px]
              border-[#e9ddff]
              border-t-[#7c3aed]
              rounded-full
              animate-spin
            "
          ></div>

        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mt-10">
          AI Emotional Analysis
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Please wait while our AI processes your wellness assessment
        </p>

        {/* ANALYSIS MESSAGE */}
        <div className="bg-[#f8f5ff] rounded-[24px] p-5 mt-10">

          <p className="text-[#7c3aed] font-semibold text-lg">
            {messages[index]}
          </p>

        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-4 bg-[#ede9fe] rounded-full mt-10 overflow-hidden">

          <div
            className="
              h-4
              bg-gradient-to-r
              from-[#7c3aed]
              to-[#a855f7]
              rounded-full
              animate-pulse
            "
            style={{
              width: `${((index + 1) / messages.length) * 100}%`,
              transition: "0.8s",
            }}
          ></div>

        </div>

        {/* PERCENT */}
        <p className="text-gray-500 mt-4">
          {Math.round(((index + 1) / messages.length) * 100)}% Completed
        </p>

      </div>

    </div>

  );
}