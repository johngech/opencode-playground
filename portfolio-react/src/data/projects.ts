import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot powered by LLM with context-aware responses and persistent conversations.',
    techStack: ['React', 'Node.js', 'OpenAI'],
    link: '#',
    icon: '🤖',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with interactive charts and custom reporting.',
    techStack: ['TypeScript', 'Next.js', 'D3.js'],
    link: '#',
    icon: '📊',
  },
  {
    title: 'Cloud Deploy Tool',
    description: 'Automated deployment pipeline with Docker containers and AWS infrastructure.',
    techStack: ['Python', 'Docker', 'AWS'],
    link: '#',
    icon: '☁️',
  },
  {
    title: 'RAG Document Search',
    description: 'AI-powered document retrieval system using embeddings and vector similarity search.',
    techStack: ['Python', 'LangChain', 'Chroma'],
    link: '#',
    icon: '🔍',
  },
]
