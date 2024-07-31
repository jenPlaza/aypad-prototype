const a = x;
//testing
//console.log('a: ' + a + '  == x: ' + x);

let elementIndex = 0;

//PAGINATION
var btnArray = [
  {
    btn_id: 'prev',
    btn_function: 'prev()',
    btn_imgSrc: './assets/images/icons/slider/arrow_left.png',
    btn_imgAlt: 'left pointing arrow icon',
  },
  {
    btn_id: 'nex',
    btn_function: 'next()',
    btn_imgSrc: './assets/images/icons/slider/arrow_right.png',
    btn_imgAlt: 'right pointing arrow icon',
  },
];
function prev() {
  elementIndex--;
  //replacing newProject figure code with conditional depending if the flow element is either video / image
  if (projectList[a].flow_element[elementIndex] === undefined) {
    elementIndex = projectList[a].flow_element.length - 1;
  } else {
    nexAndPrev_else_conditional();
  }
}
function next() {
  elementIndex++;
  //replacing newProject figure code with conditional depending if the flow element is either video / image
  if (projectList[a].flow_element[elementIndex] === undefined) {
    elementIndex = 0;
  } else {
    nexAndPrev_else_conditional();
  }
}
function nexAndPrev_else_conditional() {
  let newElements = '';
  //testing
  // console.log('elementIndex: ' +elementIndex +'elementClass: ' +
  //     projectList[a].flow_element[elementIndex].elementClass);
  if (projectList[a].flow_element[elementIndex].elementClass === 'video') {
    let projectVideo =
      '<iframe width="100%" height="100%" src="' +
      projectList[a].flow_element[elementIndex].elementSrc +
      '" alt="' +
      projectList[a].flow_element[elementIndex].elementAlt +
      '" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('rotator').innerHTML = projectVideo;
  } else {
    newElements +=
      '<img class="' +
      projectList[a].flow_element[elementIndex].elementClass +
      '" src="' +
      projectList[a].flow_element[elementIndex].elementSrc +
      '" alt="' +
      projectList[a].flow_element[elementIndex].elementAlt +
      '"/>';
    document.getElementById('rotator').innerHTML = newElements;
  }
}

//PARTNERS & AFFILIATIONS
function partnersAndAffiliations() {
  var newLogo = '<h3>Partners & Affiliations</h3>';
  newLogo += '<ul id="logos" class="rotate">';
  for (var n = 0; n < logoArray.length; n++) {
    newLogo +=
      '<li><article><a href="' +
      logoArray[0].link_href +
      '" target="_blank"><figure>';
    newLogo +=
      '<img src="' +
      logoArray[n].img_src +
      '" alt="' +
      logoArray[n].img_alt +
      '" width="100%" height="100%"/>';
    newLogo += '</figure></a></article></li>';
  }
  newLogo += '</ul>';
  document.getElementById('partners_gallery').innerHTML = newLogo;
}
console.log('main');
//EVENTS
function comingEvents() {
  console.log('comingEvents');
  console.log(flyerArray.length);
  console.log(flyerArray);
  var newflyer = '<h3>Upcoming Events</h3>';
  newflyer += '<section id="events">';
  newflyer += '<ul>';
  for (var n = 0; n < flyerArray.length; n++) {
    newflyer +=
      '<li id="' + flyerArray[n].id + '" onclick="downloadFlyer();"><article>';
    newflyer += '<figure style="' + flyerArray[n].web_flyer_img_style + '">';
    newflyer +=
      '<img src="' +
      flyerArray[n].flyer_img_src +
      '" alt="' +
      flyerArray[n].flyer_img_alt +
      '" width="100%" height="35%" />';
    newflyer += '<div><h1>' + flyerArray[n].event_title + '</h1>';
    newflyer += '<p>Address: ' + flyerArray[n].event_address + '</p>';
    newflyer += '<p>Time: ' + flyerArray[n].event_time + '</p><br />';
    newflyer += '<p>To Register/Get More Information</p>';
    newflyer += '<p>' + flyerArray[n].event_contact_name + '</p>';
    newflyer += '<p>Phone: ' + flyerArray[n].event_contact_phone + '</p>';
    newflyer += '<p>Email: ' + flyerArray[n].event_contact_email + '</p></div>';
    newflyer += '</figure></article></li>';
  }
  newflyer += '</ul>';
  newflyer += '</section>';
  document.getElementById('upcoming_events').innerHTML = newflyer;
}
function downloadFlyer() {
  var event_flyer = document.getElementById('flyer').innerHTML;

  var filename = 'event_flyer.html';
  var link = document.createElement('a');
  link.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(event_flyer)
  );
  link.setAttribute('download', filename);
  link.style.display = 'none';
  document.body.appendChild(link);
  //link.click();
  document.body.removeChild(link);

  //finding window user from folder download filepath
  let loc = window.location.pathname;
  let two = loc.split('/Downloads/event_flyer.html');
  const dir = two.shift();
  const user = dir.split('/');
  console.log(user);
  const Username = user[2].toString();

  //using time out function to wait for file download to download folder
  setTimeout(function () {
    var filePath = 'file:///Users/' + Username + '/Downloads/' + filename;
    link.href = filePath;
    window.open(filePath);
    window.location.reload();
  }, 1000);
}
