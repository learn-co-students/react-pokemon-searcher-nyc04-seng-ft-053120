import React from 'react'

const Search = props => {
  let changeHandle = (evt) => {
    props.changeSearch(evt.target.value)

  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchWord} onChange={changeHandle}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
