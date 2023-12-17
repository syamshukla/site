export const contentData = [
  {
    title: 'Education',
    items: [
      {
        title: 'Bachelor of Science in Computer Science',
        subTitle: 'Drexel University',
        date: '2019 - June 2024',
        description: 'Specialized in ML and AI.',
      },
    ],
  },
  {
    title: 'Work Experience',
    items: [
      {
        title: 'Hedge Nav-O Intern at BlackRock',
        subTitle: 'Wilmington - Delaware',
        date: 'Sept. 2022 - March 2023',
        description: `
        Created a Python automation script to eliminate daily manual processes, significantly reducing errors and generating substantial long-term cost savings. Automated monthly data compilation and upload for 50+ funds using VBA scripts into an internal database. Streamlined team data access by creating SQL query templates, enabling quick and efficient lookups.`,
      },
      {
        title: 'Software Engineer at Lockheed Martin',
        subTitle: 'Moorestown - New Jersey',
        date: 'Sept. 2021 - March 2022',
        description: `Collaborated with a team of Software and System Engineers in designing and implementing software in Java using Agile development techniques. Utilized the Atlassian Suite to integrate bug fixes, updates, and new features into the product. Boosted project efficiency by crafting UML diagrams and design packages,leading to substantial times avings
        during the implementation of new features.`,
      },
      {
        title: 'Photographer at Shots By Shuks',
        subTitle: 'Philadelphia - Pennsylvania',
        date: 'Aug. 2022 - Present',
        description: `Direct and photograph over 75 photo shoots and ad campaigns.
        Meet with the lead fashion designer to strategically plan and select models, locations, and campaigns, to tailor
        directly for new season releases.`,
      },
      {
        title: 'Instructor at CodeWizardsHQ',
        subTitle: 'Remote',
        date: 'August 2021- April 2022',
        description: `Mentored students worldwide in web development and software engineering across diverse age groups.
        Implemented a comprehensive curriculum, fostering growth and motivating students to tackle challenging
        projects.
        Provided constructive feedback and personalized support to enhance their coding skills.`,
      },
    ],
  },

  {
    title: 'Projects',
    items: [
      {
        title: 'Field Goal Finance',
        date: '2023 – 2024',
        description:
          'Consulted with GreenHill Investment to develop a Next.js PWA for mobile deployment and an admin site for user management in a fantasy stock investment game',
      },

      {
        title: 'Bull-Ish',
        date: '2023',
        description:
          'Developed a stock picks game for the everyday investor using Next.js and Firebase. Integrated the Alpha Vantage API to retrieve real-time stock data and deployed the app using Vercel.',
      },
      {
        title: 'Portfolio Website',
        date: '2023',
        description:
          'Designed a portfolio website using Tailwind CSS and Framer Motion. Integrated TypeScript and Next.js for a seamless user experience.',
      },
      {
        title: 'Java Banking Application',
        date: '2021',
        description:
          'Implemented test-driven development in Java for a comprehensive bank- ing system. Employed Gitlab for software testing and mutations, integrating CI/CD pipelines and PIT muta- tion testing.',
      },
    ],
  },

  {
    title: 'Skills',
    items: [
      {
        title: 'Languages',
        description:
          'Java, C, Python, JavaScript, Next.Js, Bash, AWS, TypeScript',
      },
      {
        title: 'Tools',
        description:
          'Atlassian Tools, Git, Microsoft 365, Adobe Creative Cloud, Davinci Resolve',
      },
      {
        title: 'Methodologies',
        description:
          'Agile Development, Test-Driven Development, Software Testing, Software Design',
      },
    ],
  },
]

//   @NOTE: You can add more sections here
//   {
//     title: "Projects",
//     items: [
//       {
//         title: "Project 1",
//         subTitle: "Sub Title",
//         date: "2015 - 2016",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
//       },
//     ],
//   },

export type Content = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description: string
  }[]
}

export type ContentData = Content[]
