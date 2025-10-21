export const skills = {
  'Programming': ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  'Backend': ['ASP.NET Core', 'Web API', 'Entity Framework', 'Dapper'],
  'Frontend': ['Angular 17', 'HTML5', 'CSS3', 'Bootstrap', 'RxJS'],
  'Tools & DevOps': ['Azure DevOps', 'Git', 'SQL Server', 'Firebase', 'Postman', 'SSMS']
};

export const projects = [
  {
    title: '.NET API Code Generator',
    description: 'A NuGet package that automates the generation of Controller, Model, Repository, and Business layers with dependency injection. Supports modular architectures and configurable CRUD generation. Downloaded 1300+ times and actively maintained at version 1.0.7.',
    tech: ['C#', '.NET', 'NuGet', 'CLI', 'File I/O'],
    metrics: '1300+ Downloads • v1.0.8',
    link: 'https://www.nuget.org/packages/CodeGenTool',
    github: 'https://github.com/MuzammilCodes/CodeGenTool'
  },
  {
    title: 'Batch Record Management System',
    description: 'Enterprise document management system with automated DOCX/PDF workflows using Open XML SDK and iTextSharp. Features server-side pagination handling 100k+ records in 3 seconds, automated cleanup jobs reducing memory spikes by 30%, and JWT authentication with microservices architecture.',
    tech: ['Angular', '.NET Core', 'SQL Server', 'VSTO', 'WPF', 'JWT', 'Microservices'],
    metrics: '100k+ Records • 3s Load Time',
    link: '',
    github: ''
  },
  {
    title: 'Process Work Order System',
    description: 'Engineering equipment issue reporting system built with Domain Driven Design pattern. Features comprehensive CRUD operations, bulk upload support, consistent resolution tracking, and deployed on IIS with Azure DevOps CI/CD pipelines.',
    tech: ['.NET Core', 'Angular', 'SQL Server', 'Entity Framework', 'DDD', 'IIS'],
    metrics: 'Enterprise Scale • DDD Architecture',
    link: '',
    github: ''
  }
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Audree Infotech',
    logo:'/public/audree_logo.png',
    period: 'Sep 2023 – Present',
    location: 'Hyderabad, India',
    description: 'Developing enterprise-grade applications using .NET Core and Angular. Built CLI tools, implemented automated testing, and contributed to Agile development processes with sprint planning, code reviews, and daily standups.',
    achievements: [
      'Built .NET CLI tool that auto-generates controller, model, repository, and business layers with dependency injection, reducing boilerplate setup time by 99.7% (from 2 hours to 20 seconds)',
      'Developed Batch Record Management System with automated DOCX/PDF workflows, enabling rapid retrieval of lakhs of records using Angular DataTables with server-side pagination',
      'Identified repetitive code patterns through observation and refactored them into shared, reusable modules, improving maintainability and consistency across components',
      'Implemented unit testing and automated regression checks using CI/CD pipelines in Azure DevOps, ensuring higher reliability before releases',
      'Optimized database queries and implemented automated cleanup jobs, reducing memory spikes by 30%'
    ]
  },
  {
    role: 'Software Development Intern',
    company: 'Audree Infotech',
    period: 'Jun 2023 – Sep 2023',
    location: 'Hyderabad, India',
    description: 'Gained hands-on experience in full-stack development with C#, ASP.NET MVC, and .NET Framework through real-world projects.',
    achievements: [
      'Developed real-world applications using C#, ASP.NET MVC, and .NET Framework',
      'Worked extensively with SQL databases and ORM tools like Entity Framework for data management',
      'Participated in code reviews and learned best practices for enterprise application development'
    ]
  },
  {
    role: 'Frontend Development Intern',
    company: 'Score Kitty',
    period: 'Dec 2021 – Feb 2022',
    location: 'Hyderabad, India (Remote)',
    description: 'Designed dynamic frontends and customized WordPress sites, focusing on UI/UX enhancement and responsive design.',
    achievements: [
      'Designed dynamic frontend to enhance user interface (UI) and user experience (UX)',
      'Customized and maintained WordPress sites using Elementor, significantly reducing design turnaround time and streamlining client feedback cycles',
      'Ensured mobile responsiveness and cross-platform compatibility of web applications'
    ]
  }
];

export const education = {
  degree: 'B.Tech in Information Technology',
  institution: 'VNR Vignana Jyothi Institute of Engineering & Technology',
  period: '2020 – 2023',
  cgpa: '7.3 / 10'
};

export const certifications = [
  {
    name: 'Google Certified UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'October 2022',
    link: 'https://drive.google.com/file/d/1uOxohUqt-aBnsXx4aN_iw55JPbuEnNnz/view?usp=sharing'
  },
  {
    name: 'Oxford Achiever English Proficiency',
    issuer: 'Oxford',
    date: '2022',
    link: 'https://drive.google.com/file/d/1uxXv_f3rI1x89dk1VJqY8pTUqjmVdHun/view?usp=sharing'
  }
];

export const personalInfo = {
  name: 'Mohammed Muzamiluddin',
  email: 'muzammil.webdev@gmail.com',
  phone: '+91 75692 70679',
  location: 'Hyderabad, India',
  github: 'https://github.com/MuzammilCodes',
  linkedin: 'https://www.linkedin.com/in/muzammil-codes',
};