// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }
  updateSearchInput = value => {
    this.setState({searchInput: value})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestionsDetails.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />
          <div className="input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <div>
              <input
                type="search"
                value={searchInput}
                onChange={this.changeInput}
                className="input"
                placeholder="Search Google"
              />
            </div>
          </div>
          <ul className="list-con">
            {searchResults.map(each => (
              <SuggestionItem
                key={each.key}
                suggestionsDetails={each}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
