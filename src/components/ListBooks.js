import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const ListBooks = props => {
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
  ];

  const { books, onChangeShelf } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map(shelf => (
          <div key={shelf.shelfName}>
            <Bookshelf
              shelf={shelf}
              books={books.filter(book => book.shelf === shelf.shelfName)}
              onChangeShelf={onChangeShelf}
            />
          </div>
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
