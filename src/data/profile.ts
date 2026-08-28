type ProjectImage = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectVideo = {
  type: "video";
  src: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectMedia = ProjectImage | ProjectVideo;

type ProjectLink = {
  icon: "apple" | "external" | "tiktok";
  label: string;
  url: string;
};

const personalPortfolioScreenshot: ProjectImage = {
  type: "image",
  src: "/images/projects/personal-portfolio-home.png",
  alt: "Personal portfolio homepage with profile card and Data Scientist introduction",
  width: 1440,
  height: 1000,
};

const punchAiPreview: ProjectImage = {
  type: "image",
  src: "/images/projects/punch-ai-logo.png",
  alt: "Punch AI logo with a red boxing glove inside a camera frame",
  width: 1024,
  height: 1024,
};

const dynalearnPreview: ProjectImage = {
  type: "image",
  src: "/images/projects/dynalearn-conceptual-model.png",
  alt: "DynaLearn conceptual model showing the relationships between tank inflow, amount and height",
  width: 1200,
  height: 654,
};

const punchAiMedia: ProjectMedia[] = [
  {
    type: "video",
    src: "/images/projects/punch-ai-motion-analysis.mp4",
    poster: "/images/projects/punch-ai-motion-analysis-poster.webp",
    alt: "Punch AI analyzing boxing movement during a training session",
    width: 360,
    height: 640,
  },
  {
    type: "image",
    src: "/images/projects/punch-ai-app-overview.webp",
    alt: "Punch AI app overview displayed across three phones",
    width: 1448,
    height: 1086,
  },
  {
    type: "image",
    src: "/images/projects/punch-ai-home.webp",
    alt: "Punch AI home screen with weekly scores and recent training sessions",
    width: 852,
    height: 1846,
  },
  {
    type: "image",
    src: "/images/projects/punch-ai-statistics.webp",
    alt: "Punch AI statistics screen with lifetime and weekly training metrics",
    width: 853,
    height: 1844,
  },
  {
    type: "image",
    src: "/images/projects/punch-ai-session-analysis.webp",
    alt: "Punch AI session analysis with punch breakdown and skill radar",
    width: 1284,
    height: 2778,
  },
];

const dynalearnMedia: ProjectMedia[] = [
  {
    type: "video",
    src: "/images/projects/dynalearn-tank-system-demo.mp4",
    poster: "/images/projects/dynalearn-conceptual-model.png",
    alt: "DynaLearn tank system conceptual model being edited and simulated",
    width: 1980,
    height: 1080,
  },
  {
    type: "image",
    src: "/images/projects/dynalearn-gts-dashboard.png",
    alt: "Dashboard showing student progress and detected Gaming the System moments",
    width: 1800,
    height: 654,
  },
  {
    type: "image",
    src: "/images/projects/dynalearn-cluster-silhouette-score.png",
    alt: "Silhouette scores across different numbers of K-means clusters",
    width: 1800,
    height: 923,
  },
  {
    type: "image",
    src: "/images/projects/dynalearn-dashboard-paper-prototype-1.jpg",
    alt: "Paper prototype of student progress charts with suspected moments highlighted",
    width: 1600,
    height: 1162,
  },
  {
    type: "image",
    src: "/images/projects/dynalearn-dashboard-paper-prototype-2.jpg",
    alt: "Paper prototype showing a Gaming the System alert with its pattern and probability",
    width: 1600,
    height: 1160,
  },
];

export const profile = {
  name: "Rojhat Yildirim",
  role: "Data Scientist",
  intro:
    "I explore patterns, challenge assumptions and use data to build things that matter.",
  headline:
    "Driven by curiosity, I use data, AI and business insight to uncover patterns, solve complex problems and create practical solutions that make a meaningful impact.",
  stats: [
    { value: "6+", label: "Years of experience" },
    { value: "32+", label: "Projects completed" },
    { value: "10+", label: "Coding languages" },
  ],
  projects: [
    {
      id: "punch-ai",
      isExtra: false,
      title: "Punch AI",
      category: "Mobile App",
      description:
        "An AI-powered boxing coach that turns training videos into practical, personalized feedback.",
      overview: [
        "A Flutter mobile app that lets boxers record or import training sessions, receive AI-generated scores and coaching, and track progress across technique, speed, defense and footwork.",
      ],
      highlights: [
        "Video-based boxing analysis",
        "AI-generated coaching insights",
        "Session scores and progress tracking",
      ],
      tools: [
        "Flutter",
        "Firebase",
        "Apple Vision Framework",
        "OpenAI API",
        "RevenueCat",
      ],
      thumbnail: punchAiPreview,
      media: punchAiMedia,
      compactGallery: false,
      links: [
        {
          icon: "tiktok",
          label: "View TikTok",
          url: "https://www.tiktok.com/@punch.ai.app",
        },
        {
          icon: "apple",
          label: "View App Store",
          url: "https://apps.apple.com/nl/app/punch-ai/id6761296998",
        },
      ] satisfies ProjectLink[],
    },
    {
      id: "dynalearn-gts",
      isExtra: false,
      title: "Behavior Detection for DynaLearn",
      category: "Learning Analytics",
      description:
        "An AI solution that detects trial-and-error behavior in DynaLearn action logs with a 0.983 F1-score.",
      overview: [
        "DynaLearn is an intelligent learning environment used by the Smart Education Lab in Dutch secondary schools. Students build and simulate qualitative models of physical, energy and climate processes to develop systems-thinking skills.",
        "The research used 4–5 years of action logs from approximately 1,000 students. Educators observed Gaming the System behavior, which reduced meaningful engagement with the learning material.",
        "I developed an AI solution that converts raw logs into eight-action sequences, represented with TF-IDF and n-grams and clustered with K-means for expert labeling. Random Forest outperformed SVM and Logistic Regression with an F1-score of 0.983. A dashboard prototype surfaces suspected moments, timestamps, action sequences and predicted GtS probabilities for educator review.",
      ],
      highlights: [
        "Eight-action sequence modelling",
        "Random Forest with a 0.983 F1-score",
        "Educator dashboard for suspected behavior",
      ],
      tools: ["Python", "scikit-learn", "TF-IDF", "K-means", "Random Forest"],
      thumbnail: dynalearnPreview,
      media: dynalearnMedia,
      compactGallery: false,
      links: [
        {
          icon: "external",
          label: "View DynaLearn",
          url: "https://dynalearn.nl/",
        },
      ] satisfies ProjectLink[],
    },
    {
      id: "personal-portfolio",
      isExtra: false,
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "Designing and building a responsive portfolio that presents my work, experience and skills with clarity.",
      overview: [
        "A custom Astro portfolio focused on accessible interactions, responsive layouts and a maintainable, data-driven content structure.",
      ],
      highlights: [
        "Responsive interface",
        "Fast, optimized performance",
        "Data-driven content",
      ],
      tools: ["Astro", "TypeScript", "CSS"],
      thumbnail: personalPortfolioScreenshot,
      media: [personalPortfolioScreenshot],
      compactGallery: true,
      links: [] as ProjectLink[],
    },
    {
      id: "halal-eats",
      isExtra: true,
      title: "Halal Eats",
      category: "Project",
      description: "More information about this project will be added soon.",
      overview: ["More information about Halal Eats will be added soon."],
      highlights: [] as string[],
      tools: [] as string[],
      thumbnail: null as ProjectImage | null,
      media: [] as ProjectMedia[],
      compactGallery: false,
      links: [] as ProjectLink[],
    },
  ],
  experience: [
    {
      role: "Data Scientist",
      company: "Ministerie van Defensie",
      period: "Feb 2026 – Present",
      logo: "/images/experience/defensie.svg",
      logoAlt: "Ministerie van Defensie logo",
      description:
        "Developing an AI-powered course-authoring tool for training designers across the organization, projected to shorten the development of each course by 6+ months.",
    },
    {
      role: "Data Scientist",
      company: "Aalberts",
      period: "Dec 2023 – Sep 2024",
      logo: "/images/experience/aalberts.png",
      logoAlt: "Aalberts hydronic flow control logo",
      description:
        "Developed a scalable cloud pipeline across 200+ data sources, saving approximately 8 hours of manual research per reporting cycle and delivering real-time market and product insights across departments.",
    },
    {
      role: "Data Scientist",
      company: "VanDerEng",
      period: "Feb 2023 – Sep 2023",
      logo: "/images/experience/vandereng.svg",
      logoAlt: "VanDerEng logo",
      description:
        "Developed TinyML models with 98%+ accuracy and connected 4 sensors to make production data from multiple machines accessible for analysis and dashboards.",
    },
    {
      role: "ICT Project Manager",
      company: "Brixxs",
      period: "Aug 2021 – Feb 2022",
      logo: "/images/experience/brixxs.png",
      logoAlt: "Brixxs logo",
      description:
        "Led 3 IT projects with a 4-person team, managing planning, budgets and stakeholders from concept through successful delivery.",
    },
    {
      role: "Search Engine Optimization Specialist",
      company: "Advertise Solution",
      period: "Aug 2019 – Feb 2020",
      logo: "/images/experience/advertise-solution.png",
      logoAlt: "Advertise Solution logo",
      description:
        "Developed 5 custom web applications across front-end and back-end, complemented by targeted SEO improvements to strengthen clients' online visibility.",
    },
  ],
  education: [
    {
      institution: "Amsterdam University of Applied Sciences",
      level: "MASTER OF SCIENCE (MSc)",
      program: "Applied Artificial Intelligence",
      period: "2024 – 2025",
      logo: "/images/education/hva-mark.svg",
      logoAlt: "Hogeschool van Amsterdam logo",
      logoVariant: null,
      relationship: null,
      relationshipRole: null,
    },
    {
      institution: "Windesheim University of Applied Sciences",
      level: "BACHELOR OF SCIENCE (BSc)",
      program: "Business Administration",
      period: "2020 – 2024",
      logo: "/images/experience/windesheim-mark.svg",
      logoAlt: "Windesheim logo",
      logoVariant: null,
      relationship: null,
      relationshipRole: "parent",
    },
    {
      institution: "Amsterdam University of Applied Sciences",
      level: "MINOR",
      program: "Data Science",
      period: "2022 – 2023",
      logo: "/images/education/hva-mark.svg",
      logoAlt: "Amsterdam University of Applied Sciences logo",
      logoVariant: null,
      relationship: "Part of the Windesheim bachelor's degree",
      relationshipRole: "child",
    },
    {
      institution: "ROC van Flevoland",
      level: "MBO LEVEL 4",
      program: "Software Developer",
      period: "2018 – 2020",
      logo: "/images/education/rocvanflevoland.svg",
      logoAlt: "ROC van Flevoland logo",
      logoVariant: "wide",
      relationship: null,
      relationshipRole: null,
    },
  ],
  skills: [
    "Python",
    "SQL",
    "AI",
    "Applications",
    "Data Engineering",
    "Data Analytics",
    "Cloud Computing",
    "Computer Vision",
    "Automation",
    "Research & Evaluation",
    "Business Analysis",
    "Project Management",
  ],
};
