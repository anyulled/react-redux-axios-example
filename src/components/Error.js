import React from "react";

class Error extends React.Component {
    componentWillMount() {
        this.props.loadBadData();
    }

    render() {
        const {data} = this.props; //eslint-disable-line prefer-destructuring
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>{data.status}</h2>
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
    data: React.PropTypes.object,
    loadBadData: React.PropTypes.func
};

Error.defaultProps = {
    data: {},
    loadBadData: () => ({})
};

export default Error;