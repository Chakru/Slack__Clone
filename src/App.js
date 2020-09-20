import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Auth/Login';
import Chat from './Component/Chat/Chat';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  const [user, setUser] = useState();
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
