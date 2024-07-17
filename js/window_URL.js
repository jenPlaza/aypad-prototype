//testing
//finding the windows' url
//console.log('href: ', window.location.href);
var href = window.location.href;

//remove the url pathname and the varaible declaration
var id = href.split(window.location.pathname + '?id=');

//remove the first item of the array
id.shift();
