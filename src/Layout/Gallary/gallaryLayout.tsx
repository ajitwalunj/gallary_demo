import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from '../../routes';
import Header from '../../Componets/header';
import Loader from '../../common/componets/loader';
import Alert from '../../common/componets/alert';

export default function GallaryLayout(props: any) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
       <Loader/>
       <Alert/>
      <Header {...props}/>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.layout + route.path}
              component={route.component}
            />
          )
        })}
        <Redirect from="/gallary-layout" to="/gallary-layout/home" />
      </Switch>
      </Container>
    </React.Fragment>
  );
}