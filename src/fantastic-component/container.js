import {connect} from 'react-redux';
import * as components from './components';

export const FantasticComponent = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(components.FantasticComponent);
