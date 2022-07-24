import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `Newws ${this.capitalizeFirstLetter(this.props.category) === "General" ? "" : "• " + this.capitalizeFirstLetter(this.props.category)}`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=${this.props.pageSize}&page=1&category=${this.props.category}`
    this.props.setProgress(10);
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da03fc5e89634b16a31efbe4ce402aa8&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&category=${this.props.category}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className="container my-2">
        <h2>{this.capitalizeFirstLetter(this.props.category) === "General" ? "Top stories" : this.capitalizeFirstLetter(this.props.category)} <i className="bi bi-arrow-right"></i> </h2>
        {this.state.loading && <div className="d-flex justify-content-center my-3"><Spinner /></div>}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          style={{
            overflow:'hidden'
          }}
        >
          <div className="row">
            {this.state.articles.map((ele) => {
              return <div className="col-md-4" key={ele.url}>
                <NewsItem title={ele.title ? ele.title.slice(0, 70) : ""} description={ele.description ? ele.description.slice(0, 100) : ""} imgUrl={ele.urlToImage} artUrl={ele.url} source={ele.source.name} publishedAt={ele.publishedAt} />
              </div>
            })}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News