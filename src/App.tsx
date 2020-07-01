import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import styled from 'styled-components';
import {Menu} from './componenents/Menu/Menu';
import {TopBar} from './componenents/TopBar/TopBar';
import Dashboard from './componenents/Dashboard/Dashboard';
import SignUp from './componenents/SignUp/SignUp';
import SignIn from './componenents/SignIn/SignIn';
import Account from './componenents/Account/Account';
import * as ROUTES from './constants/routes';
// import { withAuthentication } from './componenents/Session/index';
import useFirebase from './Firebase';

const StyledRoot = styled.div`
  display: flex;
`;
const Main = styled.main`
  flex-grow: 1;
  height: 100vh;
`;
const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const App = () => {
  const { login, authUser, logout } = useFirebase();

  if (authUser) {
    return(
      <Router>
        <StyledRoot>
              <Menu/>
              <Main>
                <TopBar/>
                <StyledContainer maxWidth="lg">
                  <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                  <Route exact path={ROUTES.SIGN_IN} component={SignIn} />      
                  <Route exact path={ROUTES.HOME} component={Dashboard} />
                  <Route exact path={ROUTES.ACCOUNT} component={Account} />
                </StyledContainer>
              </Main>
        </StyledRoot>
      </Router>
    )
  }

  return(
  <div>
    <p>unauhthorized</p>
  s</div>)
};
export default App;
