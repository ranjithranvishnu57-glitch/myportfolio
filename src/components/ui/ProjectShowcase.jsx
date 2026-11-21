import ProjectCard from './ProjectCard'

/**
 * Reusable editorial showcase list for rendering featured projects.
 */
export default function ProjectShowcase({ projects = [] }) {
  return (
    <div className="mt-10 space-y-8 lg:space-y-10">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

