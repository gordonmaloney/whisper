import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";

import { useDispatch } from "react-redux";
import { createPost } from '../actions/posts'

export const Whisp = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  let file

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { file: file }
    dispatch(createPost(formData));
  }

  const [Mp3Recorder, setMp3Recorder] = useState(new MicRecorder({ bitRate: 128 }))

  useEffect(() => {
  navigator.getUserMedia(
    { audio: true },
    () => {
      console.log("Permission Granted");
      setState({ isBlocked: false });
    },
    () => {
      console.log("Permission Denied");
      setState({ isBlocked: true });
    }
  );
}, [])



  const start = () => {
    if (state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {

        file = new File([buffer, blob], 'whisp.mp3', {
            type: blob.type,
          });
          console.log(blob)

        const blobURL = URL.createObjectURL(blob)
        setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  return (
    <div>
      <h1>whisp</h1>
      <button onClick={start} disabled={state.isRecording}>
        Record
      </button>
      <button onClick={stop} disabled={!state.isRecording}>
        Stop
      </button>
      <br /><br />
      
      <audio src={state.blobURL} controls="controls" />

      <a href={state.blobURL}>Download</a>
      <button onClick={(e) => handleSubmit(e)}>Save</button>
    </div>
  );
};
