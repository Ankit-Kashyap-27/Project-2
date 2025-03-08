import React, { Component } from 'react'
import react from '../assets/react.svg'

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt } = this.props;

        return (
            <div>
                <div className='shadow-2xl  w-[25vw] flex flex-col m-2 rounded-xl min-h-[35vh]'>
                    <div className=" m-3">
                        <img className=' max-h-[100%] max-w-[100%] object-contain' src={imageUrl} alt="cascac" />
                    </div>
                    <h5 className='text-xl m-2 mx-3 '>{title}</h5>
                    <p className='m-1 mx-3  '>{description}...</p>
                    <p> By {author ? author : "Unknown"}  {new Date(publishedAt).toUTCString()}</p>
                    <a className='bg-blue-300 w-[10vw] p-3 rounded-lg m-3.5 mx-3 ' href={newsUrl} target='_blank'>Go To The Page</a>

                </div>
            </div>
        )
    }
}
