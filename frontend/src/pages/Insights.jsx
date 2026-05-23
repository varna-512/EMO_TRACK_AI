import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Insights() {

  const stressData = [
    { day: "Mon", value: 72 },
    { day: "Tue", value: 68 },
    { day: "Wed", value: 75 },
    { day: "Thu", value: 63 },
    { day: "Fri", value: 58 },
    { day: "Sat", value: 49 },
    { day: "Sun", value: 55 },
  ];

  const emotionData = [
    { name: "Happy", value: 40, color: "#7c3aed" },
    { name: "Neutral", value: 25, color: "#60a5fa" },
    { name: "Sad", value: 20, color: "#f59e0b" },
    { name: "Angry", value: 15, color: "#ef4444" },
  ];

  return (

    <div className="max-w-[1350px] mx-auto py-6">

      {/* HEADER */}
      <div>

        <h1 className="text-[34px] font-bold text-gray-900">
          Emotional Insights
        </h1>

        <p className="text-gray-500 mt-2 text-[15px]">
          AI-powered analytics based on your emotional wellness patterns.
        </p>

      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

        <div className="bg-white rounded-[26px] border border-[#f1f1f4] p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <p className="text-gray-400 text-sm">
            Average Stress
          </p>

          <h2 className="text-[32px] font-bold text-gray-900 mt-3">
            63%
          </h2>

        </div>

        <div className="bg-white rounded-[26px] border border-[#f1f1f4] p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <p className="text-gray-400 text-sm">
            Dominant Emotion
          </p>

          <h2 className="text-[32px] font-bold text-[#7c3aed] mt-3">
            Happy 😊
          </h2>

        </div>

        <div className="bg-white rounded-[26px] border border-[#f1f1f4] p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <p className="text-gray-400 text-sm">
            Assessments
          </p>

          <h2 className="text-[32px] font-bold text-gray-900 mt-3">
            18
          </h2>

        </div>

        <div className="bg-white rounded-[26px] border border-[#f1f1f4] p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <p className="text-gray-400 text-sm">
            Wellness Score
          </p>

          <h2 className="text-[32px] font-bold text-green-500 mt-3">
            82%
          </h2>

        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        {/* LINE CHART */}
        <div className="bg-white rounded-[28px] border border-[#f1f1f4] p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <div className="mb-6">

            <h2 className="text-[22px] font-semibold text-gray-900">
              Weekly Stress Trend
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Emotional stress variation during the week.
            </p>

          </div>

          <ResponsiveContainer width="100%" height={320}>

            <LineChart data={stressData}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#7c3aed"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}
        <div className="bg-white rounded-[28px] border border-[#f1f1f4] p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">

          <div className="mb-6">

            <h2 className="text-[22px] font-semibold text-gray-900">
              Emotion Distribution
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Overall emotional analysis breakdown.
            </p>

          </div>

          <div className="flex items-center justify-center">

            <PieChart width={350} height={320}>

              <Pie
                data={emotionData}
                dataKey="value"
                outerRadius={110}
                innerRadius={65}
              >

                {emotionData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={entry.color}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">

            {emotionData.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                ></div>

                <p className="text-sm text-gray-600">
                  {item.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Insights;