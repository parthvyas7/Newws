import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="position-relative">
        <div className='position-absolute top-100 start-50 translate-middle'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
}
