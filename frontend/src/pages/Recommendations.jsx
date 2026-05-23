export default function Recommendations() {

  return (

    <div className="bg-[#f6f4ff] min-h-screen p-6">

      {/* HEADER */}
      <div>

        <h1 className="text-4xl font-bold">
          Personalized Recommendations
        </h1>

        <p className="text-gray-500 mt-2">
          AI-generated wellness suggestions based on your emotional analysis
        </p>

      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* LEFT SIDE */}
        <div className="col-span-8 space-y-6">

          {/* AI INSIGHT */}
          <div className="bg-white rounded-[28px] p-8 shadow-sm">

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-2xl font-bold ">
                  AI Wellness Insight
                </h2>

                <p className="text-gray-500 mt-1">
                  Personalized emotional analysis
                </p>

              </div>

              <div className="bg-[#f8f5ff] px-5 py-3 rounded-2xl">

                <p className="text-[#7c3aed] font-semibold">
                  Stable Emotional State
                </p>

              </div>

            </div>

            <div className="bg-[#f8f5ff] rounded-[24px] p-6 mt-8">

              <p className="text-gray-700 leading-8">

                Your assessment indicates a balanced emotional condition with mild stress fluctuations during cognitive tasks. AI analysis suggests maintaining mindfulness activities and consistent sleep patterns for emotional stability.

              </p>

            </div>

          </div>

          {/* WELLNESS CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div
              className="
              bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white
              rounded-[28px]
              p-6
              shadow-sm
              hover:shadow-md
              hover:scale-[1.02]
              transition-all
              duration-300
            "
            >

              <h2 className="text-2xl font-bold">
                Breathing Exercise
              </h2>

              <p className="text-purple-100 mt-3 leading-7">
                Practice deep breathing for 5 minutes to reduce stress and improve focus.
              </p>

              <button
                className="
                mt-6
                bg-white
                text-[#7c3aed]
                px-5
                py-3
                rounded-2xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-md
                "
              >
                Start Exercise
              </button>

            </div>

            {/* CARD 2 */}
            <div
              className="
              bg-white
              rounded-[28px]
              p-6
              shadow-sm
              hover:shadow-md
              hover:scale-[1.02]
              transition-all
              duration-300
            "
            >

              <h2 className="text-2xl font-bold">
                Meditation Session
              </h2>

              <p className="text-gray-500 mt-3 leading-7">
                A short guided meditation can improve emotional balance and calmness.
              </p>

              <button
                className="
                  mt-6
                  bg-[#7c3aed]
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  font-medium
                "
              >
                Begin Meditation
              </button>

            </div>

            {/* CARD 3 */}
            <div
              className="
              bg-white
              rounded-[28px]
              p-6
              shadow-sm
              hover:shadow-md
              hover:scale-[1.02]
              transition-all
              duration-300
            "
            >

              <h2 className="text-2xl font-bold">
                Sleep Improvement
              </h2>

              <p className="text-gray-500 mt-3 leading-7">
                Maintain consistent sleep schedules to improve emotional wellness.
              </p>

              <button
                className="
                  mt-6
                  bg-[#7c3aed]
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  font-medium
                "
              >
                View Tips
              </button>

            </div>

            {/* CARD 4 */}
            <div
              className="
              bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white
              rounded-[28px]
              p-6
              shadow-sm
              hover:shadow-md
              hover:scale-[1.02]
              transition-all
              duration-300
            "
            >

              <h2 className="text-2xl font-bold">
                Stress Recovery
              </h2>

              <p className="text-purple-100 mt-3 leading-7">
                Take short outdoor walks and hydration breaks to reduce stress levels.
              </p>

              <button
                className="
                        mt-6
                        bg-white
                        text-[#7c3aed]
                        px-5
                       py-3
                        rounded-2xl
                        font-semibold
                        hover:scale-105
                         transition-all
                        duration-300
                          shadow-md
                "
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4 space-y-6">

          {/* DAILY WELLNESS */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              Daily Wellness Plan
            </h2>

            <div className="space-y-4 mt-6">

              <div className="bg-[#f8f5ff] rounded-[20px] p-4">

                <p className="font-semibold text-[#7c3aed]">
                  Morning
                </p>

                <p className="text-gray-600 mt-2">
                  10-minute mindfulness exercise
                </p>

              </div>

              <div className="bg-[#f8f5ff] rounded-[20px] p-4">

                <p className="font-semibold text-[#7c3aed]">
                  Afternoon
                </p>

                <p className="text-gray-600 mt-2">
                  Hydration and breathing break
                </p>

              </div>

              <div className="bg-[#f8f5ff] rounded-[20px] p-4">

                <p className="font-semibold text-[#7c3aed]">
                  Night
                </p>

                <p className="text-gray-600 mt-2">
                  Reduce screen time before sleep
                </p>

              </div>

            </div>

          </div>

          {/* PROGRESS */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              Wellness Progress
            </h2>

            <div className="bg-[#f8f5ff] rounded-[24px] p-6 mt-6">

              <p className="text-gray-500">
                Stress Reduction
              </p>

              <h1 className="text-5xl font-bold text-[#7c3aed] mt-4">
                12%
              </h1>

              <p className="text-gray-500 mt-4">
                Improvement compared to previous assessment
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}