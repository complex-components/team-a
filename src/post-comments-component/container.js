import {connect} from 'react-redux';
import {PostCommentsComponent} from './components';
import {addComment} from './actions';

export default connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            addComment: dispatch(addComment)
        };
    }
)(PostCommentsComponent);
