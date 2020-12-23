import { connect } from 'react-redux';

import CounterOne from '../counter';

const mapStateToProps = (store, ownProps) => {
debugger;
    return {
        count: store.counterReducer.count,
        a: function () {
            return 'xxx'
        }
    }
};

const mapDispatchToProps = dispatch => ({
    inc: () => dispatch({ type: 'INCREMENT' }),
    dec: () => dispatch({ type: 'DECREMENT' })
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterOne);

export default CounterContainer;
