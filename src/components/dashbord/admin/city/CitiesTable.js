import React from 'react';

const CitiesTable = props => (

    <table className="table table-hover">
        <thead>
        <tr>
            {/*<th>id</th>*/}
            <th>Name</th>
            <th>Code</th>
        </tr>
        </thead>
        <tbody>
        {
            props.cities.length > 0 ? (
                props.cities.map (city => (

                    <tr key={city.id}>
                        <td>{city.name}</td>
                        <td>{city.code}</td>
                        <td className="center-align">
                            <button
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(city)}>
                                edit
                            </button>

                            <button
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteCities(city._id)}>
                                delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>{props.cities[0]} No Cities</td>
                </tr>
            )
        }
        </tbody>
    </table>
);

export default CitiesTable;