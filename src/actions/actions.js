import * as types from "./actionTypes";
import axios from "axios";

function requestData() {
    return {type: types.REQ_DATA};
}

function receiveData(data) {
    return {
        type: types.RECV_DATA,
        data
    };
}

function receiveError(data) {
    return {
        type: types.RECV_ERROR,
        data
    };
}

function locationChange(url) {
    return {
        type: "@@router/LOCATION_CHANGE",
        url
    };
}

export function fetchData(url) {
    return function (dispatch) {
        dispatch(requestData());
        return axios({
            url: url,
            timeout: 20000,
            method: "get",
            responseType: "json"
        })
            .then((response) => {
                dispatch(receiveData(response.data));
            })
            .catch((response) => {
                dispatch(receiveError(response));
                dispatch(locationChange("/url"));
            });
    };
}
