import React from 'react';
import { useEffect, useState } from 'react';
import  BookDataService from '../services/book.services';

const BookList = ({onEdit}) => {

    const [bookList, setBookList] = useState([]);

    useEffect(()=>{
        fetchBooks()
    },[])
    const fetchBooks = async() => {
        const data =  await BookDataService.getBooks()
        console.log(data.docs)
        setBookList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }
    const onEditHandler = (id) =>{
        console.log('on Edit',id)
        onEdit(id);
    }
    const onDeleteHandler = async(id) =>{
        console.log('on Del',id)
        await BookDataService.deleteBook(id);
        fetchBooks()
    }
    
    return (
        <div className='book-list'>
            {/* <pre>{JSON.stringify(bookList, undefined, 2) }</pre> */}
            <div className="book-items">
            <div className="refresh-wrapper mb-2">
            <button className='btn btn-refresh' onClick={fetchBooks}>Refresh Books</button>
            </div>
            {bookList.map((book)=>{
                return (
                    <div className='book-record' key={book.id}>
                        <div className='book-detail'>
                            <div className='book-desc'>
                            <span className='book-desc1 pl-2'>{book.title}</span>
                            <span className='book-desc2'> {book.author}</span>
                            <span className='book-desc3'>{book.status}</span> 
                            </div>
                            <div className="book-btn">
                            <button className='btn btn-warning mr-2' onClick={()=>onEditHandler(book.id)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>onDeleteHandler(book.id)}>Delete</button>
                            </div>
                        </div> 
                    </div>
                )
            })}
         
        </div>
                
            </div>
           
    );
};

export default BookList;