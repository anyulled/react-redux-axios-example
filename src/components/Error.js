import React from "react";

class Error extends React.Component {

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
    data: React.PropTypes.object
};

Error.defaultProps = {
    data: {}
};

export default Error;