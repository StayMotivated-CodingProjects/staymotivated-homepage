import React, { Component } from 'react';

import './css/App.css';
import './css/Grid.css';

import socialsList from './lists/socials'
import MailReg from './components/MailReg';
import MenueList from './components/MenueList';

const social = socialsList.map(function (soc) {
    return(
        <MenueList  key     = {soc.id}
                    name    = {soc.name}
                    picUrl  = {soc.picUrl}
                    link    = {soc.link}
        />
    )
});

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
          <h1>About</h1>
        </menu>

        <main>
            <MailReg fieldText="Enter your Email Address to stay up to date!"   />
        </main>

        <div className="preFooter">
            {social}
        </div>

        <footer>
            <h3>Impressum</h3>
        </footer>
      </div>
    );
  }
}

export default App;
