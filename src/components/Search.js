import React from 'react'

const Search = props => {
  // has access to props.searchTerm
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={ props.searchTerm } 
          placeholder="Search Pokemon" 
          onChange={ props.handlePokemonInput }/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
