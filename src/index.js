import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/App.css';
import './styles/bootstrap.css';
import './styles/bootstrap.min.css';
import './styles/heroic-features.css';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Bones from './components/Bones';
import Collars from './components/Collars';
import Leashes from './components/Leashes';
import About from './components/About';
import Contact from './components/Contact';


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Bones" component={Bones} />
        <Route path="/Collars" component={Collars} />
        <Route path="/Leashes" component={Leashes} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route exact path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();

