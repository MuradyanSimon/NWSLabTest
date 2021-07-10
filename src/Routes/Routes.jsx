import Home from "../components/Home";
import CatImages from "../components/CatImage";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:category" component={CatImages} />
      </Switch>
    </div>
  );
};

export default Routes;
