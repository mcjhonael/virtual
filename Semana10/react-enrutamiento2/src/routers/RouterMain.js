import React from "react";
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import RouterAuth from "./RouterAuth";
import RouterAdmin from "./RouterAdmin";
import RouterGuest from "./RouterGuest";
import RouterPos from "./RouterPos";
import RutaPrivada from "./RutaPrivada";

const RouterMain = () => {
  return ( 
    <HashRouter basename="/">
      <Switch>
        <Route path={"/auth"} component={RouterAuth} />
        <RutaPrivada path={"/admin"} componente={RouterAdmin} />
        <RutaPrivada path={"/pos"} componente={RouterPos} />
        {/* <Route path={"/admin"} component={RouterAdmin} /> */}
        {/* <Route path={"/pos"} component={RouterPos} /> */}

        <Route path={"/"} component={RouterGuest} />
      </Switch>
    </HashRouter>
  );
};

export default RouterMain;
