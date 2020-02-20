import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import EventFormContainer from './components/Events/EventFormContainer';
import EventListContainer from './components/Events/EventListContainer';
import EventDetailContainer from './components/Events/EventDetailContainer';
import Home from './components/Home';
import FlashMessagesList from './components/Messages/FlashMessagesList';

function App() {
  return (
    <Fragment>
      <NavBar />
      <FlashMessagesList />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event/create" component={EventFormContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/:id" component={EventDetailContainer} />
      </Switch>
    </Fragment>
  );
}

export default App;
