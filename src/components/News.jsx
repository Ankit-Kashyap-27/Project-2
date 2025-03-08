import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';

import Loading from './Loading'; // corrected spelling
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general',
        language: 'en'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string, // added missing propTypes
        language: PropTypes.string // added missing propTypes
    }

    capitalize(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false, // corrected spelling
            page: 1,
            totalResults: 0,
            
        };

        document.title = `${this.capitalize(this.props.category)} - NEWS!HUB`;
      
    }

    async updatenews() {
        this.props.setprogress(10)
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2025-02-08&sortBy=publishedAt&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true }); // corrected spelling
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, // corrected spelling
        })
        this.props.setprogress(100)
    }


    async componentDidMount() {
        this.updatenews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
  
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2025-02-08&sortBy=publishedAt&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false, // corrected spelling
        })
    };

    render() {
        return (
            <>
                <div className=''>
                    <h2 className='bg-white text-4xl mx-5 m-10 flex items-center justify-center font-semibold'>News!HUB - Top  {this.capitalize(this.props.category)} Headlines </h2>
                    {this.state.loading && <Loading />}
                    {/* corrected spelling */}
                    <div className='flex justify-center items-center'>
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Loading />}
                        >
                            <div className='grid grid-cols-3 w-full justify-items-center'>

                                {this.state.articles.map((element ) => {
                                    return (
                                        <div key={element.url} className=''>
                                            <Newsitem source={element.source || "Unknown"} title={element.title || ''}

                                                description={element.description || ''}
                                                imageUrl={element.urlToImage || 'https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?t=st=1741424555~exp=1741428155~hmac=658dd12d548490463c8cc697ab6fee8b22c41b1cef5c26bb9782dd31ea6ab4a2&w=900'}
                                                newsUrl={element.url }
                                                 author={element.author || "Unknown"} 
                                                 publishedAt={element.publishedAt || "Unknown"} />
                                        </div>
                                    );
                                })}
                            </div>
                        </InfiniteScroll>
                    </div>

                </div>
            </>
        );
    }
}
