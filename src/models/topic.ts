import { Author } from "./author"

export interface Topic {
    id: string
    name: string
    autor: Author
    tags: string[]
    likes: number
    active: boolean
    description?: string
    createdAt?: Date
  }