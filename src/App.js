import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    wordList: [],
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAdd = () => {
    const {searchInput} = this.state
    const id = uuidv4()
    const wordObject = {id, word: searchInput}
    this.setState(prevState => ({
      wordList: [...prevState.wordList, wordObject],
      searchInput: '',
    }))
  }

  render() {
    const {wordList, searchInput} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="left-container">
            <div className="left-top-container">
              <h1 className="left-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <ul className="word-container">
              {wordList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-words-image"
                />
              ) : (
                wordList.map(eachWord => (
                  <li key={eachWord.id} className="word-length">
                    {eachWord.word} : {eachWord.word.length}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="right-container">
            <h1 className="right-heading">Character Counter</h1>
            <div className="search-add-container">
              <input
                type="text"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
