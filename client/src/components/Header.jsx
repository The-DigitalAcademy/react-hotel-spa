import "../index.css";
import { useState } from "react";
const Header = () => {

  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand logo" href="#">
    <img src='https://www.saxon.co.za/app/uploads/2022/10/logo.svg' alt='logo image'/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button id="BtnNav" onMouseOver={() => setToggle(!toggle)}>ACCOMMODATION</button>
              {toggle && (
                <ul className="DropMenu">
                  <li className="DropList">LUXURY SUITES</li>
                  <li className="DropList">VILLA LUXURY SUITE</li>
                  <li className="DropList">PRESIDENTIAL SUITE</li>
                  <li className="DropList">VILLA PRESIDENTIAL SUITE</li>
                  <li className="DropList">NELSON MANDELA</li>
                  <li className="DropList">NELSON MANDELA</li>
                  <li className="DropList">PLATINUM SUITE</li>
                  <li className="DropList">SAXON LUXURY VILLAS</li>
                </ul>
              )}
            </li>
            
            <li className="nav-item">
              <button id="BtnNav" onMouseOver={() => setToggle2(!toggle2)}>RESTAURANTS</button>
              {toggle2 && (
                <ul className="DropMenu">
                  <li className="DropList">QUNU</li>
                  <li className="DropList">BRUNCH</li>
                  <li className="DropList">Show me</li>
                  <li className="DropList">Only when</li>
                  <li className="DropList">Show me</li>
                  <li className="DropList">Only when</li>
                  <li className="DropList">Show me</li>
                  <li className="DropList">Only when</li>
                </ul>
              )}


            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SPA</a>

            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">EVENTS & MEETINGS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">ITINERARIES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
      <button>
        BOOK NOW
      </button>
    </nav>
  )
}

export default Header