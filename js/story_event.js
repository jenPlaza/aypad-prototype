const newId = (projectId = id);
const a = x;
var i = 0; //index starts at position 0
let elementIndex = 0; //index starts at position 0
var newProject = '<section id="story_banner">';
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
newProject += '</section>'; //story banner end
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
    '<div><button>' +
    projectList[a].button_donate +
    '</button></div></section>';
} else {
  newProject += '<h2>Mission</h2><br />';
  newProject += '<p>' + projectList[a].mission + '</p>';
  newProject += '<br /><br />';
  newProject +=
    '<a href="' +
    projectList[a].pdf[i].link +
    '" target="_blank" > ' +
    projectList[a].pdf[i].title +
    '</a>';
}
newProject += '</section>';
//event information
newProject += '<section id="event"><div class="event_info">';
for (var fa = 0; fa < formArray.length; fa++) {
  newProject += '<div><label>' + formArray[fa].label_name + '</label>';
  newProject +=
    '<p><b>&nbsp;' + formArray[fa].paragraph_body + '</b></p></div>';
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
