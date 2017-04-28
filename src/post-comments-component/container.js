import {connect} from 'react-redux';
import * as components from './components';

export const PostCommentsComponent = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(components.PostCommentsComponent);
