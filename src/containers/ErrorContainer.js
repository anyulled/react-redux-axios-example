/**
 * Created by anyulled on 25/2/17.
 */
import {connect} from "react-redux";
import Error from "../components/Error";

const mapStateToProps = state => ({data: state.example.data});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps, Error);