(function(window, document, undefined) {
function random_num(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = init;

function init()
{
	tmpElement = document.createElement("video");
	tmpElement.setAttribute("autoplay", "true");
	tmpElement.setAttribute("loop", "true");
	tmpElement.setAttribute("id", "front-vid-content");
	//tmpElement.setAttribute("controls", "true");
	
	var min = 0, max = 75;
	var front_vid_src = "webm/" + random_num(min, max).toString() + ".webm";
	tmpElement.setAttribute("src", front_vid_src);
	
	var container = document.getElementById("front-vid");
	container.appendChild(tmpElement);

	document.getElementById("front-vid").addEventListener('click', function() {
		document.getElementById("front-vid-content").src = "webm/" + random_num(min, max).toString() + ".webm";
	});
}
})(window, document, undefined);
