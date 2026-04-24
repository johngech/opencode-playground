import styles from './Callout.module.css'

export function Callout() {
  return (
    <section className={styles.callout}>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Build Something Amazing Together</h2>
        <p className={styles.text}>
          I'm always excited to work on new projects and bring innovative ideas to life. Let's create something extraordinary.
        </p>
        <a href="#contact" className={styles.btn}>
          Start a Conversation
        </a>
      </div>
    </section>
  )
}
