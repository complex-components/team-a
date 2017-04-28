import {connect} from 'react-redux';
import {FantasticComponent} from './component';

export default connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(FantasticComponent);
