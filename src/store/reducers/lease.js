import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    leases: [],
    data: {},
    loading: false,
    purchased: false
};

const fetchLeasesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchLeasesSuccess = ( state, action ) => {
    return updateObject( state, {
        leases: action.leases,
        loading: false
    } );
};

const fetchLeasesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchLeaseStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchLeaseSuccess = ( state, action ) => {
    return updateObject( state, {
        data: action.lease,
        loading: false
    } );
};

const fetchLeaseFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_LEASES_START: return fetchLeasesStart( state, action );
        case actionTypes.FETCH_LEASES_SUCCESS: return fetchLeasesSuccess( state, action );
        case actionTypes.FETCH_LEASES_FAIL: return fetchLeasesFail( state, action );
        case actionTypes.FETCH_LEASE_START: return fetchLeaseStart( state, action );
        case actionTypes.FETCH_LEASE_SUCCESS: return fetchLeaseSuccess( state, action );
        case actionTypes.FETCH_LEASE_FAIL: return fetchLeaseFail( state, action );
        default: return state;
    }
};

export default reducer;