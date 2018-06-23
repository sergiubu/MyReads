import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';

export default class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  
  render() {
    return (
      <div className="app">
        <ListBooks />
      </div>
    )
  }
}
