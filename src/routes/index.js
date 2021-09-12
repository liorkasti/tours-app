import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IntroPage from '../Pages/IntroPage/introPage';
import PromotionsPage from '../Pages/PromotionsPage/promotionsPage';
import Header from "../Components/Header";

const routes = (props) => {

  return (
    <Router className=".app-bar">
      <Header />
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/promotionsPage" exact component={PromotionsPage} />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
};

export default routes;
