import React, { Component } from 'react';
import MainPage from 'conteiners/MainPage';
import RegForm from 'components/RegForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <MainPage />
        <div>
        <RegForm />
      </div>
      </div>


    );
  }
}

export default App;
