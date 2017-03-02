import React, {Component} from "react";
import Country from "./Country";

class Countries extends Component {
    componentWillMount() {
        this.props.loadData();
    }

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
    data: React.PropTypes.array,
    loadData: React.PropTypes.func
};

Countries.defaultProps = {
    data: {},
    loadData: () => ({})
};

export default Countries;