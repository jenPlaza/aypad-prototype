//2.----------------------  UPCOMING EVENTS ADDITIONS-----------------------------------------
//to add more fields to new events...VERY IMPORTANT!!!!!! follow same format
//copy lines 5- 23; remove double forward slashes for each line. each addition must start with opeining squigly { and end with }, closing squigly and comma.

// {
//   id: '0_credi',
//   web_flyer_img_style:
//     'background: url(./assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash-min.jpg) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%; margin-bottom: 3%;',
//   flyer_img_src:
//     '////' +
//     newPath +
//     '/aypad/assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash-min.jpg" width="100%" height="35%',
//   flyer_img_alt:
//     'micro credit event flyer banner of African authentic outdoor wear',
//   flyer_event_desc:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
//   event_address: '333 winter St. Greenwood, SC 29586',
//   event_time: '08:00am to 03:00pm',
//   event_title: 'Take a small step and be part of the turnaround',
//   event_contact_name: 'Larry Smith',
//   event_contact_phone: '(234)567-5678',
//   event_contact_email: 'larry@nomail.com',
// },

//3.----------------------  PARTNERS & AFFILIATIONS LOGO ADDITIONS --------------------------
//to add more logos ...VERY IMPORTANT!!!!!! follow same format
//copy lines 29- 41; remove double forward slashes for each line. each addition must start with opeining squigly { and end with }, closing squigly and comma.

// {
//   link_href: 'https://www.facebook.com/CommunityYouthNetworkProgramcynpInc/',
//   img_src: './assets/images/partners/communityYouthNetworkProgram.png',
//   img_alt: 'Community Youth Network Program logo',
//   img_caption: 'Community Youth Network Program',
// },

// 4. ---------------------- STORY GALLERY ID CONDITIONAL ADDITIONS --------------------------
//When adding new projects a new id must be created (the same id is ued for project list and project id conditionals.... VERY IMPORTANT!!!!!! follow same format).
//copy lines 40- 44; remove double forward slashes for each line. All ids must be consecutive; following projectId "film", the next id should be a word that describe the next event project/program/ fundraiser and x = 16.
//  else if (projectId == 'film') {
//   x = 15;
// }

//5.--------------------------- STORY PROJECT LIST ADDITIONS------------------------------
//all fields must be created except for banner. Only projects that do not include the word project includes a banner. See list item Sport / Skills. e.g. banner must be filled in as banner:"", for project items.
//copy lines 49- 99, for a program entry, copy lines 101- 154, for a project entry, copy lines 157- 218, for a fundraiser entry,
//remove double forward slashes for each line. each addition must start with opeining squigly { and end with }, closing squigly and comma.

//Program
// {
//   id: 'children',
//   cover: 'assets/images/photo_gallery/children-min.png',
//   caption: 'Street Children Program',
//   banner: './assets/images/banner/children_banner-min.png',
//   flow_element: [
//     {
//       elementClass: 'imagenes',
//       elementSrc: 'assets/images/photo_gallery/children-min.png',
//       elementAlt: 'photo of children laughing and smiling',
//     },
//     {
//       elementClass: 'imagenes',
//       elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
//       elementAlt: 'image placeholder',
//     },
//   ],
//   page_title: 'Street Children Program',
//   mission:
//     'AYPAD Basic Education Project has the purpose of giving African street children access to education and thus reintegrating them into society. Due to the continent’s poor economic and social conditions, children often do not have access to education. The project counteracts this injustice by offering educational programs for children aged between 6 and 17. Furthermore, an individual curriculum that is tailored to the children’s special needs is developed with the aim of reintegrating the children into the educational system. The initiative reduces the risk of social exclusion and the threat of slipping into the abysses of crime. AYPAD hope the project will contributes significantly to the reduction of poverty in Africa. To escape the vicious circle of poverty, children have to be empowered and given access to high quality education. Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that Within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
//   pdf: {
//     title: 'Street Children Program - Profile (pdf)',
//     link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
//   },
//   event_information: [
//     {
//       label: 'Event Title',
//       input_text: 'LETS FEED OUR CHILDREN',
//     },
//     {
//       label: 'Event Location',
//       input_text: 'Berkeley County, SC',
//     },
//     {
//       label: 'Contact Name',
//       input_text: 'Larry Smith',
//     },
//     {
//       label: 'Contact Phone',
//       input_text: '(234)567-5678',
//     },
//     {
//       label: 'Contact Email',
//       input_text: 'larry@nomail.com',
//     },
//   ],
//   donate: {
//     goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
//     href: 'https://www.google.com/',
//   },
// },

// //Project
// {
//   id: 'film',
//   cover:
//     'assets/images/photo_gallery/young-black-camera-operator-filming-with-highend-camera-dim-studio_117038-25943-min.jpg',
//   caption: 'Filmmaking Project',
//   banner: '',
//   flow_element: [
//     {
//       elementClass: 'imagenes',
//       elementSrc:
//         'assets/images/photo_gallery/young-black-camera-operator-filming-with-highend-camera-dim-studio_117038-25943-min.jpg',
//       elementAlt: 'photo of corn crop',
//     },
//     {
//       elementClass: 'imagenes',
//       elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
//       elementAlt: 'image placeholder',
//     },
//   ],
//   page_title: 'Filmmaking Project',
//   mission:
//     'Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
//   pdf: {
//     title: 'Filmmaking - Profile (pdf)',
//     link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
//   },
//   event_information: [
//     {
//       label: 'Event Title',
//       input_text: 'text',
//     },
//     {
//       label: 'Event Location',
//       input_text: 'text',
//     },
//     {
//       label: 'Contact Name',
//       input_text: 'Larry Smith',
//     },
//     {
//       label: 'Contact Phone',
//       input_text: '(234)567-5678',
//     },
//     {
//       label: 'Contact Email',
//       input_text: 'larry@nomail.com',
//     },
//   ],
//   donate: {
//     goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
//     href: 'https://www.google.com/',
//   },
// },

// //Fundraiser
// {
//   id: 'fish_farming',
//   cover:
//     'assets/images/photo_gallery/uttam-kumar-roy-06GXlF9wE60-unsplash-min.jpg',
//   caption: 'Fish Farming Fundraiser',
//   projectGoal:
//     'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
//   monies: [
//     {
//       raised: '5,000',
//       goal: '15,000',
//     },
//   ],
//   button_donate: 'Worth Catching On To DONATE NOW',
//   banner: '',
//   flow_element: [
//     {
//       elementClass: 'imagenes',
//       elementSrc:
//         'assets/images/photo_gallery/uttam-kumar-roy-06GXlF9wE60-unsplash-min.jpg',
//       elementAlt: 'photo of school of fish in a pool',
//     },
//     {
//       elementClass: 'imagenes',
//       elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
//       elementAlt: 'image placeholder',
//     },
//   ],
//   page_title: 'Fish Frenzy Fundraiser',
//   mission:
//     '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
//   pdf: {
//     title: 'Fish Farming - Profile (pdf)',
//     link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
//   },
//   event_information: [
//     {
//       label: 'Event Title',
//       input_text: 'Fish Frenzy Fundraiser',
//     },
//     {
//       label: 'Event Location',
//       input_text: 'Charleston, SC',
//     },
//     {
//       label: 'Contact Name',
//       input_text: 'Larry Smith',
//     },
//     {
//       label: 'Contact Phone',
//       input_text: '(234)567-5678',
//     },
//     {
//       label: 'Contact Email',
//       input_text: 'larry@nomail.com',
//     },
//   ],
//   donate: {
//     goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
//     href: 'https://www.google.com/',
//   },
// },
