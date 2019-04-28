import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lease from '../../components/Lease/Lease';
import axios from '../../axios-leases';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Leases extends Component {
  componentDidMount() {
    this.props.onFetchLeases();
  }

  leaseSelectedHandler = (id) => {
    this.props.history.push('/leases/' + id);
  };

  render() {
    let leases = <Spinner />;
    if (!this.props.loading) {
      leases = this.props.leases.map(lease => (
        <Lease
          key={lease.id}
          id={lease.id}
          tenant={lease.tenant}
          clicked={() => this.leaseSelectedHandler(lease.id)} />
      ))
    }
    return (
      <div>
        {leases}
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    leases: state.lease.leases,
    loading: state.lease.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLeases: () => dispatch(actions.fetchLeases())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Leases, axios));