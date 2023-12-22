import React from 'react'
import './Video.css'

//for giving default values to props we can add it here itself 
// like ({title = 'mongo'})
const Video = ({title,channel,views,time}) => {
  return (
    <>
        <div className='container'>
            <div>
                <img src = "https://loremflickr.com/180/180" />
            </div>
            <div>
                <p>{title}</p>
                <p>{channel}</p>
                <p>{views}</p>
                <p>{time}</p>
            </div>
        </div>
    </>

  )
}

export default Video