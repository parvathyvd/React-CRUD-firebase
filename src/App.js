import { useState } from 'react';
import './App.css';
import BookForm from './components/BookStore/BookForm';
import BookList from './components/BookStore/BookList';

function App() {
  const [bookID, setBookID] = useState('');

  const onEditHandler = (id) => {
    console.log('id to be edited in the app', id)
    setBookID(id);
  }
  return (
    <div className="App">
      <h1 className='text-center mb-2'>BOOK LIBRARY APPLICATION</h1>
      <BookForm bookID={bookID} setBookID={setBookID} />
      <BookList onEdit={onEditHandler}/>
    </div>
  );
}

export default App;
