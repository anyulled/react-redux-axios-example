import React from "react";

class Error extends React.Component {
    componentWillMount() {
        this.props.loadBadData();
    }

    render() {
        const {props:{data}} = this;
        console.dir(this.props);
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>{data.response && data.response.status}</h2>
                        <div className="error-details">
                            {data.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Error.propTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    loadBadData: React.PropTypes.func
};

Error.defaultProps = {
    data: {
        status: 404,
        message: "default message"
    },
    loadBadData: () => ({})
};

export default Error;