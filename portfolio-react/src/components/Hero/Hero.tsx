import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg}></div>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>Yohannes Getachew</h1>
        <h2 className={styles.title}>AI-Native Full-Stack Developer</h2>
        <p className={styles.tagline}>
          Building intelligent applications with modern tools. Strong in adapting new technologies, passionate about DevOps and AI-Engineering.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            View My Work
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.secondary}`}>
            Get In Touch
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}
