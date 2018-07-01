import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks';

export default class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  // Handle book shelf change
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(_ => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={_ => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
        <Route path='/search' render={_ => (
          <SearchBooks
            searchBooks={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}
