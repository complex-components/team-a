import {connect} from 'react-redux';
import {Login} from './components';
import {updateLogin} from './actions';

export default connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            updateLogin: (name) => dispatch(updateLogin(name))
        };
    }
)(Login);
