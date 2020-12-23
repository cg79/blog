import React from 'react';
import Counter from './counter';

class Parinte extends React.Component {

    constructor(props)
    {
        debugger;
        super(props);
        this.state = {count:props.start};
    }

    increment = () => {
        console.log('increment');
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        console.log('decrement');
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
       const { count } = this.state;     
        // const {start: count} = this.props;

        return (
            <Counter
                start={count}
                inc={this.increment}
                dec={this.decrement}
          />
        )
    }

}

export default Parinte;