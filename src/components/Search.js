import React from 'react'

const Search = props => {
  // console.log(props)
  const onSearchChange = (e) => {
    props.handleSearchChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={onSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
