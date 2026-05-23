import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function Assessment() {
   const navigate = useNavigate();
  const videoRef = useRef(null);

  const [emotion, setEmotion] = useState("");
  const [confidence, setConfidence] = useState("");
  const [recording, setRecording] = useState(false);  
 
const questions = [

  {
    type: "voice",
    question:
      "How are you feeling emotionally today?",
  },

  {
    type: "text",
    question:
      "What has been your biggest stress recently?",
  },

  {
    type: "rating",
    question:
      "How would you rate your stress level?",
    scale: 5,
  },

  {
    type: "mcq",
    question:
      "How often do you feel overwhelmed?",
    options: [
      "Rarely",
      "Sometimes",
      "Often",
      "Always",
    ],
  },

  {
    type: "voice",
    question:
      "Do you often feel mentally exhausted?",
  },

  {
    type: "text",
    question:
      "Describe your sleep quality recently.",
  },

  {
    type: "rating",
    question:
      "How satisfied are you with your work-life balance?",
    scale: 5,
  },

  {
    type: "mcq",
    question:
      "What affects your mood the most?",
    options: [
      "Work",
      "Studies",
      "Relationships",
      "Health",
    ],
  },

  {
    type: "voice",
    question:
      "Do you feel anxious in social situations?",
  },

  {
    type: "text",
    question:
      "What activities help you relax the most?",
  },

  {
    type: "rating",
    question:
      "How motivated have you felt this week?",
    scale: 5,
  },

  {
    type: "mcq",
    question:
      "How many hours do you usually sleep?",
    options: [
      "Less than 5",
      "5-6",
      "7-8",
      "More than 8",
    ],
  },

  {
    type: "voice",
    question:
      "How confident do you feel about your future?",
  },

  {
    type: "text",
    question:
      "What usually affects your mood negatively?",
  },

  {
    type: "rating",
    question:
      "How often do you feel emotionally drained?",
    scale: 5,
  },

  {
    type: "mcq",
    question:
      "How do you usually manage stress?",
    options: [
      "Music",
      "Exercise",
      "Talking",
      "Sleeping",
    ],
  },

  {
    type: "voice",
    question:
      "How comfortable are you expressing emotions?",
  },

  {
    type: "text",
    question:
      "Describe your emotional support system.",
  },

  {
    type: "rating",
    question:
      "How mentally calm do you feel most days?",
    scale: 5,
  },

  {
    type: "text",
    question:
      "What improvements would you like in your emotional wellness?",
  },

];
 useEffect(() => {

  startCamera();

  const interval = setInterval(() => {

    detectEmotion();

  }, 5000);

  return () => clearInterval(interval);

}, []);

  const startCamera = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
        });

      if (videoRef.current) {

        videoRef.current.srcObject = stream;

      }

    } catch (error) {

      console.log(error);

    }

  };

  const detectEmotion = async () => {

    try {

      const canvas =
        document.createElement("canvas");

      canvas.width =
        videoRef.current.videoWidth;

      canvas.height =
        videoRef.current.videoHeight;

      const ctx =
        canvas.getContext("2d");

      ctx.drawImage(
        videoRef.current,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const image =
        canvas.toDataURL("image/jpeg");

      const response = await fetch(
        "http://127.0.0.1:8000/api/detect-emotion/",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            image,
          }),
        }
      );

      const data =
        await response.json();

      if (
        data.predictions?.length > 0
      ) {

        setEmotion(
          data.predictions[0].emotion
        );

        setConfidence(
          `${(
            data.predictions[0]
              .confidence * 100
          ).toFixed(2)}%`
        );

      }

    } catch (error) {

      console.log(error);

    }

  };
 
const handleVoiceRecording = async () => {

  try {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

    console.log("Mic Started");

    setRecording(true);

    setTimeout(() => {

      stream.getTracks().forEach(track => track.stop());

      setRecording(false);

      console.log("Mic Stopped");

    }, 5000);

  } catch (error) {

    console.log(error);

  }

};
 return (

  <div className="min-h-screen bg-[#f6f7fb] p-6">

    {/* TOP BAR */}
    <div className="
      bg-white
      rounded-[28px]
      px-8
      py-5
      flex
      items-center
      justify-between
      border
      border-gray-100
    ">

      <div className="flex items-center gap-12">

        <h1 className="
          text-[38px]
          font-bold
          text-gray-900
        ">
          Assessment in Progress
        </h1>

        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            w-3
            h-3
            rounded-full
            bg-green-500
          "></div>

          <p className="
            text-[#16a34a]
            font-semibold
            text-lg
          ">
            Face Analysis Active
          </p>

        </div>

      </div>

      <div className="flex items-center gap-10">

        {/* PROGRESS */}
        <div>

          <p className="
            text-sm
            text-gray-500
            mb-2
          ">
            Overall Progress
          </p>

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              w-[260px]
              h-3
              bg-gray-100
              rounded-full
              overflow-hidden
            ">

              <div className="
                h-full
                w-[40%]
                bg-[#7c3aed]
                rounded-full
              "></div>

            </div>

            <p className="
              text-gray-600
              font-medium
            ">
              40%
            </p>

          </div>

        </div>

        {/* EXIT */}
        <button className="
          px-6
          py-3
          rounded-2xl
          border
          border-gray-200
          bg-white
          font-medium
        ">
          Exit
        </button>

      </div>

    </div>

    {/* MAIN GRID */}
    <div className="
      grid
      grid-cols-1
      lg:grid-cols-[1.05fr_0.95fr]
      gap-6
      mt-6
    ">

      {/* LEFT PANEL */}
      <div className="space-y-6">

        {/* CAMERA CARD */}
        <div className="
          bg-white
          rounded-[32px]
          p-6
          border
          border-gray-100
        ">

          <div className="
            flex
            items-center
            justify-between
          ">

            <div>

              <div className="
                flex
                items-center
                gap-3
              ">

                <div className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-500
                "></div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-gray-900
                ">
                  Live Face Emotion Analysis
                </h2>

              </div>

            </div>

            <p className="
              text-red-500
              font-medium
            ">
              ● 00:02:48
            </p>

          </div>

          {/* VIDEO */}
          <div className="
            mt-6
            rounded-[30px]
            overflow-hidden
            bg-black
            h-[420px]
          ">

            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          {/* BUTTONS */}
          <div className="
            flex
            gap-4
            mt-6
          ">

          

          

          </div>

          {/* RESULT */}
          {emotion && (

            <div className="
              mt-6
              bg-[#f8f8fc]
              rounded-[24px]
              p-5
              border
              border-purple-100
            ">

              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Detected Emotion
                  </p>

                  <h2 className="
                    text-4xl
                    font-bold
                    text-[#7c3aed]
                    mt-2
                  ">
                    {emotion}
                  </h2>

                </div>

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Confidence
                  </p>

                  <h2 className="
                    text-4xl
                    font-bold
                    text-gray-900
                    mt-2
                  ">
                    {confidence}
                  </h2>

                </div>

              </div>

            </div>

          )}

        </div>
        {/* PULSE RATE TRACKING */}
<div className="
  bg-white
  rounded-[32px]
  p-6
  border
  border-gray-100
  mt-6
">

  <div className="
    flex
    items-center
    gap-3
  ">

    <span className="text-2xl">
      ❤️
    </span>

    <h2 className="
      text-2xl
      font-bold
      text-gray-900
    ">
      Pulse Rate Tracking
    </h2>

  </div>

  <div className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
    mt-6
  ">

    {/* BEFORE TEST */}
    <div className="
      border
      border-purple-100
      rounded-[24px]
      p-5
    ">

      <p className="
        text-sm
        text-purple-500
        font-medium
      ">
        • 1. Before Test
      </p>

      <input
        type="number"
        placeholder="Enter BPM"
        className="
          w-full
          mt-5
          border
          border-gray-200
          rounded-2xl
          px-4
          py-3
          outline-none
        "
      />

      <p className="
        text-green-500
        mt-4
        font-medium
      ">
        Normal
      </p>

    </div>

    {/* DURING TEST */}
    <div className="
      border
      border-purple-100
      rounded-[24px]
      p-5
    ">

      <p className="
        text-sm
        text-pink-500
        font-medium
      ">
        • 2. During Test
      </p>

      <input
        type="number"
        placeholder="Enter BPM"
        className="
          w-full
          mt-5
          border
          border-gray-200
          rounded-2xl
          px-4
          py-3
          outline-none
        "
      />

      <p className="
        text-orange-500
        mt-4
        font-medium
      ">
        Slightly Elevated
      </p>

    </div>

    {/* AFTER TEST */}
    <div className="
      border
      border-purple-100
      rounded-[24px]
      p-5
    ">

      <p className="
        text-sm
        text-green-500
        font-medium
      ">
        • 3. After Test
      </p>

      <input
        type="number"
        placeholder="Enter BPM"
        className="
          w-full
          mt-5
          border
          border-gray-200
          rounded-2xl
          px-4
          py-3
          outline-none
        "
      />

      <p className="
        text-green-500
        mt-4
        font-medium
      ">
        Normal
      </p>

    </div>

  </div>

</div>

      </div>

      

      {/* RIGHT PANEL */}
      <div className="space-y-6">

        {/* QUESTIONS */}
        <div className="
          bg-white
          rounded-[32px]
          p-6
          border
          border-gray-100
        ">

          <div className="
            flex
            items-center
            justify-between
          ">

            <h2 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              Assessment Questions
            </h2>

            <div className="
              bg-[#f3edff]
              text-[#7c3aed]
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
            ">
              20 Questions
            </div>

          </div>

         <div className="mt-8 space-y-6 max-h-[700px] overflow-y-auto pr-2">

  {questions.map((item, index) => (

    <div
      key={index}
      className="
      border
      border-gray-100
      rounded-[28px]
      p-6
      "
    >

      <div className="
        flex
        items-start
        gap-4
      ">

        <div className="
          w-10
          h-10
          rounded-full
          bg-[#7c3aed]
          text-white
          flex
          items-center
          justify-center
          font-semibold
        ">
          {index + 1}
        </div>

        <div className="flex-1">

          <h3 className="
            text-lg
            font-semibold
            text-gray-900
          ">
            {item.question}
          </h3>

          <p className="
            text-gray-500
            mt-1
          ">

           {
  item.type === "voice"
    ? "(Voice Answer)"

    : item.type === "text"
    ? "(Type your answer)"

    : item.type === "rating"
    ? "(Select rating)"

    : "(Choose an option)"
}

          </p>

        </div>

      </div>

    {/* VOICE QUESTION */}
{item.type === "voice" ? (

  <div className="
    mt-8
    flex
    justify-center
  ">

    <button
  onClick={handleVoiceRecording}
  className="
    w-28
    h-28
    rounded-full
    bg-[#7c3aed]
    text-white
    text-4xl
    shadow-lg
    hover:scale-105
    transition
  "
>

  {recording ? "🎙️" : "🎤"}

</button>

  </div>

) : item.type === "text" ? (

  <textarea
    placeholder="Type your answer here..."
    className="
    w-full
    mt-6
    border
    border-gray-200
    rounded-[24px]
    p-5
    min-h-[150px]
    resize-none
    outline-none
    "
  />

) : item.type === "rating" ? (

  <div className="
    grid
    grid-cols-5
    gap-4
    mt-6
  ">

    {[1, 2, 3, 4, 5].map((num) => (

      <button
        key={num}
        className="
        border
        border-gray-200
        rounded-2xl
        py-4
        font-semibold
        hover:bg-[#7c3aed]
        hover:text-white
        transition
        "
      >

        {num}

      </button>

    ))}

  </div>

) : (

  <div className="
    grid
    grid-cols-2
    gap-4
    mt-6
  ">

    {item.options.map((option, i) => (

      <button
        key={i}
        className="
        border
        border-gray-200
        rounded-2xl
        py-4
        px-4
        text-left
        hover:bg-[#f3edff]
        transition
        "
      >

        {option}

      </button>

    ))}

  </div>

)}

    </div>

  ))}

</div>


          {/* COMPLETE BUTTON */}
          <button onClick={() => navigate("/loading" , {
  state: {
    wellnessScore: 82,
    mood: "Calm 😄",
    stress: "Moderate",
    pulseBefore: 72,
    pulseDuring: 88,
    pulseAfter: 76,
  },
})}
           className="
            w-full
            mt-8
            bg-[#7c3aed]
            hover:bg-[#6d28d9]
            text-white
            py-5
            rounded-[24px]
            font-semibold
            text-lg
          ">
            Complete Assessment
          </button>

        </div>

      </div>

    </div>

  </div>

);

}

export default Assessment;