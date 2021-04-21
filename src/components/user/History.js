import React, { Component } from 'react'
import axios from "axios";
import AuthService from "../../services/auth.service";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            userId:'',
            hotels: [],
            flights: [],
            currentUser: { username: "" }
        }
        // this.callService = this.callService.bind(this);
    };

    componentDidMount() {
        // const currentUser = AuthService.getCurrentUser();
        // if (!currentUser) this.setState({ redirect: "/home" });
        // this.setState({ currentUser: currentUser, userReady: true })
        // console.log(":::::::::::::::::u serId"+ currentUser.id)
        // console.log("http://localhost:8080/flight/user/" + window.localStorage.getItem("userId"))
        // console.log("http://localhost:8080/reservation/hotel/" + currentUser.id)

        // this.setState({userId: currentUser.id})

        this.callService();
        this.callServiceFlights();
        // hotelsUserId(currentUser.id)
        //     .then(res => { console.log(res);
        //         // this.setState({
        //         //     hotels: res.data,
        //         // })
        //     })
    }

    callService = () => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

        // const { currentUser } = this.state;
        // console.log("8888" + this.state.currentUser.data)
        // console.log("8888" +  window.localStorage.getItem("userId"))
        // console.log('http://localhost:8080/reservation/hotel'+ '/' + currentUser.id)

        axios.get('http://localhost:8080/reservation/hotel'+ '/' +   currentUser)
            .then((response) => {
                console.log(response.data.data);
                this.setState({hotels: response.data.data})
            })
            .catch((error)=>{
                console.log(error);
            });
    }


//flight


    callServiceFlights = () => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

        console.log("gggggggggg "+"http://localhost:8080/flight/user/"+  currentUser);


        axios.get('http://localhost:8080/flight/user'+ '/' +   currentUser)
            .then((response) => {
                console.log(response.data.data);
                this.setState({flights: response.data.data})
            })
            .catch((error)=>{
                console.log(error);
            });

    }


    render() {

        // console.log(":::::::::::::::::"+ this.state.hotels.data)
        // console.log(":::::::::::::::::"+ this.state.hotels.length)

        return(
            <div>
                <div>
                    <h2 className="text-center">Hotel Details</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {/*<th className="hidden">Id</th>*/}
                            <th>City</th>
                            <th>Count</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Hotel</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.hotels.length > 0 ? (
                                this.state.hotels.map((hotel) => (
                                        <tr>
                                            <td>{hotel.city}</td>
                                            <td>{hotel.count}</td>
                                            <td>{hotel.from}</td>
                                            <td>{hotel.to}</td>
                                            <td>{hotel.hotel}</td>
                                        </tr>
                                    )
                                )
                            ):(
                                <tr>
                                    <td> No Hotels</td>
                                </tr>
                            )
                        }

                        </tbody>
                    </table>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2 className="text-center">Flight Details</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {/*<th className="hidden">Id</th>*/}
                            <th>City</th>
                            <th>Count</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Hotel</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.flights.length > 0 ? (
                                this.state.flights.map((flight) => (
                                        <tr>
                                            <td>{flight.destination}</td>
                                            <td>{flight.from}</td>
                                            <td>{flight.no}</td>
                                            <td>{flight.origin}</td>
                                            <td>{flight.to}</td>
                                            <td>{flight.type}</td>
                                        </tr>
                                    )
                                )
                            ):(
                                <tr>
                                    <td> No Hotels</td>
                                </tr>
                            )
                        }

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default History;