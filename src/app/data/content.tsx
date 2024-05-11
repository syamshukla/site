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
        description: `Spearheaded the development of a cutting-edge fantasy stock game called Field Goal Finance. Developed a dynamic Next.js Progressive Web App to enhance user experience and platform performance. Implemented intuitive administrative interface and resilient Node.js server deployed on AWS EC2. Integrated polygon.io API to
facilitate seamless operation and real-time retrieval of stock data stored in AWS Relational Database Service
`,
      },
      {
        title: 'Software Engineer at BlackRock',
        subTitle: 'Wilmington - Delaware',
        date: 'Sept. 2022 - March 2023',
        description: `
        Created a Python automation script to eliminate daily manual processes, reducing 100% of errors and generating more than 6 figures
        in annual savings. Automated monthly data compilation and upload for 50+ funds using VBA scripts into Aqua Data Studio. Streamlined team data access by creating SQL query templates, enabling 70% quicker lookup and a 50% increase in efficiency`,
      },
      {
        title: 'Software Engineer at Lockheed Martin',
        subTitle: 'Moorestown - New Jersey',
        date: 'Sept. 2021 - March 2022',
        description: `Collaborated with team of 8 Software/Systems Engineers to design/implement software in Java using Agile methodologies
        Utilized the Atlassian Suite to integrate 20 bug fixes, 15 updates, and 2 new features into the product
        Boosted project efficiency by 20% through crafting UML diagrams and design packages, leading to 1 month of time savings during the implementation of new features`,
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
          'Python, Java, JavaScript, Next.Js, Bash, AWS, TypeScript, NumPy, Pandas, Junit, PostgresSQL, C',
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
