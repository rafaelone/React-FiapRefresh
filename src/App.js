import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Header from './Components/header/Header'
import { Route, Switch} from 'react-router-dom'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Header />
          <Switch>
            {routes.map(route =>  <Route  {...route}  {...this.props} />)}
          </Switch>
      </div>
  );
  }
}

export default App;



