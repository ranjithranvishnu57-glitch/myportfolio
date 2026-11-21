import mcqImg from '../assets/mcq-test.jpg'
import crmImg from '../assets/mini-crm.png'

export const PROJECTS_HEADER = {
  eyebrow: 'SELECTED WORK',
  title: 'Projects That Bring Ideas to Life.',
  description:
    'A collection of projects where I explore technology, solve problems, and turn ideas into functional digital experiences.',
}

export const PROJECTS = [
  {
    id: 'mcq-test-app',
    number: '01',
    title: 'MCQ Test Application',
    category: 'Frontend Web Application',
    description:
      'Developed an interactive MCQ test application with multiple-choice questions, answer validation, automatic score calculation, result display, and a responsive user-friendly interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    previewVariant: 'mcqtest',
    image: mcqImg,
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'mini-crm',
    number: '02',
    title: 'Mini CRM — Client Lead Management System',
    category: 'Full Stack Development',
    description:
      'Developed a CRM application to manage client leads, customer information, and follow-up activities with lead creation, updating, deletion, status tracking, RESTful APIs, and MongoDB integration.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    previewVariant: 'minicrm',
    image: crmImg,
    githubUrl: null,
    liveUrl: null,
  },
]
