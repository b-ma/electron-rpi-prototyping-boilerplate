// // This file is required by the index.html file and will
// // be executed in the renderer process for that window.
// // All of the Node.js APIs are available in this process.
// const audioContext = new AudioContext();
// audioContext.channelCount = 1;
// // console.log(audioContext.channelCount, audioContext.numberOfOutputs);
// // const lfo = audioContext.createoscill

// const volume = audioContext.createGain();
// volume.connect(audioContext.destination);
// volume.gain.value = 1;

// const sine = audioContext.createOscillator();
// sine.connect(volume);
// sine.frequency.value = 300;

// const now = audioContext.currentTime;
// sine.start(now);
// sine.stop(now + 10);

const audioContext = new window.AudioContext();

const tremolo = audioContext.createGain();
tremolo.connect(audioContext.destination);
tremolo.gain.value = 0.6;

const depth = audioContext.createGain();
depth.connect(tremolo.gain);
depth.gain.value = 0.4;

const mod = audioContext.createOscillator();
mod.connect(depth);
mod.frequency.value = 450;

const sine = audioContext.createOscillator();
sine.connect(tremolo);
sine.frequency.value = 300;

sine.start();
mod.start();

