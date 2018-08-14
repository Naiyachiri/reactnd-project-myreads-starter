import React from 'react'
import PropTypes from 'prop-types'

class SearchList extends React.Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired, // requires the parent to pass down bookAPI's query method
    searchResults: PropTypes.array.isRequired // an array must be passed
  }

  state = {
    query: '',
    selectedOption: '',
    bookID: '',
    bookListID: {}
  }

  updateQuery = (query) => {
    this.setState({ query: query}) // potentially add .trim()
    this.props.searchBooks(query)
  }

  handleBookUpdate = (bookID, shelf) => {
    //convert id into an accepted object
    let objID = {id:bookID}
    this.props.updateBook(objID, shelf)
  }

  handleSelection = (event) => {
    this.setState({ //update the selected option and book ID states only if the selected value is not the same as previously selected
      selectedOption: event.target.value,
      previouslySelectedOption: event.target.value,
      bookID: event.target.id
    }, () => { // update on setState's callback so that it is using newest states
      console.log(this.state.selectedOption + ' '+ this.state.bookID)
      this.handleBookUpdate(this.state.bookID, this.state.selectedOption)
    })
  }

  updateResultShelf = () => {
    for (var id in this.state.bookListID) {
      document.querySelector('#' + id).value = this.state.bookListID[id]; // set selector equal to the bookList's shelf
    }
  }

  componentDidMount() {
    let initBookListID = {}
    this.props.bookList.forEach((book) => (initBookListID[book.id] = book.shelf))
    console.log(initBookListID)
    this.setState({bookListID: initBookListID}) // set the state to store the bookList of IDs
  }

  render() {
    const { searchResults } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.handleSearchClose}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {((searchResults !== undefined ) && (searchResults.map((book) => (
                <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    {book.imageLinks !== undefined ? (<div className="book-cover" style= {{ width: 128, height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail}`
                    }}></div>) : (<div className="book-cover" style= {{ width: 128, height: 193
                      }}></div>)}
                      <div className="book-shelf-changer">
                        <select 
                        id={book.id}
                        value={((this.state.bookListID !== undefined) ? (this.state.bookListID[book.id]) : ('none'))}
                        onChange={this.handleSelection}
                        >
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{(book.authors !== undefined && book.authors.join(' '))}</div>
                </div>
              </li>
              ))))}
            </ol>
          </div>
      </div>
    )
  }
}

export default SearchList