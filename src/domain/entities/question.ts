import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entities"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswer: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps>{}