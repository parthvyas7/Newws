import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title = `Newws ${this.capitalizeFirstLetter(this.props.category)==="General"?"":"• "+this.capitalizeFirstLetter(this.props.category)}`;
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=${this.props.pageSize}&page=1&category=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    });
  }
  handlerPrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=${this.props.pageSize}&page=${this.state.page-1}&category=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  }
  handlerNxt=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=${this.props.pageSize}&page=${this.state.page+1}&category=${this.props.category}`
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className="container my-2">
      <h2>{this.capitalizeFirstLetter(this.props.category)==="General"?"Top stories":this.capitalizeFirstLetter(this.props.category)} <i className="bi bi-arrow-right"></i> </h2>
      {this.state.loading && <div className="d-flex justify-content-center my-3"><Spinner/></div>}
      <div className="row">
        {!this.state.loading && this.state.articles.map((ele) => {
          return <div className="col-md-4" key={ele.url}>
          <NewsItem title={ele.title?ele.title.slice(0,70):""} description={ele.description?ele.description.slice(0,100):""} imgUrl={ele.urlToImage} artUrl={ele.url} source={ele.source.name} publishedAt={ele.publishedAt}/>
        </div>
        })}
      </div>
      <div className="d-flex justify-content-center" role="group" aria-label="Basic pagination">
        <button onClick={this.handlerPrev} disabled={this.state.page <= 1} type="button" className="btn btn-light"><i className="bi bi-arrow-left"></i></button>
        <button onClick={this.handlerNxt} disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-light"><i className="bi bi-arrow-right"></i></button>
      </div>
      </div>
    )
  }
}

export default News