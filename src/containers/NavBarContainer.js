/**
 * Created by anyulled on 25/2/17.
 */
import {connect} from "react-redux";
import NavBar from "../components/NavBar";

const mapStateToProps = state => ({
    routerState: state.router
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps, NavBar);