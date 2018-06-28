import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

export default class ListBooks extends Component {
  
  render() {
    const shelves = [
      {
        shelfName: 'currentlyReading',
        shelfTitle: 'Currently Reading'
      },
      {
        shelfName: 'wantToRead',
        shelfTitle: 'Want To Read'
      },
      {
        shelfName: 'read',
        shelfTitle: 'Read'
      }
      ]
    const { books, changeShelf } = this.props;
    
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      {shelves.map(shelf => {
          <Bookshelf
            shelf={shelf}
            books={books}
            onChangeShelf={changeShelf}
          />
        })}
      </div>
      </div>
    )
  }
}
