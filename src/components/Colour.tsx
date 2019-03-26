import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment'

const Colour = (props: any) => {
 const { title, userName, imageUrl, numViews, numVotes, id, dateCreated } = props.children
 const date = moment(dateCreated).format('LT')
  return (
    <div className="card" style={{flexDirection:'row'}}>
      <div className="card-body">
        <Link to={`/palette/${id}`}><h4 className="card-title" style={{marginBottom:0}}>{title}</h4></Link>
        <p className="card-text" style={{marginBottom:10}}>by {userName} at {date}</p>
        <a className="btn btn-primary">{numViews} views &nbsp; {numVotes} votes</a>
      </div>
      <Link to={`/palette/${id}`}><img className="card-img-top" src={imageUrl} alt="Card image cap" style={{maxWidth:115, marginTop:3}} /></Link>
    </div>
  )
}

export default Colour 
