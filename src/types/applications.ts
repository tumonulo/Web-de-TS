export type QuestionType = "short" | "long" | "select" | "multiselect"

export interface Question {
  label: string
  type: QuestionType
  aside?: string
  required?: boolean
  options?: string[]
  maxLength?: number
}

export interface Section {
  name: string
  questions: Question[]
}

export interface Application {
  id: string
  name: string
  description: string
  color: string
  banner: {
    url: string
    alt: string
  }
  icon: {
    url: string
    alt: string
  }
  sections: Section[]
}