import React from 'react';
import {Layout, Header, Navigation, Drawer, Content, Button} from 'react-mdl';
import './App.css';
import Main from "./components/main";
import {Link} from "react-router-dom";

import Footer from "./components/footer";
import Landing from "./components/landingpage";


function App() {
  return (
      <div className="demo-big-content">
        <Layout>
          <Header title="EA" scroll className="header-color">

            <Navigation >
              <Link to="/" className="links">Home</Link>
              <Link to="/resume" className="links">Resume</Link>
              <Link to="/aboutme" className="links">About Me</Link>
              <Link to="/projects" className="links">Projects</Link>
              <Link to="/contact" className="links">Contact</Link>
            </Navigation>
          </Header>


          <Drawer title="EA">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />

            <Main/>

          </Content>
        <Footer/>
        </Layout>
      </div>
  );
}

export default App;
