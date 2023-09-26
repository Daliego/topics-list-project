import { useState } from 'react'
import './App.css'
import { BookForm } from './pages/bookForm'
import { BookList } from './pages/bookList'
import { bookListData } from './database/localData/bookData'

export interface Book {
  id: string
  name: string
  description?: string
  createdAt?: Date
}

function App() {
  const [bookList, setBookList] = useState<Book[]>(bookListData)

  const addBook = (book: Book) => {
    setBookList([book, ...bookList])
  }

  const removeBook = (id: string) => {
    setBookList(bookList.filter(book => book.id !== id))
  }

  return (
    <>
      <BookForm onSubmit={addBook}/>
      <BookList onRemove={removeBook} data={bookList}/>
    </>
  )
}

export default App
