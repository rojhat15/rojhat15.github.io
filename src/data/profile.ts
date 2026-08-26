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
      title: "Punch AI",
      category: "Mobile App",
      description:
        "An AI-powered boxing coach that turns training videos into practical, personalized feedback.",
      overview:
        "A Flutter mobile app that lets boxers record or import training sessions, receive AI-generated scores and coaching, and track progress across technique, speed, defense and footwork.",
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
      link: {
        label: "View TikTok",
        url: "https://www.tiktok.com/@punch.ai.app",
      } satisfies ProjectLink,
    },
    {
      id: "ai-workflows",
      title: "AI Workflows",
      category: "Applied AI",
      description:
        "Designing data-driven systems that reduce manual work and improve output quality.",
      overview:
        "Designing applied AI workflows that combine automation with clear human review points to make complex work more efficient and dependable.",
      highlights: [
        "Workflow analysis",
        "Human-in-the-loop design",
        "Quality validation",
      ],
      tools: ["Python", "AI", "Automation"],
      thumbnail: null as ProjectImage | null,
      media: [] as ProjectMedia[],
      compactGallery: false,
      link: null as ProjectLink | null,
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "Designing and building a responsive portfolio that presents my work, experience and skills with clarity.",
      overview:
        "A custom Astro portfolio focused on accessible interactions, responsive layouts and a maintainable, data-driven content structure.",
      highlights: [
        "Responsive interface",
        "Fast, optimized performance",
        "Data-driven content",
      ],
      tools: ["Astro", "TypeScript", "CSS"],
      thumbnail: personalPortfolioScreenshot,
      media: [personalPortfolioScreenshot],
      compactGallery: true,
      link: null as ProjectLink | null,
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
  tools: [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Analytics",
    "AI",
  ],
};
