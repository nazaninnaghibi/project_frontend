import React, { Component } from 'react';
import qs from 'querystring';

import axios from 'axios';

import CitiesTable from './CitiesTable';
import AddCitiesForm from './AddCitiesForm';
import EditCitiesForm from './EditCitiesForm';

class CityAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            currentCity: { id: null, name: '', code: '' },
            editing: false,
            message: "",
            successful: false
        }
    }

    componentDidMount() {
        this.refreshCitiesTable();
    }

    refreshCitiesTable() {
        this.citiesData = axios.get('http://localhost:8080/api/city')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    cities: data.data,
                    setCities: data.data
                });
            });
    }

    addCities = cities => {
        axios.post('http://localhost:8080/api/city', qs.stringify(cities))
            .then(
                response => {
                    this.refreshCitiesTable();
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
    };

    deleteCities = id => {
        axios.delete(`http://localhost:8080/api/city/${id}`)
            .then(res => {
                this.refreshCitiesTable();
            });
    };

    updateCities = (id, cities) => {
        axios.put(`http://localhost:8080/api/city/${id}`, qs.stringify(cities))
            .then(res => {

                this.refreshCitiesTable();
            });

        this.setState({
            currentCity: { id: null, name: '', code: '' }
        });

        this.setEditing(false);
    };

    editRow = cities => {
        console.log("::::::::id");
        console.log(cities._id);
        console.log(cities);

        this.setState({
            currentCity: { id: cities._id, name: cities.name, code: cities.code}
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {

        console.log(":::::::xxxxxss" + this.state.cities);

        const { cities } = this.state;

        console.log(":::::::xxxxx" + cities.length);


        return (
            <div className="container">

                <div className="row">

                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                {/*<h4>Edit CityAdmin</h4>*/}
                                <EditCitiesForm
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentCity={this.state.currentCity}
                                    updateCities={this.updateCities}
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Add citiescities</h4>
                                <AddCitiesForm addCities={this.addCities} />
                            </div>
                        )
                    }

                    <div className="col s12 l6">
                        <h5>Citiess</h5>
                        <CitiesTable Citiess={cities} editRow={this.editRow} deleteCities={this.deleteCities} />
                    </div>
                </div>
            </div>
        );
    };
};

export default CityAdmin;