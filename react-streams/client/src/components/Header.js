import React from "react"
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

function Header(){
  return(
    <div style={{ paddingTop: '2px' }} className="ui secondary pointing menu">
      <Link to="/" className="item">react-streams</Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
    )
}

export default Header
