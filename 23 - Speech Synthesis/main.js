const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const rate = document.querySelector('[name="rate"]');
const pitch = document.querySelector('[name="pitch"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const text = document.querySelector('[name="text"]');
let voicesArray = [];
const addVoices = () => {
  voicesArray = Array.from(speechSynthesis.getVoices());
  voicesDropdown.innerHTML += voicesArray
    .map(v => `<option value="${v.voiceURI}">${v.name}</option>`)
    .join("");
};
speechSynthesis.addEventListener("voiceschanged", () => addVoices(voicesArray));

const setFloatPropertyIfNotEmpty = (msg, propName, value) =>
  value && (msg[propName] = parseFloat(value));
speakButton.addEventListener("click", () => {
  msg.text = text.value;
  console.log(voicesDropdown.value);
  setFloatPropertyIfNotEmpty(msg, "rate", rate.value);
  setFloatPropertyIfNotEmpty(msg, "pitch", pitch.value);
  if (voicesDropdown.value) {
    msg.voice = voicesArray.filter(v => v.voiceURI == voicesDropdown.value)[0];
  }
  speechSynthesis.speak(msg);
});
stopButton.addEventListener("click", () => {
  speechSynthesis.cancel();
});
