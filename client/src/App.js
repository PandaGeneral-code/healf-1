import React from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";
import Drawer from "./components/Drawer/Drawer";
import Fallback from "./components/Fallback/Fallback";
import { useUtilsHooks } from "./hooks/UtilsHooks";
import RootWrapper, { ContentContainer, NavigationContainer } from "./styled";

const App = () => {
  const {
    state: { containers },
  } = useUtilsHooks();

  return (
    <RootWrapper>
      <NavigationContainer>
        <AppBar />
      </NavigationContainer>
      <ContentContainer>
        <Switch>
          {containers.map(({ Component, config: { path } }) => (
            <Route component={Component} key={path} path={`/${path}`} />
          ))}
          <Route component={Fallback} path="/:container?/:screen?" />
        </Switch>
      </ContentContainer>
      <Drawer />
    </RootWrapper>
  );
};

export default App;
