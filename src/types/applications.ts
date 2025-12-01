export type QuestionType = "short" | "long" | "select" | "multiselect"

export interface Question {
  label: string
  type: QuestionType
  required?: boolean
  placeholder?: string
  options?: string[]
  maxLength?: number
}

export interface Application {
  id: string
  name: string
  description?: string
  intro: string
  questions: Question[]
}