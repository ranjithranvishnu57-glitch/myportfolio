import { Code2, Layout, Server, Wrench } from 'lucide-react'

export const SKILLS_HEADER = {
  eyebrow: 'MY EXPERTISE',
  title: 'Technologies I Work With.',
  description:
    'Exploring, learning, and building with technologies that turn ideas into meaningful digital experiences.',
}

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code2,
    items: [
      { id: 'c', name: 'C' },
      { id: 'cpp', name: 'C++' },
      { id: 'python', name: 'Python' },
      { id: 'javascript', name: 'JavaScript' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    items: [
      { id: 'html5', name: 'HTML5' },
      { id: 'css3', name: 'CSS3' },
      { id: 'react', name: 'React.js' },
      { id: 'tailwindcss', name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    items: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'express', name: 'Express.js' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Design',
    icon: Wrench,
    items: [
      { id: 'git', name: 'Git' },
      { id: 'github', name: 'GitHub' },
      { id: 'vscode', name: 'VS Code' },
      { id: 'figma', name: 'Figma' },
    ],
  },
]

