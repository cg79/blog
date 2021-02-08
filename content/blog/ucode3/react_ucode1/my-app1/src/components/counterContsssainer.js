import { connect } from 'react-redux';

import Counter from './counter';

const mapStateToProps1 = state => ({
    counter: state.counterRed,
    a: function () {
        return 'xxx'
    }
});

const mapDispatchToProps = dispatch => ({
    inc: () => dispatch({type: 'INCREMENT'}),
    dec: () => dispatch({type: 'DECREMENT'})
});

const CounterContainer = connect(
    mapStateToProps1,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
