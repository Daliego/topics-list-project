import { Book } from "../../../App"

interface ListItemsProps {
    book: Book
    onRemove: (id: string) => void
}

export const ListItem = ({book, onRemove}: ListItemsProps) => {
    const handleClick = () => {
        onRemove(book.id)
    }
    return (
        <li>{book.name} <button onClick={handleClick}>Excluir</button></li>
    )    
}