import { useEffect, useRef, useState } from 'react'
import { skills } from '@/data/skills'
import styles from './Skills.module.css'

export function Skills() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const categories = ['languages', 'frameworks', 'tools', 'ai-devops'] as const

  return (
    <section className={styles.skills} id="skills" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category} className={styles.category}>
              <h3>{category === 'ai-devops' ? 'AI & Engineering' : category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className={styles.bars}>
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={`${styles.item} ${visible ? styles.visible : ''}`}
                      style={{ '--percent': `${skill.percentage}%` } as React.CSSProperties}
                    >
                      <div className={styles.info}>
                        <span>{skill.name}</span>
                        <span className={styles.percent}>{skill.percentage}%</span>
                      </div>
                      <div className={styles.bar}>
                        <div className={styles.fill}></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
