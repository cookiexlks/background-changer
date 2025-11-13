function playPepegaSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();

  oscillator.type = 'sawtooth';
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note

  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    audioContext.close();
  }, 1500);
}

// Call the function to play the Pepega sound
playPepegaSound();
