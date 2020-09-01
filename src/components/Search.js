import React from 'react'

class Search extends React.Component {




  render () {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={event => this.props.pokemonSearch(event)} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
