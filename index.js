(function(window, document, undefined) {
var max = 30;
var random_number = Math.random() * max | 0;
var front_vid_src = "webm/" + random_number.toString() + ".webm";

// # create video element to append into above <a> tag
tmpElement = document.createElement("video");
tmpElement.setAttribute("autoplay", "true");
tmpElement.setAttribute("loop", "true");
tmpElement.setAttribute("id", "front-vid-content");
tmpElement.setAttribute("src", front_vid_src);

window.onload = init;

function init()
{
	var container = document.getElementById("front-vid");
	container.appendChild(tmpElement);
}
})(window, document, undefined);
