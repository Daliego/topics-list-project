import { Book } from "../../App"
import { ListItem } from "./listItems"

interface BookListProps {
    data: Book[]
    onRemove: (id: string) => void
}

export const BookList = ({data, onRemove}: BookListProps) => {
    const handleRemove = (id: string) => {
        onRemove(id)
    }
    return (
        <ul>
            {data.map(book => <ListItem onRemove={handleRemove} key={book.id} book={book}></ListItem>)}
        </ul>
    )    
}