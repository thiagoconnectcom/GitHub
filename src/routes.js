import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//pages
const Home = lazy(() => import('./pages/Home'));
const Detalhes = lazy(() => import('./pages/Detalhes'));

export default function Routes() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/detalhes/:usuario/:name" component={Detalhes}/>
            </Switch>
        </Suspense>
    </Router>
  )
}