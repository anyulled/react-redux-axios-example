import React, {Component} from "react";
import Country from "./Country";

class Countries extends Component {

    render() {

        const {data} = this.props; //eslint-disable-line prefer-destructuring

        return (
            <div className='container'>
                <table className='table table-bordered table-striped'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Domain</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(country => (
                        <Country key={country.name} country={country}/>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

Countries.propTypes = {
    data: React.PropTypes.array
};

Countries.defaultProps = {
    data: {}
};

export default Countries;