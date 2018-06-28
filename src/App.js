import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'

export default class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(_ => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
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
      </div>
    )
  }
}
