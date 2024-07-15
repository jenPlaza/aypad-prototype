//alert('js file');
var imageList = [
  {
    id: '01',
    img: 'images/photo_gallery/snail.png',
    caption: 'Snail Farming Project',
  },
  {
    id: '02',
    img: 'images/photo_gallery/wasteMgmt.JPG',
    caption: 'Waste Management Project',
  },
  {
    id: '03',
    img: 'images/photo_gallery/piggery.JPG',
    caption: 'Piggery Project',
  },
  {
    id: '04',
    img: 'images/photo_gallery/culture.png',
    caption: 'Cultural Program',
  },
  {
    id: '05',
    img: 'images/photo_gallery/edu.png',
    caption: 'Basic Education Project',
  },
  {
    id: '06',
    img: 'images/photo_gallery/arts.png',
    caption: 'Art and Craft Project',
  },
  {
    id: '07',
    img: 'images/photo_gallery/tree.png',
    caption: 'Tree Planting Project',
  },
  {
    id: '08',
    img: 'images/photo_gallery/beautification.JPG',
    caption: 'Beautification Project',
  },
  {
    id: '09',
    img: 'images/photo_gallery/soccer.png',
    caption: 'Sports Program',
  },
  {
    id: '10',
    img: 'images/photo_gallery/study.png',
    caption: 'Skills Training Center',
  },
  {
    id: '11',
    img: 'images/photo_gallery/children.png',
    caption: 'Street Children Program',
  },
  {
    id: '12',
    img: 'images/photo_gallery/hockey.png',
    caption: 'Hockey Project',
  },
  {
    id: '13',
    img: 'images/photo_gallery/microCredit.png',
    caption: 'Micro-Credit Project',
  },
  {
    id: '14',
    img: 'images/photo_gallery/placeholder.png',
    caption: 'Lorem Ipsium',
  },
  {
    id: '15',
    img: 'images/photo_gallery/placeholder2.png',
    caption: 'Lorem Ipsium',
  },
];

var newGallery = '<ul>';
for (var i = 0; i < imageList.length; i++) {
  newGallery += '<li><article><a href="./story_event_prgm.html"><figure>';
  newGallery +=
    '<img src="' + imageList[i].img + '" alt="' + imageList[i].caption + '"/>';
  newGallery +=
    '<figcaption><h5>' + imageList[i].caption + '</h5></figcaption>';
  newGallery += '</figure></a></article></li>';
}
newGallery += '</ul>';
document.getElementById('projects_gallery').innerHTML = newGallery;
