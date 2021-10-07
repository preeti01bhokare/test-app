import React from 'react' 
import {NavLink, Link} from 'react-router-dom'

export default class Header extends React.Component{

render(){
return(
<header className="commonHeader"> 
<div className="container"> 
   <nav className="navbar navbar-expand-lg custom_navbar">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="logo-brand" to="/">Logo</Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <NavLink exact activeClassName="active" className="custom-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
            <NavLink  activeClassName="active" className="custom-link" to="/login">Login </NavLink>
            </li>
        </ul>
        <Link to="/add_user" className="add-record">Add</Link>
     </div>
   </nav>
 </div>
</header>
)}}