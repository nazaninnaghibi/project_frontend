import React, {Component} from 'react'
import Footer from "../footer/Footer";
import '../../components/hotelreservation/HotelReservation.css'
import Select from "react-select";
import {hotels} from "../../services/api";
import {cities} from "../../services/api";
import makeAnimated from 'react-select/animated';
import axios from "axios";
import AuthService from "../../services/auth.service";
import {Alert} from "react-bootstrap";

const animatedComponents = makeAnimated();

class HotelReservation  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city:'',
            hotel:'',
            from:'',
            to:'',
            count:'',
            userid:'',
            selectedOption: '',
            clearable: true,
            hotels: [],
            cities: [],
            currentUser: { username: "" },
            message: '',
        }
    }

    onUseridChange = e => {
        this.setState({
            userid: e.target.value
        });
    };

    onCountChange = e => {
        this.setState({
            count: e.target.value
        });
    };

    onToChange = e => {
        this.setState({
            to: e.target.value
        });
    };

    onFromChange = e => {
        this.setState({
            from: e.target.value
        });
    };

    onHotelChange = e => {
        this.setState({
            hotel: e.target.value
        });
    };

    onCityChange = e => {
        this.setState({
            city: e.target.value
        });
    };

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

        hotels()
            .then(res => {
                this.setState({
                    hotels: res.data
                })
                console.log(":::::::::::::::::", this.state.hotels)
            })
        cities()
            .then(res => {
                this.setState({
                    cities: res.data
                })
                console.log(":::::::::::::::::", this.state.cities)
            })
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log("userid"+  this.state.currentUser.id);

        const data = {
            city: this.state.city,
            hotel: this.state.hotel,
            destination: this.state.destination,
            from: this.state.from,
            to: this.state.to,
            count: this.state.count,
            userid: this.state.currentUser.id,
        };
        axios
            .post("http://localhost:8080/hotel/", data)
            .then((response) => {
                console.log(response.data.data);
                // this.setState({hotels: response.data.data})
            })
            .catch((error)=>{
                console.log("sssss" + error.response.data.message);
                this.setState({ message: error.response.data.message });
            });
    };

    render() {

        let options = this.state.hotels.map(function (hotel) {
            return hotel.name;
        });

        let optionsCity = this.state.cities.map(function (city) {
            return city.name;
        });

        return (
            <div>
                <div className="back">
                    <div className=" input-unit ">
                        <div className="input-content ">
                            <header className="jumbotron">
                                <hr className="my-3" />
                                {this.state.message && (
                                    <Alert color="danger" className="text-center">
                                        {this.state.message}
                                    </Alert>
                                )}
                            <form method="post" onSubmit={this.handleSubmit}>

                                <div className="d-flex justify-content-center row-hl">
                                    <div>
                                        <input type="submit" value="submit" className="input-submit button2"/>
                                    </div>
                                    <div >
                                        {/*<Select placeholder=" 1 adult,1 room" className=" inputselect"  type="number" />*/}
                                        <input  value={this.state.count}
                                                onChange={this.onCountChange}
                                                placeholder="1 adult,1 room"
                                                className="input-text-field-2"
                                                type="number"/>
                                    </div>

                                    <div>
                                        {/*<span>check in</span> */}
                                        <input value={this.state.from}
                                               onChange={this.onFromChange}
                                               type="date"
                                               className="input-text-field"/>
                                    </div>
                                    <div>
                                        {/*<span>check out</span>*/}
                                        <input value={this.state.to}
                                               onChange={this.onToChange}
                                               type="date"
                                               className="input-text-field"/>
                                    </div>

                                    <div >
                                        <select onChange={this.onHotelChange}>
                                            value={this.state.hotel}
                                            {options.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div >
                                        <select onChange={this.onCityChange}>
                                            value={this.state.city}
                                            {optionsCity.map(opt => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </form>
                            </header>
                        </div>
                    </div>

                    <Footer/>
                </div>

            </div>
        )
    }

}

export default HotelReservation;