import React from 'react'

const Search = props => {
  let changeHandler = evt =>{
    props.changeSearchTerm(evt.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={changeHandler}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
