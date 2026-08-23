type ProjectImage = {
  src: string;
  alt: string;
};

const personalPortfolioScreenshot: ProjectImage = {
  src: "/images/projects/personal-portfolio-home.png",
  alt: "Personal portfolio homepage with profile card and Data Scientist introduction",
};

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
      id: "predictive-analytics",
      title: "Predictive Analytics",
      category: "Forecasting",
      description:
        "Turning historical patterns into practical forecasts for better decisions.",
      overview:
        "Exploring how historical data can be prepared, modelled and translated into forecasts that support practical business decisions.",
      highlights: [
        "Time-series exploration",
        "Model evaluation",
        "Decision-ready outputs",
      ],
      tools: ["Python", "Machine Learning", "Data Visualization"],
      thumbnail: null as ProjectImage | null,
      screenshots: [] as ProjectImage[],
      url: null as string | null,
      status: "Case study soon",
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
      screenshots: [] as ProjectImage[],
      url: null as string | null,
      status: "Case study soon",
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
        "Accessible interactions",
        "Data-driven content",
      ],
      tools: ["Astro", "TypeScript", "CSS"],
      thumbnail: personalPortfolioScreenshot,
      screenshots: [personalPortfolioScreenshot],
      url: null as string | null,
      status: "In development",
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
