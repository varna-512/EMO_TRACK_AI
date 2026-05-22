import requests


VOICE_SERVICE_URL = (
    "http://127.0.0.1:8001/predict"
)


def get_voice_prediction(audio_file):

    try:

        files = {

            "audio": (

                audio_file.name,

                audio_file,

                "audio/wav"
            )
        }

        response = requests.post(

            VOICE_SERVICE_URL,

            files=files
        )

        return response.json()

    except Exception as e:

        return {

            "error": str(e)
        }