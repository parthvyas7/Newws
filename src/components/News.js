import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=21&page=1"
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
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=21&page=${this.state.page-1}`
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
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=21&page=${this.state.page+1}`
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
  }
  render() {
    return (
      <>
      <div className="container my-3">
      <h2>Top stories <i className="bi bi-arrow-right"></i> </h2>
      {this.state.loading && <div className="d-flex justify-content-center my-3"><Spinner/></div>}
      <div className="row">
        {!this.state.loading && this.state.articles.map((ele) => {
          return <div className="col-md-4" key={ele.url}>
          <NewsItem title={ele.title?ele.title.slice(0,70):""} description={ele.description?ele.description.slice(0,100):""} imgUrl={ele.urlToImage} artUrl={ele.url}/>
        </div>
        })}
      </div>
      <div className="d-flex justify-content-center" role="group" aria-label="Basic pagination">
        <button onClick={this.handlerPrev} disabled={this.state.page <= 1} type="button" className="btn btn-outline-primary"><i className="bi bi-arrow-left"></i></button>
        <button onClick={this.handlerNxt} disabled={this.state.page >= Math.ceil(this.state.totalResults/21)} type="button" className="btn btn-outline-primary"><i className="bi bi-arrow-right"></i></button>
      </div>
      </div>
      </>
    )
  }
}

export default News