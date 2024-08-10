//PASSING VARIABLE VIA URL
//finding the windows' url
//console.log('href: ', window.location.href);
var href = window.location.href;
//remove the url pathname and the varaible declaration
var absolutePath = window.location.pathname; ///Users/jenplaza/jpDocs/PROJECTS/Projects/VOLUNTEER/UN/AYPAD/aypad/story.html
var path = absolutePath.split('/aypad/');
var newPath = path.shift();
var id = href.split(window.location.pathname + '?id=');
//remove the first item of the array
id.shift();

let projectId = id;
//testing
//console.log('id: ' + id + '  == projectId: ' + projectId);
let x;

//1.- NAVIGATION MENU
var navMenuArray = [
  {
    link_id: 'home',
    link_name: 'Home',
    link_href: './index.html',
  },
  {
    link_id: 'story',
    link_name: 'Story',
    link_href: './story.html',
  },
  {
    link_id: 'contact',
    link_name: 'Contact',
    link_href: './index.html#contact',
  },
  {
    link_id: 'donate',
    link_name: 'Donate',
    link_href: './donate.html',
  },
];

//2.- UPCOMING Events
//to add more fields to new events...VERY IMPORTANT!!!!!! follow same format
//images need to be no more than 2399 width x 659 height
//IF ONLY!!!!! Don't forget to update project list - event information if flyer and event info have the same contact.
// SEE listEntry_example.js FILE FOR AN EXAMPLE.
var flyerArray = [
  {
    id: '0_credi',
    web_flyer_img_style:
      'background: url(./assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash-min.jpg) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%; margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash-min.jpg" width="100%" height="35%',
    flyer_img_alt:
      'micro credit event flyer banner of African authentic outdoor wear',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '333 winter St. Greenwood, SC 29586',
    event_time: '08:00am to 03:00pm',
    event_title: 'Take a small step and be part of the turnaround',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
  {
    id: '1_fish_farming',
    web_flyer_img_style:
      'background: url(./assets/images/banner/uttam-kumar-roy-06GXlF9wE60-unsplash-min_small.jpg) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/uttam-kumar-roy-06GXlF9wE60-unsplash-min_small.jpg" width="100%" height="35%',
    flyer_img_alt:
      'fish fundraising event flyer banner of fish school in a pool',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '1564, Thin Pine Drive Charleston County, SC 29455',
    event_time: '09:00am to 04:00pm',
    event_title: 'Fish Farming Fundraiser',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
  {
    id: '2_children',
    web_flyer_img_style:
      'background: url(./assets/images/banner/children_banner-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/children_banner-min.png" width="100%" height="35%',
    flyer_img_alt: 'photo of children laughing and smiling',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '2035, Wambaw Creek Road Berkeley County, SC 29492',
    event_time: '08:00am to 03:00pm',
    event_title: 'LETS FEED OUR CHILDREN',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
  {
    id: '3_beauty',
    web_flyer_img_style:
      'background: url(./assets/images/banner/gunter-hoffmann-M8aiq0pGzCo-unsplash_daisys-min.jpg) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/gunter-hoffmann-M8aiq0pGzCo-unsplash_daisys-min.jpg" width="100%" height="35%',
    flyer_img_alt:
      'women at a Beautification Project event dancing and rejoicing',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '200, West Broadway Street Myrtle Beach, SC 29646',
    event_time: '08:00am to 06:00pm',
    event_title: 'KEEP BEAUTIFUL',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
  {
    id: '4_hockey',
    web_flyer_img_style:
      'background: url(./assets/images/banner/jayden-seah-PwnM5ve8ufk-unsplash-min-banner.jpg) no-repeat top center / 100% 100%; background-size: cover;margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/jayden-seah-PwnM5ve8ufk-unsplash-min-banner.jpg" width="100%" height="35%',
    flyer_img_alt: 'team of hockey players practicing',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '543, Harbor View Circle Charleston County, SC 29412',
    event_time: '08:00am to 05:00pm',
    event_title: 'Hockey Tournament',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
  {
    id: '5_tree',
    web_flyer_img_style:
      'background: url(./assets/images/banner/ash-from-modern-afflatus-NQ6Lh81BTRs-unsplash-min.jpg) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    flyer_img_src:
      '////' +
      newPath +
      '/aypad/assets/images/banner/ash-from-modern-afflatus-NQ6Lh81BTRs-unsplash-min.jpg" width="100%" height="35%',
    flyer_img_alt:
      'tree planting event flyer banner of African authentic outdoor wear',
    flyer_event_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor massa, gravida a tortor eget, egestas suscipit neque. Mauris pellentesque aliquet est, ac fringilla nisl viverra sit amet. Donec tempor enim ante, eget feugiat est malesuada non. Duis consectetur turpis id iaculis pellentesque. Sed tempor enim at augue sollicitudin vestibulum. Quisque eu pulvinar quam. Etiam luctus urna a erat congue consectetur.',
    event_address: '660 Summerhouse St. Greenwood, SC 29646',
    event_time: '08:00am to 03:00pm',
    event_title: 'Eventurist Forest: Join The Fun',
    event_contact_name: 'Larry Smith',
    event_contact_phone: '(234)567-5678',
    event_contact_email: 'larry@nomail.com',
  },
];

//3.- PARTNERS & AFFILIATIONS LOGOS
//to add more logos ...VERY IMPORTANT!!!!!! follow same format
//SEE listEntry_example.js FILE FOR AN EXAMPLE.
var logoArray = [
  {
    link_href: 'https://www.facebook.com/CommunityYouthNetworkProgramcynpInc/',
    img_src: './assets/images/partners/communityYouthNetworkProgram.png',
    img_alt: 'Community Youth Network Program logo',
    img_caption: 'Community Youth Network Program',
  },
  {
    link_href: 'https://www.fisori.org/',
    img_src: './assets/images/partners/freya_logo-min.png',
    img_alt: 'Freya logo',
    img_caption: 'Freya',
  },
  {
    link_href: 'https://gyan.tigweb.org/',
    img_src: './assets/images/partners/gyan.png',
    img_alt: 'Global Youth Action Network logo',
    img_caption: 'Global Youth Action Network Program',
  },
  {
    link_href: 'https://bitcoin.org/en/',
    img_src: './assets/images/partners/bitcoin.png',
    img_alt: 'Bitcoin logo',
    img_caption: 'Bitcoin',
  },
  {
    link_href: 'https://tools4change.org/',
    img_src: './assets/images/partners/tools4Change-Logo.png',
    img_alt: 'Tools 4 Change logo',
    img_caption: 'Tools 4 Change',
  },
  {
    link_href: 'https://www.truetalknews.org/',
    img_src: './assets/images/partners/trueTalk_logo-min.png',
    img_alt: 'True talk logo',
    img_caption: 'True Talk',
  },
  {
    link_href: 'https://www.warchild.net/',
    img_src: './assets/images/partners/war-child-ic.png',
    img_alt: 'War Child logo',
    img_caption: 'War Child',
  },
  {
    link_href: 'http://yppdatwork.org/',
    img_src:
      './assets/images/partners/youthPartnershipForPeaceAndDevelopment_logo.png',
    img_alt: 'Youth Partnership for Peace and Development logo',
    img_caption: 'Youth Partnership for Peace and Development',
  },
];

// 4. - STORY GALLERY ID CONDITIONALS ....When adding new projects a new id must be created (the same id is ued for project list and project id conditionals.... VERY IMPORTANT!!!!!! follow same format). SEE listEntry_example.js FILE FOR AN EXAMPLE.

if (projectId == 'snail') {
  x = 0;
} else if (projectId == 'waste') {
  x = 1;
} else if (projectId == 'piggery') {
  x = 2;
} else if (projectId == 'culture') {
  x = 3;
} else if (projectId == 'edu') {
  x = 4;
} else if (projectId == 'arts') {
  x = 5;
} else if (projectId == 'tree') {
  x = 6;
} else if (projectId == 'beauty') {
  x = 7;
} else if (projectId == 'sports') {
  x = 8;
} else if (projectId == 'skills') {
  x = 9;
} else if (projectId == 'children') {
  x = 10;
} else if (projectId == 'hockey') {
  x = 11;
} else if (projectId == 'micro_credit') {
  x = 12;
} else if (projectId == 'youth_farming') {
  x = 13;
} else if (projectId == 'fish_farming') {
  x = 14;
} else if (projectId == 'film') {
  x = 15;
}

//5.- STORY PROJECT LIST ....all fields must be created except for banner. Only projects that do not include the word project includes a banner. See list item Sport / Skills. e.g. banner must be filled in as banner:"", for project items.  SEE listEntry_example.js FILE FOR AN EXAMPLE.
var projectList = [
  {
    id: 'snail',
    cover:
      'assets/images/photo_gallery/vincent-erhart-xgr4SZ80IPk-unsplash-min.jpg',
    caption: 'Snail Farming Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/vincent-erhart-xgr4SZ80IPk-unsplash-min.jpg',
        elementAlt: 'image of a snail on the edge of their wooden farm box',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/snailFarming/snail-min.png',
        elementAlt: 'photo of snail community in a wooden box',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/snailFarming/snailTeam-min.png',
        elementAlt: 'group photo of snail farmers',
      },
    ],
    page_title: 'Snail Farming Project',
    mission:
      'The Snail Farm Project aims at providing low cost meat in our countries of operation while also providing employment that will generate income for marginalized population. AYPAD detected that snails are a high source of protein and cheaper than other animals meat, thus more accessible for population. Therefore we intend to commence this project with snail farming andat a later stage we would develop other farm types, to name a few: guinea fowl, turkey or pigs.These animals will be provided to the participants after being trained to properly manage their farms. AYPAD will help with marketing the product of our farmers after being harvested. Achatina snail is a delicacy for the citizens of West Africa, Europe and Asia. In Ghana is eaten by about half of the 35 million population. The snail is traditionally gathered from the wild and sold at the local markets. However, in recent years, the Achatina snail has greatly diminished due to overharvesting, adverse weather conditions, and deforestation. The limited supply of snail keeps the cost prohibitively high, and thus keeps the nutritious food out of the hands and mouths of the consumers who want and need it most. AYPAD Snail Farm which will commence first project in Ghana assisting women, mostly commercial sex workers, single mothers and local farmers in raising the large snails, thus providing a sustainable supply of the highly sought-after snail in the Ghanaian market.',
    pdf: {
      title: 'Snail Farming - Profile (pdf)',
      link: './assets/pdf/snailFarming_profile-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'To empower a new generation of women entrepreneurs. These women will be able to maintain their traditional family responsibilities, earn extra income, educate themselves and become positive role models of success for their families and their communities.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'waste',
    cover: 'assets/images/photo_gallery/pexels-messina-12492222-min.jpg',
    caption: 'Waste Management Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/pexels-messina-12492222-min.jpg',
        elementAlt: 'photo of waste managment team active at an event',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Waste Management Project',
    mission:
      'AYPAD’s Waste Management Project is on a mission to maximize resource value, while minimizing – and even eliminating – environmental impact so that both our economy and our environment can thrive. To provide our customers with the exceptional waste collection, recycling, and disposal services that protect, preserve and improve our environment and the quality of life in the communities we serve. AYPAD Waste Management is and will continue to be, the “Distinguishable Difference” in the solid waste and recycling collection and disposal industry.',
    pdf: {
      title: 'Waste Management - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'piggery',
    cover: 'assets/images/photo_gallery/pig-farmer-min.png',
    caption: 'Piggery Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/pig-farmer-min.png',
        elementAlt:
          'photo of woman who turns pig farming dream into a success - photo referenced in Kareems Quest',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_builders_planing-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - planning the build',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_builders_planing_2-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - gathering materials',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_builders_building-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - building',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_children_companionship-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - children gathering',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_children_companionship_2-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - children playing',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_children_helpers-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - children helpers',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_builders_days_end-min.jpeg',
        elementAlt: 'AYPAD Piggery Project event photo - days end of building',
      },
      {
        elementClass: 'video',
        elementSrc: 'https://youtube.com/embed/qNjlSO-emcA?autoplay=1&mute=1',
        elementAlt:
          'AYPAD Piggery Project event video - facility construction in progress',
      },
      {
        elementClass: 'video',
        elementSrc: 'https://youtube.com/embed/cmyvUF52Cq8?autoplay=1&mute=1',
        elementAlt:
          'AYPAD Piggery Project event video - mama pig and piglets feeding',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_mama_pig_and_piglets-min.jpeg',
        elementAlt:
          'AYPAD Piggery Project event photo - mama pig and piglets feeding',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_mama_pig_and_piglets_2-min.jpg',
        elementAlt:
          'AYPAD Piggery Project event photo - mama pig and piglets feeding',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/piggery/piggeryProject_mama_pig_and_piglets_3-min.jpeg',
        elementAlt:
          'AYPAD Piggery Project event photo - mama pig and piglets feeding',
      },
    ],
    page_title: 'Piggery Project',
    mission:
      'Welcome to the Piggery Project, our latest endeavor aimed at promoting sustainable farming practices in rural communities. This project will focus on providing training and resources to small-scale farmers looking to establish successful piggery operations, ultimately improving their livelihoods and contributing to the local economy.',
    pdf: {
      title: 'Piggery - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'culture',
    cover:
      'assets/images/photo_gallery/mpumelelo-macu-l_YNobbDYJk-unsplash-min.jpg',
    caption: 'Cultural Program',
    banner: './assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash-min.jpg',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/mpumelelo-macu-l_YNobbDYJk-unsplash-min.jpg',
        elementAlt: 'two young adult men dressed in cultural outfits',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Cultural Program',
    mission:
      'Culture is the identity of a country, therefore it is important to preserve it and encourage people to participate towards the objective of spreading it. African cultures are unique, strong and very different throughout the continent. It is the belief of the organization that as the youth in Africa, we should be culturally oriented. Therefore, the main aim of the AYPAD Cultural Program is to engage youth and children in cultural activities to promote peace and develop their talents providing a context outside formal institutions where youth can come together to better understand each other and their culture. With the help of WayOut Arts Organization, based in England, AYPAD received support to buy equipment (dance costumes and drums) to start running the cultural programs. The cultural group seeks to do this by providing youth with training and a place in which to dance and drum together as a cohesive group. AYPAD seeks to support this program and the youth within it by performing in a variety of spaces including cultural festivals, sensitization projects, conferences, and tourist venues. Through these performances, AYPAD hopes to create funds to ensure that all members of the troupe are able to attend school and have their basic housing and food needs met. Presently the organization offers cultural dance or drumming training for interested individuals or groups; if any organization need a cultural group to perform, they can also contact us.',
    pdf: {
      title: 'Cultural Program - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'edu',
    cover:
      'assets/images/photo_gallery/bill-wegener-LqOO5Ko0zSo-unsplash-min.jpg',
    caption: 'Basic Education Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/bill-wegener-LqOO5Ko0zSo-unsplash-min.jpg',
        elementAlt: 'children in a classroom',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_school_planning_start-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - walls building planning',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_school_foundation-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - planning school foundation',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_laying_a_foundation-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - laying school foundation',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_gathering_materials-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - gathering materials',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_gathering_materials_2-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - gathering materials',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_getting_the_walls_up-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - building the walls up',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_getting_the_walls_up_2-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - building the walls up',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/basicEducationProject_getting_the_walls_up_3-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - building the walls up',
      },
    ],
    page_title: 'Basic Education Project',
    mission:
      'AYPAD Basic Education Project has the purpose of giving African street children access to education and thus reintegrating them into society. Due to the continent’s poor economic and social conditions, children often do not have access to education. The project counteracts this injustice by offering educational programs for children aged between 6 and 17. Furthermore, an individual curriculum that is tailored to the children’s special needs is developed with the aim of reintegrating the children into the educational system. The initiative reduces the risk of social exclusion and the threat of slipping into the abysses of crime. AYPAD hope the project will contributes significantly to the reduction of poverty in Africa. ',
    pdf: {
      title: 'Basic Education - Profile (pdf)',
      link: 'assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'The School project will strive to provide a comprehensive educa,on for the children it will serve. It will provide standard instruction based on Sierra Leone’s national curriculum as well as non-formal opportunites in the arts and social development.To compensate for the varying levels of education the classes will be multi-grade so that students can study at their level while working to complete the standard education requirements for Sierra Leone’s public schools.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'arts',
    cover:
      'assets/images/photo_gallery/wei-cheng-wu-R7lSwItK0LE-unsplash-min.jpg',
    caption: 'Arts and Crafts Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/wei-cheng-wu-R7lSwItK0LE-unsplash-min.jpg',
        elementAlt: 'an individual weaving a basket',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Art and Craft Project',
    mission:
      'This project highlights the exceptional work of local artisans and crafters, showcasing a wide range of unique and beautifully crafted pieces. From handmade jewelry and pottery to textiles and woodwork, the Arts and Crafts Project is a celebration of creativity and craftsmanship.',
    pdf: {
      title: 'Art and Craft - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'tree',
    cover: 'assets/images/photo_gallery/trees-1140x570-min.jpg',
    caption: 'Tree Planting Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/trees-1140x570-min.jpg',
        elementAlt: 'individuals planting trees',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Tree Planting Project',
    mission:
      'AYPAD Tree Planting Project discuss the importance of caring for locally planted trees in order to decrease soil erosion and to provide protection from strong winds and rain. Secondly, we plant fruit and other lucrative trees on the hill sites and flat lands that have been degenerated. During the tree planting, AYPAD volunteers link with local community youth and leaders to seek the best areas where trees can be planted and to ensure that these trees will be cared for.',
    pdf: {
      title: 'Tree Planting - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Eventurist Forest: Join The Fun',
      },
      {
        label: 'Event Location',
        input_text: 'Greenwood, SC',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'beauty',
    cover: 'assets/images/photo_gallery/beautification-min.JPG',
    caption: 'Beautification Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/beautification-min.JPG',
        elementAlt:
          'women at a Beautification Project event dancing and rejoicing',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Beautification Project',
    mission:
      'AYPAD’s Beautification Project restores parks and open spaces while providing leadership and community service experiences for young people in Sierra Leone and beyond. Beautification service is a uniquely effective way to build community. When people put their hands into the dirt together and see their efforts, transform a threatened area into a more vibrant landscape, they forge a special bond. Young children quickly learn to appreciate the natural gardens they create.',
    pdf: {
      title: 'Beautification - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'KEEP BEAUTIFUL',
        input_text: 'Eventurist Forest: Join The Fun',
      },
      {
        label: 'Event Location',
        input_text: 'Myrtle Beach, SC',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'sports',
    cover:
      'assets/images/photo_gallery/jannik-skorna-IQpFq1OehtA-unsplash-min.jpg',
    caption: 'Sports Program',
    banner: './assets/images/banner/soccerPrgm-min.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/jannik-skorna-IQpFq1OehtA-unsplash-min.jpg',
        elementAlt: 'soccer team photo of young boy athletes before tournament',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccer-min.png',
        elementAlt: 'soccer team photo of young boy athletes before tournament',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccerTeam-min.png',
        elementAlt:
          'soccer team photo of young adult athletes, in uniform, before tournament',
      },
    ],
    page_title: 'Sports Program',
    mission:
      'AYPAD Sports program started with football project and developed into different sports categories later on such as handball, yoga, and hockey. The program was created to engage youth, many who live on the streets, into peaceful and peace-promoting activities which build skills in them and promotes physical, spiritual, and mental well-being.',
    pdf: {
      title: 'Sports Program - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'skills',
    cover: 'assets/images/photo_gallery/Computers_Getty_565888301-min.jpg',
    caption: 'Skills Training Center',
    banner: './assets/images/banner/suits-min.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/Computers_Getty_565888301-min.jpg',
        elementAlt: 'two young adults sitting in front of a computer',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Skills Training Center',
    mission:
      'AYPAD Skills Training Center is an initiative that seeks to provide youth with market driven technical job skills and training for the hospitality industry that will enable them to secure steady, well-paying jobs and become productive members of society in their community. Curriculum will include areas of focus such as tailoring, welding, auto mechanics, and carpentry. The Center provides personal and social competencies. Subset classes are foundational to the program which focus on English proficiency, Entrepreneurship and Leadership Development.',
    pdf: {
      title: 'Skills Training Center - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'children',
    cover: 'assets/images/photo_gallery/children-min.png',
    caption: 'Street Children Program',
    banner: './assets/images/banner/children_banner-min.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/children-min.png',
        elementAlt: 'photo of children laughing and smiling',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Street Children Program',
    mission:
      'AYPAD Basic Education Project has the purpose of giving African street children access to education and thus reintegrating them into society. Due to the continent’s poor economic and social conditions, children often do not have access to education. The project counteracts this injustice by offering educational programs for children aged between 6 and 17. Furthermore, an individual curriculum that is tailored to the children’s special needs is developed with the aim of reintegrating the children into the educational system. The initiative reduces the risk of social exclusion and the threat of slipping into the abysses of crime. AYPAD hope the project will contributes significantly to the reduction of poverty in Africa. To escape the vicious circle of poverty, children have to be empowered and given access to high quality education. Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that Within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
    pdf: {
      title: 'Street Children Program - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'LETS FEED OUR CHILDREN',
      },
      {
        label: 'Event Location',
        input_text: 'Berkeley County, SC',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'hockey',
    cover: 'assets/images/photo_gallery/hockey-min.png',
    caption: 'Hockey Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/hockey-min.png',
        elementAlt: 'team of hockey players practicing',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Hockey Project',
    mission:
      'AYPAD created the Hockey Project with a mission to expose the sport to thousands of young people while promoting peace through sport. Hockey is a relatively a new sport in Africa and with many young people living through hardship and deplorable conditions, the need to introduce the sport was timely as its engages young people to reduce the traumatic effects of War, Violence, Abuse and embrace peace while developing their unique hockey talents that can contribute meaningfully to societal growth. The project develops professionals, hockey players, coaches and managers to improve their knowledge on the game, skills, coaching techniques and the impact it has on a nations’ development. The focus is to use field hockey as a way to fulfill young people’s competitive spirit. The fast-paced nature of the sport makes it a great activity for young people to include in their exercise routine, whether looking for a recreational activity to play with friends or a more intense competition on a league team. Young people across our countries and communities will have the opportunity to play and be exposed to field hockey in their physical education class; they will have the option to continue to play with their local club. Our goal is to provide an avenue for young people to play hockey while having fun.',
    pdf: {
      title: 'Hockey - Profile (pdf)',
      link: './assets/pdf/hockey_profile-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Hockey Tournament',
      },
      {
        label: 'Event Location',
        input_text: 'Charleston County, SC',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'To act as a crime prevention program that promotes education, physical activity, healthy lifestyles and social development for the youth (ages 6-21; boys and girls) throughout the African Continent using organized hockey. Team sports can communicate and transform the way people think and act. The task for AYPAD Hockey project is to find ways of incorporating sports into the work of peace building and to create a space where people in conflict can heal and reconcile through competitive team sports.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'micro_credit',
    cover:
      'assets/images/photo_gallery/omotayo-tajudeen-zlZnNIS7eDk-unsplash-min.jpg',
    caption: 'Micro-Credit Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/omotayo-tajudeen-zlZnNIS7eDk-unsplash-min.jpg',
        elementAlt: 'photo of micro-credit team associates',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Micro-Credit Project',
    mission:
      'The Micro-credit Project main thrust is to effect a revolving micro-credit scheme for womenmembers of AYPAD as a means of enchaining their economic empowerment. Obsessed with the desire to positively transform the lives and living conditions of vulnerable children (boy & girls) and women, AYPAD has been undertaken series of research and documentation of experiences together with suggested recommendations of street children and commercial sex workers, most of whom have subsequently been absorbed into AYPAD’s membership, and gradually acquired coping mechanism skills. AYPAD holds the view that women’s empowerment lies with that economic power and decision making abilities, which would also reflect positively on their lives and their families around them. The rationale of this request is to enhance the economic empowerment of the women members of AYPAD through the provision of revolving Micro-Credit scheme.',
    pdf: {
      title: 'Micro-Credit - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'youth_farming',
    cover:
      'assets/images/photo_gallery/henry-perks-aOTBPSDjgj0-unsplash-min.jpg',
    caption: 'Youth Farming Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/henry-perks-aOTBPSDjgj0-unsplash-min.jpg',
        elementAlt: 'photo of corn crop',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProjectGathering_meeting-min.jpeg',
        elementAlt: 'AYPAD Youth Farming Project event photo - event gathering',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProjectGathering_taking_a_break-min.jpeg',
        elementAlt: 'AYPAD Basic Education Project event photo - mini break',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_sowing-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - sowing the fields',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_planting-min.jpeg',
        elementAlt: 'AYPAD Basic Education Project event photo - growing crops',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_fruit_harvesting-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - harvesting fruit',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_walking_the_fields-min.jpeg',
        elementAlt:
          'AYPAD Basic Education Project event photo - walking the fields',
      },
    ],
    page_title: 'Youth Farming Project',
    mission:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    pdf: {
      title: 'Youth Farming - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'fish_farming',
    cover:
      'assets/images/photo_gallery/uttam-kumar-roy-06GXlF9wE60-unsplash-min.jpg',
    caption: 'Fish Farming Fundraiser',
    projectGoal:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    monies: [
      {
        raised: '5,000',
        goal: '15,000',
      },
    ],
    button_donate: 'Worth Catching On To DONATE NOW',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/uttam-kumar-roy-06GXlF9wE60-unsplash-min.jpg',
        elementAlt: 'photo of school of fish in a pool',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Fish Frenzy Fundraiser',
    mission:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    pdf: {
      title: 'Fish Farming - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Fish Frenzy Fundraiser',
      },
      {
        label: 'Event Location',
        input_text: 'Charleston, SC',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
  {
    id: 'film',
    cover:
      'assets/images/photo_gallery/young-black-camera-operator-filming-with-highend-camera-dim-studio_117038-25943-min.jpg',
    caption: 'Filmmaking Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/young-black-camera-operator-filming-with-highend-camera-dim-studio_117038-25943-min.jpg',
        elementAlt: 'photo of corn crop',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder-min.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Filmmaking Project',
    mission:
      'Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
    pdf: {
      title: 'Filmmaking - Profile (pdf)',
      link: './assets/pdf/AYPAD_SCHOOL_PROJECT-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event Location',
        input_text: 'text',
      },
      {
        label: 'Contact Name',
        input_text: 'Larry Smith',
      },
      {
        label: 'Contact Phone',
        input_text: '(234)567-5678',
      },
      {
        label: 'Contact Email',
        input_text: 'larry@nomail.com',
      },
    ],
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      href: 'https://www.google.com/',
    },
  },
];

//6.- STORY EVENT SOCIAL MEDIA & CONTACT LINKS
//to add more social media links...VERY IMPORTANT!!!!!! follow same format
//icons can be downloaded from https://www.iconsdb.com/white-icons/ (yellow/gray color hex's #EEB847 / #dcdcdc).
// SEE listEntry_example.js FILE FOR AN EXAMPLE.
var contactArray = [
  {
    //by email
    link_href: 'https://www.google.com/',
    img_src: './assets/images/icons/socialMedia/message_yellow.png',
    img_alt: 'email icon',
  },
  {
    //by phone
    link_href: 'https://www.google.com/',
    img_src: './assets/images/icons/socialMedia/phone_yellow.png',
    img_alt: 'phone icon',
  },
  {
    //by linkedIn
    link_href: 'https://www.google.com/',
    img_src: './assets/images/icons/socialMedia/linkedin_yellow.png',
    img_alt: 'linkedIn icon',
  },
  {
    //by facebook
    link_href:
      'https://www.facebook.com/people/Africa-Youth-for-Peace-and-DevelopmentAYPAD/100065081730525/',
    img_src: './assets/images/icons/socialMedia/facebook_yellow.png',
    img_alt: 'facebook icon',
  },
  {
    //by instagram
    link_href: 'https://www.google.com/',
    img_src: './assets/images/icons/socialMedia/instagram_yellow.png',
    img_alt: 'instagram icon',
  },
  {
    //by youtube
    link_href: 'https://www.google.com/',
    img_src: './assets/images/icons/socialMedia/youtube_yellow.png',
    img_alt: 'youtube icon',
  },
];
