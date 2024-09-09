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

//NAVIGATION MENU
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

//1.- UPCOMING Events
//to add more event flyers...VERY IMPORTANT!!!!!! follow same format
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

//2.- True Talk articles
//to add more articles manually...VERY IMPORTANT!!!!!! follow same format
var articleArray = [
  {
    id: '011',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/DengueAlert-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/record-breaking-dengue-outbreak-in-bangladesh-1',
    article_title: 'RECORD-BREAKING DENGUE OUTBREAK IN BANGLADESH',
    article_author: 'Shourov Bangladesh',
    article_source:
      'Patients at Mugda Medical College, Dhaka, are treated on the hospital floor due to lack of hospital ward spaces.',
  },
  {
    id: '010',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/Ukraine-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/ukraine-update-july-was-the-deadliest-month-in-2024',
    article_title: 'UKRAINE UPDATE: JULY WAS THE DEADLIEST MONTH IN 2024',
    article_author: 'Lisa Michelutto     ',
    article_source:
      'The ongoing war in Ukraine, since February 2022, shows no signs of easing, with civilians bearing the brunt of the conflict',
  },
  {
    id: '009',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/EgyptsCurrency-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/egypt-s-currency-edges-higher-against-the-united-states-dollar-following-price-hikes',
    article_title:
      'Egypts Currency Edges Higher Against the United States Dollar Following Price Hikes',
    article_author: 'Cosmina Craciunescu Timofte',
    article_source:
      'The Egyptian Pound is sliding against other foreign currencies, after a recent "hike in subway fares and fuel prices" (Khaled, 2024) over the past few days.',
  },
  {
    id: '008',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/AGOA-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/south-africa-agoa-trade-status-threatens-to-impact-south-african-export-goods-traders',
    article_title:
      'South Africa AGOA Trade Status Threatens To Impact South African Export Goods Traders',
    article_author: 'Quinz Atdah Qeqe (South Africa) ',
    article_source:
      'South Africa’s Minister of Trade, Industry and Competition(TIC) Parks Tau has in recent weeks engaged in a diplomatic mission to the United States(US) to consolidate South Africa(SA) bilateral trade relations with the US',
  },
  {
    id: '007',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/Pakistan-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/pakistan-s-32-year-olympic-medal-drought-comes-to-an-end',
    article_title: 'Pakistan’s 32-Year Olympic Medal Drought Comes to an End',
    article_author: 'Zoha Najeeb',
    article_source:
      'Arshad Nadeems gold medal win at the 2024 Paris Olympics in the mens javelin event is a historic achievement for Pakistan, marking the countrys first Olympic gold in 32 years',
  },
  {
    id: '006',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/fakeNews-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/behind-the-headlines-analysing-the-fake-news-and-transphobia-in-the-imane-khalif-case',
    article_title:
      'Behind the Headlines: Analysing the Fake News and Transphobia in the Imane Khalif Case',
    article_author: 'Adriana Ribas',
    article_source:
      'Fake news, defined as intentionally false or misleading information, has increased in the digital age, significantly influencing public perception.',
  },
  {
    id: '005',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/Venezuela-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/unrest-in-venezuela-post-election-protests-and-international-concerns-over-maduro-s-victory',
    article_title:
      'UNREST IN VENEZUELA: POST-ELECTION PROTESTS AND INTERNATIONAL CONCERNS OVER MADURO’S VICTORY',
    article_author: 'Lisa Michelutto',
    article_source:
      'Following the July 28 presidential election, Nicolás Maduros third victory sparked significant unrest in Venezuela, with widespread protests and accusations of electoral fraud due to the delayed official polling records.',
  },
  {
    id: '004',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/despiteAll-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/intoxicated-raped-impregnated-and-infected-with-hiv-aids-despite-being-disabled',
    article_title:
      'INTOXICATED, RAPED, IMPREGNATED AND INFECTED WITH HIV/AIDS DESPITE BEING DISABLED',
    article_author: 'Matua Emmanuel',
    article_source:
      'Aliru Kadijha and her daughter Lyne Amaniyo in Arua Regional Referral Hospital in 2002 (left) and at her Graduation in June 2023 (right)',
  },
  {
    id: '003',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/childrenGrowth-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/together-we-travel-a-story-of-giving-children-in-namibia-more-security-and-development-opportuni',
    article_title:
      'TOGETHER WE TRAVEL’ – A STORY OF GIVING CHILDREN IN NAMIBIA MORE SECURITY AND DEVELOPMENT OPPORTUNITIES',
    article_author: 'Hannah Wind, Germany',
    article_source:
      '‘Together We Travel’ (TWT), a German association, wants to change this by providing children in Namibia with security and better development opportunities.  ',
  },
  {
    id: '002',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/churchClosed-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/rwanda-shuts-down-4-000-churches-over-health-and-safety-panic',
    article_title:
      'Rwanda Shuts Down 4,000 Churches Over Health and Safety Panic',
    article_author: 'Cosmina Timofte',
    article_source:
      'Because of a failure, of the churches in Rwanda, to comply with the health and safety regulations imposed by the Government, to include failure to soundproof the buildings, more than 4000 worship buildings were shut down.',
  },
  {
    id: '001',
    article_img_style:
      'background: url(./assets/images/trueTalkArticles/Ethiopia-min.png) no-repeat top center / 100% 100%;background-size: cover; margin-bottom: 3%;',
    article_href:
      'https://www.truetalknews.org/post/where-to-discover-the-wonders-of-ethiopia',
    article_title: 'Where to Discover the Wonders of Ethiopia?',
    article_author: 'Natnael Gelagay, Ethiopia ',
    article_source:
      'Are you looking for an unforgettable destination in Africa?',
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
  {
    link_href: 'https://www.un.org/en/',
    img_src: './assets/images/partners/uniteNations_logo.png',
    img_alt: 'United Nations logo',
    img_caption: 'United Nations',
  },
  {
    link_href: 'https://www.unv.org/',
    img_src: './assets/images/partners/UNV_logo.jpg',
    img_alt: 'United Nations Volunteers logo',
    img_caption: 'United Nations Volunteers',
  },
];

//4. - STORY GALLERY ID CONDITIONALS ....When adding new projects a new id must be created (the same id is ued for project list and project id conditionals.... VERY IMPORTANT!!!!!! follow same format). SEE listEntry_example.js FILE FOR AN EXAMPLE.
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
} else if (projectId == 'trainerIntl') {
  x = 16;
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
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/snailFarming/largeSnail.png',
        elementAlt: 'closeup of a large snail',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/snailFarming/feedingTheSnails.jpeg',
        elementAlt: 'snail team feeding the snails',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/snailFarming/snailEatingGrassAndLettuce.jpeg',
        elementAlt: 'snail eating grass and lettuce',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/snailFarming/snailFarm.jpeg',
        elementAlt: 'photo of snail facility',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/snailFarming/snailFarmingPamplet.jpeg',
        elementAlt: 'photo of Snail Farming Pamplet',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/snailFarming/snailsEatingCucumber.jpeg',
        elementAlt: 'photo of snails Eating Cucumber',
      },
    ],
    page_title: 'Snail Farming Project',
    mission:
      'The Snail Farming Project is on a mission to empower economically disadvantaged youth by providing them with sustainable farming skills through snail farming, promoting food security, entrepreneurship, and self-reliance in local communities.',
    pdf: {
      title: 'Snail Farming - Profile (pdf)',
      link: './assets/pdf/snailFarming_profile-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Snail Farming Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/8/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to train youth in sustainable snail farming techniques, providing an alternative source of income and promoting food security while fostering entrepreneurship in local communities.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/wasteMgmt/boyCleaningWaste.png',
        elementAlt: 'photo of young boy on a mountain of waste',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/wasteMgmt/boyWithWheelBarrelFullOfWaste.png',
        elementAlt: 'photo of young boy with a wheel barrel full of waste',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/wasteMgmt/GroupPictureOfwasteMangmentTeamCleaningtrash.jpeg',
        elementAlt: 'Group Picture Of waste Mangment Team Cleaning trash',
      },
    ],
    page_title: 'Waste Management Project',
    mission:
      'The Waste Management Project is on a mission to transform youth into environmental stewards by equipping them with the knowledge and skills to manage waste effectively, fostering a culture of recycling, innovation, and sustainability for a cleaner, greener future.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Waste Management Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to educate and engage youth in innovative waste management practices, reducing environmental pollution, and promoting recycling and eco-friendly lifestyles.',
      href: 'https://rb.gy/rdjlhx',
    },
  },
  {
    id: 'piggery',
    cover:
      'assets/images/photo_gallery/young-pig-peeks-out-cage-pig-farm_124507-30738.jpg',
    caption: 'Piggery Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/photo_gallery/young-pig-peeks-out-cage-pig-farm_124507-30738.jpg',
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
      'The Piggery Project is on a mission to enable youth to create sustainable livelihoods through pig farming by providing training in animal husbandry, business management, and sustainable agricultural practices, contributing to food security and economic independence.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Piggery Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to equip youth with the skills to manage pig farms effectively, creating sustainable livelihood opportunities and enhancing economic resilience through agricultural entrepreneurship.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/cultural/culturalDance.png',
        elementAlt: 'cultural dance at an event exposition',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/cultural/menPlayingAfricanDrums.png',
        elementAlt: 'cultural music played by men on African drums',
      },
    ],
    page_title: 'Cultural Program',
    mission:
      'The Cultural Program is on a mission to celebrate and preserve cultural heritage by engaging youth in cultural programs that promote understanding, unity, and the sharing of traditions, fostering a sense of identity and belonging in diverse communities.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Cultural Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to preserve and promote cultural heritage by engaging youth in cultural education, fostering a sense of identity, pride, and unity across communities.',
      href: 'https://rb.gy/rdjlhx',
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
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/basicEdu/ChildrenInClass.png',
        elementAlt: 'Children in classroom',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/highSchoolersInUniform.png',
        elementAlt: 'High Schoolers in school uniform',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/basicEdu/GroupPicture.jpeg',
        elementAlt: 'photo of group',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/basicEdu/SecondarySchools_event_Banner.jpeg',
        elementAlt: 'photo of Secondary Schools Event banner',
      },
    ],
    page_title: 'Basic Education Project',
    mission:
      'The Basic Education Project is on a mission to ensure that every youth has access to quality basic education, equipping them with essential knowledge and skills to overcome economic challenges and participate actively in the development of their communities.',
    pdf: {
      title: 'Basic Education - Profile (pdf)',
      link: 'assets/pdf/school_profile_-compressed.pdf',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Education Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to provide access to foundational education for disadvantaged youth, improving literacy rates and creating pathways to further education and employment opportunities.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/arts/artsCraftsGathering.png',
        elementAlt: 'Gathering of local artists at an Arts and Crafts event',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/arts/EventPicture.jpeg',
        elementAlt: 'Event Picture',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/arts/artsAndCraftsEvent_measuringPlasticContinerWidth.jpeg',
        elementAlt: 'arts And Crafts Event measuring Plastic Continer Width',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/arts/ACEvent_wrapingPlasticContainerWidthCloth.jpeg',
        elementAlt: 'ACEvent wraping Plastic Container Width Cloth',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/arts/ACEvent_measuringPlasticContainerWidth.jpeg',
        elementAlt: 'ACEvent measuring Plastic Container Width',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/arts/ACEvent_childrenTakingPhotgraphOfFinishedShakerBottlesProject.jpeg',
        elementAlt:
          'ACEvent children Taking Photgraph Of Finished Shaker Bottles Project',
      },
    ],
    page_title: 'Art and Craft Project',
    mission:
      'The Arts and Crafts Project is on a mission to nurture creative talents in youth by providing opportunities for artistic expression and crafts, fostering innovation, entrepreneurship, and cultural preservation through skill development.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Crafting Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to develop and showcase the creative talents of youth through arts and crafts, fostering self-expression, cultural appreciation, and economic opportunities through art-based entrepreneurship.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/tree/TreePlantingEvent.png',
        elementAlt: 'photo of young tree stems',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/tree/treePlantingEventTeamGettingFieldReadyForPlanting.jpeg',
        elementAlt: 'tree Planting Event Team Getting Field Ready For Planting',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/tree/MenPrePrepNewFiledforPlanting.jpeg',
        elementAlt: 'Men Prepping New Filed for Planting',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/tree/ManPreparingNewFieldForPlanting.jpeg',
        elementAlt: 'Man Preparing New Field For Planting',
      },
    ],
    page_title: 'Tree Planting Project',
    mission:
      'The Tree Planting Project is on a mission to cultivate environmental consciousness among youth by involving them in tree planting initiatives that combat climate change, promote biodiversity, and ensure a healthier planet for future generations.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Eventurist Forest: Join The Fun',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to involve youth in environmental conservation efforts by planting trees, promoting awareness on climate change, and fostering a culture of sustainability and environmental stewardship.',
      href: 'https://rb.gy/rdjlhx',
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
    ],
    page_title: 'Beautification Project',
    mission:
      'The Beautification Project is on a mission to empower youth to enhance their communities by leading beautification projects that instill pride, foster creativity, and promote a clean and welcoming environment for all.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'KEEP BEAUTIFUL',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to engage youth in community beautification initiatives, instilling a sense of pride and responsibility for their surroundings, while enhancing the aesthetic appeal and livability of their communities.',
      href: 'https://rb.gy/rdjlhx',
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
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccerEvent.png',
        elementAlt: 'soccer team tournament event photo',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccerTeamPhoto.png',
        elementAlt: 'soccer team photo',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccerTeamStretching.png',
        elementAlt: 'soccer team stretching their legs',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/soccerTeamWarmingUp.png',
        elementAlt: 'soccer team warming up for a game',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/sportsEventPhoto.png',
        elementAlt: 'teamates posing for a photograph',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/soccer/photoOf3BoysOfASoccerTeam.jpeg',
        elementAlt: 'photo Of 3 Boys Of A Soccer Team',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/soccer/SoccerTeamPhoto.jpeg',
        elementAlt: 'Soccer Team Photo',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/soccer/soccerTeamPhotoOf3Boys.jpeg',
        elementAlt: 'teamates posing for a photograph',
      },
    ],
    page_title: 'Sports Program',
    mission:
      'The Sports Program is on a mission to harness the power of sports to inspire, motivate, and unify youth, promoting physical fitness, teamwork, leadership, and healthy competition for personal and communal growth.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Sports Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to promote physical health, teamwork, and leadership skills among youth through sports activities, fostering social inclusion, discipline, and holistic development.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc:
          'assets/images/story_event/skills/centerGettingReadyToRecieve.png',
        elementAlt:
          'photo of man taking a picture of skills training center before recieving people into their facility',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/skills/skillsTrainingCenter.png',
        elementAlt:
          'photo of skills training center before people arrived to the facility',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/skills/SkillsTrainingEvent.png',
        elementAlt: 'photo of skills training center full of people',
      },
    ],
    page_title: 'Skills Training Center',
    mission:
      'The Skills Training Center is on a mission to provide youth with comprehensive vocational training and skill development opportunities that bridge the gap between education and employment, empowering them to become self-reliant and economically productive.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Skills Training Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to provide vocational training in various trades, equipping youth with marketable skills that enhance employability and entrepreneurial potential.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc:
          'assets/images/story_event/street/streetChildrengathering.png',
        elementAlt: 'photo of children gathered for a project',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/street/streetChildrenProject.png',
        elementAlt: 'photo of children gathered for a project 2',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/street/streetChildrenTogether.png',
        elementAlt: 'photo of group of children',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/street/streetChildrenPhoto.png',
        elementAlt: 'photo of children',
      },
    ],
    page_title: 'Street Children Program',
    mission:
      'The Street Children Program is on a mission to offer street children a pathway out of poverty and marginalization by providing shelter, education, and life skills, helping them build a better future and reintegrate into society.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'LETS FEED OUR CHILDREN',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to support and rehabilitate street children by providing shelter, education, and psychological support, enabling them to reintegrate into society and pursue meaningful futures.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/hockey/hockeyPractice.png',
        elementAlt: 'photo of young hockey team practice ',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/hockey/hockeyTournament_children.png',
        elementAlt: 'photo of young hockey team tournament ',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/hockey/hockeyTournamentYoungAdults.png',
        elementAlt: 'photo of young adult hockey team tournament ',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/hockey/photoBeforeHockeyTornament.jpeg',
        elementAlt: 'photo Before Hockey Tornament',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/hockey/photobeforeHockeyTornament_2.jpeg',
        elementAlt: 'photo before Hockey Tornament 2',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/hockey/groupPictureOfHockeyTeamPlayer.jpeg',
        elementAlt: 'group Picture Of Hockey Team Player',
      },
    ],
    page_title: 'Hockey Project',
    mission:
      'The Hockey Project is on a mission to introduce youth to the sport of hockey as a means of building discipline, teamwork, and resilience, fostering a sense of community, and promoting both physical and mental well-being.',
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
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to use hockey as a tool for social development, teaching teamwork, discipline, and resilience, while creating opportunities for youth to engage in positive recreational activities.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/micro/microCreditEvent.png',
        elementAlt: 'photo of Micro-Credit Event meeting ',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/micro/microCreditphoto.png',
        elementAlt:
          'photo of women walking with a flat package on their heads ',
      },
    ],
    page_title: 'Micro-Credit Project',
    mission:
      'The Micro-Credit Project is on a mission to empower youth entrepreneurs with access to micro-credit, enabling them to launch or expand small businesses, create jobs, and contribute to economic development in their communities.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Micro-Credit Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to offer small loans and financial literacy training to economically disadvantaged youth, enabling them to start or expand their small businesses, fostering entrepreneurship, and reducing poverty.',
      href: 'https://rb.gy/rdjlhx',
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
        elementAlt: 'AYPAD Youth Farming Project event photo - mini break',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_sowing-min.jpeg',
        elementAlt:
          'AYPAD Youth Farming Project event photo - sowing the fields',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_planting-min.jpeg',
        elementAlt: 'AYPAD Youth Farming Project event photo - growing crops',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_fruit_harvesting-min.jpeg',
        elementAlt:
          'AYPAD Youth Farming Project event photo - harvesting fruit',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/youthFarmingProject_walking_the_fields-min.jpeg',
        elementAlt:
          'AYPAD Youth Farming Project event photo - walking the fields',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/photoOfCornFields.jpeg',
        elementAlt: 'photo Of Corn Fields',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/GroupOfYoungAdultsAttendingAVegetableField.jpeg',
        elementAlt: 'Group Of Young Adults Attending A Vegetable Field',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/fieldOflettuceBeingAttendedByAYoungAfricanMan.jpeg',
        elementAlt: 'field Of lettuce Being Attended By A Young African Man',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/youthFarming/closeupPhotoOfABigGreenLeaf.jpeg',
        elementAlt: 'closeup Photo Of A Big Green Leaf',
      },
    ],
    page_title: 'Youth Farming Project',
    mission:
      'The Youth Farming Project is on a mission to engage youth in sustainable farming practices, providing training and resources to cultivate crops and promote food security, economic stability, and self-sufficiency',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Youth Farming Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to encourage youth participation in sustainable agricultural practices, promoting food security, and creating a pathway for rural development and economic independence.',
      href: 'https://rb.gy/rdjlhx',
    },
  },
  {
    id: 'fish_farming',
    cover:
      'assets/images/photo_gallery/uttam-kumar-roy-06GXlF9wE60-unsplash-min.jpg',
    caption: 'Fish Farming Fundraiser',
    projectGoal:
      'The Fish Farming Fundraisers project goal is to train youth in aquaculture techniques, providing sustainable income opportunities while promoting food security and reducing reliance on traditional farming methods.',
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
        elementSrc: 'assets/images/story_event/fish/fundraiser.png',
        elementAlt: 'photo of fundraiser team meeting',
      },
    ],
    page_title: 'Fish Frenzy Fundraiser',
    mission:
      'The Fish Farming Fundraiser is on a mission to support youth in generating income through sustainable fish farming practices, providing education on aquaculture, entrepreneurship, and environmental stewardship to build resilient communities.',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Fish Frenzy Fundraiser',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to train youth in aquaculture techniques, providing sustainable income opportunities while promoting food security and reducing reliance on traditional farming methods.',
      href: 'https://rb.gy/rdjlhx',
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
        elementSrc: 'assets/images/story_event/film/filmakingEvent.png',
        elementAlt: 'photo of filmmaking team meeting',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/film/filmingAVideo.png',
        elementAlt: 'photo of filmmaking team making a video',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/film/ViewFromTheCamera.jpeg',
        elementAlt: 'View From The Camera',
      },
      {
        elementClass: 'imagenes',
        elementSrc:
          'assets/images/story_event/film/closeupOfChildrenFilmingSomething.jpeg',
        elementAlt: 'closeup Of Children Filming Something',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/film/boysFilmingFromCamera.jpeg',
        elementAlt: 'boys Filming From camera',
      },
    ],
    page_title: 'Filmmaking Project',
    mission:
      'The Filmmaking Project is on a mission to amplify youth voices through the art of filmmaking, nurturing creativity while addressing social issues and promoting cultural exchange ',
    pdf: {
      title: '',
      link: '',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'Filmmaking Event',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '9/8/2024',
      },
      {
        label: 'Event Location',
        input_text: 'Freetown, Sierra Leone',
      },
      {
        label: 'Contact Name',
        input_text: 'Philip S. Bangura',
      },
      {
        label: 'Contact Phone',
        input_text: '+232 75 769929',
      },
      {
        label: 'Contact Email',
        input_text: 'aypadorg@gmail.com',
      },
    ],
    donate: {
      goal: 'to harness the creative potential of youth in the film industry, providing training in storytelling, production, and editing, and enabling them to voice their stories and advocate for social change.',
      href: 'https://rb.gy/rdjlhx',
    },
  },
  {
    id: 'trainerIntl',
    cover: 'assets/images/photo_gallery/trainerIntl.png',
    caption: 'Trainer International Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/trainerIntl.png',
        elementAlt: 'photo of corn crop',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/objectives.png',
        elementAlt: 'objectives',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/classSchedule.png',
        elementAlt: 'classSchedule.png',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/duhaye.png',
        elementAlt: 'photo of Ms. duhaye',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/josephMbuga.png',
        elementAlt: 'photo of Mr. josephMbuga',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/nkhoma.png',
        elementAlt: 'photo of Mr. nkhoma',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/twinamasiko.png',
        elementAlt: 'photo of Mr. twinamasiko',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/story_event/trainerIntl/contact.png',
        elementAlt: 'contact.png',
      },
    ],
    page_title: 'Trainer International Project',
    mission:
      'FISORI is committed to nurturing a dynamic ecosystem of research excellence and practical application across borders. We empower scholars, practitioners, and policymakers to collaborate, innovate, and implement sustainable solutions addressing the worlds most pressing challenges',
    pdf: {
      title: 'APPLY NOW',
      link: 'https://www.fisori.org/application-form',
    },
    event_information: [
      {
        label: 'Event Title',
        input_text: 'text',
      },
      {
        label: 'Event',
        input_text: 'upcoming',
      },
      {
        label: 'Start Date',
        input_text: '9/9/2024',
      },
      {
        label: 'End Date',
        input_text: '12/31/2025',
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
      goal: 'to be a global leader in fostering cutting-edge research and catalyzing its practical implementation, empowering societies worldwide with innovative solutions that drive progress and positive change.',
      href: 'https://rb.gy/rdjlhx',
    },
  },
];

//6.- STORY EVENT SOCIAL MEDIA & FOOTER Social Media
//to add more social media links...VERY IMPORTANT!!!!!! follow same format
//icons can be downloaded from https://www.iconsdb.com/white-icons/ (yellow color hex formula #EEB847 (for story event / gray color hex formula #dcdcdc(for footer)).
// SEE listEntry_example.js FILE FOR AN EXAMPLE.
var socialArray = [
  {
    media_id: 'email',
    media_link: 'mailto:aypadorg@gmail.com',
    media_src: [
      './assets/images/icons/socialMedia/new-post_grey.png',
      './assets/images/icons/socialMedia/message_yellow.png',
    ],
    media_alt: 'email icon',
  },
  {
    media_id: 'phone',
    media_link: 'tel:1-232-75-769929',
    media_src: [
      './assets/images/icons/socialMedia/phone_grey.png',
      './assets/images/icons/socialMedia/phone_yellow.png',
    ],
    media_alt: 'phone icon',
  },
  {
    media_id: 'linkedIn',
    media_link:
      'https://www.linkedin.com/company/africa-youth-for-peace-and-development/',
    media_src: [
      './assets/images/icons/socialMedia/linkedin_grey.png',
      './assets/images/icons/socialMedia/linkedin_yellow.png',
    ],
    media_alt: 'linkedIn icon',
  },
  {
    media_id: 'facebook',
    media_link:
      'https://www.facebook.com/people/Africa-Youth-for-Peace-and-DevelopmentAYPAD/100065081730525/',
    media_src: [
      './assets/images/icons/socialMedia/facebook_grey.png',
      './assets/images/icons/socialMedia/facebook_yellow.png',
    ],
    media_alt: 'facebook icon',
  },
  {
    media_id: 'twitter',
    media_link: 'https://x.com/aypadorg1',
    media_src: [
      './assets/images/icons/socialMedia/twitter_grey.png',
      './assets/images/icons/socialMedia/twitter_yellow.png',
    ],
    media_alt: 'twitter icon',
  },
  {
    media_id: 'instgram',
    media_link: 'https://www.instagram.com/aypadorganization/',
    media_src: [
      './assets/images/icons/socialMedia/instagram_grey.png',
      './assets/images/icons/socialMedia/instagram_yellow.png',
    ],
    media_alt: 'instgram icon',
  },
  {
    media_id: 'youtube',
    media_link: 'https://www.youtube.com/@aypadorganization877',
    media_src: [
      './assets/images/icons/socialMedia/youtube_grey.png',
      './assets/images/icons/socialMedia/youtube_yellow.png',
    ],
    media_alt: 'youtube icon',
  },
];
