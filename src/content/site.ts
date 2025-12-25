export type Link = {
  label: string
  href: string
}

export type TimelineItem = {
  date: string
  title: string
  location: string
  body: string
  logoSrc?: string
  imageSrc?: string
}

export type ListCard = {
  title: string
  href?: string
  date: string
  subtitle: string
  body: string
  avatarTextFallback: string
  avatarSrc?: string
}

export type Project = {
  title: string
  date: string
  body: string
  imageSrc?: string
  links: Link[]
}

export type SiteContent = {
  hero: {
    heading: string
    subheading: string
    avatarSrc?: string
    avatarFallback: string
  }
  about: {
    title: string
    body: string
  }
  work: {
    title: string
    items: ListCard[]
  }
  volunteering: {
    title: string
    items: ListCard[]
  }
  education: {
    title: string
    items: ListCard[]
  }
  projects: {
    badge: string
    title: string
    subtitle: string
    items: Project[]
  }
  stories: {
    badge: string
    title: string
    subtitle: string
    items: TimelineItem[]
  }
  contact: {
    title: string
    body: string
    links: Link[]
  }
  dock: {
    github?: string
    linkedin?: string
  }
}

import brain1 from '../assets/brain1.gif'
import brain2 from '../assets/brain2.gif'
import brain3 from '../assets/brain3.gif'
import paperImg from '../assets/paper.jpg'

export const site: SiteContent = {
  hero: {
    heading: "I'm Valentina 👋",
    subheading:
      "PhD Student at the Swiss AI Lab @ IDSIA (USI) in Lugano. Working on time series forecasting in non-stationary environments @ Graph Machine Learning Group.",
    avatarSrc: '/src/assets/valentina.jpg',
    avatarFallback: 'VM',
  },
  about: {
    title: 'About',
    body:
      "Hi there 👋\n\n- 🔭 I'm currently a **PhD Student** at the Swiss AI Lab **@ IDSIA (USI)** in Lugano\n- ⚡ Working on **time series forecasting** in **non-stationary environments** @ **Graph Machine Learning Group**\n- 🌱 Double **MSc** graduate from **PoliMI** and **USI**\n\n### What I'm doing\n\n- **Time series forecasting**: improving predictions over time\n- **Irregular data**: making predictions with spatial/temporal irregularities\n- **Graph Neural Networks**: spatio-temporal neural networks\n- **Ethical values**: generalizable findings and meaningful progress",
  },
  work: {
    title: 'Work Experience',
    items: [
      {
        title: 'USI Università della Svizzera italiana',
        href: 'https://www.usi.ch/en',
        date: 'Nov 2024 – Present',
        subtitle: 'PhD and Teaching Assistant',
        body:
          'Lugano, Ticino, Switzerland · On-site. PhD research at IDSIA (Swiss AI Lab) focusing on time series forecasting in non-stationary environments within the Graph Machine Learning Group.',
        avatarSrc: '/src/assets/usi_universita_della_svizzera_italiana_logo.jpg',
        avatarTextFallback: 'U',
      },
    ],
  },
  volunteering: {
    title: 'Volunteering',
    items: [],
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'EUMaster4HPC',
        href: 'https://eumaster4hpc.eu/',
        date: 'Sep 2022 – Sep 2024',
        subtitle: "Master's degree, High Performance Computing",
        body:
          'Participation in theoretical and practical activities such as workshops, challenges, summer school and an internship.\n\nThis certificate acknowledges that Valentina Moretti has successfully completed the European Master\'s Programme in High-Performance Computing (HPC) and its applications in High-Performance Data Analytics (HPDA) and Artificial Intelligence (AI).',
        avatarSrc: '/src/assets/eumaster4hpc_logo.jpg',
        avatarTextFallback: 'E',
      },
      {
        title: 'USI Università della Svizzera italiana',
        href: 'https://www.usi.ch/en',
        date: 'Sep 2022 – Sep 2024',
        subtitle: 'Master of Science (MS), Computational Science',
        body: 'GPA: 9.87/10',
        avatarSrc: '/src/assets/usi_universita_della_svizzera_italiana_logo.jpg',
        avatarTextFallback: 'U',
      },
      {
        title: 'Politecnico di Milano',
        href: 'https://www.polimi.it/en',
        date: 'Sep 2022 – Sep 2024',
        subtitle:
          'Master of Engineering (MEng), High Performance Computing Engineering',
        body:
          'Final grade: 110L/110 · GPA: 29.53/30\n\nSkills: C++ · CUDA · Engineering · Python · Artificial Intelligence (AI) · Machine Learning · Parallel programming',
        avatarSrc: '/src/assets/polimi_logo.jpg',
        avatarTextFallback: 'P',
      },
      {
        title: 'Politecnico di Milano',
        href: 'https://www.polimi.it/en',
        date: 'Sep 2019 – Jul 2022',
        subtitle: 'BSc, Computer Engineering',
        body:
          'Final grade: 110L · GPA: 29.31/30\n\nSkills: Java · Assembly · C · SQL · Python · VHDL · Engineering',
        avatarSrc: '/src/assets/polimi_logo.jpg',
        avatarTextFallback: 'P',
      },
      {
        title: 'Liceo Scientifico Statale L. Da Vinci',
        date: 'Sep 2014 – Jun 2019',
        subtitle: 'High School Diploma',
        body: 'Final grade: 100/100',
        avatarTextFallback: 'L',
      },
    ],
  },
  projects: {
    badge: 'My Projects',
    title: 'Check out some of my work',
    subtitle:
      "I've worked on a variety of projects, from simple websites to complex AI projects. Here are a few of my favorites.",
    items: [
      {
        title: 'Prion-disease',
        date: 'Project',
        body:
          'Implementation of a simulation of Prion spreading inside a human brain mesh using Gmsh, Deal.II Library and ParaView for visualization. To characterize the progression of misfolded proteins across the brain, the classical Fisher–Kolmogorov equation for population dynamics is used together with an anisotropic diffusion model.',
        imageSrc: brain1,
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/valentina-moretti/Prion-disease',
          },
          // { label: 'gif', href: brain2 },
          // { label: 'gif', href: brain3 },
        ],
      },
      {
        title: 'What Matters in Deep Learning for Time Series Forecasting?',
        date: 'Dec 2025',
        body:
          'Why do some deep learning models work so well on time series, while others don\'t? Can current benchmarking practices reveal the true factors behind performance gains?\n\nTomorrow, I\'ll present our work **“What Matters in Deep Learning for Time Series Forecasting?”** at the EurIPS workshop on Benchmarking and Evaluating AI.\n\nMany thanks to Andrea Cini, Ivan Marisca, and Cesare Alippi for being part of this journey.',
        imageSrc: paperImg,
        links: [],
      },
    ],
  },
  stories: {
    badge: 'Experiences',
    title: 'Memorable stories',
    subtitle:
      'During my time in university, I participated in many events. I love hanging out with sharp minds!',
    items: [
      {
        date: 'Dec 2025',
        title: 'EurIPS Workshop Presentation',
        location: 'Copenghagen, Denmark',
        body:
          'Presenting our work “What Matters in Deep Learning for Time Series Forecasting?” at a EurIPS workshop on Benchmarking and Evaluating AI.',
        logoSrc: '/src/assets/eurips.jpg',
        imageSrc: paperImg,
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    body:
      "Want to chat? Just shoot me a dm [with a direct question on LinkedIn](https://www.linkedin.com/in/valentina-moretti-/) and I'll respond whenever I can.",
    links: [
      { label: 'GitHub', href: 'https://github.com/valentina-moretti' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/valentina-moretti-/',
      },
    ],
  },
  dock: {
    github: 'https://github.com/valentina-moretti',
    linkedin: 'https://www.linkedin.com/in/valentina-moretti-/',
  },
}
