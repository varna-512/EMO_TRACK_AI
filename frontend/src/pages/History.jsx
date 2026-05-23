import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function History() {

  const data = [
    { date: "Apr 10", stress: 72 },
    { date: "Apr 17", stress: 68 },
    { date: "Apr 24", stress: 60 },
    { date: "May 01", stress: 63 },
    { date: "May 08", stress: 55 },
  ];

  return (

    <div className="max-w-[1320px] mx-auto py-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-[34px] font-bold text-gray-800">
            Assessment History
          </h1>

          <p className="text-gray-500 mt-2">
            Track your emotional wellness over time.
          </p>

        </div>

        <select className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none">

          <option>All Assessments</option>

        </select>

      </div>

      {/* CHART */}
      <div className="mt-8 bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <ResponsiveContainer width="100%" height={320}>

          <LineChart data={data}>

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="stress"
              stroke="#7c3aed"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* TABLE */}
      <div className="mt-8 bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-400 border-b">

              <th className="pb-4">Date</th>
              <th className="pb-4">Stress Level</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Action</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-5">May 16, 2026</td>
              <td>63%</td>

              <td>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Moderate
                </span>

              </td>

              <td className="text-purple-600 font-medium">
                View
              </td>

            </tr>

            <tr className="border-b">

              <td className="py-5">May 08, 2026</td>
              <td>55%</td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Good
                </span>

              </td>

              <td className="text-purple-600 font-medium">
                View
              </td>

            </tr>

            <tr>

              <td className="py-5">Apr 24, 2026</td>
              <td>68%</td>

              <td>

                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  High
                </span>

              </td>

              <td className="text-purple-600 font-medium">
                View
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default History;