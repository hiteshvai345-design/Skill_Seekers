export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  field: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  stipend: string;
  deadline: string;
  posted: string;
}

export const internships: Internship[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Remote",
    duration: "3 months",
    field: "Technology",
    description: "Join our engineering team to work on cutting-edge web applications. You'll collaborate with experienced developers and contribute to real-world projects.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Proficiency in JavaScript, React, or similar frameworks",
      "Strong problem-solving skills",
      "Good communication abilities"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Participate in code reviews",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code"
    ],
    stipend: "$2,500/month",
    deadline: "2025-12-15",
    posted: "2025-11-01"
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "BrandWave Agency",
    location: "New York, NY",
    type: "Hybrid",
    duration: "6 months",
    field: "Marketing",
    description: "Gain hands-on experience in digital marketing, social media management, and campaign strategy with a leading creative agency.",
    requirements: [
      "Pursuing a degree in Marketing, Communications, or related field",
      "Familiarity with social media platforms",
      "Creative thinking and attention to detail",
      "Basic knowledge of analytics tools"
    ],
    responsibilities: [
      "Assist in creating marketing campaigns",
      "Manage social media accounts",
      "Analyze campaign performance",
      "Support content creation efforts"
    ],
    stipend: "$2,000/month",
    deadline: "2025-12-20",
    posted: "2025-11-03"
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "DataMinds Analytics",
    location: "Boston, MA",
    type: "On-site",
    duration: "4 months",
    field: "Data Science",
    description: "Work with large datasets and machine learning models to derive insights and build predictive analytics solutions.",
    requirements: [
      "Pursuing a degree in Data Science, Statistics, or Computer Science",
      "Experience with Python and data analysis libraries",
      "Understanding of machine learning concepts",
      "Strong analytical skills"
    ],
    responsibilities: [
      "Analyze complex datasets",
      "Build and train ML models",
      "Create data visualizations",
      "Present findings to stakeholders"
    ],
    stipend: "$3,000/month",
    deadline: "2025-12-10",
    posted: "2025-10-28"
  },
  {
    id: "4",
    title: "UX/UI Design Intern",
    company: "DesignHub Studio",
    location: "Austin, TX",
    type: "Remote",
    duration: "3 months",
    field: "Design",
    description: "Create beautiful and intuitive user interfaces for web and mobile applications while learning from experienced designers.",
    requirements: [
      "Pursuing a degree in Design, HCI, or related field",
      "Portfolio demonstrating design skills",
      "Proficiency in Figma or similar tools",
      "Understanding of user-centered design principles"
    ],
    responsibilities: [
      "Design user interfaces and experiences",
      "Create wireframes and prototypes",
      "Conduct user research",
      "Collaborate with developers"
    ],
    stipend: "$2,200/month",
    deadline: "2025-12-25",
    posted: "2025-11-05"
  },
  {
    id: "5",
    title: "Finance Intern",
    company: "Capital Ventures Group",
    location: "Chicago, IL",
    type: "On-site",
    duration: "6 months",
    field: "Finance",
    description: "Learn about financial analysis, investment strategies, and portfolio management in a fast-paced investment firm.",
    requirements: [
      "Pursuing a degree in Finance, Economics, or Accounting",
      "Strong analytical and quantitative skills",
      "Proficiency in Excel and financial modeling",
      "Interest in financial markets"
    ],
    responsibilities: [
      "Assist in financial analysis",
      "Support investment research",
      "Prepare financial reports",
      "Monitor market trends"
    ],
    stipend: "$2,800/month",
    deadline: "2025-12-18",
    posted: "2025-11-02"
  },
  {
    id: "6",
    title: "Content Writing Intern",
    company: "MediaFlow Publishing",
    location: "Seattle, WA",
    type: "Remote",
    duration: "3 months",
    field: "Content",
    description: "Create engaging content for blogs, social media, and marketing materials while developing your writing portfolio.",
    requirements: [
      "Pursuing a degree in Journalism, English, or Communications",
      "Excellent writing and editing skills",
      "Creativity and attention to detail",
      "Ability to meet deadlines"
    ],
    responsibilities: [
      "Write blog posts and articles",
      "Edit and proofread content",
      "Research industry trends",
      "Collaborate with marketing team"
    ],
    stipend: "$1,800/month",
    deadline: "2025-12-30",
    posted: "2025-11-06"
  },
  {
    id: "7",
    title: "Product Management Intern",
    company: "InnovateTech Inc",
    location: "San Jose, CA",
    type: "Hybrid",
    duration: "4 months",
    field: "Product",
    description: "Learn the product development lifecycle and work with cross-functional teams to bring innovative products to market.",
    requirements: [
      "Pursuing a degree in Business, Engineering, or related field",
      "Strong communication and leadership skills",
      "Analytical mindset",
      "Interest in technology and product development"
    ],
    responsibilities: [
      "Assist in product roadmap planning",
      "Gather and analyze user feedback",
      "Coordinate with engineering and design teams",
      "Support product launches"
    ],
    stipend: "$2,600/month",
    deadline: "2025-12-12",
    posted: "2025-10-30"
  },
  {
    id: "8",
    title: "Cybersecurity Intern",
    company: "SecureNet Systems",
    location: "Washington, DC",
    type: "On-site",
    duration: "5 months",
    field: "Technology",
    description: "Gain experience in network security, threat analysis, and security operations in a leading cybersecurity firm.",
    requirements: [
      "Pursuing a degree in Cybersecurity, Computer Science, or IT",
      "Understanding of networking and security concepts",
      "Familiarity with security tools",
      "Strong problem-solving abilities"
    ],
    responsibilities: [
      "Monitor security systems",
      "Assist in vulnerability assessments",
      "Document security incidents",
      "Support security awareness initiatives"
    ],
    stipend: "$2,900/month",
    deadline: "2025-12-08",
    posted: "2025-10-25"
  }
];

export const fields = ["All", "Technology", "Marketing", "Data Science", "Design", "Finance", "Content", "Product"];
export const locations = ["All", "Remote", "On-site", "Hybrid"];
export const durations = ["All", "3 months", "4 months", "5 months", "6 months"];
