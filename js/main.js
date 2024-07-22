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
  imageIndex--;
  //replacing newProject figure code
  let newImages = '<figure>';
  if (projectList[a].img[imageIndex] === undefined) {
    imageIndex = projectList[a].img.length + 1 + imageIndex;
  } else {
    newImages +=
      '<img class="imagenes" src="' +
      projectList[a].img[imageIndex].imgSrc +
      '" alt="' +
      projectList[a].img[imageIndex].imgAlt +
      '"/>';
  }
  newImages += '</figure>';
  document.getElementById('rotator').innerHTML = newImages;
}
function next() {
  //testing
  //console.log('imageIndex: ' + imageIndex + ' projectList[a].img[imageIndex]: ' + projectList[a].img[imageIndex]+ ' projectList[a].img.length: ' +projectList[a].img.length);

  imageIndex++;
  //replacing newProject figure code
  let newImages = '<figure>';
  if (projectList[a].img[imageIndex] === undefined) {
    imageIndex = -1;
  } else {
    newImages +=
      '<img class="imagenes" src="' +
      projectList[a].img[imageIndex].imgSrc +
      '" alt="' +
      projectList[a].img[imageIndex].imgAlt +
      '"/>';
  }

  newImages += '</figure>';
  document.getElementById('rotator').innerHTML = newImages;
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
