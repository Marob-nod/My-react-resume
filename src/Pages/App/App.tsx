import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Knowledges from '../Knowledges';
import Error404 from '../Error404';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/knowledges" component={Knowledges} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
