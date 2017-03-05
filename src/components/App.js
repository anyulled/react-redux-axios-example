import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/app.css";

class App extends Component {

    render() {
        const {children, example} = this.props;
        return (
            <div>
                <NavBar />
                <div className='container'>
                    {/*example.isLoading === true ? <Spinner /> :*/ children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    example: React.PropTypes.shape({
        isLoading: React.PropTypes.bool.isRequired,
        data: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]).isRequired,
        error: React.PropTypes.bool.isRequired
    })
};

App.defaultProps = {
    example: {isLoading: false}
};

export default App;