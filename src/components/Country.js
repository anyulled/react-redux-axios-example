import React from "react";

class Country extends React.Component {

    render() {
        const {props:{country}} = this;
        const formatter = new Intl.NumberFormat();
        const useTranslation = country.name !== country.translations.es;
        return (
            <tr>
                <td>{country.name} ({useTranslation && country.translations.es})</td>
                <td>{country.capital}</td>
                <td>{formatter.format(country.population)}</td>
                <td>{country.topLevelDomain.map(domain => (<span key={domain}>{domain} </span>))}</td>
            </tr>
        );
    }
}

Country.propTypes = {
    country: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        capital: React.PropTypes.string.isRequired,
        population: React.PropTypes.number.isRequired,
        topLevelDomain: React.PropTypes.array.isRequired,
        translations: React.PropTypes.shape({
            es: React.PropTypes.string
        })
    }).isRequired
};

export default Country;