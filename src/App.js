import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './components/main-page/Store';
import Item from './components/item-page/Item';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    < Router >
      <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/products/:id" component={Item} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router >
  )
}

export default App;
