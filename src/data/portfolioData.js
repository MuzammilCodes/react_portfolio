export const skills = {
  'Programming': ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  'Backend': ['.NET', 'ASP.NET Core', 'Web API', 'REST APIs', 'Entity Framework', 'Dapper', '.NET Framework', 'MVC', 'JWT', 'Microservices', 'Elasticsearch'],
  'Frontend': ['Vue.js 3', 'Vue.js 2', 'Angular 17', 'CSHTML/Razor', 'HTML', 'CSS', 'Bootstrap', 'RxJS'],
  'Tools & DevOps': ['SSMS', 'Google Cloud', 'Bamboo', 'Bitbucket', 'GitHub', 'Git', 'Jira', 'Azure DevOps', 'Postman', 'Firebase', 'VSTO', 'Open XML SDK', 'iTextSharp', 'WPF', 'Google Colab']
};

export const projects = [
  {
    title: 'Screenshot Organiser',
    description: 'An independently developed Android app that detects newly captured screenshots and shows a floating popup so users can move them into custom folders, with every move manually confirmed. Runs background monitoring with foreground services and overlay integration, processes images locally on the device, and was published to Google Play as a production App Bundle after adapting storage access to Play permission policies and testing across multiple devices and API levels.',
    tech: ['C#', '.NET 10', 'Android', 'Foreground Services', 'Overlay', 'Google Play'],
    metrics: 'Published on Google Play • Android',
    link: 'https://play.google.com/store/apps/details?id=com.muzammilcodes.screenshotorganiser',
    github: ''
  },
  {
    title: 'Images2SVG',
    description: 'An independently developed full-stack web application that converts raster images into scalable SVG graphics through a browser-based workflow. Users can upload images, preview the generated SVG beside the original, and download the vector output without installing desktop software. The React and Node.js frontend is deployed on Netlify and communicates with a Python image-conversion backend deployed on Render. The platform also includes SEO, accessibility, sitemap, robots.txt, and educational content improvements.',
    tech: ['React', 'Node.js', 'Python', 'JavaScript', 'Netlify', 'Render'],
    metrics: 'React Frontend • Python Backend',
    link: 'https://sketch2svg.netlify.app',
    github: ''
  },
  {
    title: 'Smart Attach .NET',
    description: 'A Visual Studio Code extension that attaches the debugger to multiple configured .NET processes with a single command. Supports configurable DLL targets with add, edit, remove, enable and disable, case-insensitive and partial-name matching, editor toolbar access, configurable attach delay, notifications, and VSIX packaging. Reduces debugger setup time by 80–90%.',
    tech: ['TypeScript', 'VS Code Extension API', 'Node.js', 'esbuild', 'npm', 'VSIX'],
    metrics: 'Developer Productivity Tool • v0.1.1',
    link: 'https://marketplace.visualstudio.com/items?itemName=Muzammil.smart-attach-dotnet',
    github: ''
  },  {
    title: '.NET API Code Generator',
    description: 'A reusable NuGet package that automates CRUD code generation with dependency injection, cutting setup time by 99.7% (2 hrs to 20 secs). Supports modular architectures and configurable generation. Achieved 1.8K+ NuGet downloads.',
    tech: ['C#', '.NET', 'NuGet', 'File I/O', 'Regular Expressions'],
    metrics: '1.8K+ Downloads • 99.7% Time Saved',
    link: 'https://www.nuget.org/packages/CodeGenTool',
    github: 'https://github.com/MuzammilCodes/CodeGenTool'
  },
  {
    title: 'Batch Record Management System',
    description: 'Enterprise document management system digitizing document handling, approvals, and compliance workflows with automated DOCX/PDF processing and retrieval of lakhs of records. Features server-side pagination rendering 100k+ records in about 3 seconds, scheduled cleanup jobs reducing memory spikes by 30%, and JWT authentication.',
    tech: ['Angular', '.NET', 'SQL Server', 'VSTO', 'WPF', 'iTextSharp', 'JWT', 'Windows Scheduler'],
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
    company: 'QualMinds',
    period: 'Dec 2025 – Present',
    location: 'Hyderabad, India',
    description: 'Building General Motors (GM) dealership websites with Vue.js 3, Vue.js 2, CSHTML, .NET 10, Microsoft SQL Server, and Elasticsearch, using Bitbucket, Jira, Bamboo, GitHub Actions, and Google Cloud.',
    achievements: [
      'Developed dealership websites across GM brands, enhancing inventory, ordering, financing, service workflows, mega menus, and model exploration with CDN-hosted images and brand-specific layouts',
      'Reduced application build time by 90%, from 600+ seconds to 60 seconds, improving developer productivity',
      'Accelerated Debug builds and startup by disabling static web asset processing, reducing local development overhead',
      'Automated Global Dealer Locator (GDL) data retrieval and processing to publish dealer information across GM dealership websites, and engineered lead-generation workflows to process customer form submissions'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Audree Infotech',
    period: 'Sep 2023 – Dec 2025',
    location: 'Hyderabad, India',
    description: 'Developed enterprise-grade applications using .NET and Angular, digitizing document handling, approvals, and compliance workflows.',
    achievements: [
      'Programmed a Batch Record Management System using .NET, Angular, SQL Server, and document-processing tools to digitize document handling, approvals, and compliance workflows',
      'Improved data retrieval with server-side pagination, enabling 100,000+ records to render in approximately 3 seconds; executed scheduled cleanup jobs that decreased memory spikes by 30%',
      'Delivered CRUD and bulk-upload features for equipment issue reporting and resolution tracking',
      'Contributed to Agile sprints, peer reviews, source control, and deployment pipelines using Git and Azure DevOps'
    ]
  },
  {
    role: 'Software Development Intern',
    company: 'Audree Infotech',
    period: 'Jun 2023 – Sep 2023',
    location: 'Hyderabad, India',
    description: 'Gained hands-on experience in C, ASP.NET, MVC, and .NET Framework through real-world projects.',
    achievements: [
      'Gained hands-on experience in C, ASP.NET, MVC, and .NET Framework through real-world projects',
      'Worked with SQL databases and ORM tools like Entity Framework for data management'
    ]
  },
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
  location: 'Hyderabad, India',
  github: 'https://github.com/MuzammilCodes',
  linkedin: 'https://www.linkedin.com/in/muzammil-codes',
};