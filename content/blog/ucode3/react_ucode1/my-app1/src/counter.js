import React from 'react';
import './counter.css';

class CounterOne extends React.Component {

    constructor(props)
    {
        debugger;
        super(props);
        this.state = {count:props.count};
    }

    increment = () => {
        this.props.inc();
        // console.log('increment');
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    decrement = () => {
        this.props.dec();
        // console.log('decrement');
        // this.setState({
        //     count: this.state.count - 1
        // });
    }

    componentWillReceiveProps(newp){
        debugger;
    }

    render() {
       const { count } = this.props;     
        // const {start: count} = this.props;

        return (
            <div className="foo">
                <h2>Counter ONE</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }

}

export default CounterOne;