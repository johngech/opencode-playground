import { projects } from '@/data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.visual}>
                <span className={styles.icon}>{project.icon}</span>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.link} className={styles.link}>Live Demo</a>
                  <a href={project.link} className={styles.link}>GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
