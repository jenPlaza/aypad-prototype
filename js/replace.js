//PASSING VARIABLE VIA URL
//finding the windows' url
//console.log('href: ', window.location.href);
var href = window.location.href;
//remove the url pathname and the varaible declaration
const page = href.split('/aypad/');
//console.log('page: ', page);
//remove the first item of the array
page.shift();
//console.log('page: ', page); //story.html / story_event.html?id=waste

//------------------STORY----------------------------//
if (page == 'story.html') {
  //-------------html replacement for story.html
  //navigation menu
  navMenu();

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

  //upcoming events
  comingEvents();
  //partners & affiliations
  partnersAndAffiliations();
} else if (page == 'donate.html') {
  //-------------html replacement for donate.html
  //navigation menu
  navMenu();

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
      '<a class="donateBtn" target="_blank" href="' +
      projectList[i].donate.href +
      '" >Donate</a><br /></br />';
    newDonate += '</article></li>';
  }
  newDonate += '</ul>';
  document.getElementById('donate_gallery').innerHTML = newDonate;

  //upcoming events
  comingEvents();
  //partners & affiliations
  partnersAndAffiliations();
} else {
  //-------------html replacement for story_event.html
  //navigation menu
  navMenu();

  const newId = (projectId = id);
  const a = x;
  var i = 0; //index starts at position 0
  let elementIndex = 0; //index starts at position 0
  var newProject = '<div id="top_banner"><section id="story_banner">';
  //page title
  if (
    projectList[a].page_title.includes('Project') ||
    projectList[a].page_title.includes('Fundraiser')
  ) {
    newProject += '<div class="project">';
    newProject += '<h1><em>' + projectList[a].page_title + '</em></h1>';
    newProject += '</div>';
  } else {
    newProject += '<figure class="prgm">';
    newProject +=
      '<img src="' + projectList[a].banner + '" width="100%" height="100%" />';
    newProject += '</figure><div class="program">';
    newProject +=
      '<h1><em class="' +
      projectList[a].id +
      '">' +
      projectList[a].page_title +
      '</em></h1>';
    newProject += '</div>';
  }
  newProject += '</section></div>'; //story banner end
  //slider
  newProject += '<div id="slider"><figure id="rotator">';
  newProject +=
    '<img class="' +
    projectList[a].flow_element[i].elementClass +
    '" src="' +
    projectList[a].flow_element[i].elementSrc +
    '" alt="' +
    projectList[a].flow_element[i].elementAlt +
    '"/>';
  newProject += '</figure>';
  newProject += '</div>'; //slider end
  //pagination
  newProject += '<ul class="pagination">';
  for (var btn = 0; btn < btnArray.length; btn++) {
    newProject +=
      '<li><button id="' +
      btnArray[btn].btn_id +
      '" onclick="' +
      btnArray[btn].btn_function +
      '">';
    newProject +=
      '<img src="' +
      btnArray[btn].btn_imgSrc +
      '" ' +
      btnArray[btn].btn_imgAlt +
      '" />';
    newProject += '</button></li>';
  }
  newProject += '</ul>';

  //mission
  newProject += '<section id="story">';
  if (projectList[a].page_title.includes('Fundraiser')) {
    newProject += '<h2>Project Goal</h2><br />';
    newProject += '<section id="fundraise">';
    newProject +=
      '<p><b>' +
      projectList[a].caption +
      '</b>: ' +
      projectList[a].projectGoal +
      '</p>';
    newProject += '<br /><br />';
    newProject +=
      '<div><h3><em>Raised: $' +
      projectList[a].monies[0].raised +
      ' (USD)</em></h3>';
    newProject +=
      '<h4><em>Goal: $' +
      projectList[a].monies[0].goal +
      ' (USD)</em></h4></div>';
    newProject +=
      '<div><button onclick="window.location.href=' +
      projectList[a].donate.href +
      '" target="_blank">' +
      projectList[a].button_donate +
      '</button></div></section>';
  } else {
    newProject += '<h2>Mission</h2><br />';
    newProject += '<p>' + projectList[a].mission + '</p>';
    newProject += '<br /><br />';
    newProject +=
      '<a href="' +
      projectList[a].pdf.link +
      '" target="_blank" > ' +
      projectList[a].pdf.title +
      '</a>';
  }
  newProject += '</section>';
  //event information
  newProject += '<section id="event"><div class="event_info">';
  for (var evt = 0; evt < projectList[a].event_information.length; evt++) {
    newProject +=
      '<div><label>' + projectList[a].event_information[evt].label + '</label>';
    newProject +=
      '<p><b>&nbsp;' +
      projectList[a].event_information[evt].input_text +
      '</b></p></div>';
  }
  newProject += '</div>';
  //social media
  newProject += '<section class="social_media"><h5>Social Media</h5>';
  newProject += '<ul>';
  for (var ca = 0; ca < contactArray.length; ca++) {
    newProject +=
      '<li><a href="' +
      contactArray[ca].link_href +
      '" target="blank"><figure><img src="' +
      contactArray[ca].img_src +
      '" alt="' +
      contactArray[ca].img_alt +
      '" /></figure></a></li>';
  }
  newProject += '</ul></section></section>';
  newProject += '</section>'; //event end

  document.getElementById('inAction').innerHTML = newProject;

  //upcoming events
  comingEvents();
  //partners & affiliations
  partnersAndAffiliations();
}
