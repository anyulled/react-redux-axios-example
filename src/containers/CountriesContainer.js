/**
 * Created by anyulled on 25/2/17.
 */
import {connect} from "react-redux";
import Countries from "../components/Countries";
import {fetchData} from "../actions/actions";

const mapStateToProps = state => ({data: state.example.data});

const mapDispatchToProps = dispatch => ({
    loadData: () => {
        dispatch(fetchData("https://restcountries.eu/rest/v1/all"));
    },
    loadBadData: () => {
        dispatch(fetchData("https://restcountries.eu/rest/v1/callingcode/123123"));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);