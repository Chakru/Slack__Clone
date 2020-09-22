import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './Redux/StateProvider';
import Login from './Component/Auth/Login';
import Chat from './Component/Chat/Chat';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/channel/:channelId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
