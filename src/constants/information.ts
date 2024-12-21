import tdimg from './../assets/todo.png';
import rgimg from './../assets/resGen.png';
import spaimg from './../assets/spa.png';
import ttt from './../assets/ttt.png';

export const Languages = {
  headers: [''],
  data: [['RUSSIAN  —  NATIVE', 'ENGLISH  —  B2+']],
};

export const Education = {
  headers: [' BSU, FACULTY OF MECHANICS AND MATHEMATICS'],
  data: [["BACHELOR'S DEGREE (SEP 2023 — PRESENT)"]],
};

export const Skills = {
  headers: ['Hard', 'SOFT', 'Additional expertise'],
  data: [
    [
      'Agile, scrum, kanban',
      'JIRA, ASANA, WORKSECTION',
      'MS OFFICE',
      'FINANCIAL MODELING',
      'CASTDEV',
      ' DATA ANALYSIS',
      ' CODE ANALYSIS',
    ],
    ['ADAPTIVITY', 'STRATEGIC THINKING', 'TEAMWORK', 'LEADERSHIP SKILLS', 'TIME MANAGEMENT', 'NEGOTIATION'],
    [
      'C++, Java, C#, JS/TS',
      'JavaScript/TypeScript',
      'Node.js',
      'Bootstrap',
      'Figma',
      'React + Redux',
      'Vite&webpack',
      'Tailwind Css',
    ],
  ],
};

export const Experience = {
  headers: [
    'PERFECT SYSTEMS ASSISTANT DIRECTOR',
    'STARTUP COMMUNITY “WE ARE” EXECUTIVE DIRECTOR',
    `STARTUP COMMUNITY “WE ARE” CHIEF ORGANIZER `,
  ],
  date: ['AUG 2024 — PRESENT', 'APR 2024 — AUG 2024', 'JAN 2024 — APR 2024 '],
  data: [
    [
      'BUSINESS DOCUMENT MANAGEMENT (OPTIMIZED BY ELECTRONIC SIGNATURES AND DEVELOPED DOCUMENT TEMPLATES)',
      'ANALYTICAL RESEARCH AND REPORTING',
      "CONTROL OF THE COMPANY'S CASH FLOW, BUDGET TRACKING (OPTIMIZATION OF PROCESSES IN GOOGLE SHEETS)",
      'IMPLEMENTED TASK MANAGEMENT SYSTEM IN JIRA',
      'DISTRIBUTION AND CONTROL OF TASKS BETWEEN 3 DEPARTMENTS',
      'ORGANIZATION OF 10+ MEETINGS WITH KEY PARTNERS AND CLIENTS',
    ],
    [
      `ORGANIZATION OF 15+ EVENTS FOR AN AUDIENCE OF 20-300 PEOPLE`,
      `COORDINATION OF A TEAM OF 10+ PARTICIPANTS`,
      `ATTRACTION OF SPONSORSHIP FUNDS IN THE AMOUNT OF 10 THOUSAND BYN`,
      `PARTNERSHIP WITH 10+ COMPANIES`,
      `MAINTAINING A HIGH LEVEL OF PARTICIPANT SATISFACTION (NPS > 8)`,
    ],
    [
      `ORGANIZATION OF 5+ EVENTS FOR AN AUDIENCE OF 20-100 PEOPLE`,
      `DEVELOPING EVENT CONCEPTS AND TIMELINES`,
      `COORDINATION OF A TEAM OF 3 PARTICIPANTS`,
      `FEEDBACK ANALYSIS (GOOGLE FORMS/EXCEL)`,
    ],
  ],
};

export const Contacts = {
  headers: ['Contacts'],
  data: [['+375 (29) 534-32-26', 'usova.anasteischa@gmail.com', 'MINSK, BELARUS']],
};

export const Projects = {
  headers: ['SPA-Router', 'Todo', 'Resume generator', 'Tic-Tac-Toe'],
  imgs: [spaimg, tdimg, rgimg, ttt],
  refs: [
    'https://spa-router.vercel.app/',
    'https://tdts.vercel.app/',
    'https://resume-generator-alpha.vercel.app/',
    'https://ttt-ten-tau.vercel.app/',
  ],
  techs: [
    ['React', 'Node.js', 'Fetch&FakeAPI'],
    ['React', 'TypeScript', 'JavaScript'],
    ['HTML', 'CSS', 'JavaScript', 'DOM API'],
    ['HTML', 'CSS', 'JavaScript'],
  ],
};
