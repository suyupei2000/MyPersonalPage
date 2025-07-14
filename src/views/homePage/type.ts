// 类型定义
export interface Skill {
  name: string
  level: number
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
}

export interface ExpertiseArea {
  name: string
  icon: any
}

export interface ContactMethod {
  title: string
  value: string
  link: string
  action: string
  icon: any
}
