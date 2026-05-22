# # # from django.urls import path
# # # from .views import TestAPIView


# # # urlpatterns = [
# # #     path('test/', TestAPIView.as_view()),
# # # ]
# # # from django.urls import path

# # # from .views import VoicePredictionAPIView


# # # urlpatterns = [

# # #     path(
# # #         "voice/predict/",
# # #         VoicePredictionAPIView.as_view()
# # #     ),

# # # ]


# # # from django.urls import path

# # # from .views import (
# # #     VoicePredictionAPIView,
# # #     EmotionHistoryAPIView,
# # #     FacePredictionAPIView,
# # #     MultimodalPredictionAPIView
# # # )

# # # urlpatterns = [

# # #     path(
# # #         "voice/predict/",
# # #         VoicePredictionAPIView.as_view()
# # #     ),

# # #     path(
# # #         "emotions/history/",
# # #         EmotionHistoryAPIView.as_view()
# # #     ),
# # #     path(
# # #     "multimodal/predict/",
# # #     MultimodalPredictionAPIView.as_view()
# # # ),


# # # path(
# # #     "face/predict/",
# # #     FacePredictionAPIView.as_view()
# # # ),
# # # ]



# # from django.urls import path

# # from .views import (

# #     VoicePredictionAPIView,

# #     FacePredictionAPIView,

# #     EmotionHistoryAPIView,

# #     MultimodalPredictionAPIView
# # )

# # urlpatterns = [

# #     path(
# #         "voice/predict/",
# #         VoicePredictionAPIView.as_view()
# #     ),

# #     path(
# #         "face/predict/",
# #         FacePredictionAPIView.as_view()
# #     ),

# #     path(
# #         "multimodal/predict/",
# #         MultimodalPredictionAPIView.as_view()
# #     ),

# #     path(
# #         "emotions/history/",
# #         EmotionHistoryAPIView.as_view()
# #     ),
# # ]

# from django.urls import path

# from .views import (

    
#     MultimodalPredictionAPIView
# )


# urlpatterns = [

#     path(

#         'voice/predict/',
#     ),
        
#     path(

#         'face/predict/',

        
#     ),

#     path(

#         'multimodal/predict/',

#         MultimodalPredictionAPIView.as_view()
#     )
# ]

from django.urls import path

from .views import MultimodalPredictionAPIView


urlpatterns = [

    path(
        'multimodal/predict/',
        MultimodalPredictionAPIView.as_view(),
    ),

]