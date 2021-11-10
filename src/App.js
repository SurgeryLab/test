import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Search from "./Pages/Search";
import Main from "./Pages/Main";

function App() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={'/search'} component={Search}/>
            <Route path={'/'} component={Main}/>
          </Switch>
        </BrowserRouter>
    );
}

export default App;
