import React, { Component } from 'react'
import altImg from "../images/newws-alt-img.png"

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, artUrl} = this.props;
    return (
        <div className="card my-3" style={{width: "20rem"}}>
          <img src={imgUrl?imgUrl:altImg}  className="card-img-top" alt="Oops! dropped in the way"/>
            <div className="card-body">
              <h5 className="card-title"><a href={artUrl} target="_blank">{title}...</a></h5>
              <p className="card-text">{description}...</p>              
            </div>
        </div>
    )
  }
}

export default NewsItem