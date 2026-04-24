import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Yohannes Getachew. Built with passion.
        </p>
      </div>
    </footer>
  )
}
