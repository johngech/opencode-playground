import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Languages (4)
  { name: 'JavaScript', category: 'languages', percentage: 95 },
  { name: 'TypeScript', category: 'languages', percentage: 90 },
  { name: 'Python', category: 'languages', percentage: 85 },
  { name: 'HTML/CSS', category: 'languages', percentage: 80 },
  // Frameworks (4)
  { name: 'React', category: 'frameworks', percentage: 90 },
  { name: 'Node.js', category: 'frameworks', percentage: 85 },
  { name: 'Express', category: 'frameworks', percentage: 80 },
  { name: 'Next.js', category: 'frameworks', percentage: 75 },
  // Tools (4)
  { name: 'Git', category: 'tools', percentage: 85 },
  { name: 'Docker', category: 'tools', percentage: 80 },
  { name: 'AWS', category: 'tools', percentage: 75 },
  { name: 'CI/CD', category: 'tools', percentage: 70 },
  // AI & Engineering (4)
  { name: 'LLM Integration', category: 'ai-devops', percentage: 85 },
  { name: 'RAG Systems', category: 'ai-devops', percentage: 80 },
  { name: 'AI APIs', category: 'ai-devops', percentage: 75 },
  { name: 'Vector DBs', category: 'ai-devops', percentage: 70 },
]
