import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

export default class Book extends Component {
  render() {
    
    const { book, onChangeShelf } = this.props;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''})` }}></div>
            <ShelfChanger 
              book={book}
              onChangeShelf={onChangeShelf}
            />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
