import React from 'react';
import Book from './Book';

const Bookshelf = props => {
  const { shelf, books, onChangeShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === shelf.shelfName)
            .map(book => (
              <li key={book.id}>
                <Book book={book} onChangeShelf={onChangeShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
