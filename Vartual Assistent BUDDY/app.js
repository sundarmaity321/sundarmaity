const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Boss...");
  } else if (hour > 12 && hour < 17) {
    speak("Good Afternoon Master...");
  } else {
    speak("Good Evenining Sir...");
  }
}

window.addEventListener("load", () => {
  speak("Initializing Buddy please wait..");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  content.textContent = "Listening....";
  recognition.start();
});

function takeCommand(message) {
  if (
    message.includes("hey") ||
    message.includes("hello") ||
    message.includes("hi")
  ) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("Buddy")) {
    speak("Yyes Sir.");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (
    message.includes("open brave") ||
    message.includes("open brave browser")
  ) {
    window.open("https://brave.com/", "_blank");
    speak("Opening Brave...");
  } else if (
    message.includes("open edge") ||
    message.includes("open microsoft edge")
  ) {
    window.open("https://bing.com", "_blank");
    speak("Opening Microsoft Edge...");
  } else if (message.includes("who is your programmer")) {
    speak("my programmer name is sundar sir");
  } else if (message.includes("who invent you")) {
    speak("sundar sir is my inventor");
  } else if (message.includes("what is your inventors name")) {
    speak("my inventors name is sundar sir");
  } else if (message.includes("who is your creator")) {
    speak("my creators name is sundar sir");
  } else if (message.includes("what Are you doing now")) {
    speak("nothing sir, just waiting for your command");
  } else if (
    message.includes("hay buddy would like to propose me") ||
    message.includes("hay buddy do you want to love me") ||
    message.includes("hay buddy i love you") ||
    message.includes("do you love me") ||
    message.includes("i love you buddy")
  ) {
    speak("Sorry sir i am not interested in love");
  } else if (
    message.includes("do you love me buddy") ||
    message.includes("i love you")
  ) {
    speak("Sorry sir i am not interested in love");
  } else if (
    message.includes("hay buddy will you marry me") ||
    message.includes("hay buddy do you want to marry me") ||
    message.includes("will you marry me")
  ) {
    speak("Sorry sir i am not interested in marrage");
  } else if (
    message.includes("hay buddy What is your name") ||
    message.includes("What is your name")
  ) {
    speak("My name is buddy");
  } else if (
    message.includes(" hay buddy Who are you") ||
    message.includes("Who are you buddy") ||
    message.includes("who are you")
  ) {
    speak("....I am buddy parsonal assistant of sundar sir");
  } else if (
    message.includes("i am sorry buddy") ||
    message.includes("sorry buddy") ||
    message.includes("sorry") ||
    message.includes("i am sorry")
  ) {
    speak(
      "Forgot all your Anger and sorrow. By tha way No problem sir, I am always here for you"
    );
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open mirchi bangla")) {
    window.open("https://www.youtube.com/@MirchiBangla", "_blank");
    speak("Opening MirchiBangla...");
  } else if (message.includes("open gmt")) {
    window.open("https://www.youtube.com/@realmir", "_blank");
    speak("Opening Goppo mirer thek...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (message.includes("open instagram")) {
    window.open("https://instagram.com", "_blank");
    speak("Opening instagram...");
  } else if (message.includes("open microsoft")) {
    window.open("https://microsoft.com", "_blank");
    speak("Opening Microsoft...");
  } else if (
    message.includes("play a song") ||
    message.includes("play song") ||
    message.includes("play a music") ||
    message.includes("play music") ||
    message.includes("play a song for me")
  ) {
    window.open("https://youtu.be/qfdShSZZxlg?si=CAJDyHI0-dIuUtih", "_blank");
    speak("playing a song");
  } else if (message.includes("open a shooting game")) {
    window.open("https://deadshot.io", "_blank");
    speak("Opening a shooting game...");
  } else if (message.includes("open game")) {
    window.open("https://poki.com/", "_blank");
    speak("Opening game...");
  } else if (message.includes("open flipkart")) {
    window.open("https://www.flipkart.com", "_blank");
    speak("Opening flipkart...");
  } else if (message.includes("open instagram")) {
    window.open("https://www.amazon.in", "_blank");
    speak("Opening amazon...");
  } else if (message.includes("open messo")) {
    window.open(
      "https://www.meesho.com/?srsltid=AfmBOoqVj_lnyBqE13O2shXbTnQezubRAVlx5RTfBrVknH1hV9K9jcXP",
      "_blank"
    );
    speak("Opening Messo...");
  } else if (message.includes("open ajio")) {
    window.open(
      "https://www.ajio.com/?srsltid=AfmBOoq_fiBtM980MAzlSXJ2nfI-IzhSwdVjSQjR5VW9S5vYBOfXEuxb",
      "_blank"
    );
    speak("Opening Ajio...");
  } else if (message.includes("open Pixabay")) {
    window.open("https://pixabay.com", "_blank");
    speak("Opening Pixabay...");
  } else if (message.includes("open github")) {
    window.open("https://github.com", "_blank");
    speak("Opening github...");
  } else if (message.includes("open a movie site")) {
    window.open("https://vegamovies.td", "_blank");
    speak("Opening a movie site...");
  } else if (message.includes("open get into pc")) {
    window.open("https://getintopc.cc", "_blank");
    speak("Opening get into pc...");
  } else if (
    message.includes("open instagram") ||
    message.includes("open a designing site")
  ) {
    window.open("https://designer.microsoft.com", "_blank");
    speak("Opening Microsoft Designer...");
  } else if (message.includes("open canva")) {
    window.open("https://www.canva.com/dream-lab", "_blank");
    speak("Opening Canva...");
  } else if (message.includes("open ChatGPT")) {
    window.open("https://chatgpt.com", "_blank");
    speak("Opening ChatGPT...");
  } else if (
    message.includes("open Toonstream") ||
    message.includes("open a anime watching site")
  ) {
    window.open("https://toonstream.co", "_blank");
    speak("Opening Toonstream...");
  }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  // else if(message.includes("open instagram")){
  //     window.open("https://instagram.com", "_blank");
  //     speak("Opening instagram...")
  // }
  else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}
