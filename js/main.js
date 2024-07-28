const a = x;
//testing
//console.log('a: ' + a + '  == x: ' + x);

let elementIndex = 0;

//PAGINATION FUNCTIONS
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

//PAGINATION BUTTON ARRAY
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
