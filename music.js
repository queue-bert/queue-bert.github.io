// const synth = new Tone.Synth().toMaster()
// synth.triggerAttackRelease('C4', '8n')
// Tone.context.resume()

// document.getElementById("play-button").addEventListener("click", function() {
//     // Tone.context.resume()
//   if (Tone.Transport.state !== 'started') {
//     Tone.Transport.start();
//   } else {
//     Tone.Transport.stop();
//   }
// });

var keyElement = document.getElementById("play");

keyElement.addEventListener("touchstart", notePressed, false);
keyElement.addEventListener("touchend", noteReleased, false);

// Added mouse ELs to test on non-mobile.
keyElement.addEventListener("mousedown", notePressed, false); 
keyElement.addEventListener("mouseup", noteReleased, false);

var pressedTone;

function notePressed(event) {
  console.log("notePressed");
  pressedTone = playTone(440);
  event.preventDefault();
  event.stopPropagation();
}
function noteReleased(event) {
  pressedTone.triggerRelease();
}
function playTone(freq) {
  console.log("playTone", freq);
  let synth = new Tone.Synth().toDestination();
  let now = Tone.now();
  Tone.start();
  synth.triggerAttack(freq, now);
  return synth;
}