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

    this.state = {
      showHamburger: true
    }

    this.myBff = this.myBff.bind(this);
    this.thisState = this.thisState.bind(this);
    this.kudos = this.kudos.bind(this);
    this.work = this.work.bind(this);
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger(e){
    e.preventDefault();
    this.setState(prevState => ({
      showHamburger: !prevState.showHamburger
    }))
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
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

  render(props) {
    return (
      <div className="App">

        <Nav {...props}
         toggleHamburger={this.toggleHamburger}
         showHamburger={this.state.showHamburger}/>

        <main>
        <Route exact path='/' render={(props) => (
          <>
          <Header />
          <ProjectsList {...props}
           myBff={this.myBff}
           thisState={this.thisState}
           kudos={this.kudos}
           work={this.work}
          />
          </>
        )}/>

        <Route exact path='/my-bff' render={(props) => (
          <>
          <MyBff {...props}
           thisState={this.thisState}
           work={this.work}/>
          </>
        )}/>

        <Route exact path='/this-state' render={(props) => (
          <>
          <ThisState {...props}
           myBff={this.myBff}
           kudos={this.kudos}/>
          </>
        )}/>

        <Route exact path='/kudos' render={(props) => (
          <>
          <Kudos {...props}
           thisState={this.thisState}
           work={this.work}/>
          </>
        )}/>

        <Route exact path='/work' render={(props) => (
          <>
          <Work {...props}
           myBff={this.myBff}
           kudos={this.kudos} />
          </>
        )}/>

        <Route exact path='/about' render={() => (
          <>
          <AboutMe />
          </>
        )}/>

        <Route exact path='/contact' render={() => (
          <>
          <Contact />
          </>
        )}/>
        </main>

        <Footer />

      </div>
    );
  }
}

export default withRouter(App);
