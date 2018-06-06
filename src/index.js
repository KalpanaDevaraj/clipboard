import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Home from './components/Home';
import DAPersonalDetails from './components/DAPersonalDetails';
import EmployeeInsurance from './components/EmployeeInsurance';
import EmployeeOnBoarding from './components/EmployeeOnBoarding';
import EmployeeOnBoardingCompliance from './components/EmployeeOnBoardingCompliance';
import EmployeeRecruitment from './components/EmployeeRecruitment';

import './index.css';

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="DAPersonalDetails" component={DAPersonalDetails} />
        <Route path="EmployeeInsurance" component={EmployeeInsurance} />
        <Route path="EmployeeOnBoarding" component={EmployeeOnBoarding} />
        <Route path="EmployeeOnBoardingCompliance" component={EmployeeOnBoardingCompliance} />
        <Route path="EmployeeRecruitment" component={EmployeeRecruitment} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
