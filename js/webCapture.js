
  const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const captureButton = document.getElementById('capture');
  const camOnButton = document.getElementById('record');
  const constraints = {
    video: true,
  };

  errCallBack = function(error) {	// Video Error Handler
  console.log("Video  error: ", error.code);
  };


  // Get access to the webcam
  camOnButton.addEventListener("click",function(){
     player.style.display = 'block';
     canvas.style.display = 'none';
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
      });
  });


// Capture an image when capture button is clicked
  captureButton.addEventListener('click', () => {
    canvas.style.display = 'block';
    canvas.height = player.clientHeight;
    canvas.width = player.clientWidth;
    player.style.display = 'none';

    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    emoteMe();
    // Stop all video streams.
    player.srcObject.getVideoTracks().forEach(track => track.stop());
  });







/* This file modified from code found at https://developers.google.com/web/fundamentals/media/capturing-images */
