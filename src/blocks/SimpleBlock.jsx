import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function SimpleBlock({ title, description, image }) {
    return (
        <div className='row p-5 m-4 personal-info col-xl-10'>
            <div className='col-sm-12'><h2>{title}</h2></div>
            <hr />
            <div className='col-sm-6'><p>{description}</p></div>
            <div className='col-sm-6'><Zoom zoomMargin={100}><img className='w-100 rounded' src={image}></img></Zoom></div>
        </div>
    )
}
