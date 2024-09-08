import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          Yoga has been the way of life for centuries. By building Yoga Smart we have built a Yoga trainer website where learners can select the pose that they intend to do and then our unique pose detection and pose correction software shall help them navigate their learning experience.
          This is an open source project by a bunch of third year students.
        </p>
        <p className="about-content">
          This AI first predicts keypoints or coordinates of different parts of the body (basically where they are present in an image) and then it uses another classification model to classify the poses. If the AI detects that pose with more than 95% probability, it will notify you are doing it correctly (by making the virtual skeleton green). We have used TensorFlow pretrained Movenet Model to predict the keypoints and built a neural network on top of that which uses these coordinates to classify a yoga pose.
          
          We have trained the model in Python, and because of TensorFlowJS, we can leverage browser support, so I converted the Keras/TensorFlow model to TensorFlowJS.
        </p>
      </div>
    </div>
  );
}

