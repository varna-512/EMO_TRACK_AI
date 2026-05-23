import {
  FiActivity,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

function FeatureCards() {

  const cards = [
    {
      title: "Multi-Parameter Analysis",
      desc: "Combine face, voice, pulse and questionnaire insights.",
      icon: <FiActivity />,
    },

    {
      title: "Privacy First",
      desc: "Your emotional data stays secure and confidential.",
      icon: <FiShield />,
    },

    {
      title: "Personalized Insights",
      desc: "AI-generated wellness suggestions tailored for you.",
      icon: <FiActivity />,
    },

    {
      title: "Track Progress",
      desc: "Monitor emotional patterns over time.",
      icon: <FiTrendingUp />,
    },
  ];

  return (

    <div>

      <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
        What’s New
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {cards.map((card, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-[22px]
            p-5
            border border-[#f1f1f4]
            shadow-[0_2px_10px_rgba(0,0,0,0.02)]
            "
          >

            <div className="w-10 h-10 rounded-xl bg-[#f4eeff] flex items-center justify-center text-[#7c3aed] text-[18px]">

              {card.icon}

            </div>

            <h3 className="mt-4 text-[15px] font-semibold text-gray-800">

              {card.title}

            </h3>

            <p className="mt-2 text-[13px] leading-6 text-gray-500">

              {card.desc}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FeatureCards;