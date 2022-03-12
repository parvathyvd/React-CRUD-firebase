import React from 'react';
import { useState } from 'react';
import './BookForm.css';
import Alert from '../UI/Alert';
import  BookDataService from '../services/book.services';
import { useEffect } from 'react';
 
const BookForm = ({bookID, setBookID}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState('Not Available');
    const [message, setMessage] = useState({error: false, msg: '', class: ''});

    useEffect(()=>{
        if(bookID !== undefined && bookID !== ''){
            console.log('this needs to be edited',bookID)
            editHandler(bookID)
           // BookDataService.updateBook()
        }
    },[bookID])

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(title === '' || author ===''){
            setMessage({error: true, msg: 'Please input both fields', class:'warning'})
            return;
        }
        //Add Book
        const book = {title: title, author:author, status: status}
        //Adding Book to the firebase DB
        try{
            if(bookID !== undefined && bookID !==''){
                //update
                await BookDataService.updateBook(bookID,book);
                setBookID('');
                setMessage({error: false, msg: 'Updated successfully', class:'success'})
            }
            else{
            await BookDataService.addBook(book)
            //Success message
            setMessage({error: false, msg: 'Book added successfully', class:'success'})
            }
        }
        catch(err){
            setMessage({error: true, msg: err.message, class:'danger'})
        }
        setTitle('');
        setAuthor('');
    }
    const editHandler = async() => {
        try{
            const docSnap = await BookDataService.getBook(bookID)
            console.log('the record the doc', docSnap.data())
            setTitle(docSnap.data().title)
            setAuthor(docSnap.data().author)
            setStatus(docSnap.data().status)
        }
        catch(err){
            setMessage({error: true, msg: err.message, class:'danger'})
        }
    }
   
    const onCloseHandler = () => {
        console.log('close')
        setMessage({error: false, msg: '', class:''})
    }

    return (
        <>
        {message.msg !== ''? <Alert message={message} onClose={onCloseHandler}/> : ''}
        <div className='form-control'>
            <form onSubmit={onSubmitHandler}>
                <input className='mr-2' type="text" placeholder="Book title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Book Author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                <div className='btn-wrapper'>
                <button className='btn btn-success mr-2' onClick={(e)=>setStatus('Available')}>Available</button>
                <button className='btn btn-danger' onClick={(e)=>setStatus('Not Available')}>Not Available</button>
                </div>
                <button className='btn btn-success' type="submit">Add/ Update</button>
            </form>
        </div>
        </>
    );
};

export default BookForm;