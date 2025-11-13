alert("WARNING VERY LOUD LOWER DOWN UR VOLUME.");

function playPepegaMelody() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const melody = [
    { freq: 440, gain: 0.5, time: 0 }, // A4
    { freq: 493.88, gain: 0.3, time: 1 },
    { freq: 523.25, gain: 0.4, time: 1.5 },
    { freq: 587.33, gain: 0.2, time: 2 },
    { freq: 659.26, gain: 0.3, time: 2.5 },
    { freq: 698.46, gain: 0.2, time: 3 },
    { freq: 783.99, gain: 0.3, time: 3.5 },
  ];

  let currentTime = audioContext.currentTime;

  function createOscillator(notes) {
    if (notes.length === 0) return;

    const note = notes[0];
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(note.freq, currentTime);
    currentTime += note.time;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(note.gain, currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      createOscillator(notes.slice(1));
    }, note.time * 1000);
  }

  createOscillator(melody);
}

// Call the function to play the Pepega melody
playPepegaMelody();
