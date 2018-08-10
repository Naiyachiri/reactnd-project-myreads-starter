import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchList from'./Search.js'

class BooksApp extends React.Component {
  state = {
    bookData: [], // stores raw server data
    bookID: {}, // allows react to pickup book shelf changes
    bookShelf: '', // initializes bookShelf
    searchResults: [], // initializes search results

    // initiate our local variables of what each shelf contains
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() { //fetches server data for our app of current books
    BooksAPI.getAll().then((bookData => {
      this.setState({ bookData })
    }))
  }

  handleSearchClose = () => { // manipulates searchPage state
    this.setState({showSearchPage: false})
  }

  searchBooks = (query) => { // searches the server for given query
    console.log(query)
    BooksAPI.search(query).then((res) => { //search for results
      this.setState({ searchResults:res }) // update searchResults state
    })
  }

  //set a local prop to update our server based on changes on a child component
  // an array is passed with the [0] = bookID and [1] = shelf
  updateBook = (book, shelf) => {
    this.setState({ // update the states before using them to call BooksAPI.update()
      bookID: book, 
      bookShelf: shelf
    }, () => { // set booksAPI as a callback so that it runs after the states are updated
      BooksAPI.update(this.state.bookID, this.state.bookShelf).then(() =>{
        BooksAPI.getAll().then((bookData => {
          this.setState({ bookData }, () => {
            console.log(book + ' '+ shelf + ' updated!');
          }) // updates the app's version of the shelves for children to update
        }))
      })
    })
    //children are not changing because the data is stale
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchList handleSearchClose={this.handleSearchClose} 
          searchBooks={this.searchBooks}
          searchResults={this.state.searchResults}
          updateBook={this.updateBook}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ListBooks 
                    bookList={this.state.bookData}
                    bookShelf={'currentlyReading'}
                    updateBook={this.updateBook}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    bookList={this.state.bookData}
                    bookShelf={'wantToRead'}
                    updateBook={this.updateBook}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks 
                    bookList={this.state.bookData}
                    bookShelf={'read'}
                    updateBook={this.updateBook}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
