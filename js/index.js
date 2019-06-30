//var vid = document.getElementById("bgvid");

/**$(window).load(function() {
  var v=document.getElementById("bgvid");
    v.play();
});**/

var promise = document.querySelector('bgvid').play();

if (promise !== undefined) {
    promise.then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}


/**function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


document.addEventListener("DOMContentLoaded", function() {
    var pauseButton = document.querySelector("#acqua");
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    pauseButton.addEventListener("click", function() {
      vid.classList.toggle("stopfade");
      if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
      } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
      }
    });
});**/
