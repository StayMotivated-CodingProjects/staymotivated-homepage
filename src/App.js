import React, { Component } from 'react';

import './css/App.css';
import './css/Grid.css';

import MailReg from './components/MailReg';

class App extends Component {
  render() {
    return (
      <div className="container">

        <header>

          <h1>
              Stay Motivated - Coding Projects
          </h1>

        </header>

        <menu>
          <h1>Fork Test</h1>
        </menu>

        <main>
            <MailReg fieldText="Your Email Address to stay up to date!"   />
        </main>

        <div className="preFooter">
            <h1>For Twitter Github & Co</h1>
        </div>

        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
