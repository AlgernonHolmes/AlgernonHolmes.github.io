/* function to get all voices avilable in the API */

function loadVoices() {
    let voices = window.speechSynthesis.getVoices();
    let voiceSelect = document.querySelector("select");
    voiceSelect.textContent = '';
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

/* function to read the text given by user (using the selected voice) */

function textToSpeech(text, selectedVoiceIndex) {
    let content = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    content.text = text;
    content.voice = voices[selectedVoiceIndex];
    window.speechSynthesis.speak(content);
}
/* fetching the data from the HTML components */

document.querySelector("button").addEventListener("click", () => {
    let textAreaValue = document.querySelector("textarea").value;
    let voiceSelect = document.querySelector("select");
    let selectedVoiceIndex = voiceSelect.selectedIndex;
    textToSpeech(textAreaValue, selectedVoiceIndex);
});

/* loading all the voices avilable */

window.speechSynthesis.onvoiceschanged = loadVoices;

/* function call to get all voices running */

loadVoices();

