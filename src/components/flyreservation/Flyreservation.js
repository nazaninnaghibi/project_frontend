import React, {Component} from 'react';
import Footer from '../footer/Footer'
import Select from "react-select";
import './Flyreservation.css';
import {availableCities} from '../../services/api';
import makeAnimated from 'react-select/animated';
import axios from "axios";
import AuthService from "../../services/auth.service";
import {Alert} from "react-bootstrap";


const animatedComponents = makeAnimated();
class Flyreservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            clearable: true,
            type:'',
            origin:'',
            destination:'',
            from:'',
            to:'',
            no:'',
            userid:'',
            cities: [],
            currentUser: { username: "" },
            message: '',
        }
    }

    onTypeChange = e => {
        this.setState({
            type: e.target.value
        });
    };

    onOriginChange = e => {
        this.setState({
            origin: e.target.value
        });
    };

    onDestinationChange = e => {
        this.setState({
            destination: e.target.value
        });
    };

    onFromChange = e => {
        this.setState({
            from: e.target.value
        });
    };

    onToChange = e => {
        this.setState({
            to: e.target.value
        });
    };

    onNoChange = e => {
        this.setState({
            no: e.target.value
        });
    };

    onUseridChange = e => {
        this.setState({
            userid: e.target.value
        });
    };

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

        availableCities()
            .then(res => {
                this.setState({
                    cities: res.data
                })
                console.log(":::::::::::::::::", this.state.cities)
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            type: this.state.type,
            origin: this.state.origin,
            destination: this.state.destination,
            from: this.state.from,
            to: this.state.to,
            no: this.state.no,
            userid: this.state.currentUser.id,
        };
        axios
            .post("http://localhost:8080/reservation/flight/", data)
            .then((response) => {
                console.log(response.data.data);
                // this.setState({hotels: response.data.data})
            })
            .catch((error)=>{
                console.log("sssss" + error.response.data.message);
                this.setState({ message: error.response.data.message });
            });

            // .then(res => console.log(res))
            // .catch(error => this.setState({ result: error.response.data.message }));
        // .catch(err => console.log(err));
    };

    // handleChange(selectedOption) {
    //     this.setState({selectedOption});
    // }

    // renderList() {
    //     return (this.state.cities.map(data =>({label:data.Name,value:data.value})))
    // }

    render() {

        // let options = this.state.cities;

        let options = this.state.cities.map(function (city) {
            return city.name;
        })

        // let options = [  {value: 'berlin', label: 'berlin'}];

        console.log("########" + this.state.message);

        return(
            <div>
                <div className="back-fly">
                    <div className=" input-unit ">
                        <div className="input-content">
                            <header className="jumbotron">
                                <hr className="my-3" />
                                {this.state.message && (
                                    <Alert color="danger" className="text-center">
                                        {this.state.message}
                                    </Alert>
                                )}
                            <form method="post" onSubmit={this.handleSubmit}>

                                <div  onChange={this.onTypeChange}>
                                    <input  className="m-2" type="radio" value="RoundTrip" name="flight"/>Round Trip
                                    <input className="m-3" type="radio" value="OneWay" name="flight"/>One Way
                                </div>

                                <div className="d-flex justify-content-center row-hl">
                                    <div>
                                        <input type="submit" value="submit" className="input-submit button1"/>
                                    </div>

                                    <div>
                                        <input value={this.state.no}
                                               onChange={this.onNoChange}
                                               placeholder ="number"
                                               className="input-text-field-2"
                                               type="number"/>
                                    </div>

                                    <div>
                                        <input value={this.state.from}
                                               onChange={this.onFromChange}
                                               type="date"
                                               className="input-text-field"/>
                                    </div>
                                    <div >
                                        <input value={this.state.to}
                                               onChange={this.onToChange}
                                               type="date"
                                               className="input-text-field"  />
                                    </div>

                                    <div >
                                        <select className="inputselect" onChange={this.onOriginChange}>
                                            {options.map((option, index) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div >
                                        <select className="inputselect" onChange={this.onDestinationChange}
                                        >
                                            {options.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </form>
                            </header>
                        </div>

                    </div>
                </div>

                {/*<h1> Flyreservation </h1>*/}

                <Footer/>
            </div>
        );
    }
}
export default Flyreservation;