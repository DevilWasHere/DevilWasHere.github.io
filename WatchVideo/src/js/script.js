document.getElementById('playButton').addEventListener('click', function() {
  var videoContainer = document.getElementById('videoContainer');
  videoContainer.classList.remove('hidden');

  var myVideo = document.getElementById('myVideo');
  myVideo.play();
});