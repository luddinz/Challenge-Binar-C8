import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact>
              <div className="content">
                <LoginPage />
              </div>
            </Route>
            <Route path="/create-player">
              <CreatePage />
            </Route>
            <Route path="/edit-player">
              <EditPage />
            </Route>
            <Route path="/search-player">
              <SearchPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
