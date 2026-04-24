export interface Skill {
  name: string
  category: 'languages' | 'frameworks' | 'tools' | 'ai-devops'
  percentage: number
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  link: string
  icon?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
