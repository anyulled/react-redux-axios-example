import React, {Component} from "react";
import Country from "./Country";

class Countries extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadData();
    }

    render() {
        const {props:{data}} = this;
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
    loadBadData: React.PropTypes.any,
    loadData: React.PropTypes.any
};

Countries.defaultProps = {
    data: [{
        name: "Venezuela",
        capital: "Caracas",
        population: "30.000.000",
        topLevelDomain: "VEN"
    }, {
        name: "Spain",
        capital: "Madrid",
        population: "55.000.000",
        topLevelDomain: "SPA"
    }],
    loadBadData: () => (console.info("loading data")),//eslint-disable-line no-console
    loadData: () => (console.info("loading data"))//eslint-disable-line no-console
};

export default Countries;