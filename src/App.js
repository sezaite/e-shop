import './App.scss';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Store from './components/main-page/Store';
import Item from './components/item-page/Item';
import NotFound from './components/NotFound';

function App() {
  return (
    < Router >
      <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/products/:id" component={Item} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router >
  )
}

export default App;
