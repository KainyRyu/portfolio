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
  work: ['- HTML/ CSS/ JS', '- JavaScript', '- React', '- Redux', '- Git(Bitbucket, Jira)'],
  personal: [
    '- HTML/ CSS/ JS',
    '- JavaScript',
    '- Typescript',
    '- React',
    '- React Query',
    '- Jest',
  ],
};
