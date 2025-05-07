
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Study Materials' | 'Research Papers' | 'Books' | 'Presentations' | 'Other';
  fileType: 'PDF' | 'DOC' | 'PPT' | 'ZIP' | 'Other';
  fileSize: string;
  dateUploaded: string;
  uploadedBy: string;
  downloads: number;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    description: 'A comprehensive guide to the fundamentals of computer science, including algorithms, data structures, and programming concepts.',
    category: 'Study Materials',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    dateUploaded: '2025-04-15',
    uploadedBy: 'Prof. Johnson',
    downloads: 1250,
    tags: ['Computer Science', 'Programming', 'Algorithms'],
    featured: true
  },
  {
    id: '2',
    title: 'Organic Chemistry Lab Manual',
    description: 'Laboratory procedures and experiments for Organic Chemistry courses, including safety guidelines and experiment setups.',
    category: 'Study Materials',
    fileType: 'PDF',
    fileSize: '4.7 MB',
    dateUploaded: '2025-04-10',
    uploadedBy: 'Dr. Chen',
    downloads: 875,
    tags: ['Chemistry', 'Lab', 'Organic Chemistry'],
    featured: true
  },
  {
    id: '3',
    title: 'Modern Literary Theory',
    description: 'An exploration of contemporary literary theories and their applications in textual analysis.',
    category: 'Books',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    dateUploaded: '2025-04-08',
    uploadedBy: 'Dr. Williams',
    downloads: 620,
    tags: ['Literature', 'Theory', 'English'],
    featured: true
  },
  {
    id: '4',
    title: 'Calculus Problem Set Solutions',
    description: 'Comprehensive solutions to calculus problems covering limits, derivatives, integrals, and series.',
    category: 'Study Materials',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    dateUploaded: '2025-04-05',
    uploadedBy: 'Prof. Garcia',
    downloads: 1450,
    tags: ['Mathematics', 'Calculus', 'Problem Set']
  },
  {
    id: '5',
    title: 'Psychological Research Methods',
    description: 'A guide to conducting research in psychology, including experimental design and statistical analysis.',
    category: 'Research Papers',
    fileType: 'DOC',
    fileSize: '1.2 MB',
    dateUploaded: '2025-04-03',
    uploadedBy: 'Dr. Thompson',
    downloads: 780,
    tags: ['Psychology', 'Research', 'Statistics']
  },
  {
    id: '6',
    title: 'Introduction to Quantum Physics',
    description: 'An overview of the fundamental concepts in quantum physics for undergraduate students.',
    category: 'Presentations',
    fileType: 'PPT',
    fileSize: '5.6 MB',
    dateUploaded: '2025-03-28',
    uploadedBy: 'Prof. Anderson',
    downloads: 560,
    tags: ['Physics', 'Quantum', 'Science']
  },
  {
    id: '7',
    title: 'American History: Civil War to Present',
    description: 'A comprehensive textbook covering American history from the Civil War to contemporary events.',
    category: 'Books',
    fileType: 'PDF',
    fileSize: '8.3 MB',
    dateUploaded: '2025-03-25',
    uploadedBy: 'Dr. Martinez',
    downloads: 920,
    tags: ['History', 'American', 'Civil War']
  },
  {
    id: '8',
    title: 'Economics of Sustainable Development',
    description: 'Research paper exploring the economic aspects of sustainable development practices.',
    category: 'Research Papers',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    dateUploaded: '2025-03-20',
    uploadedBy: 'Prof. Kim',
    downloads: 450,
    tags: ['Economics', 'Sustainability', 'Development']
  },
  {
    id: '9',
    title: 'Advanced Python Programming',
    description: 'Techniques and best practices for advanced Python programming, including data structures and algorithms.',
    category: 'Study Materials',
    fileType: 'PDF',
    fileSize: '3.5 MB',
    dateUploaded: '2025-03-18',
    uploadedBy: 'Dr. Garcia',
    downloads: 1100,
    tags: ['Programming', 'Python', 'Computer Science']
  },
  {
    id: '10',
    title: 'Introduction to Sociology',
    description: 'Foundational concepts and theories in sociology for undergraduate students.',
    category: 'Books',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    dateUploaded: '2025-03-15',
    uploadedBy: 'Prof. Smith',
    downloads: 850,
    tags: ['Sociology', 'Social Science', 'Theory']
  },
  {
    id: '11',
    title: 'Molecular Biology Techniques',
    description: 'A laboratory manual for common molecular biology techniques and protocols.',
    category: 'Study Materials',
    fileType: 'PDF',
    fileSize: '5.8 MB',
    dateUploaded: '2025-03-12',
    uploadedBy: 'Dr. Patel',
    downloads: 730,
    tags: ['Biology', 'Molecular', 'Laboratory']
  },
  {
    id: '12',
    title: 'Artificial Intelligence: Principles and Applications',
    description: 'An overview of AI principles, algorithms, and real-world applications.',
    category: 'Presentations',
    fileType: 'PPT',
    fileSize: '6.7 MB',
    dateUploaded: '2025-03-10',
    uploadedBy: 'Prof. Lee',
    downloads: 980,
    tags: ['AI', 'Computer Science', 'Machine Learning']
  }
];

export const getResourceById = (id: string): Resource | undefined => {
  return resources.find(resource => resource.id === id);
};

export const getAllTags = (): string[] => {
  const tags = resources.flatMap(resource => resource.tags);
  return [...new Set(tags)].sort();
};

export const getAllCategories = (): string[] => {
  const categories = resources.map(resource => resource.category);
  return [...new Set(categories)].sort();
};

export const getFeaturedResources = (): Resource[] => {
  return resources.filter(resource => resource.featured);
};

// New function to get most recent resources
export const getRecentResources = (limit: number = 3): Resource[] => {
  return [...resources]
    .sort((a, b) => new Date(b.dateUploaded).getTime() - new Date(a.dateUploaded).getTime())
    .slice(0, limit);
};
