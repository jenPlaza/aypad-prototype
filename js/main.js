//PASSING VARIABLE VIA URL
//finding the windows' url
//console.log('href: ', window.location.href);
var href = window.location.href;
//remove the url pathname and the varaible declaration
var id = href.split(window.location.pathname + '?id=');
//remove the first item of the array
id.shift();

//PAGINATION FUNCTIONS
function prev() {
  elementIndex--;
  //replacing newProject figure code
  let newImages = '<figure>';
  if (projectList[a].flow_element[elementIndex] === undefined) {
    elementIndex = projectList[a].flow_element.length + 1 + elementIndex;
  } else {
    newImages +=
      '<img class="' +
      projectList[a].flow_element[elementIndex].elementClass +
      '" src="' +
      projectList[a].flow_element[elementIndex].elementSrc +
      '" alt="' +
      projectList[a].flow_element[elementIndex].elementAlt +
      '"/>';
  }
  newImages += '</figure>';
  document.getElementById('rotator').innerHTML = newImages;
}
function next() {
  //testing
  console.log(
    'elementIndex: ' +
      elementIndex +
      'elementClass: ' +
      projectList[a].flow_element[elementIndex].elementClass
  );

  elementIndex++;
  //replacing newProject figure code with conditional depending if the flow element is either video / image
  let newImages = '';
  if (projectList[a].flow_element[elementIndex] === undefined) {
    elementIndex = -1;
  } else {
    if (projectList[a].flow_element[elementIndex].elementClass === 'video') {
      let projectVideo =
        '<iframe width="100%" height="100%" src="' +
        projectList[a].flow_element[elementIndex].elementSrc +
        '" alt="' +
        projectList[a].flow_element[elementIndex].elementAlt +
        '" frameborder="0" allowfullscreen></iframe>';
      document.getElementById('rotator').innerHTML = projectVideo;
    } else {
      newImages +=
        '<img class="' +
        projectList[a].flow_element[elementIndex].elementClass +
        '" src="' +
        projectList[a].flow_element[elementIndex].elementSrc +
        '" alt="' +
        projectList[a].flow_element[elementIndex].elementAlt +
        '"/>';
      document.getElementById('rotator').innerHTML = newImages;
    }
  }
}

//PAGINATION BUTTON ARRAY
var btnArray = [
  {
    btn_id: 'prev',
    btn_function: 'prev()',
    btn_imgSrc: './images/arrow_left.png',
    btn_imgAlt: 'left pointing arrow icon',
  },
  {
    btn_id: 'nex',
    btn_function: 'next()',
    btn_imgSrc: './images/arrow_right.png',
    btn_imgAlt: 'right pointing arrow icon',
  },
];
