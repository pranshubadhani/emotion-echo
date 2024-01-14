// emotionDetectionLogic.jsx
import * as faceapi from 'face-api.js';

const loadModels = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  await faceapi.nets.faceExpressionNet.loadFromUri('/models');
};

loadModels();

const startEmotionDetection = async (videoElement, onMoodUpdate) => {
  if (!videoElement) {
    console.error('Video element not found.');
    return;
  }

  const initializeEmotionDetection = async () => {
    const canvas = faceapi.createCanvasFromMedia(videoElement);
    document.body.append(canvas);

    const handleEmotionDetection = async () => {
      const dimensions = {
        width: videoElement.width || videoElement.videoWidth,
        height: videoElement.height || videoElement.videoHeight,
      };

      if (dimensions.width > 0 && dimensions.height > 0) {
        const detection = await faceapi.detectAllFaces(videoElement)
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDimensions = faceapi.resizeResults(detection, dimensions);

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDimensions);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDimensions);
        faceapi.draw.drawFaceExpressions(canvas, resizedDimensions);

        const emotions = detection.map((result) => result.expressions);
        if (emotions.length > 0) {
          const dominantEmotion = Object.keys(emotions[0]).reduce((a, b) =>
            emotions[0][a] > emotions[0][b] ? a : b
          );

          onMoodUpdate(dominantEmotion);
        }
      }

      requestAnimationFrame(handleEmotionDetection);
    };

    handleEmotionDetection();
  };

  videoElement.addEventListener('loadedmetadata', initializeEmotionDetection);
};

export { startEmotionDetection };
