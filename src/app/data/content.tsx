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
        title: 'Full Stack Developer at GreenHill Investment Reporting',
        subTitle: 'Philadelphia - Pennsylvania',
        date: 'Aug. 2023 - Jun 2024',
        description: `SSpearheaded the full-stack development of Field Goal Finance, a fantasy stock game, utilizing Next.js for a dynamic PWA and Node.js for a robust backend server on AWS EC2. Successfully engaged and supported hundreds of users. Directed the integration of the polygon.io API to provide real-time stock data, effectively managing and storing data within AWS Relational Database Service. Developed a user-friendly admin interface and ensured seamless updates and a stable production environment through Vercel’s CI/CD pipeline, enhancing overall user experience and system reliability.
`,
      },
      {
        title: 'Software Engineer at BlackRock',
        subTitle: 'Wilmington - Delaware',
        date: 'Sept. 2022 - March 2023',
        description: `
        Led the development and implementation of a Python script to automate NAV (Net Asset Value) calculations and data processing within Aladdin for a portfolio of 50+ hedge funds. This initiative not only eliminated manual errors but also generated over $100,000 in annual savings by reducing the reliance on external pricing services. Automated monthly data compilation and uploads for 50+ hedge funds using custom VBA and Bash scripts in Aqua Data Studio, ensuring accurate and timely NAV calculations.
        Boosted team efficiency by 30% with a library of reusable SQL queries for NAV reconciliation, position validation, and performance analysis, increasing overall productivity by 40%.`,
      },
      {
        title: 'Software Engineer at Lockheed Martin',
        subTitle: 'Moorestown - New Jersey',
        date: 'Sept. 2021 - March 2022',
        description: `Coordinated efforts within a team of 8 Software/Systems Engineers to design and implement software in Java using Agile methodologies. Utilized build automation tools such as Maven and Ant to streamline the development process.
        Utilized the Atlassian Suite (Jira and Confluence) to track progress, manage tasks, and document solutions while integrating 20 bug fixes, 15 updates, and 2 new features into the product, supported by continuous integration with Jenkins. Increased project efficiency by 20% through the strategic creation of UML diagrams and design packages. This initiative led to a month of time savings during the implementation of new features on the Linux RedHat environment.`,
      },
      {
        title: 'Photographer at Shots By Shuks',
        subTitle: 'Philadelphia - Pennsylvania',
        date: 'Aug. 2022 - Present',
        description: `Established a freelance photography business, collaborating with various fashion designers, models, and content-creators`,
      },
      {
        title: 'Instructor at CodeWizardsHQ',
        subTitle: 'Remote',
        date: 'August 2021- April 2022',
        description: `Guided and mentored a global community of 75 students in web development and software engineering. Designed a comprehensive curriculum with hands-on projects in Python, JavaScript, HTML, and CSS. Advocated for holistic and growth skill acquisition 2 times a week with additional 1-on-1 office hours
        `,
      },
    ],
  },

  {
    title: 'Projects',
    items: [
      {
        title: 'Bull-Ish',
        date: '2023',
        description:
          'Daily stock market game app: User-inputted tickers, competitive leaderboard for daily returns (Node.js, Next.js, Firebase).',
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
          'Comprehensive Java banking system with user accounts, transactions, and statements (GitLab, CI/CD, PIT Mutation Testing, Unit Testing)',
      },
    ],
  },

  {
    title: 'Skills',
    items: [
      {
        title: 'Languages',
        description:
          'Python, Java, JavaScript, Next.Js, Bash, AWS, Swift, TypeScript, NumPy, Pandas, Junit, PostgresSQL, C',
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
