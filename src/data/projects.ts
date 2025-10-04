import fastBuilding from '@/assets/1.1.jpg';
import comstechHQ from '@/assets/02.jpg';
import telenorBuilding from '@/assets/03.jpeg';
import supremeCourt from '@/assets/04.webp';
import jacarandaPool from '@/assets/05.jpg';
import malikarshad from '@/assets/MALIK ARSHAD.jpg';
import bilalbabar from '@/assets/BILAL BABAR.jpg';
import syed from '@/assets/SYED ZAFAR.jpg';
import jahan from '@/assets/GEN JAHANGIR.jpg';
import ift from '@/assets/IFT.jpg';
import metrocon from '@/assets/Page0005.jpg';
import g91 from '@/assets/hashim.jpg';
import f10 from '@/assets/f10.jpg';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  location: string;
  year: string;
  category: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  client: string;
  duration: string;
  cost: string;
  architect: string;
  features: string[];
  specifications: {
    floors: number;
    units?: number;
    parking: number;
    elevators: number;
    amenities: string[];
  };
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Foundation for Advancement of Science and Technology (FAST) Building',
    description: 'Modern institutional complex showcasing expertise in contemporary commercial architecture and complex infrastructure development with distinctive glass and concrete facade.',
    fullDescription: 'This sophisticated institutional building showcases our expertise in contemporary commercial architecture and complex infrastructure development. The project features a striking modern design with a distinctive glass and concrete facade, incorporating advanced curtain wall systems and precision masonry work. The multi-story institutional complex demonstrates our capability to deliver high-end institutional construction that combines aesthetic appeal with functional excellence, meeting the demanding standards required for educational and research facilities.',
    image: fastBuilding,
    location: 'G-9, Islamabad, Pakistan',
    year: '1998',
    category: 'Institutional',
    status: 'completed',
    client: 'Foundation for Advancement of Science and Technology',
    duration: '12 months',
    cost: 'PKR 250 Million',
    architect: 'Jeedaar Builders Architecture Team',
    features: [
      'Multi-story institutional complex with modern architectural elements',
      'Advanced glass curtain wall installation with custom framing systems',
      'Precision concrete work with architectural finishes',
      'Professional landscaping and exterior hardscaping',
      'Complete interior infrastructure including elevators and staircases',
      'Seismic-resistant structural engineering implementation',
      'Modern mechanical systems',
      'Educational facility standards compliance'
    ],
    specifications: {
      floors: 8,
      parking: 200,
      elevators: 4,
      amenities: [
        'Research Laboratories',
        'Lecture Halls',
        'Administrative Offices',
        'Library Facilities',
        'Computer Centers',
        'Conference Rooms',
        'Cafeteria',
        'Security Systems'
      ]
    },
    challenges: [
      'Meeting educational facility standards',
      'Integrating modern technology infrastructure',
      'Seismic-resistant design requirements',
      'Complex mechanical systems integration'
    ],
    solutions: [
      'Advanced structural engineering for seismic resistance',
      'Comprehensive technology infrastructure planning',
      'Precision construction methodologies',
      'Coordinated mechanical and electrical systems'
    ]
  },
  {
    id: 2,//oic headquater -
    title: 'OIC Headquarters - COMSTECH Complex',
    description: 'Prestigious international headquarters building representing expertise in high-security diplomatic and administrative facilities with sophisticated architectural design.',
    fullDescription: 'This prestigious international headquarters building represents our expertise in constructing high-security diplomatic and administrative facilities. The COMSTECH complex features sophisticated architectural design with extensive glass curtain wall systems and ceremonial elements befitting an international organization. This complex project showcases our ability to deliver construction that meets international diplomatic standards while incorporating both functional requirements and ceremonial significance.',
    image: comstechHQ,
    location: 'G-5, Islamabad, Pakistan',
    year: '2004',
    category: 'Diplomatic',
    status: 'completed',
    client: 'COMSTECH - Organization of Islamic Cooperation',
    duration: '19 months',
    cost: 'PKR 450 Million',
    architect: 'Jeedaar Builders International Design Team',
    features: [
      'International standard diplomatic facility construction',
      'Extensive ceremonial flag display infrastructure with precision installation',
      'Advanced security systems integration and controlled access points',
      'Large-scale glass curtain wall and window systems',
      'Professional landscaping with manicured grounds and green spaces',
      'Multi-level architectural design with modern aesthetic elements',
      'Complete mechanical and electrical systems for international standards',
      'Specialized HVAC systems for large-scale administrative operations'
    ],
    specifications: {
      floors: 6,
      parking: 500,
      elevators: 8,
      amenities: [
        'Diplomatic Conference Halls',
        'Ceremonial Reception Areas',
        'International Meeting Rooms',
        'Administrative Offices',
        'Security Control Centers',
        'VIP Lounges',
        'Media Centers',
        'Protocol Services'
      ]
    },
    challenges: [
      'Meeting international diplomatic facility standards',
      'Integrating high-security systems seamlessly',
      'Creating ceremonial spaces for international events',
      'Managing extended timeline with precision'
    ],
    solutions: [
      'Collaboration with international security consultants',
      'Advanced construction methodologies for sensitive facilities',
      'Precision ceremonial infrastructure installation',
      'Coordinated project management for complex requirements'
    ]
  },
  {
    id: 3,
    title: 'Telenor Pakistan Corporate Headquarters',
    description: 'Modern corporate headquarters showcasing expertise in fast-track commercial construction with innovative curved glass facade and contemporary design elements.',
    fullDescription: 'This modern corporate headquarters showcases our expertise in fast-track commercial construction and cutting-edge architectural design. The Telenor building features an innovative curved glass facade and contemporary design elements that reflect the dynamic nature of the telecommunications industry. This project demonstrates our ability to deliver complex architectural designs on accelerated schedules while maintaining the highest quality standards.',
    image: telenorBuilding,
    location: 'F-7, Islamabad, Pakistan',
    year: '2004',
    category: 'Commercial',
    status: 'completed',
    client: 'Telenor Pakistan (Private) Limited',
    duration: '6 months',
    cost: 'PKR 180 Million',
    architect: 'Jeedaar Builders Commercial Design Team',
    features: [
      'Distinctive curved glass curtain wall system with advanced engineering',
      'Fast-track construction delivery within 6-month timeline',
      'Modern corporate architecture with sleek, contemporary aesthetics',
      'Extensive glazing systems for natural light optimization',
      'Professional landscaping with tropical plant integration',
      'Ground-level plaza and entrance areas with premium finishes',
      'Advanced telecommunications infrastructure integration',
      'Energy-efficient building systems and climate control'
    ],
    specifications: {
      floors: 12,
      parking: 300,
      elevators: 6,
      amenities: [
        'Executive Offices',
        'Corporate Meeting Rooms',
        'Telecommunications Operations Center',
        'Employee Cafeteria',
        'Training Facilities',
        'Reception & Lobby Areas',
        'IT Infrastructure Centers',
        'Parking & Security Systems'
      ]
    },
    challenges: [
      'Extremely tight 6-month construction timeline',
      'Complex curved glass facade installation',
      'Integrating advanced telecommunications infrastructure',
      'Maintaining quality standards under accelerated schedule'
    ],
    solutions: [
      'Advanced project management and parallel construction activities',
      'Precision engineering for curved glass curtain wall systems',
      'Pre-planning of telecommunications infrastructure integration',
      'Quality control systems adapted for fast-track delivery'
    ]
  },
  {
    id: 4,
    title: 'Supreme Court of Pakistan',
    description: 'Monumental judicial complex representing one of Pakistan\'s most significant institutional construction projects, combining traditional architectural elements with modern functionality.',
    fullDescription: 'This monumental judicial complex represents one of Pakistan\'s most significant institutional construction projects. The Supreme Court building showcases our expertise in large-scale government construction, combining traditional architectural elements with modern functionality to create a facility befitting the nation\'s highest judicial authority. This flagship project demonstrates our capability to execute Pakistan\'s most prestigious government construction projects with the highest standards of craftsmanship and security implementation.',
    image: supremeCourt,
    location: 'Islamabad, Pakistan',
    year: '2008',
    category: 'Judicial',
    status: 'completed',
    client: 'Government of Pakistan - Ministry of Law and Justice',
    duration: '19 months',
    cost: 'PKR 2.5 Billion',
    architect: 'Jeedaar Builders Government Projects Division',
    features: [
      'Monumental institutional architecture with classical design elements',
      'Large-scale concrete construction with architectural finishes',
      'Expansive courtyards and ceremonial spaces for public access',
      'Advanced security systems integration throughout the complex',
      'Specialized courtroom construction with acoustic engineering',
      'Comprehensive landscaping across extensive grounds',
      'Multi-building complex with interconnected facilities',
      'Premium interior finishes including marble work and custom millwork'
    ],
    specifications: {
      floors: 8,
      parking: 1000,
      elevators: 12,
      amenities: [
        'Supreme Court Chambers',
        'Multiple Courtrooms with Advanced Audio-Visual Systems',
        'Judges\' Chambers and Conference Rooms',
        'Legal Research Library',
        'Administrative Offices',
        'Public Galleries',
        'Security Control Centers',
        'Media Centers and Press Facilities'
      ]
    },
    challenges: [
      'Meeting the highest security standards for national judicial facility',
      'Integrating traditional architectural elements with modern functionality',
      'Specialized acoustic requirements for courtrooms',
      'Managing construction of sensitive government facility'
    ],
    solutions: [
      'Collaboration with international security and acoustic consultants',
      'Advanced construction methodologies for government facilities',
      'Precision acoustic engineering for judicial proceedings',
      'Comprehensive security integration throughout construction process'
    ]
  },
  {
    id: 5,
    title: 'Jacaranda Hotel - Swimming Pool & Recreation Facility',
    description: 'Sophisticated hotel swimming pool facility demonstrating expertise in luxury hospitality construction and specialized aquatic facility development with premium finishes and artistic elements.',
    fullDescription: 'This sophisticated hotel swimming pool facility demonstrates our expertise in luxury hospitality construction and specialized aquatic facility development. The Jacaranda Hotel pool complex features premium finishes, artistic elements, and professional-grade recreational amenities. This project showcases our ability to deliver luxury hospitality construction that combines functional excellence with aesthetic appeal, demonstrating our expertise in specialized construction requiring precise technical execution and premium finishing standards.',
    image: jacarandaPool,
    location: 'DHA Phase 2, Islamabad, Pakistan',
    year: '2010',
    category: 'Hospitality',
    status: 'completed',
    client: 'Jacaranda Hotel Management',
    duration: '8 months',
    cost: 'PKR 85 Million',
    architect: 'Jeedaar Builders Hospitality Design Team',
    features: [
      'Professional swimming pool construction with advanced filtration systems',
      'Custom artistic wall murals and themed decorative elements (Serenity, Tranquility, Equanimity)',
      'Premium ceramic tile installation with waterproof finishing systems',
      'Advanced LED lighting systems with linear ceiling fixtures',
      'Precision pool architecture with proper drainage and leveling',
      'High-end poolside flooring with slip-resistant materials',
      'Integrated pool accessories including safety equipment and furniture',
      'Climate-controlled indoor environment with ventilation systems'
    ],
    specifications: {
      floors: 1,
      parking: 50,
      elevators: 0,
      amenities: [
        'Professional Swimming Pool',
        'Pool Deck & Lounge Area',
        'Changing Rooms & Lockers',
        'Pool Bar & Refreshment Counter',
        'Artistic Themed Wall Installations',
        'Advanced Pool Filtration & Maintenance Systems',
        'Safety Equipment & Emergency Systems',
        'Climate Control & Ventilation'
      ]
    },
    challenges: [
      'Precise waterproofing and moisture management throughout facility',
      'Installing complex artistic wall murals with pool environment considerations',
      'Integrating advanced pool systems with hotel infrastructure',
      'Achieving premium finishing standards in high-humidity environment'
    ],
    solutions: [
      'Advanced waterproofing systems and moisture barriers',
      'Specialized installation techniques for artistic elements in pool environment',
      'Coordinated integration of pool mechanical systems with hotel utilities',
      'Premium materials and finishes designed for hospitality pool environments'
    ]
  },
  {
    id: 6,
    title: 'Contemporary Residential Complex',
    description: 'Sophisticated residential project showcasing expertise in contemporary home construction with complex architectural design elements and modern geometric forms.',
    fullDescription: 'This sophisticated residential project showcases our expertise in contemporary home construction with complex architectural design elements. The residence features modern geometric forms, clean lines, and innovative facade treatments that demonstrate our capability in high-end residential construction. This project demonstrates our versatility in delivering complete residential construction from foundation to finish, showcasing our ability to handle sophisticated residential projects that require both technical expertise and aesthetic sensibility.',
    image: metrocon,
    location: 'F-8/2 Islamabad, Pakistan',
    year: '2009',
    category: 'Residential',
    status: 'completed',
    client: 'Private Residential Client',
    duration: '12 months',
    cost: 'PKR 45 Million',
    architect: 'Jeedaar Builders Residential Design Team',
    features: [
      'Complex geometric facade design with multi-level architecture',
      'Contemporary residential construction with modern aesthetic elements',
      'Advanced concrete construction with architectural finishing',
      'Integrated landscaping with mature tree preservation',
      'Custom window and glazing systems throughout',
      'Multi-story residential design with balconies and terraces',
      'Professional exterior finishes with weather-resistant materials',
      'Complete residential infrastructure including utilities and drainage'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Custom Millwork & Interior Construction',
        'Coordinated Site Development',
        'Lawn and Garden Areas',
        'Modern Utility Systems',
        'Security Systems',
        'Climate Control',
        'Premium Finishes',
        'Landscaped Outdoor Spaces'
      ]
    },
    challenges: [
      'Complex geometric facade design execution',
      'Mature tree preservation during construction',
      'Integrating modern systems with architectural aesthetics',
      'Custom millwork precision requirements'
    ],
    solutions: [
      'Advanced facade engineering and precision construction',
      'Careful site planning to preserve existing landscaping',
      'Coordinated systems integration approach',
      'Specialized craftsmanship for custom elements'
    ]
  },
  {
    id: 7,
    title: 'Malik Arshad Residence',
    description: 'Elegant contemporary luxury home demonstrating expertise in sophisticated architectural design with premium natural stone cladding and integrated landscape design.',
    fullDescription: 'This elegant contemporary residence demonstrates our expertise in luxury home construction with sophisticated architectural design and premium finishing materials. The project showcases modern residential architecture with distinctive stone cladding and integrated landscape design. This project exemplifies our commitment to delivering complete luxury residential construction that combines architectural sophistication with functional excellence, meeting the exacting standards of discerning homeowners.',
    image: malikarshad,
    location: 'Islamabad, Pakistan',
    year: '2014',
    category: 'Residential',
    status: 'completed',
    client: 'Malik Arshad',
    duration: '12 months',
    cost: 'PKR 65 Million',
    architect: 'Jeedaar Builders Luxury Residential Division',
    features: [
      'Contemporary two-story residential design with modern aesthetic elements',
      'Premium natural stone cladding with precision installation techniques',
      'Extensive glazing systems with custom window configurations',
      'Integrated garage construction with seamless architectural integration',
      'Professional landscaping with tropical plant selections and mature trees',
      'Custom concrete work including driveways and walkway systems',
      'Multi-level terraces and balcony construction with safety railings',
      'Complete interior construction and finishing (full house delivery)'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Premium Stone Cladding',
        'Custom Window Systems',
        'Integrated Garage',
        'Professional Landscaping',
        'Multi-level Terraces',
        'Complete Interior Finishing',
        'Advanced Roofing Systems',
        'Comprehensive Site Development'
      ]
    },
    challenges: [
      'Precision stone cladding installation',
      'Seamless garage architectural integration',
      'Complex multi-level terrace construction',
      'Coordinating complete interior and exterior finishing'
    ],
    solutions: [
      'Specialized stone installation techniques and quality control',
      'Integrated architectural design approach',
      'Advanced structural engineering for terraces',
      'Comprehensive project management for full-house delivery'
    ]
  },
  {
    id: 8,
    title: 'Bilal Babar Residence',
    description: 'Prestigious two-story residential project in G-6/5 Islamabad featuring luxury construction with premium travertine cladding and modern security features.',
    fullDescription: 'This prestigious two-story residential project represents our expertise in constructing luxury homes for distinguished clients in Islamabad\'s premium residential sectors. The project demonstrates our capability to deliver sophisticated residential construction that meets the highest standards of quality and design excellence. This project showcases our ability to deliver luxury residential construction for distinguished clients while maintaining the highest standards of craftsmanship and security implementation.',
    image: bilalbabar,
    location: 'G-6/5, Islamabad, Pakistan',
    year: '2014',
    category: 'Residential',
    status: 'completed',
    client: 'Bilal Babar',
    duration: '12 months',
    cost: 'PKR 55 Million',
    architect: 'Jeedaar Builders Premium Residential Team',
    features: [
      'Contemporary two-story residential design with modern luxury elements',
      'Premium travertine stone cladding with precision installation',
      'Extensive balcony construction with custom wooden railings',
      'High-security wooden fencing with modern gate systems',
      'Solar panel integration for energy efficiency',
      'Complete HVAC systems with split-unit air conditioning',
      'Professional hardscaping with interlocking pavers',
      'Custom concrete work including covered parking areas'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Premium Travertine Cladding',
        'Custom Wooden Railings',
        'High-Security Fencing',
        'Solar Panel Systems',
        'Complete HVAC Systems',
        'Professional Hardscaping',
        'Covered Parking',
        'Advanced Security Features'
      ]
    },
    challenges: [
      'Premium travertine installation in challenging weather',
      'Integrating solar systems with architectural design',
      'High-security requirements for prestigious location',
      'Complex HVAC system integration'
    ],
    solutions: [
      'Weather-resistant installation techniques and protective measures',
      'Custom solar mounting systems designed for aesthetic integration',
      'Advanced security system design and implementation',
      'Coordinated mechanical systems installation'
    ]
  },
  {
    id: 9,
    title: 'General Syed U Zafar Farmhouse',
    description: 'Sophisticated farmhouse project on challenging hillside terrain demonstrating expertise in complex site development and luxury residential construction.',
    fullDescription: 'This sophisticated farmhouse project demonstrates our expertise in complex site development and luxury residential construction on challenging terrain. Built on uneven hillside land, this project required extensive site preparation and expert engineering solutions to create a stable foundation for this elegant estate. This project showcases our specialized capability in tackling complex construction challenges that require both engineering expertise and construction innovation.',
    image: syed,
    location: 'DHA Phase 1, Islamabad, Pakistan',
    year: '2011',
    category: 'Residential',
    status: 'completed',
    client: 'General Syed U Zafar',
    duration: '12 months',
    cost: 'PKR 75 Million',
    architect: 'Jeedaar Builders Site Development Specialists',
    features: [
      'Complex hillside site development with professional land leveling and grading',
      'Expert retaining wall construction using natural stone masonry',
      'Multi-level residential design adapted to challenging topography',
      'Traditional clay tile roofing with weather-resistant installation',
      'Extensive natural stone boundary walls with precision craftsmanship',
      'Professional landscaping integration with mature tree preservation',
      'Custom driveway and access road construction on sloped terrain',
      'Advanced drainage systems to manage hillside water flow'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 4,
      elevators: 0,
      amenities: [
        'Natural Stone Masonry',
        'Traditional Clay Tile Roofing',
        'Professional Landscaping',
        'Custom Access Roads',
        'Advanced Drainage Systems',
        'Retaining Wall Systems',
        'Mature Tree Preservation',
        'Complete Site Utilities'
      ]
    },
    challenges: [
      'Uneven hillside terrain requiring extensive preparation',
      'Complex drainage management for hillside location',
      'Retaining wall construction on sloped ground',
      'Access road construction on challenging topography'
    ],
    solutions: [
      'Expert land grading and professional site preparation',
      'Advanced drainage engineering and water management systems',
      'Specialized retaining wall construction techniques',
      'Custom road engineering for hillside access'
    ]
  },
  {
    id: 10,
    title: 'Major General Jahangir Khan Residence - Renovation',
    description: 'Complex residential renovation project featuring structural modifications and ultra-modern architectural updates with specialized staircase engineering solutions.',
    fullDescription: 'This sophisticated renovation project demonstrates our expertise in complex residential modifications and structural problem-solving. The project involved comprehensive updates to a luxury residence with particular focus on resolving challenging staircase engineering issues that required specialized construction solutions. This project showcases our ability to tackle complex renovation challenges that require both architectural vision and engineering expertise.',
    image: jahan,
    location: 'DHA Phase 1, Islamabad, Pakistan',
    year: '2011',
    category: 'Residential',
    status: 'completed',
    client: 'Major General Jahangir Khan',
    duration: '3 months',
    cost: 'PKR 25 Million',
    architect: 'Jeedaar Builders Renovation Specialists',
    features: [
      'Ultra-modern architectural renovation with contemporary design elements',
      'Complex staircase reconstruction and structural modifications',
      'Multi-level geometric design with cantilevered elements',
      'Premium exterior cladding with mixed materials (concrete and wood)',
      'Advanced lighting integration throughout the structure',
      'Professional hardscaping with interlocking paver installation',
      'Custom gate and security systems with modern aesthetics',
      'Precision concrete work for architectural features'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Reconstructed Staircase Systems',
        'Cantilevered Architectural Elements',
        'Mixed Material Cladding',
        'Advanced Lighting Systems',
        'Professional Hardscaping',
        'Custom Security Gates',
        'Modern Architectural Features',
        'Fast-Track Renovation'
      ]
    },
    challenges: [
      'Complex staircase structural issues requiring engineering solutions',
      'Fast-track 3-month timeline for comprehensive renovation',
      'Integrating modern elements with existing structure',
      'Cantilevered design elements requiring structural support'
    ],
    solutions: [
      'Specialized structural engineering and staircase reconstruction',
      'Efficient project management for accelerated timeline',
      'Strategic renovation approach preserving structural integrity',
      'Advanced engineering for cantilevered architectural features'
    ]
  },
  {
    id: 11,
    title: 'Contemporary Residential Villa - F-10 Islamabad',
    description: 'Sophisticated two-story residential villa featuring striking contemporary design with natural stone cladding and extensive glazing systems.',
    fullDescription: 'This sophisticated two-story residential villa exemplifies our commitment to modern architectural excellence and superior construction quality. The project features a striking contemporary design that seamlessly blends natural stone cladding with sleek glass elements, creating an impressive street presence. This project represents our capability to transform client visions into reality, delivering a home that combines modern luxury with practical living spaces.',
    image: f10,
    location: 'F-10, Islamabad, Pakistan',
    year: '2015',
    category: 'Residential',
    status: 'completed',
    client: 'Mr. Arshad',
    duration: '12 months',
    cost: 'PKR 52 Million',
    architect: 'Jeedaar Builders Contemporary Design Team',
    features: [
      'Modern facade incorporating textured stone veneer on upper level',
      'Extensive use of floor-to-ceiling glass panels and contemporary railings',
      'Spacious ground-level garage with premium roller shutters',
      'Thoughtfully designed entrance with decorative paving',
      'High-grade finishing materials including premium stone work',
      'Integration of multiple material systems (stone, glass, steel, concrete)',
      'Established landscaping with professional site development',
      'Modern architectural elements with functional design'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Textured Stone Veneer',
        'Floor-to-Ceiling Glass',
        'Premium Roller Shutters',
        'Decorative Paving',
        'Professional Landscaping',
        'Multiple Material Systems',
        'Contemporary Railings',
        'Integrated Lighting'
      ]
    },
    challenges: [
      'Integration of multiple material systems requiring precise coordination',
      'Floor-to-ceiling glazing installation with weather sealing',
      'Textured stone veneer application on upper levels',
      'Coordinated site development with established landscaping'
    ],
    solutions: [
      'Skilled craftsmanship coordination between multiple trades',
      'Advanced glazing techniques with proper weather protection',
      'Specialized stone installation methods for textured surfaces',
      'Professional landscape integration with construction activities'
    ]
  },
  {
    id: 12,
    title: 'Two-Story Residential Villa - G-9 Islamabad',
    description: 'Elegant residential villa showcasing comprehensive interior finishing and custom security solutions with decorative grilling systems.',
    fullDescription: 'This elegant two-story residential villa showcases our expertise in comprehensive interior finishing and custom security solutions. The project involved complete interior renovation and installation of decorative security grilling systems throughout the property. This project demonstrates our ability to deliver rapid, high-quality construction within tight timelines, requiring efficient project management and skilled coordination between multiple trades.',
    image: g91,
    location: 'G-9, Islamabad, Pakistan',
    year: '2000',
    category: 'Residential',
    status: 'completed',
    client: 'Raja Jahanjab',
    duration: '3 months',
    cost: 'PKR 18 Million',
    architect: 'Jeedaar Builders Interior Finishing Team',
    features: [
      'Clean, minimalist design with spacious balconies and large window openings',
      'Floor-to-ceiling windows maximizing natural light and panoramic views',
      'Custom-designed decorative grilling combining security with aesthetic appeal',
      'Expansive upper-level balcony with modern railings and integrated lighting',
      'Secure entrance with premium metal gate and decorative elements',
      'Complete interior renovation including flooring, wall treatments, and ceiling work',
      'Custom grillwork fabrication and installation',
      'Professional painting and weatherproofing applications'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Custom Security Grilles',
        'Floor-to-Ceiling Windows',
        'Expansive Balconies',
        'Premium Metal Gates',
        'Complete Interior Finishing',
        'Modern Railings',
        'Integrated Lighting',
        'Professional Weatherproofing'
      ]
    },
    challenges: [
      'Extremely tight 3-month completion timeline',
      'Integrating security features with architectural aesthetics',
      'Complete interior finishing coordination',
      'Custom grillwork design and fabrication'
    ],
    solutions: [
      'Efficient project management and trade coordination',
      'Aesthetic security design balancing function and appearance',
      'Streamlined interior finishing processes',
      'Specialized fabrication techniques for decorative security elements'
    ]
  },
  {
    id: 13,
    title: 'Premium Residential Villa with Basement Waterproofing - G-9/1',
    description: 'Sophisticated villa with neo-classical facade featuring complex basement waterproofing solutions and sustainable solar energy integration.',
    fullDescription: 'This sophisticated two-story villa represents one of our most technically challenging residential projects, requiring innovative engineering solutions to address complex basement water drainage issues while delivering an architecturally stunning home. This project showcases our expertise in solving complex technical challenges while maintaining aesthetic excellence, making this a benchmark for both technical innovation and architectural beauty.',
    image: ift,
    location: 'G-9/1, Islamabad, Pakistan',
    year: '2013',
    category: 'Residential',
    status: 'completed',
    client: 'Iftikhar',
    duration: '12 months',
    cost: 'PKR 68 Million',
    architect: 'Jeedaar Builders Technical Engineering Team',
    features: [
      'Neo-classical facade with elegant arched windows and decorative stone trim',
      'Solar panel installation with custom mounting system for sustainable energy',
      'Curved architectural elements with ornate railings and integrated planters',
      'High-quality exterior cladding with contrasting trim work',
      'Advanced membrane waterproofing technology for basement',
      'French drain installation around foundation perimeter',
      'Sump pump systems with backup power',
      'Vapor barrier installation and moisture control systems'
    ],
    specifications: {
      floors: 2,
      units: 1,
      parking: 2,
      elevators: 0,
      amenities: [
        'Advanced Basement Waterproofing',
        'Solar Energy Systems',
        'Neo-Classical Architecture',
        'French Drain Systems',
        'Sump Pump Installation',
        'Moisture Control Systems',
        'Ornate Railings',
        'Integrated Planters'
      ]
    },
    challenges: [
      'Complex basement water drainage and infiltration issues',
      'Ground water table management requiring specialized solutions',
      'Solar panel integration with neo-classical architectural design',
      'Advanced waterproofing at critical structural joints'
    ],
    solutions: [
      'Comprehensive drainage system with French drains and sump pumps',
      'Advanced membrane waterproofing and vapor barrier technology',
      'Custom solar mounting systems designed for aesthetic integration',
      'Specialized foundation engineering for water table challenges'
    ]
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
};

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter(project => project.status === status);
};
