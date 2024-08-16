(function(window, document, undefined) {
var max = 49;
function random_num()
{
	return Math.random() * max | 0;
}

var front_vid_src = "webm/" + random_num().toString() + ".webm";

tmpElement = document.createElement("video");
tmpElement.setAttribute("autoplay", "true");
tmpElement.setAttribute("loop", "true");
tmpElement.setAttribute("id", "front-vid-content");
//tmpElement.setAttribute("controls", "true");
tmpElement.setAttribute("src", front_vid_src);

window.onload = init;

function init()
{
	var container = document.getElementById("front-vid");
	container.appendChild(tmpElement);

	document.getElementById("front-vid").addEventListener('click', function() {
		document.getElementById("front-vid-content").src = "webm/" + random_num().toString() + ".webm";
	});
}
})(window, document, undefined);
