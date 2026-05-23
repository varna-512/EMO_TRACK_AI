import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Profile() {

  const wellnessScore = 78;
  const mood = "Calm 😄";
  const stress = "Moderate";

  return (

    <div className="bg-[#f6f4ff] p-6 min-h-screen">

      {/* TOP SECTION */}
      <div className="grid grid-cols-12 gap-6">

        {/* PROFILE CARD */}
        <div className="col-span-3 bg-white rounded-[28px] p-6 shadow-sm h-fit">

          <div className="flex flex-col items-center">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="
                w-28
                h-28
                rounded-full
                object-cover
                border-4
                border-[#ede9fe]
                shadow-md
                mx-auto
              "
            />

            <h2 className="text-3xl font-bold mt-5">
              Alex
            </h2>

            <p className="text-gray-500 mt-2 text-[15px]">
              Alex@gmail.com
            </p>

            <div className="mt-6 w-full bg-[#f8f5ff] rounded-[20px] p-4">

              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">
                  Emotional Stability
                </p>

                <p className="font-bold text-[#7c3aed]">
                  82%
                </p>
              </div>

              <div className="w-full h-2 bg-[#e9ddff] rounded-full mt-3">
                <div className="w-[82%] h-2 bg-[#7c3aed] rounded-full"></div>
              </div>

            </div>

            <button
              className="
                mt-6
                w-full
                bg-[#7c3aed]
                text-white
                py-3
                rounded-2xl
                font-medium
                shadow-md
                hover:scale-[1.02]
                transition-all
              "
            >
              Edit Profile
            </button>

          </div>

        </div>

        {/* WELLNESS OVERVIEW */}
        <div className="col-span-9 bg-white rounded-[28px] p-8 shadow-sm">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold">
                Emotional Wellness
              </h1>

              <p className="text-gray-500 mt-2">
                Track your emotional health and wellness journey
              </p>

            </div>

            <div className="bg-[#f8f5ff] px-5 py-3 rounded-2xl">
              <p className="text-[#7c3aed] font-semibold">
                Last Assessment: Today
              </p>
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mt-8">

            <div
              className="
              bg-[#f8f5ff]
              rounded-[24px]
              p-6
              hover:shadow-md
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >

              <p className="text-gray-500">
                Wellness Score
              </p>

              <h2 className="text-4xl font-bold mt-4">
                {wellnessScore}
              </h2>

            </div>

            <div
              className="
              bg-[#f8f5ff]
              rounded-[24px]
              p-6
              hover:shadow-md
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >

              <p className="text-gray-500">
                Current Mood
              </p>

              <h2 className="text-2xl font-bold mt-4">
                {mood}
              </h2>

            </div>

            <div
              className="
              bg-[#f8f5ff]
              rounded-[24px]
              p-6
              hover:shadow-md
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >

              <p className="text-gray-500">
                Stress Level
              </p>

              <h2 className="text-2xl font-bold mt-4">
                {stress}
              </h2>

            </div>

            <div
              className="
              bg-[#f8f5ff]
              rounded-[24px]
              p-6
              hover:shadow-md
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >

              <p className="text-gray-500">
                Sleep Quality
              </p>

              <h2 className="text-2xl font-bold mt-4">
                Good 😴
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* LEFT SIDE */}
        <div className="col-span-8 bg-white rounded-[28px] p-8 shadow-sm">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-2xl font-bold">
                Wellness Analytics
              </h2>

              <p className="text-gray-500 mt-1">
                Weekly emotional insights
              </p>
            </div>

            <div className="bg-[#f8f5ff] px-4 py-2 rounded-xl">
              <p className="text-[#7c3aed] font-medium">
                Weekly Report
              </p>
            </div>

          </div>

          {/* GRAPH */}
          <div className="mt-8 bg-[#f8f5ff] rounded-[24px] p-6">

            <h2 className="text-xl font-semibold mb-6">
              Mood & Stress Trends
            </h2>

            <ResponsiveContainer width="100%" height={250}>

              <LineChart
                data={[
                  { day: "Mon", mood: 4, stress: 3 },
                  { day: "Tue", mood: 5, stress: 2 },
                  { day: "Wed", mood: 3, stress: 4 },
                  { day: "Thu", mood: 4, stress: 3 },
                  { day: "Fri", mood: 5, stress: 2 },
                  { day: "Sat", mood: 4, stress: 3 },
                  { day: "Sun", mood: 5, stress: 1 },
                ]}
              >

                <CartesianGrid strokeDasharray="3 3" stroke="#e9ddff" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  animationDuration={2000}
                  dot={{ r: 5 }}
                />

                <Line
                  type="monotone"
                  dataKey="stress"
                  stroke="#ec4899"
                  strokeWidth={3}
                  animationDuration={2000}
                  dot={{ r: 5 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );
}