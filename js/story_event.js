const newId = (projectId = id);
const a = x;
var i;

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
  newProject += '<h1><em>' + projectList[a].name + '</em></h1>';
  newProject += '</div>';
}
newProject += '</section>'; //story banner end
//slider
newProject += '<div id="slider"><figure id="rotator">';
newProject +=
  '<img class="imagenes" src="' +
  projectList[a].img[0] +
  '" alt="image of youth soccer team"/>';
newProject += '</figure>';
//pagination
newProject += '<ul class="pagination">';
newProject += '<li><button id="prev" onclick="prev()">';
newProject += '<img src="./images/arrow_left.png" alt="arrow icon" />';
newProject += '</button></li>';
newProject += '<li><button id="nex" onclick="next()">';
newProject += '<img src="./images/arrow_right.png" alt="arrow icon" />';
newProject += '</button></li>';
newProject += '</ul>';
newProject += '</div>'; //slider end
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
newProject += '<div><label>Event Name: </label>';
newProject +=
  '<p><b>&nbsp;' + projectList[a].event_information.name + '</b></p></div>';
newProject += '<div><label>Event Address: </label>';
newProject +=
  '<p><b>&nbsp;' + projectList[a].event_information.address + '</b></p></div>';
newProject += '<div><label>Contact Name: </label>';
newProject +=
  '<p><b>&nbsp;' +
  projectList[a].event_information.contact_name +
  '</b></p></div>';
newProject += '<div><label>Contact Phone: </label>';
newProject +=
  '<p><b>&nbsp;' +
  projectList[a].event_information.contact_phone +
  '</b></p></div>';
newProject += '<div><label>Contact Email: </label>';
newProject +=
  '<p><b>&nbsp;' +
  projectList[a].event_information.contact_email +
  '</b></p></div>';
newProject += '</div>';
//social media
newProject += '<section class="social_media"><h5>Social Media</h5>';
newProject += '<ul>';
newProject +=
  '<li><a href="/" target="blank"><figure><img src="./images/socialMedia/message_yellow.png" alt="email icon" /></figure></a></li>';
newProject +=
  '<li><a href="/" target="blank"><figure><img src="./images/socialMedia/phone_yellow.png" alt="phone icon"/></figure></a></li>';
newProject +=
  '<li><a href="/" target="blank"><figure><img src="./images/socialMedia/linkedin_yellow.png" alt="linkedIn icon" /></figure></a></li>';
newProject +=
  '<li><a href="/" target="blank"><figure><img src="./images/socialMedia/facebook_yellow.png" alt="facebook icon"/></figure></a></li>';
newProject +=
  '<li><a href="/" target="blank"><figure><img src="./images/socialMedia/instagram_yellow.png" alt="instgram icon" /></figure></a></li>';
newProject +=
  '<li><a href="/" target="blank"><figure><imgsrc="./images/socialMedia/youtube_yellow.png"alt="you tube icon"/></figure></a></li>';
newProject += '</ul></section></section>';
newProject += '</section>'; //event end

document.getElementById('inAction').innerHTML = newProject;

function prev() {
  // //testing
  // //alert('gobackwards');
  let newImages;
  //replacing newProject figure code
  for (let ii = projectList[a].img.length - 1; ii >= 0; ii--) {
    console.log(projectList[a].img[ii]);
    newImages =
      '<img src="' +
      projectList[a].img[ii] +
      '" alt="image of youth soccer team"/>';
  }
  document.getElementById('rotator').innerHTML = newImages;
}

function next() {
  // //testing
  // //alert('goforward');
  let newImages;
  //replacing newProject figure code
  for (var ii = 0; ii < projectList[a].img.length; ii++) {
    // console.log(projectList[a].img.length);
    // console.log(projectList[a].img[ii]);
    newImages =
      '<img src="' +
      projectList[a].img[ii] +
      '" alt="image of youth soccer team"/>';
  }
  document.getElementById('rotator').innerHTML = newImages;
}
