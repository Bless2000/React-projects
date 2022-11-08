import React from 'react'
import '../css/main.css'

export default function Main(props) {
  return (
    <div>
    <div className="main">
        <div className="header"><h2>LATEST MOVIES & SERIES</h2></div>

        <div className="container">
                    

		<div className="movie">
			   
			<p className="movie_title">{props.title} </p>
			
        </div>

    </div>
    </div>
    </div>
  )
}
