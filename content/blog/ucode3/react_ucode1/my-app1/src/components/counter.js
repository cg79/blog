import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.counter.count
        }
        this.increase = this.increase.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        const newState = { ...this.state, count:  nextProps.counter.count};

        this.setState(newState);

    }

    increment = () => {
        this.props.inc();
    }

    decrement = () => {
        this.props.dec();
        if(this.props.changeVolume) {
            this.props.changeVolume(this.props.count);
        }
    }

    increase(){
        const newState = { ...this.state };
        newState.count ++;

        this.setState(newState);
    }

    render() {
        const { count }= this.state;
        return (
            <div>
                <h2>Counter</h2>
                {/*{count % 2 === 0 &&*/}
                    {/*<h2>Counter</h2>*/}
                {/*}*/}
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={this.increment}>+</button>

                    <button onClick={this.increase}>increase</button>
                    <p>{this.props.counter.text}</p>
                </div>
            </div>
        )
    }
}

export default Counter;