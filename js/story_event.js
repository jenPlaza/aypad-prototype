const newId = (projectId = id);
const a = x;
var i = 0; //index starts at position 0
let imageIndex = 0; //index starts at position 0
var newProject = '<section id="story_banner">';
//page title
if (projectList[a].name.includes('Project')) {
  newProject += '<div class="project">';
  newProject += '<h1><em>' + projectList[a].name + '</em></h1>';
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
    projectList[a].name +
    '</em></h1>';
  newProject += '</div>';
}
newProject += '</section>'; //story banner end
//slider
newProject += '<div id="slider"><figure id="rotator">';
newProject +=
  '<img class="imagenes" src="' +
  projectList[a].img[i].imgSrc +
  '" alt="' +
  projectList[a].img[i].imgAlt +
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
newProject += '<section id="story"><h2>Mission</h2><br />';
newProject += '<p>' + projectList[a].mission + '</p>';
newProject += '<br /><br />';
newProject +=
  '<a href="' +
  projectList[a].pdf.title +
  '" target="_blank" > ' +
  projectList[a].pdf.link +
  '</a>';
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
