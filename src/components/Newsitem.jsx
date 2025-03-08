import React, { Component } from 'react'
import react from '../assets/react.svg'

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;

        return (
            <div>
                <div className='shadow-2xl border border-slate-300 w-[25vw] flex  flex-col m-2 rounded-xl min-h-[35vh] bg-[#f5f5f5] '>
                    <span className='bg-red-600 w-fit px-4 rounded-full text-white mx-3 mt-2 '>{source.name}</span>
                    <div className=" m-3">
                        <img className=' max-h-[100%] max-w-[100%] object-contain' src={imageUrl} alt="cascac" />
                    </div>
                    <h5 className='m-2 text-xl mx-3 '>{title}</h5>
                    <p className='m-1 text-sm mx-3  '>{description}...</p>
                    <p className='text-[1.8vh] text-slate-500 m-3'> By {author ? author : "Unknown"}  {new Date(publishedAt).toUTCString()}</p>
                    <a className='bg-blue-300 w-[10vw] p-3 rounded-lg m-3.5 mx-3 ' href={newsUrl} target='_blank'>Go To The Page</a>

                </div>
            </div>
        )
    }
}
