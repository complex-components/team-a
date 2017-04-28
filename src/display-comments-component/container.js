import {connect} from 'react-redux';
import * as components from './components';

export const CommentsComponent = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(components.CommentsComponent);
