import React from 'react'
import './Video.css'


//for giving default values to props we can add it here itself 
// like ({title = 'mongo'})
const Video = ({verified, title,channel,views,time}) => {
  return (
    <>
        <div className='container'>
            <div>
                <img src = {`https://loremflickr.com/180/180`} />
            </div>
            <div>
                <p>{title}</p>
                {/* Below is how we do conditional rendering in jsx */}
                {/* {
                    verified ? <p> channel ✅ </p>: <p> channel </p>  
                } */}


                {/* above method is good but also we can do like this */}
                {/* <p>{channel} {verified?'✅':null}</p> */}


                {/* shortcircuiting */}
                <p>{channel} {verified && '✅'}</p>
                {/* if verified is false next thing will not run because we use && This is called shortcircuiting */}
                <p>{views}</p>
                <p>{time}</p>
            </div>
        </div>
    </>

  )
}

export default Video