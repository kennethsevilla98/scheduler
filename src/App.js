import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Create from './pages/Create';
import Update from './pages/Update';
import NoMatch from './pages/NoMatch';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"

function App() {
   
  const dispatch = useDispatch();

  const { getMeetings} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getMeetings() 
  }, [])




  return (
  <Router>
      <Switch>
      <Route  exact path="/">
        <Home />
      </Route>
      <Route path="/create">
        <Create/>
      </Route>
      <Route exact path="/update/:id">
        <Update/>
      </Route>
      <Route path="*">
            <NoMatch />
          </Route>
    </Switch>
  </Router>
  );
}

export default App;
