import { Book } from "../../App";
import {v4 as uuid} from 'uuid';

export const bookListData: Book[] = [
    {
      id: uuid(),
      name: "Escrever 10 minutos"
    },
    {
      id: uuid(),
      name: "Codar por 6 horas diarias"
    }
  ]