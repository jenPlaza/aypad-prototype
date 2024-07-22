//alert('js file');
var newGallery = '<ul>';
for (var i = 0; i < projectList.length; i++) {
  newGallery +=
    '<li><article><a ' +
    projectList[i].id +
    ' href="./story_event.html?id=' +
    projectList[i].id +
    '"><figure>';
  newGallery +=
    '<img src="' +
    projectList[i].cover +
    '" alt="' +
    projectList[i].caption +
    '"/>';
  newGallery +=
    '<figcaption><h5>' + projectList[i].caption + '</h5></figcaption>';
  newGallery += '</figure></a></article></li>';
}
newGallery += '</ul>';
document.getElementById('projects_gallery').innerHTML = newGallery;
