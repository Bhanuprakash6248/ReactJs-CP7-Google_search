// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateSearchInput} = props
  const {suggestion} = suggestionsDetails
  const arrowBtn = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-item">
      <p className="p-head">{suggestion}</p>
      <button className="btn" type="button" onClick={arrowBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
