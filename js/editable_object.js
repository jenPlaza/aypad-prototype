//alert('array');
//PROJECT LIST ....all fields must be created except for banner. Only projects that do not include the word project includes a banner. See list item Sport / Skills. e.g. banner must be filled in as banner:"", for project items.
var projectList = [
  {
    id: 'snail',
    cover: 'assets/images/photo_gallery/snail.png',
    caption: 'Snail Farming Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/snail.png',
        elementAlt: 'photo of snail community in a wooden box',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Snail Farming Project',
    mission:
      'The Snail Farm Project aims at providing low cost meat in our countries of operation while also providing employment that will generate income for marginalized population. AYPAD detected that snails are a high source of protein and cheaper than other animals meat, thus more accessible for population. Therefore we intend to commence this project with snail farming andat a later stage we would develop other farm types, to name a few: guinea fowl, turkey or pigs.These animals will be provided to the participants after being trained to properly manage their farms. AYPAD will help with marketing the product of our farmers after being harvested. Achatina snail is a delicacy for the citizens of West Africa, Europe and Asia. In Ghana is eaten by about half of the 35 million population. The snail is traditionally gathered from the wild and sold at the local markets. However, in recent years, the Achatina snail has greatly diminished due to overharvesting, adverse weather conditions, and deforestation. The limited supply of snail keeps the cost prohibitively high, and thus keeps the nutritious food out of the hands and mouths of the consumers who want and need it most. AYPAD Snail Farm which will commence first project in Ghana assisting women, mostly commercial sex workers, single mothers and local farmers in raising the large snails, thus providing a sustainable supply of the highly sought-after snail in the Ghanaian market.',
    pdf: {
      title: 'Snail Farming - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'waste',
    cover: 'assets/images/photo_gallery/wasteMgmt.JPG',
    caption: 'Waste Management Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/wasteMgmt.JPG',
        elementAlt: 'photo of waste managment team active at an event',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Waste Management Project',
    mission:
      'AYPAD’s Waste Management Project is on a mission to maximize resource value, while minimizing – and even eliminating – environmental impact so that both our economy and our environment can thrive. To provide our customers with the exceptional waste collection, recycling, and disposal services that protect, preserve and improve our environment and the quality of life in the communities we serve. AYPAD Waste Management is and will continue to be, the “Distinguishable Difference” in the solid waste and recycling collection and disposal industry.',
    pdf: {
      title: 'Waste Management - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'piggery',
    cover: 'assets/images/photo_gallery/piggery.JPG',
    caption: 'Piggery Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/piggery.JPG',
        elementAlt:
          'photo of woman showing other women the process of feeding a pig',
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
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'culture',
    cover: 'assets/images/photo_gallery/culture.png',
    caption: 'Cultural Program',
    banner: './assets/images/banner/annie-spratt-Sn04BHfa2AY-unsplash.jpg',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/culture.png',
        elementAlt: 'two young adult men dressed in cultural outfits',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Cultural Program',
    mission:
      'Culture is the identity of a country, therefore it is important to preserve it and encourage people to participate towards the objective of spreading it. African cultures are unique, strong and very different throughout the continent. It is the belief of the organization that as the youth in Africa, we should be culturally oriented. Therefore, the main aim of the AYPAD Cultural Program is to engage youth and children in cultural activities to promote peace and develop their talents providing a context outside formal institutions where youth can come together to better understand each other and their culture. With the help of WayOut Arts Organization, based in England, AYPAD received support to buy equipment (dance costumes and drums) to start running the cultural programs. The cultural group seeks to do this by providing youth with training and a place in which to dance and drum together as a cohesive group. AYPAD seeks to support this program and the youth within it by performing in a variety of spaces including cultural festivals, sensitization projects, conferences, and tourist venues. Through these performances, AYPAD hopes to create funds to ensure that all members of the troupe are able to attend school and have their basic housing and food needs met. Presently the organization offers cultural dance or drumming training for interested individuals or groups; if any organization need a cultural group to perform, they can also contact us.',
    pdf: {
      title: 'Cultural Program - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'edu',
    cover: 'assets/images/photo_gallery/edu.png',
    caption: 'Basic Education Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/edu.png',
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
      'AYPAD Basic Education Project has the purpose of giving African street children access to education and thus reintegrating them into society. Due to the continent’s poor economic and social conditions, children often do not have access to education. The project counteracts this injustice by offering educational programs for children aged between 6 and 17. Furthermore, an individual curriculum that is tailored to the children’s special needs is developed with the aim of reintegrating the children into the educational system. The initiative reduces the risk of social exclusion and the threat of slipping into the abysses of crime. AYPAD hope the project will contributes significantly to the reduction of poverty in Africa. To escape the vicious circle of poverty, children have to be empowered and given access to high quality education. Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that Within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
    pdf: {
      title: 'Basic Education - Profile (pdf)',
      link: 'pdf/AYPAD_SCHOOL_PROJECT.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'arts',
    cover: 'assets/images/photo_gallery/arts.png',
    caption: 'Arts and Crafts Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/arts.png',
        elementAlt: 'an individual weaving a basket',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Art and Craft Project',
    mission:
      'This project highlights the exceptional work of local artisans and crafters, showcasing a wide range of unique and beautifully crafted pieces. From handmade jewelry and pottery to textiles and woodwork, the Arts and Crafts Project is a celebration of creativity and craftsmanship.',
    pdf: {
      title: 'Art and Craft - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'tree',
    cover: 'assets/images/photo_gallery/tree.png',
    caption: 'Tree Planting Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/tree.png',
        elementAlt: 'individuals planting trees',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Tree Planting Project',
    mission:
      'AYPAD Tree Planting Project discuss the importance of caring for locally planted trees in order to decrease soil erosion and to provide protection from strong winds and rain. Secondly, we plant fruit and other lucrative trees on the hill sites and flat lands that have been degenerated. During the tree planting, AYPAD volunteers link with local community youth and leaders to seek the best areas where trees can be planted and to ensure that these trees will be cared for.',
    pdf: {
      title: 'Tree Planting - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'beauty',
    cover: 'assets/images/photo_gallery/beautification.JPG',
    caption: 'Beautification Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/beautification.JPG',
        elementAlt:
          'women at a Beautification Project event dancing and rejoicing',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Beautification Project',
    mission:
      'AYPAD’s Beautification Project restores parks and open spaces while providing leadership and community service experiences for young people in Sierra Leone and beyond. Beautification service is a uniquely effective way to build community. When people put their hands into the dirt together and see their efforts, transform a threatened area into a more vibrant landscape, they forge a special bond. Young children quickly learn to appreciate the natural gardens they create.',
    pdf: {
      title: 'Beautification - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'sports',
    cover: 'assets/images/photo_gallery/soccer.png',
    caption: 'Sports Program',
    banner: './assets/images/banner/soccerPrgm.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/soccer.png',
        elementAlt: 'soccer team photo of young boy athletes before tournament',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/soccerTeam.png',
        elementAlt:
          'soccer team photo of young adult athletes, in uniform, before tournament',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Sports Program',
    mission:
      'AYPAD Sports program started with football project and developed into different sports categories later on such as handball, yoga, and hockey. The program was created to engage youth, many who live on the streets, into peaceful and peace-promoting activities which build skills in them and promotes physical, spiritual, and mental well-being.',
    pdf: {
      title: 'Sports Program - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'skills',
    cover: 'assets/images/photo_gallery/study.png',
    caption: 'Skills Training Center',
    banner: './assets/images/banner/suits.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/study.png',
        elementAlt: 'two young adults sitting in front of a computer',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Skills Training Center',
    mission:
      'AYPAD Skills Training Center is an initiative that seeks to provide youth with market driven technical job skills and training for the hospitality industry that will enable them to secure steady, well-paying jobs and become productive members of society in their community. Curriculum will include areas of focus such as tailoring, welding, auto mechanics, and carpentry. The Center provides personal and social competencies. Subset classes are foundational to the program which focus on English proficiency, Entrepreneurship and Leadership Development.',
    pdf: {
      title: 'Skills Training Center - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'children',
    cover: 'assets/images/photo_gallery/children.png',
    caption: 'Street Children Program',
    banner: './assets/images/banner/children_banner.png',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/children.png',
        elementAlt: 'photo of children laughing and smiling',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Street Children Program',
    mission:
      'AYPAD Basic Education Project has the purpose of giving African street children access to education and thus reintegrating them into society. Due to the continent’s poor economic and social conditions, children often do not have access to education. The project counteracts this injustice by offering educational programs for children aged between 6 and 17. Furthermore, an individual curriculum that is tailored to the children’s special needs is developed with the aim of reintegrating the children into the educational system. The initiative reduces the risk of social exclusion and the threat of slipping into the abysses of crime. AYPAD hope the project will contributes significantly to the reduction of poverty in Africa. To escape the vicious circle of poverty, children have to be empowered and given access to high quality education. Our Filmmaking Project aims to promote education, inspire social change and encourage creative self-expression by teaching the basics of filmmaking: how to write, direct, act in, shoot and produce their own films. Additionally, students will be responsible for event management and marketing as well. The classes will offer a safe and stimulating learning environment where students can acquire valuable skills and knowledge which could be exceedingly beneficial for their education, and future earning ability. We strongly believe that Within the confines of the programme, children will be taught filmmaking techniques. They will gain practical and theoretical knowledge, learning from books and teachers who are trained and knowledgeable in filmmaking. To afford the necessary filmmaking tools and equipment, second hand products will be sought. A wide range of tools and equipment will be available so that the students have experience in learning about cameras, audio, lighting, directing, developing a story and scriptwriting among others.',
    pdf: {
      title: 'Street Children Program - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'hockey',
    cover: 'assets/images/photo_gallery/hockey.png',
    caption: 'Hockey Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/hockey.png',
        elementAlt: 'teamof hockey players practicing',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Hockey Project',
    mission:
      'We are excited to introduce our recent project, the Hockey Project. This innovative initiative showcases our work in developing advanced training strategies and equipment for hockey players to improve their skills and performance on the ice. With a focus on cutting-edge technology and research, the Hockey Project aims to push the boundaries of what is possible in the world of hockey training.',
    pdf: {
      title: 'Hockey - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
  {
    id: 'micro_credit',
    cover: 'assets/images/photo_gallery/microCredit.png',
    caption: 'Micro-Credit Project',
    banner: '',
    flow_element: [
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/microCredit.png',
        elementAlt: 'photo of micro-credit team associates',
      },
      {
        elementClass: 'imagenes',
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Micro-Credit Project',
    mission:
      'The Micro-credit Project main thrust is to effect a revolving micro-credit scheme for womenmembers of AYPAD as a means of enchaining their economic empowerment. Obsessed with the desire to positively transform the lives and living conditions of vulnerable children (boy & girls) and women, AYPAD has been undertaken series of research and documentation of experiences together with suggested recommendations of street children and commercial sex workers, most of whom have subsequently been absorbed into AYPAD’s membership, and gradually acquired coping mechanism skills. AYPAD holds the view that women’s empowerment lies with that economic power and decision making abilities, which would also reflect positively on their lives and their families around them. The rationale of this request is to enhance the economic empowerment of the women members of AYPAD through the provision of revolving Micro-Credit scheme.',
    pdf: {
      title: 'Micro-Credit - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
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
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
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
        elementSrc: 'assets/images/photo_gallery/image_placeholder.png',
        elementAlt: 'image placeholder',
      },
    ],
    page_title: 'Fish Frenzy Fundraiser',
    mission:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    pdf: {
      title: 'Fish Farming - Profile (pdf)',
      link: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
    event_information: {
      name: 'text',
      address: 'text',
      contact_name: 'Larry Smith',
      contact_phone: '(234)567-5678',
      contact_email: 'larry@nomail.com',
    },
    donate: {
      goal: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      href: 'https://www.sportencommun.org/wp-content/uploads/2020/08/aypad-profile.pdf',
    },
  },
];

//ID CONDITIONALS ....When adding new projects a new id must be created (the same id is ued for project list and project id conditionals.... VERY IMPORTANT!!!!!! follow same format)
let projectId = id;
let x;
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
}

//CONTACT FORM
//to add more fields to event contact information form...VERY IMPORTANT!!!!!! follow same format
var formArray = [
  {
    label_name: 'Event Name',
    paragraph_body: projectList[x].event_information.name,
  },
  {
    label_name: 'Event Address',
    paragraph_body: projectList[x].event_information.address,
  },
  {
    label_name: 'Contact Name',
    paragraph_body: projectList[x].event_information.contact_name,
  },
  {
    label_name: 'Contact Phone',
    paragraph_body: projectList[x].event_information.contact_phone,
  },
  {
    label_name: 'Contact Email',
    paragraph_body: projectList[x].event_information.contact_email,
  },
];

//SOCIAL MEDIA & CONTACT LINKS
//to add more social media links...VERY IMPORTANT!!!!!! follow same format
//icons can be downloaded from https://www.iconsdb.com/white-icons/ (yellow/gray color hex's #EEB847 / #dcdcdc).
var contactArray = [
  {
    //by email
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/message_yellow.png',
    img_alt: 'email icon',
  },
  {
    //by phone
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/phone_yellow.png',
    img_alt: 'phone icon',
  },
  {
    //by linkedIn
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/linkedin_yellow.png',
    img_alt: 'linkedIn icon',
  },
  {
    //by facebook
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/facebook_yellow.png',
    img_alt: 'facebook icon',
  },
  {
    //by instagram
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/instagram_yellow.png',
    img_alt: 'instagram icon',
  },
  {
    //by youtube
    link_href: '/',
    img_src: './assets/images/icons/socialMedia/youtube_yellow.png',
    img_alt: 'youtube icon',
  },
];
