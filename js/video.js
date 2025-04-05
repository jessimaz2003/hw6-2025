var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });	

// For the element and disabling the autoplay and looping
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

// For the volume
    let volumeDisplay = document.getElementById("volume");

// Play button
    document.getElementById("play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        volumeDisplay.innerHTML = (video.volume * 100) + "%";
    });
// Pause button
    document.getElementById("pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

// Reduce playback 
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

// Increase playback
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

// Skip ahead 
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("Restarting video");
        } else {
            video.currentTime += 10;
        }
        console.log("Current time is " + video.currentTime);
    });
// Mute
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        if (video.muted) {
            this.innerHTML = "Unmute";
            console.log("Muted");
        } else {
            this.innerHTML = "Mute";
            console.log("Unmuted");
        }
    });

 // Volume slider
    document.getElementById("slider").addEventListener("change", function() {
        video.volume = this.value / 100;
        volumeDisplay.innerHTML = this.value + "%";
        console.log("Volume is " + video.volume);
    });

 // Vintage button
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
        console.log("Old School style applied");
    });

// Original button
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
        console.log("Original style applied");
    });
});
