//alert('gallery js file');
var optionList = [
  {
    imgSrc: 'assets/images/icons/donation/piggy-bank.png',
    imgAlt: 'mustard color piggy bank icon',
    cardTitle: 'Give a Donation',
    cardText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    imgSrc: './assets/images/icons/donation/handshake.png',
    imgAlt: 'white color handshake icon',
    cardTitle: 'Become a Volunteer',
    cardText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    imgSrc: './assets/images/icons/donation/graduation-cap.png',
    imgAlt: 'mustard color scholarship cap icon',
    cardTitle: 'Give a Scolarship',
    cardText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
];
//-----------------GET INVOLVED-------------//
var newOption = '';
for (var i = 0; i < optionList.length; i++) {
  newOption += '<li><article><figure>';
  newOption +=
    '<img src="' +
    optionList[i].imgSrc +
    '" alt="' +
    optionList[i].imgAlt +
    '" width="100%" height="100%"/>';
  newOption += '</figure>';
  newOption += '<h4><em>' + optionList[i].cardTitle + '</em></h4>';
  newOption +=
    '<p class="align-justify"><b>' + optionList[i].cardText + '</b></p>';
  newOption += '</article></li>';
}
document.getElementById('getInvolved').innerHTML = newOption;
//-----------------DONATE GALLERY-------------//
//testing
// for (var i = 0; i < projectList.length; i++) {
//   console.log('inside for loop');
//   console.log(
//     'donate - projectList[' + i + '].donate[' + i + ']: ',
//     projectList[i].donate.goal
//   );
// }
var newDonate = '<h2>Other Ways to Support</h2>';
newDonate += '<ul>';
for (var i = 0; i < projectList.length; i++) {
  newDonate += '<li><article><div><figure>';
  newDonate +=
    '<img src="' +
    projectList[i].cover +
    '" alt="' +
    projectList[i].flow_element[0].elementAlt +
    '" width="100%" height="100%"/>';
  newDonate += '</figure>';
  newDonate +=
    '<div><p><b>' +
    projectList[i].page_title +
    '</b> ' +
    projectList[i].donate.goal +
    '</p><br />';
  newDonate +=
    '<button class="donateBtn" onclick="window.location.href=' +
    projectList[i].donate.href +
    ';" target="_blank">Donate</button><div></div>';
  newDonate += '</article></li>';
}
newDonate += '</ul>';
document.getElementById('donate_gallery').innerHTML = newDonate;
