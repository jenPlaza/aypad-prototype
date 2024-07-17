//alert('js file');
var imageList = [
  {
    id: 'snail',
    img: 'images/photo_gallery/snail.png',
    caption: 'Snail Farming Project',
  },
  {
    id: 'waste',
    img: 'images/photo_gallery/wasteMgmt.JPG',
    caption: 'Waste Management Project',
  },
  {
    id: 'piggery',
    img: 'images/photo_gallery/piggery.JPG',
    caption: 'Piggery Project',
  },
  {
    id: 'culture',
    img: 'images/photo_gallery/culture.png',
    caption: 'Cultural Program',
  },
  {
    id: 'edu',
    img: 'images/photo_gallery/edu.png',
    caption: 'Basic Education Project',
  },
  {
    id: 'arts',
    img: 'images/photo_gallery/arts.png',
    caption: 'Art and Craft Project',
  },
  {
    id: 'tree',
    img: 'images/photo_gallery/tree.png',
    caption: 'Tree Planting Project',
  },
  {
    id: 'beauty',
    img: 'images/photo_gallery/beautification.JPG',
    caption: 'Beautification Project',
  },
  {
    id: 'sports',
    img: 'images/photo_gallery/soccer.png',
    caption: 'Sports Program',
  },
  {
    id: 'skills',
    img: 'images/photo_gallery/study.png',
    caption: 'Skills Training Center',
  },
  {
    id: 'children',
    img: 'images/photo_gallery/children.png',
    caption: 'Street Children Program',
  },
  {
    id: 'hockey',
    img: 'images/photo_gallery/hockey.png',
    caption: 'Hockey Project',
  },
  {
    id: 'micro_credit',
    img: 'images/photo_gallery/microCredit.png',
    caption: 'Micro-Credit Project',
  },
  {
    id: 'lorem',
    img: 'images/photo_gallery/placeholder.png',
    caption: 'Lorem Ipsium Project',
  },
  {
    id: 'ipsium',
    img: 'images/photo_gallery/placeholder2.png',
    caption: 'Lorem Ipsium Project',
  },
];

var newGallery = '<ul>';
for (var i = 0; i < imageList.length; i++) {
  newGallery +=
    '<li><article><a ' +
    imageList[i].id +
    ' href="./story_event_prjct.html?id=' +
    imageList[i].id +
    '"><figure>';
  newGallery +=
    '<img src="' + imageList[i].img + '" alt="' + imageList[i].caption + '"/>';
  newGallery +=
    '<figcaption><h5>' + imageList[i].caption + '</h5></figcaption>';
  newGallery += '</figure></a></article></li>';
}
newGallery += '</ul>';
document.getElementById('projects_gallery').innerHTML = newGallery;
