import prof from './Img/1.jpg';
import prof1 from './Img/2.jpg';
import prof2 from './Img/3.jpg';
import map from './Img/map.svg';
import map1 from './Img/map1.svg';
import call from './Img/call.svg';
import email from './Img/email.svg';
import ht from './Img/planning.svg';
import ph from './Img/executive.svg';
import re from './Img/shuttle.svg';
import key from './Img/key.svg';
import pekini from './Img/map.png';
import smartphone from './Img/smartphone.svg';
import facebook from './Img/facebook.svg';
import ImageCarousel from './Components/ImageCarousel';
import './App.css';
import React, { Component } from "react";
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import ValidatedLoginForm from "./ValidatedLoginForm";
import { Redirect, BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class HideandSeek extends Component {
  constructor() {
    super()
    this.state = {
      showMe: true
    }
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe
    })
  }
  render() {
    return (
      <div class="navbar">

        {
          this.state.showMe ?
            <React.Fragment>
              <p className="mobilenumb">Mobile: +995 599 09 48 89</p>
              <p className="phonenumb">Phone: (032) 238-40-56</p>
            </React.Fragment>
            : null
        }
        <button class="nav-liclick" onClick={() => this.operation()}>Hide numbers</button>
      </div>
    )
  }
}
const HomePage = () => {
  return <React.Fragment>
    <div class="container">
      <h1 style={{ 'color': '#333789' }}>How we work...</h1>
      <div class="card-1">
        <img style={{ 'width': '150px', 'height': '300px' }} src={ht} alt="front" />
        <p class="title">Planning</p>
        <p>Developing a project plan and defining project management methodology.</p>
      </div>
      <div class="card-1">
        <img style={{ 'width': '150px', 'height': '300px' }} src={ph} alt="front" />
        <p class="title">Execution</p>
        <p>Development and execution. We use modern languages and frameworks such as: HTML, CSS, JS, React, PHP, Laravel.</p>
      </div>
      <div class="card-1">
        <img style={{ 'width': '150px', 'height': '300px' }} src={re} alt="front" />
        <p class="title">Launch</p>
        <p>Delivering of the product to the client and going live</p>
      </div>
    </div> <br />
  </React.Fragment>
}
const ContactPage = () => {
  return <React.Fragment>
    <div class="contact-back">
      <div class="contact" >
        <h1 class="contacth">Our Contacts</h1>
        <img class="map1" src={map1} />
        <p class="locat">41 Pekini Ave, T'bilisi</p>
        <img class="call" src={call} />
        <p class="ph">(032) 238-40-56</p>
        <img class="email" src={email} />
        <p class="em">nika.kvatsabaia.1@btu.edu.ge</p>
        <img class="pekini" src={pekini} />
      </div>
    </div>
  </React.Fragment>
}
const Auth = () => {
  return <React.Fragment>
    <div class="authorization-container">
      <div class="authorization-card">
        <img style={{ "width": "100px", "margin-top": "60px" }} src={key} alt="key" />
        <h1>Log In</h1>
        <ValidatedLoginForm />
      </div>
    </div>
    <br /><br /><br />

  </React.Fragment>

}
const AboutPage = () => {
  return <React.Fragment>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="container">

      <h3 class="abouth">WebrChitect Web Development</h3>
      <p class="abouttxt">For us, the product comes first.
      Even before taking it on, we approach every project with utmost precision and dedication. By working closely with the client, we achieve the best results, creating web projects which make us proud</p>
      <br /><br /> <hr />
      <h3 class="abouth">Team</h3>
      <p class="abouttxt">Above all, we value people and human relations. Our team members share the values that unite us and help us work as one.</p>
      <br /><br /> <hr /><br /><br />
      <div class="card">
        <img class="prof" src={prof} alt="Nick" />
        <h1>Nick Kvatsabaia</h1>
        <p class="title">CEO & Founder, BackEnd</p>
        <p>Business And Technologies University</p>
        <div class="co">
          <a href="https://www.facebook.com/profile.php?id=100004706316781"><i class="fa fa-facebook"></i></a>
        </div>
        <p><a href="mailto: nika.kvatsabaia.1@btu.edu.ge"><button>Contact</button></a></p>
      </div>
      <div class="card">
        <img class="prof" src={prof1} alt="George" />
        <h1>George Gurtskaia</h1>
        <p class="title">Front End Developer</p>
        <p>Business And Technologies University</p>
        <div class="co">
          <a href="https://www.facebook.com/lenorigiorgi.ghurckaia"><i class="fa fa-facebook"></i></a>
        </div>
        <p><a href="mailto: george.gurtskaia.1@btu.edu.ge"><button>Contact</button></a></p>
      </div>
      <div class="card">
        <img class="prof" src={prof2} alt="John" />
        <h1>Davit Tavdgiridze</h1>
        <p class="title">UX / UI Designer</p>
        <p>Business And Technologies University</p>
        <div class="co">
          <a href="https://www.facebook.com/zearseba"><i class="fa fa-facebook"></i></a>
        </div>
        <p><a href="mailto: davit.tavdgiridze.1@btu.edu.ge"><button>Contact</button></a></p>
      </div>

    </div>
    <br /><br /><br />
  </React.Fragment>
}
const NavBar = () => {
  return <React.Fragment><div class="navbar">
    <Link className="nav-li" to="/"> Main Page </Link>
    <Link className="nav-li" to="/contact">Contact Page</Link>
    <Link className="nav-li" to="/about">About Page</Link>
    <Link className="nav-li" to="/auth">Login</Link>
    <HideandSeek />
  </div>
  </React.Fragment>
}
const Header = () => {
  return <ImageCarousel />
}
const Footer = () => {
  return <React.Fragment><div class="footer">
    <h3 className="footerh"><span>Webr</span>Chitect</h3>
    <p className="desc">For us, the product comes first.
    Even before taking it on, we approach every project
    with utmost precision and dedication.
    By working closely with the client, we
    achieve the best results, creating web projects
     which make us proud</p>
    <img className="map" src={map} />
    <a className="maplink" href="https://goo.gl/maps/VCWaxiEufE3b1ci2A">Pekinis str. #41</a>
    <img className="smartphone" src={smartphone} />
    <p className="phone">(032) 238-40-56</p>
    <img className="facebook" src={facebook} />
    <a className="facebooklink" href="https://www.facebook.com/NQwebstudio">Facebook Page</a>
    <p className="copyright">WebrChitect 2020 © All rights reserved</p>

  </div>
  </React.Fragment>
}

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
