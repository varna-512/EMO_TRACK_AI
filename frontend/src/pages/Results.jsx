import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();

const {
  wellnessScore,
  mood,
  stress,
  pulseBefore,
  pulseDuring,
  pulseAfter,
} = location.state || {};

  const navigate = useNavigate();
  const emotionData = [
    { name: "Calm", value: 40 },
    { name: "Happy", value: 25 },
    { name: "Stress", value: 20 },
    { name: "Anxiety", value: 15 },
  ];

  const COLORS = [
    "#7c3aed",
    "#a855f7",
    "#ec4899",
    "#f97316",
  ];

  return (

    <div className="bg-[#f6f4ff] min-h-screen p-6">

      {/* PAGE HEADER */}
      <div>

        <h1 className="text-4xl font-bold">
          AI Emotional Analysis
        </h1>

        <p className="text-gray-500 mt-2">
          Comprehensive emotional wellness report
        </p>

      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* LEFT */}
        <div className="col-span-8 bg-white rounded-[28px] p-8 shadow-sm">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">
                Emotional Wellness Score
              </h2>

              <p className="text-gray-500 mt-1">
                AI-generated emotional analysis
              </p>

            </div>

            <div className="bg-[#f8f5ff] px-5 py-3 rounded-2xl">

              <p className="text-[#7c3aed] font-semibold">
                Assessment Completed
              </p>

            </div>

          </div>

          {/* SCORE + CHART */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            {/* SCORE */}
            <div className="bg-[#f8f5ff] rounded-[24px] p-8 flex flex-col justify-center items-center">

              <h1 className="text-7xl font-bold text-[#7c3aed]">
                {wellnessScore}
              </h1>

              <p className="text-gray-500 mt-4">
                Emotional Wellness Score
              </p>

            </div>

            {/* PIE CHART */}
            <div className="bg-[#f8f5ff] rounded-[24px] p-6">

              <h2 className="text-xl font-semibold mb-5">
                Emotion Breakdown
              </h2>

              <ResponsiveContainer width="100%" height={280}>

                <PieChart>

                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label
                  >

                    {emotionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4 space-y-6">

          {/* DETECTED EMOTION */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm">

            <p className="text-gray-500">
              Dominant Emotion
            </p>

            <h1 className="text-4xl font-bold mt-4">
              {mood}
            </h1>

            <p className="text-gray-500 mt-4">
              Your emotional state appears balanced and stable.
            </p>

          </div>

          {/* AI SUMMARY */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              AI Summary
            </h2>

            <p className="text-gray-600 mt-5 leading-8">

              Your emotional wellness analysis indicates stable mood patterns with mild stress fluctuations during the assessment process.

            </p>
            <button   onClick={() => navigate("/recommendations")}
  className="
    mt-8
    w-full
    bg-[#7c3aed]
    text-white
    py-4
    rounded-2xl
    font-semibold
    hover:scale-[1.02]
    transition-all
    duration-300
    shadow-md
  "
>
  View Personalized Recommendations
</button>

          </div>


        </div>

      </div>

    </div>

  );
}