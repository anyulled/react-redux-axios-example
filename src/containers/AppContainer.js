import {connect} from "react-redux";
import AppComponent from "../components/App";

const mapStateToProps = state => ({
    routerState: state.router,
    example: state.example
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null, AppComponent);