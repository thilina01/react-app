import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from '../../axios-leases';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import "../../components/Lease/Lease.css";

class LeaseDetails extends Component {
    componentDidMount() {
        this.props.onFetchLease(this.props.match.params.id);
    }

    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    backHandler = () => {
        this.props.history.push( '/' );
    };

    render() {
        let lease = <Spinner/>;
        if (!this.props.loading && this.props.lease.id) {

            const startDate = new Date(this.props.lease.start_date);
            const endDate = new Date(this.props.lease.end_date);
            const startDay = startDate.getDay();
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

            const paymentDay = days.indexOf(this.props.lease.payment_day);

            let gap = paymentDay - startDay;

            const frequency = this.props.lease.frequency;
            const paymentDuration = frequency === 'weekly' ? 7 : frequency === 'fortnightly' ? 14 : 28;

            gap = gap < 0 ? paymentDuration + gap : gap;

            let nextDate = this.addDays(startDate, gap);

            const arr = [];

            if (gap > 0) {
                arr.push({
                    from: startDate,
                    to: nextDate,
                    days: gap,
                    amount: (this.props.lease.rent / paymentDuration) * gap

                });
                nextDate = this.addDays(nextDate, paymentDuration);
            }

            while (nextDate <= endDate) {

                arr.push({
                    from: this.addDays(nextDate, -(paymentDuration - 1)),
                    to: nextDate,
                    days: paymentDuration,
                    amount: this.props.lease.rent

                });
                nextDate = this.addDays(nextDate, paymentDuration);

            }

            const endGap = (nextDate - endDate) / (1000 * 60 * 60 * 24);


            if (endGap < paymentDuration) {
                const countableDays = paymentDuration - endGap;
                arr.push({
                    from: this.addDays(endDate, -countableDays + 1),
                    to: endDate,
                    days: countableDays,
                    amount: (this.props.lease.rent / paymentDuration) * countableDays

                });
            }

            let rows = arr.map(rowData => (
                <tr key={rowData.from.getTime()}>
                    <td>{rowData.from.toLocaleDateString()}</td>
                    <td>{rowData.to.toLocaleDateString()}</td>
                    <td>{rowData.days}</td>
                    <td>{parseFloat(Math.round(rowData.amount * 100) / 100).toFixed(2)}</td>
                </tr>
            ));

            lease =
                <div className="Lease">
                    <button className="LeaseButton" onClick={this.backHandler}> Back </button>
                    <p>ID: {this.props.lease.id}</p>
                    <p>Start Date: <strong>{this.props.lease.start_date}</strong></p>
                    <p>End Date: <strong>{this.props.lease.end_date}</strong></p>
                    <p>Rent: <strong>{this.props.lease.rent}</strong></p>
                    <p>Frequency: <strong>{this.props.lease.frequency}</strong></p>
                    <p>Payment Day: <strong>{this.props.lease.payment_day}</strong></p>
                    <br/>
                    <table className="LeaseTable">
                        <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Days</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                    <br/>

                </div>
        }
        return (
            <div>
                {lease}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lease: state.lease.data,
        loading: state.lease.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLease: (id) => dispatch(actions.fetchLease(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(LeaseDetails, axios));