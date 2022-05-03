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

var container = document.getElementById('container')
children = container.childNodes
for(var i = 0; i < children.length; i++)
{
    if(children[i].id === 'add_button' || children[i].id === 'about')
    {
        continue
    }
    console.log(children[i].id)
    children[i].addEventListener("touchstart", notePressed, false);
    children[i].addEventListener("touchend", noteReleased, false);
    children[i].addEventListener("mousedown", notePressed, false); 
    children[i].addEventListener("mouseup", noteReleased, false);
}

var changed_button = document.getElementsByClassName("changed_button")

var button = document.getElementById('submit_change')
button.addEventListener("mousedown", change_button, false)

function change_button()
{
    // console.log("CALLED")
    freq = document.getElementById('frequency').value;
    // console.log(freq)
    changed_button[0].innerHTML = freq;
}



// var keyElement = document.getElementById("play");

// keyElement.addEventListener("touchstart", notePressed, false);
// keyElement.addEventListener("touchend", noteReleased, false);

// Added mouse ELs to test on non-mobile.
// keyElement.addEventListener("mousedown", notePressed, false); 
// keyElement.addEventListener("mouseup", noteReleased, false);

var pressedTone;

function notePressed(event) {
    console.log(event.target.innerHTML)
    freq = event.target.innerHTML
    console.log("notePressed");
    pressedTone = playTone(freq);
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