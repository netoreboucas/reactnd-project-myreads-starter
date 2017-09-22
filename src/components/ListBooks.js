import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Bookshelf from './Bookshelf'
import { shelves } from '../shared/Constants'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    showBookDetails: PropTypes.func.isRequired
  }

  render () {
    const { books, onChangeShelf, showBookDetails } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelves).map(key => (
              <Bookshelf
                key={key}
                title={shelves[key]}
                books={books.filter(b => b.shelf === key)}
                onChangeShelf={onChangeShelf}
                showBookDetails={showBookDetails}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks