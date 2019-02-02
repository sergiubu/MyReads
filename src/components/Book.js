import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = props => {
  const { book, onChangeShelf } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
            })`
          }}
        />
        <ShelfChanger book={book} onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
