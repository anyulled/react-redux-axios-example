/**
 * Created by anyulled on 25/2/17.
 */
import {connect} from "react-redux";
import Countries from "../components/Countries";

const mapStateToProps = state => ({data: state.example.data});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps, Countries);