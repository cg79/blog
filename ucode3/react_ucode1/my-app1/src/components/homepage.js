import React from 'react';

import CounterContainer from './counterContainer';
import Users from './users';
import UsersContainer from './usersContainer';
import CounterOne from './counterOne';

class HomePage extends React.Component {
    constructor(props) {
        // debugger;
        super(props);
        this.state = {
            test:'hi'
        };
        this.setVolumeValue = this.setVolumeValue.bind(this);
    }

    setVolumeValue(val) {
        debugger;
        console.log(val);
    }

    render() {
        return (
            <div>
                <CounterOne></CounterOne>

                <CounterContainer
                    customProp={this.state}
                    changeVolume={this.setVolumeValue}>
                </CounterContainer>


        {/*<CounterContainer></CounterContainer>*/}

                {/*<Users></Users>*/}
                <div>Users Container</div>
                <UsersContainer></UsersContainer>
            </div>
        )
    }
}

export default HomePage;