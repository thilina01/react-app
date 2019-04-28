import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Leases from './containers/Leases/Leases';
import LeaseDetails from "./containers/Lease-details/LeaseDetails";

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/leases/:id" component={LeaseDetails} />
            <Route path="/leases" component={Leases} />
            <Route path="/" exact component={Leases} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
