import React, { Component } from 'react'
import newwsLogo from './../images/apple-touch-icon.png'
import { Link } from "react-router-dom";
import News from './News';

export class Navbar extends Component {
    render() {
        const handlerSrch = ()=>{
            let qry=document.getElementById("qry").value;
            // Time milenga toh krunga
        };
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={newwsLogo} alt="" width="30" height="24" className="d-inline-block align-text-center" />
                            Newws
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                <Link className="nav-link" to="/business">Business</Link>
                                <Link className="nav-link" to="/sports">Sports</Link>
                                <Link className="nav-link" to="/science">Science</Link>
                                <Link className="nav-link" to="/health">Health</Link>
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </div>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="qry"/>
                            <button className="btn btn-light" type="submit" onClick={handlerSrch}><i className="bi bi-search"></i></button>
                        </form> */}
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar