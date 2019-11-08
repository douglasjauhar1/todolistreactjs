import React from 'react';
import './App.css';
import Main from './Component/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Douglas Jauhar" scroll>

          <Navigation className="Nav">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Project">Project</Link>
          </Navigation>
        </Header>
        <Drawer title="Douglas Jauhar">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Project">Project</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>

      </Layout>
    </div>


  );
}

export default App;
