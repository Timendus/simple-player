/** CONFIG **/

var title      = "Timendus' latest video";
var channel_id = "Timendus";
var domain     = "timendus.github.io";

/** CODE **/

window.onload = function() {
  document.title = title;
  document.getElementById('container').innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=' + channel_id + '&cc_load_policy=1&controls=0&rel=0&autoplay=1&origin=' + domain + '" frameborder="0" allow="autoplay; fullscreen" allowautoplay allowfullscreen></iframe>';
};
