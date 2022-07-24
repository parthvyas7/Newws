import React, { Component } from 'react'
import altImg from "../images/newws-alt-img.png"

export class NewsItem extends Component {
  render() {
    const timeAgo = (prevDate) => {
      const diff = Number(new Date()) - prevDate;
      const minute = 60 * 1000;
      const hour = minute * 60;
      const day = hour * 24;
      const month = day * 30;
      const year = day * 365;
      switch (true) {
          case diff < minute:
              const seconds = Math.round(diff / 1000);
               return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
          case diff < hour:
              return Math.round(diff / minute) + ' minutes ago';
          case diff < day:
              return Math.round(diff / hour) + ' hours ago';
          case diff < month:
              return Math.round(diff / day) + ' days ago';
          case diff < year:
              return Math.round(diff / month) + ' months ago';
          case diff > year:
              return Math.round(diff / year) + ' years ago';
          default:
              return "";
      }
    };
    let {title, description, imgUrl, artUrl, publishedAt, source} = this.props;
    return (
        <div className="card my-3">
          <img src={imgUrl?imgUrl:altImg} className="card-img-top" alt="Oops! dropped in the way"/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">{source}</h6>
              <h5 className="card-title"><a href={artUrl} target="_blank" className="card-link">{title}...</a></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">{timeAgo(new Date(publishedAt).getTime())}</small></p>              
            </div>
        </div>
    )
  }
}

export default NewsItem