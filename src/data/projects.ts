import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  location: string;
  year: string;
  category: string;
  area: string;
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
  awards?: string[];
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Skyline Corporate Tower',
    description: 'A 45-story premium commercial complex in the heart of Mumbai featuring state-of-the-art facilities and sustainable design.',
    fullDescription: 'Skyline Corporate Tower stands as a testament to modern architectural excellence and sustainable building practices. This 45-story commercial complex redefines the Mumbai skyline with its innovative design, cutting-edge technology, and commitment to environmental responsibility. The tower features Grade A office spaces, premium retail outlets, and world-class amenities, making it the preferred destination for leading corporations and businesses.',
    image: project1,
    images: [project1, project2, project3], // In a real app, you'd have multiple images per project
    location: 'Mumbai, Maharashtra',
    year: '2023',
    category: 'Commercial',
    area: '2.5M sq ft',
    status: 'completed',
    client: 'Mumbai Development Authority',
    duration: '36 months',
    cost: '₹850 Crores',
    architect: 'Jeedaar Builders Architecture Team',
    features: [
      'LEED Platinum Certification',
      'Smart Building Technology',
      'High-Speed Elevators',
      'Sky Gardens on Every 10th Floor',
      'Premium Business Center',
      'Multi-level Parking',
      'Rooftop Helipad',
      '24/7 Security & Surveillance'
    ],
    specifications: {
      floors: 45,
      parking: 1200,
      elevators: 12,
      amenities: [
        'Executive Lounges',
        'Conference Centers',
        'Fitness Center',
        'Cafeteria & Food Court',
        'Banking Services',
        'Medical Center',
        'Concierge Services'
      ]
    },
    awards: [
      'Best Commercial Project 2023 - Mumbai Real Estate Awards',
      'Excellence in Sustainable Design - Green Building Council',
      'Architectural Innovation Award - Indian Builders Association'
    ],
    challenges: [
      'Construction in dense urban environment',
      'Integration with existing metro infrastructure',
      'Achieving LEED Platinum certification',
      'Managing traffic flow during construction'
    ],
    solutions: [
      'Advanced construction methodologies to minimize disruption',
      'Coordinated planning with metro authorities',
      'Implementation of cutting-edge green technologies',
      'Strategic phased construction approach'
    ]
  },
  {
    id: 2,
    title: 'Royal Heights Residency',
    description: 'Luxury residential development with 200+ premium apartments offering panoramic city views and world-class amenities.',
    fullDescription: 'Royal Heights Residency epitomizes luxury living with its thoughtfully designed residential spaces that offer the perfect blend of comfort, elegance, and modern conveniences. Located in the prime area of Bangalore, this development features spacious apartments with panoramic city views, world-class amenities, and lush green landscapes that create an oasis of tranquility in the bustling city.',
    image: project2,
    images: [project2, project1, project3],
    location: 'Bangalore, Karnataka',
    year: '2022',
    category: 'Residential',
    area: '1.8M sq ft',
    status: 'completed',
    client: 'Royal Estates Private Limited',
    duration: '30 months',
    cost: '₹650 Crores',
    architect: 'Jeedaar Builders Residential Design Team',
    features: [
      'Premium 2, 3 & 4 BHK Apartments',
      'Panoramic City Views',
      'Smart Home Automation',
      'Landscaped Gardens',
      'Clubhouse with Premium Amenities',
      'Children\'s Play Area',
      'Jogging Track',
      'Rainwater Harvesting System'
    ],
    specifications: {
      floors: 25,
      units: 240,
      parking: 360,
      elevators: 8,
      amenities: [
        'Swimming Pool',
        'Gymnasium',
        'Spa & Wellness Center',
        'Multi-purpose Hall',
        'Library',
        'Game Room',
        'Barbecue Area',
        'Yoga Deck'
      ]
    },
    awards: [
      'Best Residential Project 2022 - Bangalore Property Awards',
      'Excellence in Design - Karnataka Architecture Council'
    ],
    challenges: [
      'Maximizing natural light in all units',
      'Creating green spaces in limited land area',
      'Ensuring privacy while maintaining community feel',
      'Managing construction logistics in residential area'
    ],
    solutions: [
      'Innovative building orientation and design',
      'Vertical gardens and terrace landscaping',
      'Strategic placement of common areas and private zones',
      'Coordinated construction schedule with minimal disturbance'
    ]
  },
  {
    id: 3,
    title: 'Metro Shopping Center',
    description: 'Modern retail and entertainment destination spanning 5 levels with innovative architecture and smart building technology.',
    fullDescription: 'Metro Shopping Center represents the future of retail and entertainment spaces with its innovative design, cutting-edge technology, and customer-centric approach. This 5-level destination combines shopping, dining, entertainment, and services under one roof, creating a comprehensive lifestyle experience that caters to diverse needs and preferences of modern consumers.',
    image: project3,
    images: [project3, project1, project2],
    location: 'Delhi NCR',
    year: '2024',
    category: 'Retail',
    area: '3.2M sq ft',
    status: 'ongoing',
    client: 'Metro Retail Developers',
    duration: '42 months',
    cost: '₹1,200 Crores',
    architect: 'Jeedaar Builders Commercial Design Team',
    features: [
      'Multi-level Retail Spaces',
      'Food Court & Fine Dining',
      'Multiplex Cinema',
      'Entertainment Zone',
      'Smart Parking System',
      'Digital Information Kiosks',
      'Sustainable Design Elements',
      'High-Speed Wi-Fi Throughout'
    ],
    specifications: {
      floors: 5,
      parking: 2000,
      elevators: 16,
      amenities: [
        'Multiplex with 8 Screens',
        'Gaming Zone',
        'Kids Play Area',
        'Food Court with 30+ Outlets',
        'Fine Dining Restaurants',
        'Brand Stores & Boutiques',
        'Services Center',
        'Event Spaces'
      ]
    },
    challenges: [
      'Creating efficient crowd flow management',
      'Integrating diverse retail and entertainment needs',
      'Ensuring sustainable operations at large scale',
      'Managing complex MEP systems'
    ],
    solutions: [
      'Advanced crowd simulation and flow optimization',
      'Flexible space design for diverse tenant requirements',
      'Implementation of green building technologies',
      'Integrated building management systems'
    ]
  },
  {
    id: 4,
    title: 'Green Valley Industrial Park',
    description: 'Eco-friendly industrial complex with advanced manufacturing facilities and sustainable infrastructure.',
    fullDescription: 'Green Valley Industrial Park sets new standards for sustainable industrial development by combining advanced manufacturing capabilities with environmental responsibility. This state-of-the-art facility provides modern infrastructure for various industries while maintaining the highest standards of environmental protection and worker safety.',
    image: project1, // Reusing images for demo
    images: [project1, project2, project3],
    location: 'Chennai, Tamil Nadu',
    year: '2023',
    category: 'Industrial',
    area: '5.0M sq ft',
    status: 'completed',
    client: 'Industrial Development Corporation',
    duration: '48 months',
    cost: '₹1,500 Crores',
    architect: 'Jeedaar Builders Industrial Design Team',
    features: [
      'Advanced Manufacturing Units',
      'Waste Management Systems',
      'Solar Power Generation',
      'Water Treatment Plant',
      'Rail Connectivity',
      'Administrative Complex',
      'Worker Housing',
      'Emergency Response Center'
    ],
    specifications: {
      floors: 3,
      parking: 3000,
      elevators: 20,
      amenities: [
        'Canteen & Food Services',
        'Medical Center',
        'Training Facilities',
        'Recreation Areas',
        'Banking Services',
        'Transportation Hub',
        'Maintenance Workshop'
      ]
    },
    awards: [
      'Best Industrial Project 2023 - Tamil Nadu Industry Awards',
      'Sustainability Excellence Award - CII'
    ]
  },
  {
    id: 5,
    title: 'Heritage Hotel Restoration',
    description: 'Restoration and modernization of a century-old heritage building into a luxury boutique hotel.',
    fullDescription: 'This prestigious project involved the careful restoration and modernization of a century-old heritage building, transforming it into a luxury boutique hotel while preserving its historical significance and architectural character. The project showcases our expertise in heritage conservation combined with modern hospitality standards.',
    image: project2,
    images: [project2, project3, project1],
    location: 'Jaipur, Rajasthan',
    year: '2022',
    category: 'Heritage',
    area: '150,000 sq ft',
    status: 'completed',
    client: 'Royal Heritage Hotels',
    duration: '24 months',
    cost: '₹200 Crores',
    architect: 'Heritage Conservation Specialists',
    features: [
      'Restored Original Architecture',
      'Modern Amenities Integration',
      'Traditional Craftsmanship',
      'Luxury Suites & Rooms',
      'Heritage Museum',
      'Royal Dining Halls',
      'Landscaped Courtyards',
      'Cultural Performance Spaces'
    ],
    specifications: {
      floors: 4,
      units: 45,
      parking: 100,
      elevators: 4,
      amenities: [
        'Spa & Wellness Center',
        'Multi-cuisine Restaurant',
        'Bar & Lounge',
        'Banquet Halls',
        'Business Center',
        'Library',
        'Gift Shop',
        'Concierge Services'
      ]
    },
    awards: [
      'Heritage Conservation Award 2022 - Archaeological Society',
      'Best Hospitality Project - Rajasthan Tourism Board'
    ]
  },
  {
    id: 6,
    title: 'Smart City Infrastructure',
    description: 'Comprehensive infrastructure development including roads, utilities, and smart city technologies.',
    fullDescription: 'This ambitious infrastructure project encompasses the development of comprehensive smart city infrastructure including roads, utilities, digital connectivity, and intelligent systems. The project demonstrates our capability in large-scale urban development and smart technology integration.',
    image: project3,
    images: [project3, project1, project2],
    location: 'Pune, Maharashtra',
    year: '2024',
    category: 'Infrastructure',
    area: '10.0M sq ft',
    status: 'ongoing',
    client: 'Pune Smart City Corporation',
    duration: '60 months',
    cost: '₹2,500 Crores',
    architect: 'Urban Planning Consortium',
    features: [
      'Smart Road Networks',
      'Integrated Utility Systems',
      'Digital Infrastructure',
      'Intelligent Traffic Management',
      'Waste Management Systems',
      'Water Distribution Network',
      'Public Transportation Hubs',
      'Green Corridors'
    ],
    specifications: {
      floors: 0, // Infrastructure project
      parking: 5000,
      elevators: 0,
      amenities: [
        'Smart Bus Stops',
        'Digital Information Centers',
        'Public Wi-Fi Zones',
        'Emergency Response Systems',
        'Environmental Monitoring',
        'Smart Street Lighting',
        'Public Parks & Recreation'
      ]
    }
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
