const useSpeechRecognition = () => {};

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    // Other configurations or operations with 'recognition'
} else {
    console.log("Speech recognition not supported in this browser.");
}


export default useSpeechRecognition;