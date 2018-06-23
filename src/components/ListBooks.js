import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf />
      </div>
      </div>
    )
  }
}
