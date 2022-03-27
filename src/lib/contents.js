import projectDR from '../assets/project_dr.png';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.gif';

export const SUMMARY =
  'A Front-End developer keen to learn new skills and collaborate with others. A firm believer in discipline and self-driven process in learning. working well in specialist teams in exciting and continually developing environments. I am exposed to multicultural point of views integrated with a sociable and tactful personality, always enjoying the challenge of working under pressure either independently or as a member of a team within an agile team.';

export const EXPERIENCE = [
  {
    role: 'Front-End Developer',
    company: 'Joara',
    url: 'https://www.joara.com/',
    location: 'S. Korea',
    activities: [
      '- Continuously improve MAU 687k web applications',
      '- Participate in maintaining website as well as developing new features',
      '- Cooperate closely with Product, Design and Backend Development to spec, build, test and deploy new features',
      '- Working with the team in an Agile environment',
      '- Implementing good practices(airbnb style guide, pair programming, etc..)',
    ],
  },
];

export const PROJECTS = [
  {
    subject: 'Sub-Application Renewal Project',
    period: 'Mar. 2022 - now',
    summary: 'Update the whole design and the legacy code',
    details: [
      '- Using React Query to solve state problems',
      '(?)- Caching between server-state and client-state',
      '(?)- Asynchronously updated server-sate',
      '- Introduce test(Jest) which barely used→ testCoverage:?, TDD',
      '- React Migration(16.10 → 17.0) and following test',
      '- Refactoring legacy code → detail needed',
      '- Introduce scss which used to be written by pure css',
    ],
  },
  {
    subject: 'Adding easy payment gateways',
    period: 'Nov. 2021',
    summary: '',
    details: [
      '- Using localStorage to contemporary save payment information.',
      '- Call internal API when the easy payment send a response',
      '- Setting BridgePage for the next process',
    ],
  },
  {
    subject: 'Develop SSO',
    period: 'Aug. 2021',
    summary: 'Reached business expectation; Monthly usage 6k',
    details: [
      '- Send standard communication information to the internal back-end server for sign up and link with social accounts',
      '- Link account with social media accounts / Sign up by the given token',
      '- Use sessionStorage to save redirectUri and SSO token.',
      '- Call an internal API to link with internal token and fulfil Sign up and Sign in',
    ],
  },
  {
    subject: 'Writer Settlement system',
    period: 'June. 2021',
    summary: '',
    details: ['- Using Redux to manage api calls', '- Using context API for the smaller scales'],
  },
  {
    subject: 'React SPA Modernisation Project',
    period: 'Nov. 2020 - Feb. 2021',
    summary: 'Main business web application UI modernisation project (php -> React SPA)',
    details: [
      '- Reduce unnecessary API calls by saving data into LocalStorage which are barely change',
      '- Using React ContextAPI to manage client-state globally',
      '- Create Custom Hooks to increase reusability for fully responsive design',
      '- Create invalidations on CloudFront(AWS) to synchronise with recently released code.',
    ],
  },
];

export const HIGHLIGHT_SKILLS = {
  skills: [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Redux',
    'React-Query',
    'Git(Bitbucket, Jira)',
    'Typescript',
    'Jest',
  ],
  personal: ['Typescript', 'React-Query', 'Jest'],
};

export const PERSONAL_PROJECTS = [
  {
    img: projectImg1,
    link: 'https://nadinefresko.github.io/group_project/',
    title: 'Mind Your Rubbish',
    summary:
      'Best to test on a desktop view. It has a recycling drag and drop game and using svg files to separate each London borough. Using Twitter API for updating Recycling & Waste World Magazine. Please feel free to check your recycling skill.',
  },
  {
    img: projectImg2,
    link: 'https://kodflix-kainy.herokuapp.com',
    title: 'Kodflix',
    summary: `A film library it shows the film's detail; built with ReactJS. It gets the film data from the back-end server which is required to use nodeJS, expressJS and mongoDB.`,
  },
  {
    img: projectImg3,
    link: 'https://we-pair.herokuapp.com/',
    title: 'WePair',
    summary:
      'An app specifically for developers who would like to pair programming. The user can search for the languages and locations then reqest to another user if the date is available. This was a group project',
  },
  {
    img: projectImg4,
    link: 'http://relieved-process234567.surge.sh/',
    title: 'tell my GP',
    summary: `Participated 'UK vs COVID-19 Hackathon'; Connecting the patients and GP surgeries to track COVID-19 symptoms daily. Using Gatsby, React, Material UI and Firebase.`,
    medium: 'https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38',
  },
];

export const ACTIVITIES = [
  {
    subject: 'Hackathon',
    location: 'London',
    summary: `Participated in 'UK vs COVID-19' Hackathon during the quarantine period; more about the project tell my GP, and you'll see more on the Medium post.`,
    link: 'https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38',
  },
  {
    subject: 'Coaching',
    location: 'codebar - London',
    summary:
      'Pairing with beginner coders helping their project with HTML, CSS and Javascript and also learning from the experienced developers.',
  },
  {
    subject: 'Event Organiser',
    location: 'London',
    summary: `Meetups : Running workshops for women who are interested in coding and would like to become a developer.
  *Kodiri : Volunteering as a co-organiser running meetup events and helping people with the platform and HTML, CSS and JS.`,
  },
  {
    subject: 'Running Workshops',
    location: 'Kodiri - Youtube',
    summary: `Running a live streaming workshops about react advanced skills.`,
    link: 'https://www.youtube.com/watch?v=GAkdWTmPw9Q&feature=youtu.be',
  },
];
