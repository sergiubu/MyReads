import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

export default class SearchBooks extends Component {
  
  state = {
    query: '',
    books: []
  }

  // Handle book search query
  updateQuery = query => {
    if(!query) {
      this.setState({ query: '', books: [] })
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then(books => {
        books.map(book => (this.props.searchBooks.filter(b => b.id !== book.id).map(b => book.shelf = b.shelf)))
        this.setState({ books })
      })
    }
  }
  
  render() {
    
    const { onChangeShelf } = this.props;

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     onChange={e => this.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.books.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  onChangeShelf={onChangeShelf}
                />
              ))}
            </ol>
          </div>
      </div>
    )
  }
}
