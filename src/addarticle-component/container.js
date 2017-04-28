import {connect} from 'react-redux';
import {AddArticle} from './components';
import {addArticle} from './actions';

export default connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            addArticle: (name) => dispatch(addArticle(name))
        };
    }
)(AddArticle);
