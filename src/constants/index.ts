import { NavlinksProps, ProjectProps } from '../types'

export const aboutData = {
  title: 'About Me',
  description: 'I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Priyanshu'
    },
    {
      fieldName: 'Phone',
      fieldValue: '7071915785'
    },
    {
      fieldName: 'Email',
      fieldValue: 'work.priyanshu085@gmail.com'
    },
    {
      fieldName: 'Location',
      fieldValue: 'India'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi'
    },
    {
      fieldName: 'Hobbies',
      fieldValue: 'Coding, Reading'
    },  
    {
      fieldName: 'Interests',
      fieldValue: 'Data Science, AI'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    }
  ]
}

export const experienceData = {
  title: 'experience',
  description: 'I have worked as a web developer at XYZ company for 2 years.',
  items: [
    {
      id: 1,
      title: "Frontend Web Intern",
      company: "JarGoan",
      duration: "05/2024 - 06/2024",
      description: "Improved platform usability by 20.6%, increased user engagement by 26.53%, and led UI design initiatives.",
    },
    {
      id: 2,
      title: "AI Intern",
      company: "Tublian",
      duration: "04/2024 - 06/2024",
      description: "Enhanced AI proficiency, crafted a chatbot increasing user interaction by 50%, and actively participated in AI sessions.",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      company: "Tubalian",
      duration: "09/2023 - 11/2023",
      description: "Outperformed 91% of users, engaged in AI challenges, and enhanced AI technology proficiency by 30%.", 
    },
    {
      id: 4,
      title: "Open Source Contributor",
      company: "Hacktoberfest 2023",
      duration: "09/2023 - 10/2023",
      description: "Contributed 4 PRs accepted in open source projects, collaborated with global developers, improving community engagement.",
    }
  ]
}
// Project Data
export const Project_Data: ProjectProps[] = [
  // {
  //   id: 1,
  //   title: "Bookies",
  //   description: "Bookies is a web platform designed for sharing books. It provides a space for users to post and explore various books that can be used for reading, brainstorming, or any context that requires a starting point.",
  //   imgUrl: "/images/projects/11.png",
  //   tag: ["All","ML"],
  //   gitUrl: "",
  //   previewUrl: "",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Team",
  //   duration: "1 month",
  // },
  // {
  //   id: 2,
  //   title: "Matrix",
  //   description: "Experience a new era in metro travel with Matrix. Seamlessly enter using your smartphone, enjoy precise fare calculation, and receive real-time updates. This project is a testament to my participation and innovation at Hack-BVP@5.0. Elevate your urban commute with Matrix.",
  //   imgUrl: "/images/projects/8.png",
  //   tag: ["All","Web"],
  //   gitUrl: "",
  //   previewUrl: "https://matrix-hackbvp.vercel.app/",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Team",
  //   duration: "1 month",
  // },
// {
//   id: 3,
//   title: "FileShare",
//   description: "The project is a user-friendly file-sharing platform. It's built with React on the frontend and Node.js with Express on the backend. Users can easily upload files, keep track of downloads, and retrieve them using convenient links. It's all about hassle-free file sharing!",
//   imgUrl: "/images/projects/7.png",
//   tag: ["All","Web"],
//   gitUrl: "",
//   previewUrl: "",
//   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
//   challengesFaced: ["Challenge 1", "Challenge 2"],
//   lessonsLearned: ["Lesson 1", "Lesson 2"],
//   contributionType: "Solo",
//   duration: "2 week",
// },
  // {
  //   id: 4,
  //   title: "Bloggies",
  //   description: "A Blogging platform built with React JS, MongoDB, and Tailwind CSS. It allows users to create, read, update, and delete blog posts. Users can also like and comment on posts.",
  //   imgUrl: "/images/projects/6.png",
  //   tag: ["All"],
  //   gitUrl: "",
  //   previewUrl: "",
  //   techStack: ["React", "Node.js", "Express", "MongoDB"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Solo",
  //   duration: "1 month",
  // },
  {
    id: 5,
    title: "CodexSphere",
    description: "CodexSphere is a web platform uniting book lovers. Built with React JS, MongoDB, and Tailwind CSS, it allows seamless management of personal book collections. Add, explore, and dive into a world of literature with CodexSphere - where your bookshelf transforms into a gateway to endless literary journeys",
    imgUrl: "/images/projects/5.png",
    tag: ["All","Web"],
    gitUrl: "",
    previewUrl: "",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 month",
  },
  {
    id: 6,
    title: "SmartReadme",
    description: "SmartReadME is a README file generator powered by LangchainJS. It helps developers to quickly generate a quality README.md file in Markdown format for their projects.",
    imgUrl: "/images/projects/4.png",
    tag: ["All","ML"],
    gitUrl: "",
    previewUrl: "https://smartreadme.streamlit.app/",
    techStack: ["Python", "Streamlit", "Openai"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 month"
  },
  {
    id: 8,
    title: "NexDrive",
    description: "NexDrive is a dynamic car marketplace built with Next.js, Tailwind CSS, and TypeScript. Integrated with Rapid API for enhanced features and a user-friendly experience.",
    imgUrl: "/images/projects/2.png",
    tag: ["All","Web"],
    gitUrl: "",
    previewUrl: "https://nexdrive-085.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Rapid API"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "2 weeks",
  },
  {
    id: 9,
    title: "readLites",
    description: "readLites makes reading fun and easy! It uses smart technology to show pictures and pick out important ideas from stories. This helps you understand and enjoy books better!",
    imgUrl: "/images/projects/1.png",
    tag: ["All","ML"],
    gitUrl: "",
    previewUrl: "https://readlites-deepsolv.streamlit.app/",
    techStack: ["Python", "Streamlit", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Team",
    duration: "1 month",
  },
  { 
    id: 13,
    title: "GojoTalk",
    description: "GojoTalk: Experience 'Yōkoso'—Satoru Gojo's welcome in every interaction. Where intelligent conversations seamlessly blend with the essence of Japanese charisma, making each chat a dynamic and inviting experience.",
    imgUrl: "/images/projects/9.png",
    tag: ["All","Web", "ML"],
    gitUrl: "",
    previewUrl: "https://gojotalk.vercel.app/",
    techStack: ["React", "Node.js", "Express", "Gemini AI","Tailwind CSS"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week",
  },
  {
    id: 11,
    title: "PaLM ChatBot",
    description: "GojoTalk is an interactive chat platform centered around the character Satoru Gojo from the anime and manga series \"Jujutsu Kaisen\". Users engage in dynamic conversations with a virtual representation of Gojo, exploring various facets of his personality, experiences, and expertise in Jujutsu sorcery.",
    imgUrl: "/images/projects/10.png",
    tag: ["All","ML"],
    gitUrl: "https://github.com/coderx85/PaLM_API_Repo/blob/my/GojoTalk.ipynb",
    previewUrl: "",
    techStack: ["Python", "Gemini AI", "ChatBot"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week",
  },
  {
    id: 12,
    title: "LeviLayer",
    description: "This project provides an interactive dashboard for analyzing the different activation function in neural networks. LeviLayer is a novel activation function that has shown promising results in various deep learning tasks. With this dashboard, users can explore the behavior of LeviLayer and compare it with other popular activation functions.",
    imgUrl: "",
    tag: ["All","ML"],
    gitUrl: "https://github.com/coderx85/LeviLayer.git",
    previewUrl: "",
    techStack: ["Python", "TensorFlow"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week"
  },
  {
    id: 14,
    title: "StyleBlend",
    description: "StyleBlend is a project for artistic style transfer using the VGG19 convolutional neural network architecture. It allows users to blend the content of one image with the style of another image, creating visually appealing compositions.",
    imgUrl: "",
    tag: ["All","ML"],
    gitUrl: "https://github.com/coderx85/StyleBlend.git",
    previewUrl: '',
    techStack: ["Python", "TensorFlow", "Keras"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week"
  },
  {
    id: 7,
    title: "Plant disease prediction",
    description: "",
    imgUrl: '',
    tag: ["All","ML"],
    gitUrl: "https://github/coderx85/Plant-disease-prediction.git",
    previewUrl: '',
    techStack: ["Python", "TensorFlow", "Keras"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week"
  },
  // {
  //   id: 15,
  //   title: "CodexSphere",
  //   description: "CodexSphere is a web application built using Vite.js and Node.js that offers a platform for selling and accessing a wide range of books. Whether you're looking to purchase books or access free resources, CodexSphere provides a convenient and user-friendly experience.",
  //   imgUrl: "/images/projects/15.png",
  //   tag: ["All","Web"],
  //   gitUrl: "https://github.com/coderx85/CodexSpehere.git",
  //   previewUrl: "https://codexsphere.vercel.app/",
  //   techStack: ["Vite.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Solo",
  //   duration: "1 month",
  // },
   {
    id: 15,
    title: "PromptHub",
    description: "\"PromptHub\" is a web platform designed for sharing prompts. It provides a space for users to post and explore various prompts that can be used for creative writing, brainstorming, or any context that requires a starting point.",
    imgUrl: "/images/projects/3.png",
    tag: ["All","Web"],
    gitUrl: "",
    previewUrl: "https://prompthub-085.vercel.app",
    techStack: ["Nextjs", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 month",
  },
  {
    id: 16,
    title: "DevnTalk",
    description: "A zoom clone using Nextjs with clerksjs, shadcn, and tailwindscss.",
    imgUrl: "/images/projects/16.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/coderx85/DevTalk.git",
    previewUrl: "https://devntalk.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "Clerksjs", "Shadcn"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "2 months",
  },
  {
    id: 17,
    title: "Mitra-Bot",
    description: " Welcome to Mitra Bot [Machine Interactive Tutor for Responsive Answers By Optimizing Technology] - your friendly AI-powered tutor 📚.",
    imgUrl: "/images/projects/17.png",
    tag: ["All","ML"],
    gitUrl: "https://github.com/coderx85/Mitra-Bot.git",
    previewUrl: "",
    techStack: ["Python", "groq", "llama-3-base"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 week",
  },
  {
    id: 18,
    title: "Stake",
    description: "Stake Game Simulation is a project that simulates a game involving stakes and outcomes based on random patterns. The project includes frontend and backend components to create a visual representation of the game simulation.",
    imgUrl: "/images/projects/18.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/coderx85/stake.git",
    previewUrl: "https://stake-vert.vercel.app/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 month",
  }

]

export const navLinks: NavlinksProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: 'Work',
      href: '/work'
    },
    {
      title: 'Service',
      href: '/service'
    },
    {
      title: 'Contact',
      href: '/contact'
    },
  ]

export const educationData = {
  title: 'education',
  description: 'I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).',
  items: [
    {
      title: 'B-Tech Computer Science',
      duration: '2021-25',
    },
    {
      title: 'Intermediate',
      duration: '2019-21',
    }
  ]
}
  
export const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    num: "02",
    title: "Backend Development and Database Management",
    description: "Develop robust backend systems to support your web applications and services.",
  },
  {
    num: "03",
    title: "DevOps Implementation",
    description: "I can help you rank your website on the first page of Google.",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Lead UI design initiatives to enhance platform usability and user satisfaction.",
  }
]