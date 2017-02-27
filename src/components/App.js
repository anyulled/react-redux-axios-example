import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/app.css";

class App extends Component {

    render() {
        const {children} = this.props;
        const {example} = this.props;

        return (
            <div>
                <NavBar />
                <div className='container'>
                    {example.isLoading ? <Spinner /> : children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    example: React.PropTypes.object
};

App.defaultProps = {
    example: {isLoading: true}
};

export default App;