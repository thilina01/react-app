import * as actionTypes from './actionTypes';
import axios from '../../axios-leases';

export const fetchLeasesSuccess = (leases) => {
  return {
    type: actionTypes.FETCH_LEASES_SUCCESS,
    leases: leases
  };
};

export const fetchLeasesFail = (error) => {
  return {
    type: actionTypes.FETCH_LEASES_FAIL,
    error: error
  };
};

export const fetchLeasesStart = () => {
  return {
    type: actionTypes.FETCH_LEASES_START
  };
};

export const fetchLeases = () => {
  return dispatch => {
    dispatch(fetchLeasesStart());
    axios.get('')
      .then(res => {
        dispatch(fetchLeasesSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchLeasesFail(err));
      });
  };
};

export const fetchLease = (id) => {
  return dispatch => {
    dispatch(fetchLeaseStart());
    axios.get(id)
      .then(res => {
        dispatch(fetchLeaseSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchLeaseFail(err));
      });
  };
};

export const fetchLeaseStart = () => {
  return {
    type: actionTypes.FETCH_LEASE_START
  };
};

export const fetchLeaseSuccess = (lease) => {
  return {
    type: actionTypes.FETCH_LEASE_SUCCESS,
    lease: lease
  };
};

export const fetchLeaseFail = (error) => {
  return {
    type: actionTypes.FETCH_LEASE_FAIL,
    error: error
  };
};