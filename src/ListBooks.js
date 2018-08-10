import React, { Component } from 'react';
import PropTypes from 'prop-types'


// take the bookdata and pull books that specifically match the passed prop shelfName
  // render each book as shown in the sample below
  /**
   * <ol className="books-grid">
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">To Kill a Mockingbird</div>
          <div className="book-authors">Harper Lee</div>
        </div>
      </li>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">Ender's Game</div>
          <div className="book-authors">Orson Scott Card</div>
        </div>
      </li>
    </ol>

    //want to read section
    <ol className="books-grid">
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">Harry Potter and the Sorcerer's Stone</div>
          <div className="book-authors">J.K. Rowling</div>
        </div>
      </li>
    </ol>

    //read

    <ol className="books-grid">
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">The Hobbit</div>
          <div className="book-authors">J.R.R. Tolkien</div>
        </div>
      </li>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">Oh, the Places You'll Go!</div>
          <div className="book-authors">Seuss</div>
        </div>
      </li>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">The Adventures of Tom Sawyer</div>
          <div className="book-authors">Mark Twain</div>
        </div>
      </li>
    </ol>
   */

class ListBooks extends Component {
  static propTypes = {
    bookShelf: PropTypes.string.isRequired, // require the shelf for the list to be passed
    bookList: PropTypes.array.isRequired, // require the library of books to be passed
    updateBook: PropTypes.func.isRequired // require the booksAPI method to be passed
  }

  state = {
    selectedOption: this.props.bookShelf, // initialize selections to the shelf book resides upon
    bookID: '',
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
      this.setState({ selectedOption: this.props.bookShelf}) // return selection back to proper shelf
    })
  }

   render() {
     const { bookShelf, bookList } = this.props;

     return (
      <ol className="books-grid">
        {bookList.map((book) => (
          ((book.shelf === bookShelf) && (<li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style= {{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}`}}></div>
                  <div className="book-shelf-changer">
                    <select 
                    id={book.id}
                    onChange={this.handleSelection} 
                    value={this.state.selectedOption}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(' and ')}</div>
            </div>
          </li>))
        ))}
    </ol>
    )
  }
}

export default ListBooks