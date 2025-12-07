var html = '<a href="index.html"><h3>Home</h3></a>';

var section1 = ['HTML', 'Java', 'CSS']//write one-word link names in this list
html += '<h3>Demo:</h3>';
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i] + '.html">' + section1[i] + '</a></div>'
}


document.getElementById("templaterr-sidebar").innerHTML = html;