import React from "react";

class Country extends React.Component {

    render() {
        const {country} = this.props;//eslint-disable-line prefer-destructuring

        return (
			<tr>
				<td>{country.name}</td>
				<td>{country.capital}</td>
				<td>{country.population}</td>
				<td>{country.topLevelDomain}</td>
			</tr>
        );
    }
}

Country.propTypes = {
    country: React.PropTypes.object.isRequired
};

export default Country;