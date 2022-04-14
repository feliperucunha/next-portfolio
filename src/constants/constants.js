import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as GrIcons from 'react-icons/gr';


export const IconData = [
  {
    text: 'JavaScript',
    Icon: SiIcons.SiJavascript,
    doc: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  },
  {
    text: 'TypeScript',
    Icon: SiIcons.SiTypescript,
    doc: 'https://www.typescriptlang.org/',
  },
  {
    text: 'React',
    Icon: FaIcons.FaReact,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Redux',
    Icon: SiIcons.SiRedux,
    doc: 'https://redux.js.org/',
  },
  {
    text: 'Next',
    Icon: SiIcons.SiNextdotjs,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Ember',
    Icon: FaIcons.FaEmber,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'AntDesign',
    Icon: SiIcons.SiAntdesign,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Bootstrap',
    Icon: FaIcons.FaBootstrap,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'JQuery',
    Icon: SiIcons.SiJquery,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Styled components',
    Icon: SiIcons.SiStyledcomponents,
    doc: 'https://styled-components.com/docs',
  },
  {
    text: 'Chart.js',
    Icon: SiIcons.SiChartdotjs,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Less',
    Icon: FaIcons.FaLess,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Sass',
    Icon: FaIcons.FaSass,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  // {
  //   text: 'Jest',
  //   Icon: SiIcons.SiJest,
  //   doc: 'https://jestjs.io/pt-BR/',
  // },
  {
    text: 'CSS3',
    Icon: FaIcons.FaCss3Alt,
    doc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    text: 'HTML5',
    Icon: FaIcons.FaHtml5,
    doc: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    text: 'Git',
    Icon: FaIcons.FaGitAlt,
    doc: 'https://git-scm.com/docs/git/pt_BR',
  },
  {
    text: 'GitHub',
    Icon: FaIcons.FaGithub,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Bitbucket',
    Icon: FaIcons.FaBitbucket,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Jira',
    Icon: FaIcons.FaJira,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Vercel',
    Icon: SiIcons.SiVercel,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Heroku',
    Icon: SiIcons.SiHeroku,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Netlify',
    Icon: SiIcons.SiNetlify,
    doc: 'https://docs.github.com/en/get-started',
  },
  // {
  //   text: 'Tailwind',
  //   Icon: SiIcons.SiTailwindcss,
  //   doc: 'https://tailwindcss.com/docs/installation',
  // },
  {
    text: 'Node.js',
    Icon: FaIcons.FaNodeJs,
    doc: 'https://nodejs.org/en/docs/',
  },
  {
    text: 'Express',
    Icon: SiIcons.SiExpress,
    doc: 'https://expressjs.com/pt-br/',
  },
  {
    text: 'MySql',
    Icon: GrIcons.GrMysql,
    doc: 'https://dev.mysql.com/doc/',
  }
];


export const projects = [
  {
    title: 'Crypto Data',
    description: "A Frontend dashboard that uses a public API to pull out data about the world of Crypto Coins.",
      image: '/images/1.png',
      tags: ['React.js', 'AntDesign', 'Chart.js', 'Redux'],
    source: 'https://github.com/feliperucunha/crypto-data',
    visit: 'https://crypto-data-iota.vercel.app',
    id: 0,
  },
  {
    title: 'Anime Catalog',
    description:"An anime catalog that uses a public API and shows top rated anime, searches specific anime and also shows details about them. [PT-BR]",
    image: '/images/2.png',
    tags: ['React.js', 'Next.js', 'AntDesign', 'LESS'],
    source: 'https://github.com/feliperucunha/anime-catalog',
    visit: 'https://teste-company-hero.vercel.app',
    id: 1,
  },
  {
    title: 'Github Searcher',
    description: "A Frontend project that uses the Github API to look for users and list their repositories [PT-BR]",
      image: '/images/3.png',
      tags: ['React', 'Semantic UI', 'JavaScript'],
    source: 'https://github.com/feliperucunha/github-searcher',
    visit: 'https://github-searcher-mocha.vercel.app/',
    id: 2,
  },
  {
    title: 'LocalTips',
    description: "A FullStack map tool that shows the Federal University of Para and the user can mark down places to give others some tips about them. [PT-BR]",
    image: '/images/4.png',
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express', 'SQLite3', 'Yup'],
    source: 'https://github.com/feliperucunha/localtips-frontend',
    visit: 'https://pedantic-euclid-cf2200.netlify.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Came from Vet School do Computer Engineering at UFPA', },
  { year: 2018, text: 'Started studying C and Python', },
  { year: 2019, text: 'Entered an Internship at the Public Ministry as a FullStack Developer', },
  { year: 2020, text: 'Started working at a Startup called Cosmobots and later a big company called Viasoft', },
  { year: 2021, text: `Got a job at Brazil's greatest software house: Compass.UOL`, },
  { year: 2022, text: 'Got promoted to mid level developer and currently improving my skills', },
];

export const AccomplishmentsData = [
  { number: 2, text: 'Years of professional experience' },
  { number: 4, text: 'Years of coding experience', },
  { number: 10, text: 'Frameworks and tools used over time', },
  { number: 1000, text: 'Pull Requests on Bitbucket and Gitlab', }
];

export const FooterImage = {
  image: '/images/footer_img.jpeg'
};