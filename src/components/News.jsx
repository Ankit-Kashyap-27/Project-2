import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';

import Loading from './Loading'; // corrected spelling
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);



    const capitalize = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    // 
    const updatenews = async () => {
        props.setprogress(10)
        const url = `https://newsapi.org/v2/everything?q=${props.category}&from=2025-02-10&sortBy=publishedAt&apiKey=${props.apikey}&pagesize=${props.pageSize}&page=${page}`;
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setprogress(100)
    }

    useEffect(() => {
        updatenews()
        document.title = `${capitalize(props.category)} - NEWS!HUB`;
    }, []);


    
    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/everything?q=${props.category}&from=2025-02-10&sortBy=publishedAt&apiKey=${props.apikey}&pagesize=${props.pageSize}&page=${page+1}`;
        setpage(page + 1)

        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
    };


    return (
        <>
            <div className=''>
                <h2 className='text-4xl mt-[15vh] mb-[6vh]  flex items-center justify-center font-semibold'>News!HUB - Top  {capitalize(props.category)} Headlines </h2>
                {loading && <Loading />}
                {/* corrected spelling */}
                <div className='flex justify-center items-center'>
                    <InfiniteScroll
                        dataLength={articles.length - 50}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Loading />}
                    >
                        <div className='grid grid-cols-3 w-full justify-items-center'>

                            {articles.map((element, index) => {
                                return (
                                    <div key={index} className=''>
                                        <Newsitem source={element.source || "Unknown"} title={element.title || ''}

                                            description={element.description || ''}
                                            imageUrl={element.urlToImage || 'https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?t=st=1741424555~exp=1741428155~hmac=658dd12d548490463c8cc697ab6fee8b22c41b1cef5c26bb9782dd31ea6ab4a2&w=900'}
                                            newsUrl={element.url}
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

News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
    language: 'en'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string, // added missing propTypes
    language: PropTypes.string // added missing propTypes
}

export default News