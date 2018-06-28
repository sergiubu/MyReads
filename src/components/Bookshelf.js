import React, { Component } from 'react'
import Book from './Book'

export default class Bookshelf extends Component {
  
  
  render() {
    const { shelf, books, changeShelf } = this.props;
    console.log(shelf.shelfTitle);
    
    return (
      <div>
      {books.filter(book => {
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => (
                  <Book
                    book={book}
                    onChangeShelf={changeShelf}
                  />
                ))
              }
            </ol>
          </div>
        </div>
      })}
      </div>
    )
  }
}
