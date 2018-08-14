import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchList from'./Search.js'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    bookData: [], // stores raw server data
    bookID: {}, // allows react to pickup book shelf changes
    bookShelf: '', // initializes bookShelf
    queryBookShelf: '', // seperate state to monitor searched res's shelf
    searchResults: [], // initializes search results
    // initiate our local variables of what each shelf contains
  }

  componentDidMount() { //fetches server data for our app of current books
    BooksAPI.getAll().then((bookData => {
      this.setState({ bookData })
    }))
  }

  searchBooks = (query) => { // searches the server for given query
    console.log(query)
    BooksAPI.search(query).then((res) => { //search for results
      (Array.isArray(res)) ? (
      this.setState({ searchResults:res }, ()=>console.log(res)) // update searchResults state
    ) : ( this.setState({ searchResults: []}))
    })
  }


  //set a local prop to update our server based on changes on a child component
  // an array is passed with the [0] = bookID and [1] = shelf
  updateBook = (book, shelf) => {
    this.setState({ // update the states before using them to call BooksAPI.update()
      bookID: book, 
      queryBookShelf: shelf
    }, () => { // set booksAPI as a callback so that it runs after the states are updated
      BooksAPI.update( this.state.bookID, this.state.queryBookShelf ).then(() =>{
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
          <Route exact path="/search" render={() => (
            <SearchList 
          searchBooks={this.searchBooks}
          searchResults={this.state.searchResults}
          updateBook={this.updateBook}
          bookList={this.state.bookData}
          />
          )}/>
          <Route exact path="/" render={() => (
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
              <Link
                to="/search"
                onClick={() => (
                this.setState({ searchResults: [] })
                )}>Add a book</Link>
            </div>
          </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
