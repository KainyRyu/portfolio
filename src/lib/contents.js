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

// import projectDR from '../assets/project_dr.png';
// import projectImg1 from '../assets/project1.png';
// import projectImg2 from '../assets/project2.png';
// import projectImg3 from '../assets/project3.png';
// import projectImg4 from '../assets/project4.gif';

// export const SUMMARY = {
//   eng: 'A Front-End developer keen to learn new skills and collaborate with others. A firm believer in discipline and self-driven process in learning. working well in specialist teams in exciting and continually developing environments. I am exposed to multicultural point of views integrated with a sociable and tactful personality, always enjoying the challenge of working under pressure either independently or as a member of a team within an agile team.',
//   kor: `MAU 600K 서비스에서 고객 경험 향상을 위해 팀원들과 고민하고 개선하며 최적화를 경험했습니다.\n실패에서 성공을 위한 발판을 찾기 위해 팀원과 상의하는 것을 좋아하고, 함께 일하고 싶은 개발자로의 성장을 목표로 합니다.`,
// };

// export const EXPERIENCE = {
//   eng: [
//     {
//       role: 'Front-End Developer',
//       company: 'Purpledog',
//       url: 'https://www.purpledog.co.kr/',
//       location: 'S. Korea',
//       period: '2022-06 - 2022-08',
//       activities: [
//         '- Continuously improve MAU 687k web applications',
//         '- Participate in maintaining website as well as developing new features',
//         '- Cooperate closely with Product, Design and Backend Development to spec, build, test and deploy new features',
//         '- Working with the team in an Agile environment',
//         '- Implementing good practices(airbnb style guide, pair programming, etc..)',
//       ],
//     },
//     {
//       role: 'Front-End Developer',
//       company: 'Joara',
//       url: 'https://www.joara.com/',
//       location: 'S. Korea',
//       period: '2020-11 - 2022-06',
//       activities: [
//         '- Continuously improve MAU 687k web applications',
//         '- Participate in maintaining website as well as developing new features',
//         '- Cooperate closely with Product, Design and Backend Development to spec, build, test and deploy new features',
//         '- Working with the team in an Agile environment',
//         '- Implementing good practices(airbnb style guide, pair programming, etc..)',
//       ],
//     },
//   ],
//   kor: [
//     {
//       role: 'Front-End Developer',
//       company: '퍼플독 (Purpledog)',
//       url: 'https://www.purpledog.co.kr/',
//       location: 'S. Korea',
//       period: '2022-06 - 2022-08',
//       activities: [
//         '- SSR 남용으로 무거웠던 페이지에 일부 API를 CSR로 전환하여 초기 로딩 속도 단축.',
//         '- 기능 추가시 마다 중복된 코드 및 스파게티 코드 모듈화 작업.',
//         '- React Query 도입으로 매 페이지에서 fetch하던 API 호출을 필요에 따라 호출하도록 개선.',
//         '- 전반적인 프로젝트 안정화 및 컨벤션 도입',
//         '- 재사용성과 유지보수성 확보를 위해 컨벤션 도입 후 문서화',
//       ],
//     },
//     {
//       role: 'Front-End Developer',
//       company: '조아라 (Joara)',
//       url: 'https://www.joara.com/',
//       location: 'S. Korea',
//       period: '2020-11 - 2022-06',
//       activities: [
//         '- MAU 687k 서비스 지속적인 유지보수 및 개발.',
//         '- feature 14건 및 간헐적 CS hotfix 수정작업.',
//         '- 디자인, 프로덕트, Backend Development(PHP) 팀과 협업.',
//         '- 팀 내 개발문화 개선을 위해 Good Practice 주도 함: airbnb style guide, pair programming, etc..',
//       ],
//     },
//   ],
// };

// export const PROJECTS = [
//   {
//     eng: {
//       subject: 'Sub-Application Renewal Project',
//       period: 'Mar. 2022 - May. 2022',
//       summary: 'Update the whole design and the legacy code',
//       details: [
//         '- Using React Query to solve state problems',
//         '(?)- Caching between server-state and client-state',
//         '(?)- Asynchronously updated server-sate',
//         '- Introduce test(Jest) which barely used→ testCoverage:?, TDD',
//         '- React Migration(16.10 → 17.0) and following test',
//         '- Refactoring legacy code → detail needed',
//         '- Introduce scss which used to be written by pure css',
//       ],
//     },
//     kor: {
//       subject: '서브 도메인 리뉴얼',
//       period: 'Mar. 2022 - May. 2022',
//       summary: '레거시 코드 및 디자인 업데이트',
//       details: [
//         '- 기존 페이지의 데이터 갱신 및 사용자 경험을 향상시키기 위해 React Query로 전환',
//         '- 재사용성과 유지보수성 확보를 위해 레거시 코드를 리액트 권장 스타일로 최적화',
//         '- XD로 작성된 신규 디자인 가이드라인이 서비스 최초로 정의됨에 따라, 재사용성을 위한 SCSS 기반 컴포넌트 작성',
//       ],
//     },
//   },
//   {
//     eng: {
//       subject: 'SSO & easy payment gateways',
//       period: 'Nov. 2021',
//       summary: '',
//       details: [
//         '- Using localStorage to contemporary save payment information.',
//         '- Call internal API when the easy payment send a response',
//         '- Setting BridgePage for the next process',
//       ],
//     },
//     kor: {
//       subject: 'SSO & easy payment gateways',
//       period: 'Nov. 2021',
//       summary: '',
//       details: [
//         '- 내부 결제 도메인 백엔드 API와 연동한 결제 페이지 리뉴얼: Tosspayments, KakaoPay 결제수단 제공',
//         '- Kakao, Apple 계정으로 가입 혹은 계정 연동 기능 제공',
//       ],
//     },
//   },
//   {
//     subject: 'Develop SSO',
//     period: 'Aug. 2021',
//     summary: 'Reached business expectation; Monthly usage 6k',
//     details: [
//       '- Send standard communication information to the internal back-end server for sign up and link with social accounts',
//       '- Link account with social media accounts / Sign up by the given token',
//       '- Use sessionStorage to save redirectUri and SSO token.',
//       '- Call an internal API to link with internal token and fulfil Sign up and Sign in',
//     ],
//   },
//   {
//     eng: {
//       subject: 'Writer Settlement system',
//       period: 'June. 2021',
//       summary: '',
//       details: ['- Using Redux to manage api calls', '- Using context API for the smaller scales'],
//     },
//     kor: {
//       subject: '작가전용 정산 신청 기능',
//       period: 'June. 2021',
//       summary: '',
//       details: [
//         '- 이메일 수집 및 수기로 관리되던 작가 정산 프로세스를 별도의 도메인으로 신설하여 사용자 편의성 확보',
//         '- 기존 Redux에서 불필요하게 전파되는 전역 State가 비대해짐에 따라 성능저하 우려 및 유지보수성 향상을 위해 Context API로 부분 전환',
//       ],
//     },
//   },
//   {
//     eng: {
//       subject: 'React SPA Modernisation Project',
//       period: 'Nov. 2020 - Feb. 2021',
//       summary: 'Main business web application UI modernisation project (php -> React SPA)',
//       details: [
//         '- Reduce unnecessary API calls by saving data into LocalStorage which are barely change',
//         '- Using React ContextAPI to manage client-state globally',
//         '- Create Custom Hooks to increase reusability for fully responsive design',
//         '- Create invalidations on CloudFront(AWS) to synchronise with recently released code.',
//       ],
//     },
//     kor: {
//       subject: '웹 UI 현대화 프로젝트',
//       period: 'Nov. 2020 - Feb. 2021',
//       summary: '메인 도메인 반응형 지원 및 UI개선',
//       details: [
//         '- LocalStorage에 자주 사용하는 정보를 저장하여 불필요한 API 요청 비용 및 시간 절감',
//         '- React Context API 기반한 State 관리로 API 호출 수 효율성 확보',
//         '- 반응형 디자인을 위한 Custom Hook 적용으로 재사용성 증대',
//         '- Image file 최적화 제안 및 스크립트 개발로 AWS S3 저장 및 호스팅 비용 절감',
//       ],
//     },
//   },
// ];

// export const HIGHLIGHT_SKILLS = {
//   skills: [
//     'HTML',
//     'CSS',
//     'JS',
//     'React',
//     'Redux',
//     'React-Query',
//     'Git(Bitbucket, Jira)',
//     'Typescript',
//     'Jest',
//   ],
//   personal: ['Typescript', 'React-Query', 'Jest'],
// };

// export const PERSONAL_PROJECTS = [
//   {
//     img: projectImg1,
//     link: 'https://nadinefresko.github.io/group_project/',
//     title: 'Mind Your Rubbish',
//     summary:
//       'Best to test on a desktop view. It has a recycling drag and drop game and using svg files to separate each London borough. Using Twitter API for updating Recycling & Waste World Magazine. Please feel free to check your recycling skill.',
//   },
//   {
//     img: projectImg2,
//     link: 'https://kodflix-kainy.herokuapp.com',
//     title: 'Kodflix',
//     summary: `A film library it shows the film's detail; built with ReactJS. It gets the film data from the back-end server which is required to use nodeJS, expressJS and mongoDB.`,
//   },
//   {
//     img: projectImg3,
//     link: 'https://we-pair.herokuapp.com/',
//     title: 'WePair',
//     summary:
//       'An app specifically for developers who would like to pair programming. The user can search for the languages and locations then reqest to another user if the date is available. This was a group project',
//   },
//   {
//     img: projectImg4,
//     link: 'http://relieved-process234567.surge.sh/',
//     title: 'tell my GP',
//     summary: `Participated 'UK vs COVID-19 Hackathon'; Connecting the patients and GP surgeries to track COVID-19 symptoms daily. Using Gatsby, React, Material UI and Firebase.`,
//     medium: 'https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38',
//   },
// ];

// export const ACTIVITIES = [
//   {
//     subject: 'Hackathon',
//     location: 'London',
//     summary: `Participated in 'UK vs COVID-19' Hackathon during the quarantine period; more about the project tell my GP, and you'll see more on the Medium post.`,
//     link: 'https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38',
//   },
//   {
//     subject: 'Coaching',
//     location: 'codebar - London',
//     summary:
//       'Pairing with beginner coders helping their project with HTML, CSS and Javascript and also learning from the experienced developers.',
//   },
//   {
//     subject: 'Event Organiser',
//     location: 'London',
//     summary: `Meetups : Running workshops for women who are interested in coding and would like to become a developer.
//   *Kodiri : Volunteering as a co-organiser running meetup events and helping people with the platform and HTML, CSS and JS.`,
//   },
//   {
//     subject: 'Running Workshops',
//     location: 'Kodiri - Youtube',
//     summary: `Running a live streaming workshops about react advanced skills.`,
//     link: 'https://www.youtube.com/watch?v=GAkdWTmPw9Q&feature=youtu.be',
//   },
// ];
