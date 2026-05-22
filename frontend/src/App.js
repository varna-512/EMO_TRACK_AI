import { useState, useRef } from "react";

import MicRecorder from "mic-recorder-to-mp3";

import Webcam from "react-webcam";


// =========================
// MIC RECORDER
// =========================

const recorder = new MicRecorder({

  bitRate: 128
});


function App() {

  // =========================
  // SCREEN
  // =========================

  const [screen, setScreen] = useState("home");


  // =========================
  // STATES
  // =========================

  const [isRecording, setIsRecording] = useState(false);

  const [loading, setLoading] = useState(false);

  const [cameraOn, setCameraOn] = useState(false);

  const [result, setResult] = useState(null);

  const [audioFile, setAudioFile] = useState(null);

  const [imageFile, setImageFile] = useState(null);


  const webcamRef = useRef(null);


  // =========================
  // START RECORDING
  // =========================

  const startRecording = async () => {

    try {

      await recorder.start();

      setIsRecording(true);

    } catch (error) {

      console.log(error);
    }
  };


  // =========================
  // STOP RECORDING
  // =========================

  const stopRecording = async () => {

    try {

      setLoading(true);

      const [, blob] = await recorder.stop().getMp3();

      setIsRecording(false);

      const file = new File(

        [blob],

        "voice.wav",

        {
          type: "audio/wav"
        }
      );


      setAudioFile(file);

      setLoading(false);

      alert("Voice Recorded Successfully");


    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };


  // =========================
  // CAPTURE FACE
  // =========================

  const captureFace = async () => {

    try {

      const imageSrc = webcamRef.current.getScreenshot();

      const blob = await fetch(imageSrc).then(

        res => res.blob()
      );


      const file = new File(

        [blob],

        "face.jpg",

        {
          type: "image/jpeg"
        }
      );


      setImageFile(file);

      alert("Face Captured Successfully");


    } catch (error) {

      console.log(error);
    }
  };


  // =========================
  // FINAL ANALYSIS
  // =========================

  const analyzeEmotion = async () => {

    try {

      setLoading(true);

      const formData = new FormData();


      if (audioFile) {

        formData.append(

          "audio",

          audioFile
        );
      }


      if (imageFile) {

        formData.append(

          "image",

          imageFile
        );
      }


      const response = await fetch(

        "http://127.0.0.1:8000/api/multimodal/predict/",

        {

          method: "POST",

          body: formData
        }
      );


      const data = await response.json();

      console.log(data);

      setResult(data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };


  // =========================
  // UI
  // =========================

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center"
      }}
    >

      {/* HOME */}

      {screen === "home" && (

        <div style={{ marginTop: "120px" }}>

          <h1
            style={{
              fontSize: "60px"
            }}
          >

            EmoTrack AI

          </h1>


          <p
            style={{
              fontSize: "22px",
              marginTop: "20px"
            }}
          >

            Multimodal Emotion & Stress Detection

          </p>


          <button

            onClick={() => setScreen("assessment")}

            style={{

              marginTop: "50px",

              padding: "20px 40px",

              fontSize: "22px",

              borderRadius: "12px",

              cursor: "pointer"
            }}
          >

            Start Assessment

          </button>

        </div>
      )}


      {/* ASSESSMENT */}

      {screen === "assessment" && (

        <div>

          <h1>Assessment Started</h1>


          {/* VOICE */}

          <div style={{ marginTop: "40px" }}>

            <h2>Voice Emotion Detection</h2>


            {!isRecording && (

              <button

                onClick={startRecording}

                style={{

                  padding: "15px 30px",

                  fontSize: "20px",

                  cursor: "pointer"
                }}
              >

                Start Mic

              </button>
            )}


            {isRecording && (

              <button

                onClick={stopRecording}

                style={{

                  padding: "15px 30px",

                  fontSize: "20px",

                  backgroundColor: "red",

                  color: "white",

                  cursor: "pointer"
                }}
              >

                Stop Recording

              </button>
            )}

          </div>


          {/* FACE */}

          <div style={{ marginTop: "60px" }}>

            <h2>Face Emotion Detection</h2>


            {!cameraOn && (

              <button

                onClick={() => setCameraOn(true)}

                style={{

                  padding: "15px 30px",

                  fontSize: "20px",

                  cursor: "pointer"
                }}
              >

                Start Camera

              </button>
            )}


            {cameraOn && (

              <div style={{ marginTop: "20px" }}>

                <Webcam

                  audio={false}

                  ref={webcamRef}

                  mirrored={true}

                  screenshotFormat="image/jpeg"

                  style={{

                    width: "500px",

                    borderRadius: "20px",

                    border: "4px solid black"
                  }}
                />

                <br /><br />

                <button

                  onClick={captureFace}

                  style={{

                    padding: "15px 30px",

                    fontSize: "18px",

                    cursor: "pointer"
                  }}
                >

                  Capture Face

                </button>

              </div>
            )}

          </div>


          {/* ANALYZE */}

          {(audioFile || imageFile) && (

            <div style={{ marginTop: "60px" }}>

              <button

                onClick={analyzeEmotion}

                style={{

                  padding: "20px 40px",

                  fontSize: "22px",

                  backgroundColor: "black",

                  color: "white",

                  borderRadius: "12px",

                  cursor: "pointer"
                }}
              >

                Analyze Emotion

              </button>

            </div>
          )}


          {/* LOADING */}

          {loading && (

            <h2 style={{ marginTop: "40px" }}>

              Analyzing Emotion...

            </h2>
          )}


          {/* RESULT */}

          {result && result.final_result && (

            <div style={{ marginTop: "50px" }}>

              <h1>

                Final Emotion:
                {" "}

                {result.final_result.final_emotion}

              </h1>


              <h2>

                Stress Score:
                {" "}

                {result.final_result.stress_score}

              </h2>


              <h2>

                Confidence:
                {" "}

                {result.final_result.confidence}

              </h2>

            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default App;