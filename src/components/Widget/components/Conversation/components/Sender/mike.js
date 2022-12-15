import React from 'react';
import { addUserMessage, emitUserMessage } from 'actions';

const TextToSpeech = props => {
    function runSpeechRecognition(e) {
        // var output = document.getElementById("output");
        // // get action element reference
        // var action = document.getElementById("action");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();

        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            const button = document.getElementById('voice_button')
            button.style.background = 'green'
            // action.innerHTML = "<small>listening, please speak...</small>";
        };

        recognition.onspeechend = function() {
            // action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
            const button = document.getElementById('voice_button')
            button.style.removeProperty("background-color")
        };

        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            console.log('Text:', transcript);
            props.voiceMessage(addUserMessage(transcript));
            props.voiceMessage(emitUserMessage(transcript));
        };

        // start recognition
        recognition.start();
    }

    return (
        <center>
            <br></br>
            <div>
                <button id="voice_button" type="button" onClick={runSpeechRecognition}>
                    <img src="https://www.linkpicture.com/q/microphone-black-shape.png" width="15px"></img>
                </button>
            </div>
            <br></br>
        </center>
    );
};

export default TextToSpeech;
