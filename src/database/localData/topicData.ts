import {v4 as uuid} from 'uuid';
import { Topic } from '../../models/topic';
import { Author } from '../../models/author';

export const authors: Author[] = [
  {
    name: "Diego Araújo",
    city: "Teresina",
    country: "Brazil"
  }
]

export const topicListData: Topic[] = [
    {
      id: uuid(),
      name: "Será que eu escrevo 10 minutos?",
      autor: authors[0],
      tags: ["study", "study-doughts"],
      active: true,
      likes: 0
    },
    {
      id: uuid(),
      name: "Codar por 6 horas diarias? Loucuraaaaa!!!",
      autor: authors[0],
      tags: ["coding", "programming"],
      active: true,
      likes: 10
    }
  ]