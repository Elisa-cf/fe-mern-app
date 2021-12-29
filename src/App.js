import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';


const App = () => {
  return (
    <>
      <MainNavigation />
      <main>
      <Switch>

        <Route exact path='/'><Users /></Route>
        <Route path='/places/new'><NewPlace /></Route>
        <Redirect to='/' />
      </Switch>
      </main>
    </>
  )
}


export default App;
