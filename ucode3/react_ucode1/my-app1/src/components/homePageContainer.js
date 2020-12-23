import { connect } from 'react-redux';

import HomePage from './homepage';

const mapStateToProps = state => ({
    testVar: 8,
    abbbbbbbbbbbbb: function () {
        return 'xxx'
    }
});

const mapDispatchToProps = dispatch => ({

});

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomePageContainer;
