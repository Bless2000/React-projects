import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div>
    <div className="head">
        <div className="nav">
            <div className="logo"><h3>Stash<span>Movie</span></h3></div>
            <div className="list">
                <ul>
                    <li>Anime</li>
                    <li>Movie</li>
                    <li>Comics</li>
                    <li>News</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder="Search Movie" id="sinp"/>
                <button id="sbtn">Search</button>
            </div>
        </div>
    </div>
    </div>
  )
}
