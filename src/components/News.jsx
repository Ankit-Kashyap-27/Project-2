import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Loding from './Loding'; // corrected spelling

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

    constructor() {
        super();
        this.state = {
            articles: [],
            loding: false, // corrected spelling
            page: 1,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdce1e605adb4344904784fc1343cd88&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true }); // corrected spelling
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loding: false, // corrected spelling
        });
    }

    handleNextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdce1e605adb4344904784fc1343cd88&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true }); // corrected spelling
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState((prevState) => ({
            page: prevState.page + 1,
            articles: parsedData.articles,
            loding: false, // corrected spelling
        }));
    }

    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdce1e605adb4344904784fc1343cd88&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true }); // corrected spelling
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState((prevState) => ({
            page: prevState.page - 1,
            articles: parsedData.articles,
            loding: false, // corrected spelling
        }));
    }

    render() {
        return (
            <>
                <div className=''>
                    <h2 className='bg-white text-4xl mx-5 m-10 flex items-center justify-center font-semibold'>News!HUB - Headlines</h2>
                    {this.state.loding && <Loding />} {/* corrected spelling */}
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-3 w-full justify-items-center'>
                            {!this.state.loding && this.state.articles.map((element) => {
                                return (
                                    <div key={element.url} className=''>
                                        <Newsitem title={element.title || ''}

                                            description={element.description || ''}
                                            imageUrl={element.urlToImage || 'https://gizmodo.com/app/uploads/2025/02/GettyImages-2039371693.jpg'}
                                            newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='mx-auto flex justify-between items-center w-[40vw]'>
                        <button
                            disabled={this.state.page <= 1}
                            type='button'
                            className={`bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw] ${this.state.page <= 1 ? 'disabled-button' : ''}`}
                            onClick={this.handlePrevclick}
                        >
                            &larr; Previous
                        </button>

                        <button
                            type='button'
                            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
                            className={`bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw] ${this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize) ? 'disabled-button' : ''}`}
                            onClick={this.handleNextclick}
                        >
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
