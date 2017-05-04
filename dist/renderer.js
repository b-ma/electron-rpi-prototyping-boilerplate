'use strict';

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

var audioContext = new window.AudioContext();

var tremolo = audioContext.createGain();
tremolo.connect(audioContext.destination);
tremolo.gain.value = 0.6;

var depth = audioContext.createGain();
depth.connect(tremolo.gain);
depth.gain.value = 0.4;

var mod = audioContext.createOscillator();
mod.connect(depth);
mod.frequency.value = 450;

var sine = audioContext.createOscillator();
sine.connect(tremolo);
sine.frequency.value = 300;

sine.start();
mod.start();

window.AAAA = 'test';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsInRyZW1vbG8iLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZ2FpbiIsInZhbHVlIiwiZGVwdGgiLCJtb2QiLCJjcmVhdGVPc2NpbGxhdG9yIiwiZnJlcXVlbmN5Iiwic2luZSIsInN0YXJ0IiwiQUFBQSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLElBQUlDLE9BQU9DLFlBQVgsRUFBckI7O0FBRUEsSUFBTUMsVUFBVUgsYUFBYUksVUFBYixFQUFoQjtBQUNBRCxRQUFRRSxPQUFSLENBQWdCTCxhQUFhTSxXQUE3QjtBQUNBSCxRQUFRSSxJQUFSLENBQWFDLEtBQWIsR0FBcUIsR0FBckI7O0FBRUEsSUFBTUMsUUFBUVQsYUFBYUksVUFBYixFQUFkO0FBQ0FLLE1BQU1KLE9BQU4sQ0FBY0YsUUFBUUksSUFBdEI7QUFDQUUsTUFBTUYsSUFBTixDQUFXQyxLQUFYLEdBQW1CLEdBQW5COztBQUVBLElBQU1FLE1BQU1WLGFBQWFXLGdCQUFiLEVBQVo7QUFDQUQsSUFBSUwsT0FBSixDQUFZSSxLQUFaO0FBQ0FDLElBQUlFLFNBQUosQ0FBY0osS0FBZCxHQUFzQixHQUF0Qjs7QUFFQSxJQUFNSyxPQUFPYixhQUFhVyxnQkFBYixFQUFiO0FBQ0FFLEtBQUtSLE9BQUwsQ0FBYUYsT0FBYjtBQUNBVSxLQUFLRCxTQUFMLENBQWVKLEtBQWYsR0FBdUIsR0FBdkI7O0FBRUFLLEtBQUtDLEtBQUw7QUFDQUosSUFBSUksS0FBSjs7QUFFQWIsT0FBT2MsSUFBUCxHQUFjLE1BQWQiLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBUaGlzIGZpbGUgaXMgcmVxdWlyZWQgYnkgdGhlIGluZGV4Lmh0bWwgZmlsZSBhbmQgd2lsbFxuLy8gLy8gYmUgZXhlY3V0ZWQgaW4gdGhlIHJlbmRlcmVyIHByb2Nlc3MgZm9yIHRoYXQgd2luZG93LlxuLy8gLy8gQWxsIG9mIHRoZSBOb2RlLmpzIEFQSXMgYXJlIGF2YWlsYWJsZSBpbiB0aGlzIHByb2Nlc3MuXG4vLyBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4vLyBhdWRpb0NvbnRleHQuY2hhbm5lbENvdW50ID0gMTtcbi8vIC8vIGNvbnNvbGUubG9nKGF1ZGlvQ29udGV4dC5jaGFubmVsQ291bnQsIGF1ZGlvQ29udGV4dC5udW1iZXJPZk91dHB1dHMpO1xuLy8gLy8gY29uc3QgbGZvID0gYXVkaW9Db250ZXh0LmNyZWF0ZW9zY2lsbFxuXG4vLyBjb25zdCB2b2x1bWUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuLy8gdm9sdW1lLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbi8vIHZvbHVtZS5nYWluLnZhbHVlID0gMTtcblxuLy8gY29uc3Qgc2luZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4vLyBzaW5lLmNvbm5lY3Qodm9sdW1lKTtcbi8vIHNpbmUuZnJlcXVlbmN5LnZhbHVlID0gMzAwO1xuXG4vLyBjb25zdCBub3cgPSBhdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4vLyBzaW5lLnN0YXJ0KG5vdyk7XG4vLyBzaW5lLnN0b3Aobm93ICsgMTApO1xuXG5jb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xuXG5jb25zdCB0cmVtb2xvID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbnRyZW1vbG8uY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xudHJlbW9sby5nYWluLnZhbHVlID0gMC42O1xuXG5jb25zdCBkZXB0aCA9IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG5kZXB0aC5jb25uZWN0KHRyZW1vbG8uZ2Fpbik7XG5kZXB0aC5nYWluLnZhbHVlID0gMC40O1xuXG5jb25zdCBtb2QgPSBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xubW9kLmNvbm5lY3QoZGVwdGgpO1xubW9kLmZyZXF1ZW5jeS52YWx1ZSA9IDQ1MDtcblxuY29uc3Qgc2luZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5zaW5lLmNvbm5lY3QodHJlbW9sbyk7XG5zaW5lLmZyZXF1ZW5jeS52YWx1ZSA9IDMwMDtcblxuc2luZS5zdGFydCgpO1xubW9kLnN0YXJ0KCk7XG5cbndpbmRvdy5BQUFBID0gJ3Rlc3QnO1xuIl19