var input = document.getElementById("textarea");
   //It display error message when  textarea is blank
document.getElementById('btn').addEventListener("click", error);

function error() {
    if (input.value !== "") {
    } else {
     alert("Please enter some text you want to listen")
    }
}

let speach =  new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speach.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}
voiceSelect.addEventListener("change", () => {
    speach.voice = voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click" , () => {
    speach.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speach);
}); 
//Back Button Function
document.getElementById("backButton").addEventListener("click", back);

function back() {
    input.value = "";
}