from rest_framework.views import APIView

from rest_framework.response import Response

from .models import AssessmentResult


from .services.face_service import (
    get_face_prediction
)

from .services.voice_service import (
    get_voice_prediction
)

from .services.fusion_service import (
    fuse_emotions
)


# =================================================


# =========================================================
# MULTIMODAL API
# =========================================================

class MultimodalPredictionAPIView(APIView):

    def post(self, request):

        # =========================
        # GET FILES FROM FRONTEND
        # =========================

        audio_file = request.FILES.get(
            "audio"
        )

        image_file = request.FILES.get(
            "image"
        )


        # =========================
        # VALIDATION
        # =========================

        if not audio_file and not image_file:

            return Response({

                "error":
                "No audio or image uploaded"
            })


        # =========================
        # MODEL PREDICTIONS
        # =========================

        voice_result = {}

        face_result = {}


        # =========================
        # VOICE
        # =========================

        if audio_file:

            voice_result = get_voice_prediction(

                audio_file
            )


        # =========================
        # FACE
        # =========================

        if image_file:

            face_result = get_face_prediction(

                image_file
            )


        # =========================
        # FUSION
        # =========================

        final_result = fuse_emotions(

            voice_result,

            face_result
        )


        # =========================
        # SAFE EXTRACTION
        # =========================

        voice_emotion = voice_result.get(

            "dominant_emotion",

            "No Data"
        )

        voice_confidence = voice_result.get(

            "confidence",

            0
        )


        face_emotion = face_result.get(

            "dominant_emotion",

            "No Data"
        )

        face_confidence = face_result.get(

            "confidence",

            0
        )


        # =========================
        # SAVE TO DATABASE
        # =========================

        AssessmentResult.objects.create(

            voice_emotion=
            voice_emotion,

            voice_confidence=
            voice_confidence,


            face_emotion=
            face_emotion,

            face_confidence=
            face_confidence,


            final_emotion=
            final_result["final_emotion"],

            final_confidence=
            final_result["confidence"],

            stress_score=
            final_result["stress_score"]
        )


        # =========================
        # RETURN
        # =========================

        return Response({

            "voice_result":
            voice_result,

            "face_result":
            face_result,

            "final_result":
            final_result
        })