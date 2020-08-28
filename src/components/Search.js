import React from 'react'

class Search extends React.Component {

  handleChange = (event) => { 
    this.props.search(event.target.value)
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={this.handleChange} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
