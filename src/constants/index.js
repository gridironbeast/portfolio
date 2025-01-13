import { title } from 'framer-motion/client';
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  nextjs,
  sql,
  expressjs,
  blog,
  cms,
  pizza,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'HTML/CSS Developer',
    icon: web,
  },
  {
    title: 'Microsoft Teams Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
  {
    title: 'Content Creator',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Next Js',
    icon: nextjs,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'Express Js',
    icon: expressjs,
  },
];

const experiences = [
  {
    title: 'HTML/CSS Intern Developer',
    company_name: 'Spezvuzavtomatika',
    date: 'Jan 2021 - April 2021',
  },
  {
    title: 'Microsoft Teams Manager',
    company_name: 'ROST Alekseevka',
    date: 'Jun 2021 - Feb 2022',
  },
  {
    title: 'Frontend Developer',
    company_name: 'Freelance',
    date: 'Mar 2022 - Sep 2022',
  },
  {
    title: 'Content creator',
    company_name: 'Satrtup',
    date: 'Feb 2022 - Sep 2022',
  },
];

const projects = [
  {
    name: 'E-Commerce with CMS Dashboard',
    description:
      'E-Commerce with CMS Dashboard. Built with Next.js, Supabase, Zustand, and Tailwind CSS. Includes authentication, product management, and cart functionality.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'zustand',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cms,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Online Pizza',
    description:
      'Online Pizza. Built with React, Redux Toolkit, and SCSS. Includes a cart functionality, products sorting and filtering. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'pink-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
    ],
    image: pizza,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'MERN Blog',
    description:
      'MERN Blog. Built with React, Express, MongoDB, and Tailwind CSS. Includes authentication, user management, and blog functionality.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, projects };
