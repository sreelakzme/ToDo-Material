import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Services from './Services';
import User from "./User";


const App = () => {

  const Name = () =>{
    return <h1>Name name name</h1>
  };
  return(
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route path='/contact/name' component={Name} />
      <Route path='/services' component={Services} />
      <Route path="/user/:name" component={User}/>
      <Route component={Error} />
    </Switch>

    </>
  );
};
export default App;
