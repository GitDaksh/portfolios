export const myProjects = [
  {
    id: 1,
    title: "VisualVibe",
    description:
      "Next.js and TypeScript-based video conferencing app using WebRTC for real-time calls.",
    subDescription: [
      "Implemented real-time audio/video calling using WebRTC and Socket.io.",
      "Used Clerk for authentication, ensuring secure access control.",
      "Developed a responsive UI with Tailwind CSS and managed state efficiently with React hooks.",
      "Focused on seamless UX with scalable signaling architecture.",
    ],
    href: "https://github.com/GitDaksh/visualvibe",
    logo: "",
    image: "/assets/projects/visualvibe.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "WebRTC", path: "/assets/logos/webrtc.svg" },
      { id: 4, name: "Socket.io", path: "/assets/logos/socketio.svg" },
    ],
  },
  {
    id: 2,
    title: "NVim Config",
    description:
      "My custom Neovim setup optimized for productivity and fast development workflows.",
    subDescription: [
      "Configured Neovim with Lua, featuring LSP, Treesitter, and auto-completion.",
      "Used lazy-loading to speed up startup times.",
      "Added Git integration and telescope-based fuzzy finding.",
      "Designed with a sleek UI and custom keybindings.",
    ],
    href: "https://github.com/GitDaksh/NVim",
    logo: "",
    image: "/assets/projects/nvim.jpg",
    tags: [
      { id: 1, name: "Lua", path: "/assets/logos/lua.svg" },
      { id: 2, name: "Neovim", path: "/assets/logos/neovim.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Archive",
    description:
      "A secure and scalable University Library Management System with modern web practices.",
    subDescription: [
      "Built with role-based access control and media upload support.",
      "Implemented caching and DDoS protection for high availability.",
      "Used advanced querying and automated workflows for efficiency.",
      "Responsive frontend with Tailwind CSS and optimized backend logic.",
    ],
    href: "https://github.com/GitDaksh/archive",
    logo: "",
    image: "/assets/projects/archive.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    ],
  },
  {
    id: 4,
    title: "InterviewX",
    description:
      "An AI-powered interview web app featuring real-time voice-based interactions.",
    subDescription: [
      "Built with Next.js and Tailwind CSS using the ShadCN UI library.",
      "Integrated Vapi.ai for real-time voice communication with AI.",
      "Simulates interactive interviews with dynamic AI-generated responses.",
      "Offers clean UX with voice transcript history and scoring.",
    ],
    href: "https://github.com/GitDaksh/interviewx",
    logo: "",
    image: "/assets/projects/interviewx.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vapi.ai", path: "/assets/logos/robot.svg" },
    ],
  },
  {
    id: 5,
    title: "GitFlow",
    description:
      "An AI-powered Git commit summarizer using Gemini AI to generate concise commit messages.",
    subDescription: [
      "Analyzes git diffs and extracts meaningful context.",
      "Uses Google Gemini API to generate commit summaries.",
      "Improves team clarity with AI-suggested commit messages.",
      "CLI tool for seamless developer workflow integration.",
    ],
    href: "https://github.com/GitDaksh/GitFlow",
    logo: "",
    image: "/assets/projects/gitflow.jpg",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Git", path: "/assets/logos/git.svg" },
      { id: 3, name: "Gemini AI", path: "/assets/logos/gemini.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gitdaksh/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://github.com/GitDaksh",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "SDE Intern",
    job: "Cloud Counselage Pvt. Ltd.",
    date: "Jul 2024 - Oct 2024",
    contents: [
      "Designed and deployed a LinkedIn-style networking platform, enabling professional interactions and profile sharing.",
      "Developed modular frontend/backend systems with reusable components and REST APIs, ensuring scalable architecture.",
      "Integrated engagement features and optimized queries, contributing to a 20% boost in user retention.",
      "Stack: Next.js, React.js, TailwindCSS, MongoDB, MaterialUI, Express.js",
    ],
  },
  {
    title: "SDE (Full-Stack) Intern",
    job: "Zidio Development",
    date: "Nov 2024 - Jan 2024",
    contents: [
      "Building a dynamic Task Management app with real-time collaboration, task analytics, and role-based access.",
      "Improved productivity by introducing intuitive UI and structured workflow boards for teams.",
      "Stack: React.js, MongoDB, TailwindCSS, TypeScript",
    ],
  },
  {
    title: "Software Development Intern",
    job: "AcmeGrade",
    date: "Mar 2025 - Jun 2025",
    contents: [
      "Built an intelligent course recommendation system using collaborative filtering and user interaction data.",
      "Optimized backend performance by indexing queries and implementing caching strategies in MongoDB.",
      "Achieved an 18% increase in course completions by improving recommendation relevance and flow.",
      "Stack: Node.js, Express, Mong,oDB, JavaScript"
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
