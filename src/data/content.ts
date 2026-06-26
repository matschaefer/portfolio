export interface Project {
  id: string
  index: string
  title: string
  category: string
  year: string
  role: string
  type: string
  description: string
  stack: string[]
}

export const projects: Project[] = [
  {
    id: 'velocity-rent',
    index: '001',
    title: 'Velocity Rent',
    category: 'Vehicle Rental Platform',
    year: '2024',
    role: 'Fullstack Developer',
    type: 'Web Application',
    description:
      'A vehicle rental web application with dynamic search and filtering, RESTful APIs for bookings and fleet data, a relational database, and a backend structured into modular services — with lazy loading for performance.',
    stack: ['Angular', 'React', 'ASP.NET Core', 'REST APIs', 'SQL'],
  },
  {
    id: 'file-management-cloud',
    index: '002',
    title: 'File Management Cloud App',
    category: 'Cloud Storage System',
    year: '2023',
    role: 'Fullstack Developer',
    type: 'Cloud Application',
    description:
      'A self-directed learning project: a web-based file management application with upload/download functionality over RESTful APIs, a structured and intuitive UI, and deployment to Microsoft Azure App Service.',
    stack: ['Angular', 'ASP.NET Core', 'REST APIs', 'Azure'],
  },
  {
    id: 'taskflow',
    index: '003',
    title: 'TaskFlow',
    category: 'Project Management Tool',
    year: '2024',
    role: 'Fullstack Developer',
    type: 'Web Application',
    description:
      'A Kanban-style project management tool with drag-and-drop boards, real-time status updates between collaborators, and a relational data model for projects, tasks, and team members.',
    stack: ['Angular', 'ASP.NET Core', 'SignalR', 'SQL'],
  },
  {
    id: 'invoicehub',
    index: '004',
    title: 'InvoiceHub',
    category: 'Billing Dashboard',
    year: '2023',
    role: 'Fullstack Developer',
    type: 'Dashboard',
    description:
      'A billing and invoicing dashboard for freelancers — client and invoice management, automated PDF generation, and a REST API backend with structured reporting endpoints.',
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL'],
  },
  {
    id: 'pulsechat',
    index: '005',
    title: 'PulseChat',
    category: 'Real-Time Messaging App',
    year: '2022',
    role: 'Fullstack Developer',
    type: 'Real-Time Application',
    description:
      'A real-time messaging application with live presence indicators and instant delivery, built on a WebSocket-based backend with persistent chat history and channel-based organization.',
    stack: ['Vue', 'ASP.NET Core', 'SignalR', 'Azure'],
  },
  {
    id: 'stocksense',
    index: '006',
    title: 'StockSense',
    category: 'Inventory Management System',
    year: '2022',
    role: 'Fullstack Developer',
    type: 'Internal Tool',
    description:
      'An inventory management system with stock-level tracking, low-stock alerts, and a reporting dashboard — built around a normalized relational schema and a clean internal REST API.',
    stack: ['Angular', 'C#', 'SQL', 'REST APIs'],
  },
]

export interface Stat {
  value: string
  label: string
  caption: string
}

export const stats: Stat[] = [
  { value: '03', label: 'Years', caption: 'In Training At Deloitte' },
  { value: '02', label: 'Shipped', caption: 'Fullstack Projects' },
  { value: '01', label: 'Certified', caption: 'Microsoft Azure AZ-900' },
]

export const focusTags: string[] = [
  'Fullstack Development',
  'Cloud Architecture',
  'Enterprise Software',
  'CI/CD',
  'Performance',
]

export interface ExperienceItem {
  id: string
  year: string
  role: string
  org: string
  description: string
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'deloitte',
    year: '2023 — 2026',
    role: 'Application Developer — Apprenticeship',
    org: 'Deloitte, Düsseldorf',
    description:
      'Developing and maintaining software solutions and web applications in an enterprise context — working with Angular and REST APIs, contributing to DevOps and CI/CD pipelines in Microsoft Azure, and collaborating in structured, agile project environments.',
    tags: ['Angular', 'REST APIs', 'Azure', 'CI/CD', 'Agile'],
  },
  {
    id: 'basf',
    year: '06/2023',
    role: 'IT Internship',
    org: 'BASF, Düsseldorf',
    description:
      'Internship within an enterprise IT department — gaining insight into system administration, network structures, firewalls, and network security in a professional IT environment.',
    tags: ['System Administration', 'Networking', 'IT Infrastructure'],
  },
  {
    id: 'freelance',
    year: '2021 — 2023',
    role: 'Founder — Digital Agency',
    org: 'Self-Employed, Düsseldorf',
    description:
      'Conceived and built individual websites for small and mid-sized businesses end to end — modern, responsive frontends, direct client communication, requirements analysis, and full project ownership from planning to delivery.',
    tags: ['Web Development', 'Frontend', 'Client Projects'],
  },
]

export const skills: string[] = [
  'Angular',
  'React',
  'Vue',
  'TypeScript',
  'JavaScript',
  'Java',
  'Python',
  'C#',
  'ASP.NET Core',
  'SQL',
  'Azure',
  'Tailwind CSS',
  'Git',
  'Linux',
  'CI/CD',
  'REST APIs',
]

export const contact = {
  email: 'matschaefer@outlook.de',
  github: 'https://github.com/matschaefer',
  githubHandle: '@matschaefer',
  linkedin: 'https://www.linkedin.com/in/matthias-schaefer-duesseldorf/',
  linkedinHandle: 'matthias-schaefer-duesseldorf',
}
