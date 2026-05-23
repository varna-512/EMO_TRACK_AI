import {
  FiClipboard,
  FiBarChart2,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";

function QuickActions() {

  const actions = [
    {
      title: "Start Assessment",
      desc: "Begin emotional wellness analysis",
      icon: <FiClipboard />,
      bg: "bg-[#f5efff]",
    },

    {
      title: "View Results",
      desc: "Check your latest insights",
      icon: <FiBarChart2 />,
      bg: "bg-[#eefbf3]",
    },

    {
      title: "AI Recommendations",
      desc: "Personalized wellness guidance",
      icon: <FiActivity />,
      bg: "bg-[#eef4ff]",
    },

    {
      title: "Track Progress",
      desc: "Monitor emotional patterns",
      icon: <FiTrendingUp />,
      bg: "bg-[#fff5ea]",
    },
  ];

  return (

    <div>

      <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {actions.map((item, index) => (

          <div
            key={index}
            className={`${item.bg}
            rounded-[22px]
            p-5
            border border-white`}
          >

            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#7c3aed] text-[18px]">

              {item.icon}

            </div>

            <h3 className="mt-4 text-[15px] font-semibold text-gray-800">

              {item.title}

            </h3>

            <p className="mt-2 text-[13px] leading-6 text-gray-500">

              {item.desc}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;