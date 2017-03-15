
function setpixel(x, y, dot) 
{
	$("#screen > tr:nth-child(" + y + ") > td:nth-child(" + x + ")")
		.toggleClass("dot", dot)
		.toggleClass("bg", !dot)
}

function gen_screen(width, height) 
{
	var s = ""
	
	for (var i = 1; i <= height; i++) {
		s += "<tr>"
		for (var j = 1; j <= width; j++) {
			s += "<td class=\"pixel bg\">"
			s += "</td>"
		}
		s += "</tr>"
	}

	$("#screen").html(s)
}

$(function() {
	
	gen_screen(60, 30)
	setpixel(3, 5, true)
	setpixel(5, 3, true)
	
})
