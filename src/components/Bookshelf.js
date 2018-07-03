import React, { Component } from 'react'
import Book from './Book'

export default class Bookshelf extends Component {
  render() {
    
    const { shelf, books, onChangeShelf } = this.props;
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === shelf.shelfName)
                  .map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onChangeShelf={onChangeShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
