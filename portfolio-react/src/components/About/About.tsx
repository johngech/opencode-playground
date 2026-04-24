import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.text}>
          <p>
            I'm an AI-Native Full-Stack Developer with a passion for building cutting-edge applications. I specialize in creating robust, scalable solutions that leverage the latest in artificial intelligence and cloud technologies.
          </p>
          <p>
            What sets me apart is my ability to quickly adapt to new tools and frameworks. In the rapidly evolving world of AI and software development, I thrive on learning and implementing emerging technologies to deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  )
}
