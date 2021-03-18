import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import FourOrFour from "../views/404"
export default function Routes(){
    return(
        <Router>
            <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route>
                <FourOrFour/>
            </Route>
            </Switch>
        </Router>

    );
}