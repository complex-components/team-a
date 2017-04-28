import {connect} from 'react-redux';
import {ArticleComponent} from './component';

export default connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(ArticleComponent);
