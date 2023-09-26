import { useRef } from "react"
import {v4 as uuid} from 'uuid';
import { Book } from "../../App";

interface BookFormProps {
    onSubmit: (book: Book) => void
}

export function BookForm({onSubmit} : BookFormProps) {
    const bookText = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const text: string = bookText.current!.value
        
        const book: Book = {
            id: uuid(),
            name: text,
            createdAt: new Date(),
        }

        onSubmit(book)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o nome do livro..." required ref={bookText}></input>
            <input type="submit" value={"Add"}></input>
        </form>
    )
}