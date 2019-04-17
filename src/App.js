import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Kudos from './components/Kudos';
import MyBff from './components/MyBff';
import Nav from './components/Nav';
import ProjectsList from './components/ProjectsList';
import ThisState from './components/ThisState';
import Work from './components/Work';


class App extends Component {
  constructor(){
    super();
    this.myBff = this.myBff.bind(this);
    this.thisState = this.thisState.bind(this);
    this.kudos = this.kudos.bind(this);
    this.work = this.work.bind(this);
  }

  myBff(){
    this.props.history.push('/my-bff')
  }

  thisState(){
    this.props.history.push('/this-state')
  }

  kudos(){
    this.props.history.push('/kudos')
  }

  work(){
    this.props.history.push('/work')
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={(props) => (
          <>
          <Nav />
          <Header />
          <ProjectsList {...props}
           myBff={this.myBff}
           thisState={this.thisState}
           kudos={this.kudos}
           work={this.work}
          />
          <Footer />
          </>
        )}/>

        <Route exact path='/my-bff' render={() => (
          <>
          <Nav />
          <MyBff />
          <Footer />
          </>
        )}/>

        <Route exact path='/this-state' render={() => (
          <>
          <Nav />
          <ThisState />
          <Footer />
          </>
        )}/>

        <Route exact path='/kudos' render={() => (
          <>
          <Nav />
          <Kudos />
          <Footer />
          </>
        )}/>

        <Route exact path='/work' render={() => (
          <>
          <Nav />
          <Work />
          <Footer />
          </>
        )}/>

        <Route exact path='/about' render={() => (
          <>
          <Nav />
          <AboutMe />
          <Footer />
          </>
        )}/>

        <Route exact path='/contact' render={() => (
          <>
          <Nav />
          <Contact />
          <Footer />
          </>
        )}/>

      </div>
    );
  }
}

export default withRouter(App);
