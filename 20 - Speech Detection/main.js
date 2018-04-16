window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector(".words");
const addParagraph = () => {
  p = document.createElement("p");
  words.appendChild(p);
};
addParagraph();

recognition
  .addEventListener("result", e => {
    console.log(e.results);
    const transcript = Array.from(e.results).map(
      result => result[0].transcript
    );
    p.textContent = transcript;
    if (e.results[0].isFinal) {
      addParagraph();
    }
  })
  .join("");
recognition.addEventListener("end", recognition.start());
recognition.start();
