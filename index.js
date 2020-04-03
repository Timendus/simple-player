/** CONFIG **/

// Required
var title     = "Timendus' latest video";
var channelId = "Timendus";
var domain    = "timendus.github.io";

// Optional
var showYouTubeLogo = false; // Does nothing if controls are hidden
var showSubtitles   = true;
var showControls    = false;

/** CODE **/

window.onload = function() {
  document.title = title;
  document.getElementById('container').innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=' + channelId + '&cc_load_policy=' + (showSubtitles ? '1' : '0') + '&controls=' + (showControls ? '1' : '0') + '&rel=0&autoplay=1&origin=' + domain + '&modestbranding=' + (showYouTubeLogo ? '0' : '1') + '" frameborder="0" allow="autoplay; fullscreen" allowautoplay allowfullscreen></iframe>';
};
