import React from 'react';
import './css/style.css'
import Shop from './Shop';
import Nav from './Nav';
import{BrowserRouter as Router,Link,Route} from 'react-router-dom';
import { ContextProvider } from './Context';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>
    <ContextProvider>
      <Nav/>
      <Route path='/' exact component={Home}></Route>
      <Route path='/shop' component={Shop}/>
      <Route path='/contact' component={Contact}/>
      <Footer/>
      </ContextProvider>
      </Router>
    </>
  );
}

export default App;
