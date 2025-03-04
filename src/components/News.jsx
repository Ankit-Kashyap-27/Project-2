import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {



    constructor() {

        super();
        // console.log("I am a constructor from news component")
        this.state = {
            articles: [],
            logding: false,
            page:1


        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77f8d6c72eef43508e24f5c12946d7f2"
        let data = await fetch(url)
        let parsedData = await data.json();
        // console.log(parsedData)
        this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults})
    }

handleNextclick = async ()=>{



    // console.log("NEXT",this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77f8d6c72eef43508e24f5c12946d7f2&page=${this.state.page + 1}&pageSize=20`    
    let data = await fetch(url)
    let parsedData = await data.json();
    // console.log(parsedData)
    
    
    this.setState((prevState) => ({
        page: prevState.page + 1,
        articles: parsedData.articles
    }));
    


}

handlePrevclick = async()=>{
    // console.log("PRIVIOUS",this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77f8d6c72eef43508e24f5c12946d7f2&page=${this.state.page - 1}&pageSize=20`    
    let data = await fetch(url)
    let parsedData = await data.json();
    // console.log(parsedData)

    this.setState((prevState) => ({
        page: prevState.page - 1,
        articles: parsedData.articles
    }));
   
}
    render() {
        return (
            <>
                <div className=''>

                    <h2 className=' bg-white text-4xl mx-5 m-10 flex items-center justify-center font-semibold'>News!HUB - Headlines</h2>
                    <div className='flex justify-center  items-center'>

                        <div className='grid grid-cols-3 w-full  justify-items-center'>
                            {this.state.articles.map((element) => {

                                return <div key={element.url} className=''>

                                    <Newsitem tittle={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://gizmodo.com/app/uploads/2025/02/GettyImages-2039371693.jpg"} newsUrl={element.url} />

                                </div>
                            })}


                        </div>

                    </div>
                    <div className=' mx-auto flex justify-between items-center w-[40vw]'>
                        
                        <button  disabled={this.state.page<=1} type='button' className='bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw]' onClick={this.handlePrevclick} > &larr; Privous</button>


                        <button type='button' disabled={this.state.page  >= Math.ceil(this.state.totalResults/20)} className='bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw]'   onClick={this.handleNextclick} >Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}



// import React, { Component } from 'react';
// import Newsitem from './Newsitem';

// export default class News extends Component {
//     constructor() {
//         super();
//         console.log("I am a constructor from news component");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         };
//     }

//     async componentDidMount() {
//         this.updateNews();
//     }

//     async updateNews() {
//         this.setState({ loading: true });
//         const { page } = this.state;
//         const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77f8d6c72eef43508e24f5c12946d7f2&page=${page}&pageSize=20`;
//         try {
//             const data = await fetch(url);
//             const parsedData = await data.json();
//             this.setState({
//                 articles: parsedData.articles,
//                 totalResults: parsedData.totalResults,
//                 loading: false
//             });
//         } catch (error) {
//             console.error("Error fetching news:", error);
//             this.setState({ loading: false });
//         }
//     }

//     handleNextClick = async () => {
//         this.setState(
//             (prevState) => ({ page: prevState.page + 1 }),
//             () => this.updateNews()
//         );
//     }

//     handlePrevClick = async () => {
//         this.setState(
//             (prevState) => ({ page: prevState.page - 1 }),
//             () => this.updateNews()
//         );
//     }

//     render() {
//         const { articles, page, totalResults, loading } = this.state;
//         return (
//             <>
//                 <div className=''>
//                     <h2 className='bg-white text-4xl mx-5 m-10 flex items-center justify-center font-semibold'>News!HUB - Headlines</h2>
//                     {loading ? (
//                         <h3>Loading...</h3>
//                     ) : (
//                         <>
//                             <div className='flex justify-center items-center'>
//                                 <div className='grid grid-cols-3 w-full justify-items-center'>
//                                     {articles.map((element) => (
//                                         <div key={element.url} className=''>
//                                             <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://gizmodo.com/app/uploads/2025/02/GettyImages-2039371693.jpg"} newsUrl={element.url} />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className='mx-auto flex justify-between items-center w-[40vw]'>
//                                 <button disabled={page <= 1} type='button' className='bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw]' onClick={this.handlePrevClick} > &larr; Previous</button>
//                                 <button disabled={page >= Math.ceil(totalResults / 20)} type='button' className='bg-slate-900 text-white text-xl rounded-lg p-2 m-2 w-[8vw]' onClick={this.handleNextClick} >Next &rarr;</button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </>
//         );
//     }
// }
